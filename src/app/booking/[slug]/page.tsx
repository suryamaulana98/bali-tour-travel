import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPackageBySlugData } from '@/data/packages';
import BookingForm from '@/components/booking/BookingForm';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackageBySlugData(slug);
  if (!pkg) return { title: 'Booking Tour' };

  return {
    title: `Booking ${pkg.name}`,
    description: `Isi formulir pemesanan untuk paket ${pkg.name} di Bali.`,
  };
}

export default async function BookingPage({ params }: Props) {
  const { slug } = await params;
  const pkg = await getPackageBySlugData(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">
            Pemesanan Langsung
          </span>
          <h1 className="text-3xl font-extrabold font-serif text-gray-900">
            Booking {pkg.name}
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Silakan lengkapi informasi di bawah ini untuk mendapatkan Kode Booking & Tiket Pemesanan Anda.
          </p>
        </div>

        <BookingForm packageData={pkg} />
      </div>
    </div>
  );
}
