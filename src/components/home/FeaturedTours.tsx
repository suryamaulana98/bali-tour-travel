import Link from "next/link";
import PackageCard from "@/components/packages/PackageCard";
import { Package } from "@/types";

interface FeaturedToursProps {
  packages: Package[];
}

export default function FeaturedTours({ packages }: FeaturedToursProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F3]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-2">
              Pilihan Paket Populer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-bold text-[#0B1F2A] tracking-tight leading-tight">
              Paket Wisata Unggulan
            </h2>
            <p className="mt-3 text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
              Temukan pengalaman bahari private yacht hingga petualangan eksotis
              Bali yang dirancang dengan privasi dan kenyamanan prima.
            </p>
          </div>

          <Link
            href="/packages"
            className="inline-flex items-center justify-center min-h-11 px-4 text-sm font-semibold text-[#087F8C] hover:text-[#0B1F2A] transition-colors group shrink-0"
          >
            <span>Lihat Semua Paket</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* 3-Column Grid Desktop, 2-Column Tablet, 1-Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 items-stretch">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
