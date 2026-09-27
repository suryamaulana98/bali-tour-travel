import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getPackageBySlugData } from "@/data/packages";
import BookingForm from "@/components/booking/BookingForm";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackageBySlugData(slug);
  if (!pkg) return { title: "Booking Tour" };

  return {
    title: `Reservasi ${pkg.name}`,
    description: `Isi formulir pemesanan resmi untuk paket ${pkg.name} di Bali.`,
  };
}

export default async function BookingPage({ params }: Props) {
  const { slug } = await params;
  const pkg = await getPackageBySlugData(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[#64748B] mb-8 font-light"
        >
          <Link href="/" className="hover:text-[#087F8C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/packages"
            className="hover:text-[#087F8C] transition-colors"
          >
            Paket Tour
          </Link>
          <span>/</span>
          <Link
            href={`/packages/${pkg.slug}`}
            className="hover:text-[#087F8C] transition-colors truncate max-w-xs"
          >
            {pkg.name}
          </Link>
          <span>/</span>
          <span className="text-[#0B1F2A] font-medium">Reservasi</span>
        </nav>

        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-2">
            Pengajuan Reservasi
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-bold text-[#0B1F2A] tracking-tight">
            Formulir Booking {pkg.name}
          </h1>
          <p className="mt-2 text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
            Lengkapi formulir di bawah ini untuk menerbitkan Kode Booking unik
            dan Bukti Reservasi Anda.
          </p>
        </div>

        {/* Clean Booking Form */}
        <BookingForm packageData={pkg} />
      </div>
    </div>
  );
}
