import { NextRequest, NextResponse } from 'next/server';
import { validateBookingData } from '@/lib/validators';
import { generateBookingCode, generateBookingToken } from '@/lib/booking-code';
import { getPackageBySlugData } from '@/data/packages';

// Fallback in-memory store for demonstration when DB env vars are not set
const memoryBookings = new Map<string, any>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Server-side validation
    const { valid, errors, sanitized } = validateBookingData(body);
    if (!valid || !sanitized) {
      return NextResponse.json(
        { success: false, error: 'Validasi data gagal', errors },
        { status: 400 }
      );
    }

    // 2. Fetch package details
    const packageSlug = body.package_slug;
    const pkg = await getPackageBySlugData(packageSlug);
    if (!pkg) {
      return NextResponse.json(
        { success: false, error: 'Paket tour tidak ditemukan' },
        { status: 404 }
      );
    }

    // 3. Generate booking code & token
    const bookingCode = generateBookingCode();
    const bookingToken = generateBookingToken();

    const newBooking = {
      booking_code: bookingCode,
      booking_token: bookingToken,
      package_id: pkg.id,
      package_name: pkg.name,
      package_price: pkg.price,
      customer_name: sanitized.customer_name,
      phone: sanitized.phone,
      email: sanitized.email,
      tour_date: sanitized.tour_date,
      guest_count: sanitized.guest_count,
      pickup_location: sanitized.pickup_location || null,
      notes: sanitized.notes || null,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // 4. Save to Supabase (if configured) or fallback memory store
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseServiceKey && !supabaseUrl.includes('your-project')) {
      const { supabaseAdmin } = await import('@/lib/supabase/server');
      const { error } = await supabaseAdmin.from('bookings').insert([newBooking]);

      if (error) {
        console.error('Supabase DB Insert Error:', error);
        // Save to memory as backup
        memoryBookings.set(bookingCode, newBooking);
      }
    } else {
      // In-memory fallback for local dev without Supabase configured
      memoryBookings.set(bookingCode, newBooking);
    }

    return NextResponse.json({
      success: true,
      booking_code: bookingCode,
      booking_token: bookingToken,
    });
  } catch (err: any) {
    console.error('API /api/booking error:', err);
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan internal server' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ success: false, error: 'Kode booking diperlukan' }, { status: 400 });
  }

  // Check Supabase first
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseServiceKey && !supabaseUrl.includes('your-project')) {
    const { supabaseAdmin } = await import('@/lib/supabase/server');
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('booking_code', code)
      .single();

    if (!error && data) {
      return NextResponse.json({ success: true, booking: data });
    }
  }

  // Check memory store fallback
  const booking = memoryBookings.get(code);
  if (booking) {
    return NextResponse.json({ success: true, booking });
  }

  return NextResponse.json({ success: false, error: 'Booking tidak ditemukan' }, { status: 404 });
}
