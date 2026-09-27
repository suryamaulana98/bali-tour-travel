import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getPackageBySlugData,
  getPackagesData,
  DEFAULT_IMAGES,
} from "@/data/packages";
import { formatPrice } from "@/lib/utils";
import { getWhatsAppContactLink } from "@/lib/whatsapp";

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
    return { title: "Paket Tidak Ditemukan" };
  }

  const heroImg = pkg.hero_image?.startsWith("http")
    ? pkg.hero_image
    : DEFAULT_IMAGES[pkg.slug] || DEFAULT_IMAGES["default"];

  return {
    title: pkg.name,
    description: pkg.short_description,
    openGraph: {
      title: `${pkg.name} | M8 Travel Bali`,
      description: pkg.short_description,
      images: [{ url: heroImg }],
    },
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = await getPackageBySlugData(slug);

  if (!pkg) {
    notFound();
  }

  const heroImg = pkg.hero_image?.startsWith("http")
    ? pkg.hero_image
    : DEFAULT_IMAGES[pkg.slug] || DEFAULT_IMAGES["default"];

  const categoryLabels: Record<string, string> = {
    yacht: "Private Yacht",
    adventure: "Island Adventure",
    island: "Island Tour",
  };

  const categoryName =
    categoryLabels[pkg.category] || pkg.category || "Exclusive Tour";

  return (
    <div className="bg-[#F8F7F3] min-h-screen pb-20">
      {/* Immersive Editorial Hero Banner */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[580px] w-full overflow-hidden bg-[#0B1F2A]">
        <Image
          src={heroImg}
          alt={pkg.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#0B1F2A]/50 to-[#0B1F2A]/30" />

        {/* Hero Content */}
        <div className="absolute bottom-0 inset-x-0 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 z-10 text-white">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-300 mb-4 font-light"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link
              href="/packages"
              className="hover:text-white transition-colors"
            >
              Paket Tour
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#E6A72C] truncate max-w-xs">{pkg.name}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#E6A72C] text-[#0B1F2A]">
              {categoryName}
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/15 backdrop-blur-xs text-white border border-white/20">
              <svg
                className="w-3.5 h-3.5 text-[#E6A72C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {pkg.location}, Bali
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-serif font-bold tracking-tight text-white mb-4 leading-tight">
            {pkg.name}
          </h1>

          {/* Short Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-200">
            {pkg.max_guests && (
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-[#E6A72C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Kapasitas: Maks. {pkg.max_guests} Peserta</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Konfirmasi via WhatsApp</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#E6A72C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Private Trip</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content Layout */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Mobile Booking Summary Block (visible only on mobile above details) */}
          <div className="lg:hidden bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-xs space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] block font-medium">
                Mulai Dari
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-serif font-bold text-[#0B1F2A]">
                  {formatPrice(pkg.price)}
                </span>
                <span className="text-xs text-[#64748B]">
                  /{pkg.price_type}
                </span>
              </div>
              <span className="inline-flex items-center min-h-9 mt-3 text-xs text-[#087F8C] bg-[#E6F4F5] px-3 py-1 rounded-full font-medium">
                Menunggu Konfirmasi Travel
              </span>
            </div>
            <Link
              href={`/booking/${pkg.slug}`}
              className="inline-flex items-center justify-center w-full min-h-12 px-6 py-3 text-center rounded-lg bg-[#E6A72C] hover:bg-[#CF921F] text-[#0B1F2A] font-semibold text-sm shadow-xs transition-colors"
            >
              Booking Sekarang
            </Link>
          </div>

          {/* LEFT COLUMN: Overview & Detailed Itinerary (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Description */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E7EB]">
              <h2 className="text-xl sm:text-[28px] font-serif font-bold text-[#0B1F2A] mb-4">
                Deskripsi Paket
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed whitespace-pre-line">
                {pkg.description}
              </p>
            </section>

            {/* Destinations */}
            {pkg.destinations && pkg.destinations.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E7EB]">
                <h2 className="text-xl sm:text-[28px] font-serif font-bold text-[#0B1F2A] mb-5">
                  Destinasi Yang Dikunjungi
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {pkg.destinations.map((dest, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-lg bg-[#F8F7F3] border border-[#E5E7EB]"
                    >
                      <h3 className="font-serif font-bold text-sm text-[#0B1F2A] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                        {dest.name}
                      </h3>
                      <p className="text-xs text-[#64748B] leading-relaxed pl-4">
                        {dest.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E7EB]">
                <h2 className="text-xl sm:text-[28px] font-serif font-bold text-[#0B1F2A] mb-5">
                  Rencana Perjalanan (Itinerary)
                </h2>
                <div className="space-y-4 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-[#E5E7EB]">
                  {pkg.itinerary.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-start relative pl-1"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#E6F4F5] text-[#087F8C] font-serif font-bold text-xs flex items-center justify-center shrink-0 z-10">
                        {idx + 1}
                      </span>
                      <div className="flex-1 pt-0.5">
                        <span className="text-xs font-semibold text-[#087F8C] font-mono mr-2">
                          {item.time}
                        </span>
                        <span className="text-sm font-medium text-[#0B1F2A]">
                          {item.activity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Included */}
              {pkg.included && pkg.included.length > 0 && (
                <section className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <h3 className="text-base font-serif font-bold text-[#0B1F2A] mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    Sudah Termasuk (Included)
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B]">
                    {pkg.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Excluded */}
              {pkg.excluded && pkg.excluded.length > 0 && (
                <section className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <h3 className="text-base font-serif font-bold text-[#0B1F2A] mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center text-xs font-bold">
                      ✕
                    </span>
                    Tidak Termasuk (Excluded)
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B]">
                    {pkg.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Facilities */}
            {pkg.facilities && pkg.facilities.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E7EB]">
                <h2 className="text-xl sm:text-[28px] font-serif font-bold text-[#0B1F2A] mb-5">
                  Fasilitas Yang Tersedia
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {pkg.facilities.map((fac, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 bg-[#F8F7F3] border border-[#E5E7EB] text-[#0B1F2A] text-xs font-medium rounded-md flex items-center gap-2"
                    >
                      <span className="text-[#087F8C]">✓</span>
                      {fac}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Important Notes */}
            {pkg.important_notes && pkg.important_notes.length > 0 && (
              <section className="bg-amber-50/50 p-6 sm:p-8 rounded-xl border border-amber-200/80">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Catatan Penting Perjalanan
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-amber-900/90 pl-1">
                  {pkg.important_notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* RIGHT COLUMN: Sticky Booking Summary (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-xs space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#64748B] block font-medium mb-2">
                  Mulai Dari
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[32px] font-serif font-bold text-[#0B1F2A]">
                    {formatPrice(pkg.price)}
                  </span>
                  <span className="text-xs text-[#64748B]">
                    /{pkg.price_type}
                  </span>
                </div>
              </div>

              {/* Status & Capacity Details */}
              <div className="pt-4 border-t border-[#E5E7EB] space-y-3 text-xs">
                {pkg.max_guests && (
                  <div className="flex items-center justify-between text-[#64748B]">
                    <span>Kapasitas Rombongan:</span>
                    <span className="font-semibold text-[#0B1F2A]">
                      Maks. {pkg.max_guests} Orang
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between text-[#64748B]">
                  <span>Status Pemesanan:</span>
                  <span className="inline-flex items-center min-h-9 font-medium text-[#087F8C] bg-[#E6F4F5] px-3 py-1 rounded-full text-[11px]">
                    Menunggu Konfirmasi Travel
                  </span>
                </div>
                <div className="flex items-center justify-between text-[#64748B]">
                  <span>Jenis Perjalanan:</span>
                  <span className="font-semibold text-[#0B1F2A]">
                    100% Private Trip
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <Link
                  href={`/booking/${pkg.slug}`}
                  className="inline-flex items-center justify-center w-full min-h-12 px-6 py-3 text-center rounded-lg bg-[#E6A72C] hover:bg-[#CF921F] text-[#0B1F2A] font-semibold text-xs uppercase tracking-wider shadow-xs transition-colors"
                >
                  Booking Sekarang
                </Link>

                <a
                  href={getWhatsAppContactLink(
                    `Halo M8 Travel, saya ingin konsultasi mengenai paket ${pkg.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full min-h-11 px-5 py-3 text-center rounded-lg bg-white border border-[#E5E7EB] hover:bg-[#F8F7F3] text-[#0B1F2A] text-sm font-medium tracking-wide transition-colors"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>

              {/* Trust Reassurance Notes */}
              <div className="pt-4 border-t border-[#E5E7EB] space-y-2 text-[11px] text-[#64748B]">
                <p className="flex items-center gap-2">
                  <span className="text-[#087F8C]">✓</span>
                  <span>Bebas biaya pemesanan awal</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#087F8C]">✓</span>
                  <span>Jadwal diverifikasi langsung via WhatsApp</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#087F8C]">✓</span>
                  <span>Privasi data pemesan terjamin aman</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
