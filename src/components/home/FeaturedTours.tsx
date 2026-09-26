import Link from 'next/link';
import PackageCard from '@/components/packages/PackageCard';
import { Package } from '@/types';

interface FeaturedToursProps {
  packages: Package[];
}

export default function FeaturedTours({ packages }: FeaturedToursProps) {
  return (
    <section className="py-24 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>★</span> Pilihan Paling Populer
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-gray-900 tracking-tight">
              Paket Tour Unggulan Kami
            </h2>
          </div>
          <Link
            href="/packages"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#0C7B93] hover:text-[#095E72] group"
          >
            <span>Lihat Semua Paket</span>
            <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Uniform 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
