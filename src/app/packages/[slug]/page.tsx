import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPackageBySlugData, getPackagesData } from '@/data/packages';
import { formatPrice } from '@/lib/utils';
import { getWhatsAppContactLink } from '@/lib/whatsapp';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const packages = await getPackagesData();
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackageBySlugData(slug);

  if (!pkg) {
    return { title: 'Paket Tidak Ditemukan' };
  }

  return {
    title: pkg.name,
    description: pkg.short_description,
    openGraph: {
      title: `${pkg.name} | M8 Travel Bali`,
      description: pkg.short_description,
      images: [{ url: pkg.hero_image }],
    },
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = await getPackageBySlugData(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="pt-20 pb-20 bg-gray-50/50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[380px] max-h-[550px] w-full overflow-hidden">
        <Image
          src={pkg.hero_image}
          alt={pkg.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute bottom-0 inset-x-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 text-white z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            <span>{pkg.location}</span>
            <span>•</span>
            <span>{pkg.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif mb-4 drop-shadow-md">
            {pkg.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200">
            {pkg.max_guests && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Kapasitas: Maks. {pkg.max_guests} Orang</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Instant Confirmation via WA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-10">

            {/* Description */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold font-serif text-gray-900 mb-4 border-b border-gray-100 pb-3">
                Deskripsi Paket
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {pkg.description}
              </p>
            </div>

            {/* Destinations */}
            {pkg.destinations && pkg.destinations.length > 0 && (
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold font-serif text-gray-900 mb-6 border-b border-gray-100 pb-3">
                  Destinasi Yang Dikunjungi
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.destinations.map((dest, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-gray-900 text-base mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {dest.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed pl-4">
                        {dest.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold font-serif text-gray-900 mb-6 border-b border-gray-100 pb-3">
                  Itinerary Perjalanan
                </h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-lg shrink-0 mt-0.5 font-mono">
                        {item.time}
                      </span>
                      <p className="text-sm text-gray-700 font-medium">
                        {item.activity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included & Excluded Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Included */}
              {pkg.included && pkg.included.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-emerald-600 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sudah Termasuk (Included)
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                    {pkg.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Excluded */}
              {pkg.excluded && pkg.excluded.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-red-600 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Tidak Termasuk (Excluded)
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                    {pkg.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Facilities & Notes */}
            {pkg.facilities && pkg.facilities.length > 0 && (
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold font-serif text-gray-900 mb-4 border-b border-gray-100 pb-3">
                  Fasilitas
                </h2>
                <div className="flex flex-wrap gap-2">
                  {pkg.facilities.map((fac, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                      ✓ {fac}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Important Notes */}
            {pkg.important_notes && pkg.important_notes.length > 0 && (
              <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200/60">
                <h3 className="text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Catatan Penting
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-amber-800">
                  {pkg.important_notes.map((note, idx) => (
                    <li key={idx}>• {note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg sticky top-24 space-y-6">
              <div>
                <span className="text-xs text-gray-400 block mb-1">Harga Paket</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-primary font-serif">
                    {formatPrice(pkg.price)}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">/{pkg.price_type}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link
                  href={`/booking/${pkg.slug}`}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-bold text-center block shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Booking Sekarang
                </Link>

                <a
                  href={getWhatsAppContactLink(`Halo M8 Travel, saya tertarik dengan paket ${pkg.name}. Mohon informasi lebih lanjut.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold text-center block transition-colors"
                >
                  Tanya via WhatsApp
                </a>
              </div>

              <div className="text-xs text-gray-400 text-center space-y-1">
                <p>✓ Bebas biaya pemesanan</p>
                <p>✓ Konfirmasi via WhatsApp</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
