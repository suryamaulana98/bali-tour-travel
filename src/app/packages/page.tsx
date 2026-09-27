import type { Metadata } from "next";
import Link from "next/link";
import PackageCard from "@/components/packages/PackageCard";
import { getPackagesData } from "@/data/packages";

export const metadata: Metadata = {
  title: "Katalog Paket Tour & Private Yacht Bali",
  description:
    "Daftar lengkap paket wisata private yacht dan tour eksklusif Bali dengan harga transparan dan pelayanan personal.",
};

export default async function PackagesPage() {
  const packages = await getPackagesData();

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#F8F7F3] min-h-screen">
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
          <span className="text-[#0B1F2A] font-medium">Paket Tour</span>
        </nav>

        {/* Editorial Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-2">
            Katalog Wisata Eksklusif
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-bold text-[#0B1F2A] tracking-tight leading-tight">
            Paket Private Yacht & Tour Bali
          </h1>
          <p className="mt-3 text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
            Pilihan armada private yacht dan petualangan pulau terbaik. Seluruh
            itinerary dijalankan secara private khusus untuk grup Anda tanpa
            digabung peserta lain.
          </p>
        </div>

        {/* 3-Column Grid Desktop, 2-Column Tablet, 1-Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
