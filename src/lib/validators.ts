import type { BookingFormData } from '@/types';

export interface ValidationErrors {
  [key: string]: string;
}

/**
 * Validate booking form data on the server side
 */
export function validateBookingData(data: unknown): { valid: boolean; errors: ValidationErrors; sanitized?: BookingFormData } {
  const errors: ValidationErrors = {};

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: { form: 'Data tidak valid' } };
  }

  const raw = data as Record<string, unknown>;

  // Customer name
  const customer_name = String(raw.customer_name || '').trim();
  if (!customer_name) {
    errors.customer_name = 'Nama lengkap harus diisi';
  } else if (customer_name.length < 2) {
    errors.customer_name = 'Nama minimal 2 karakter';
  } else if (customer_name.length > 100) {
    errors.customer_name = 'Nama maksimal 100 karakter';
  }

  // Phone
  const phone = String(raw.phone || '').trim().replace(/\s+/g, '');
  if (!phone) {
    errors.phone = 'Nomor WhatsApp harus diisi';
  } else if (!/^(\+?62|0)8[1-9][0-9]{6,11}$/.test(phone)) {
    errors.phone = 'Format nomor WhatsApp tidak valid';
  }

  // Email
  const email = String(raw.email || '').trim().toLowerCase();
  if (!email) {
    errors.email = 'Email harus diisi';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Format email tidak valid';
  }

  // Tour date
  const tour_date = String(raw.tour_date || '').trim();
  if (!tour_date) {
    errors.tour_date = 'Tanggal tour harus diisi';
  } else {
    const tourDate = new Date(tour_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Minimum 2 days from today
    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() + 2);
    if (isNaN(tourDate.getTime())) {
      errors.tour_date = 'Format tanggal tidak valid';
    } else if (tourDate < minDate) {
      errors.tour_date = 'Tanggal tour minimal 2 hari dari sekarang';
    }
  }

  // Guest count
  const guest_count = Number(raw.guest_count);
  if (!guest_count || isNaN(guest_count)) {
    errors.guest_count = 'Jumlah peserta harus diisi';
  } else if (guest_count < 1) {
    errors.guest_count = 'Minimal 1 peserta';
  } else if (guest_count > 50) {
    errors.guest_count = 'Maksimal 50 peserta';
  }

  // Pickup location (optional but sanitize)
  const pickup_location = String(raw.pickup_location || '').trim().slice(0, 200);

  // Notes (optional but sanitize)
  const notes = String(raw.notes || '').trim().slice(0, 500);

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    sanitized: {
      customer_name,
      phone,
      email,
      tour_date,
      guest_count,
      pickup_location,
      notes,
    },
  };
}
