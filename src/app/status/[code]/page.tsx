import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BookingTicket from '@/components/booking/BookingTicket';

type Props = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  return {
    title: `Status Booking - ${code}`,
    description: `Cek status pemesanan tour Bali dengan kode ${code}.`,
  };
}

async function getBooking(code: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/booking?code=${code}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success) return data.booking;
    }
  } catch (e) {
    console.error('Fetch booking status error:', e);
  }
  return null;
}

export default async function BookingStatusPage({ params }: Props) {
  const { code } = await params;
  const booking = await getBooking(code);

  if (!booking) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">
            Status Pemesanan Online
          </span>
          <h1 className="text-3xl font-extrabold font-serif text-gray-900">
            Cek Status Booking #{booking.booking_code}
          </h1>
        </div>

        <BookingTicket booking={booking} />
      </div>
    </div>
  );
}
