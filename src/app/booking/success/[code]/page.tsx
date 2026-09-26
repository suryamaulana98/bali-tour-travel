import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BookingTicket from '@/components/booking/BookingTicket';

type Props = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  return {
    title: `Tiket Pemesanan - ${code}`,
    description: `Tiket pemesanan tour Bali dengan kode booking ${code}.`,
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
    console.error('Fetch booking error:', e);
  }
  return null;
}

export default async function BookingSuccessPage({ params }: Props) {
  const { code } = await params;
  const booking = await getBooking(code);

  if (!booking) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest block mb-1">
            Pemesanan Berhasil Terkirim
          </span>
          <h1 className="text-3xl font-extrabold font-serif text-gray-900">
            Tiket Pemesanan Tour Anda
          </h1>
          <p className="text-sm text-gray-600 max-w-lg mx-auto mt-2">
            Terima kasih! Pemesanan Anda telah tersimpan di sistem kami. Silakan klik tombol WhatsApp untuk mengonfirmasi ketersediaan dengan tim M8 Travel.
          </p>
        </div>

        <BookingTicket booking={booking} />
      </div>
    </div>
  );
}
