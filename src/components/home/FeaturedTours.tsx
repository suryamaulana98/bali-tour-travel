import Link from 'next/link';
import PackageCard from '@/components/packages/PackageCard';
import { Package } from '@/types';

interface FeaturedToursProps {
  packages: Package[];
}

export default function FeaturedTours({ packages }: FeaturedToursProps) {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest block mb-2">
              Pilihan Paling Populer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
              Paket Tour Unggulan Kami
            </h2>
          </div>
          <Link
            href="/packages"
            className="mt-4 md:mt-0 text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1 group"
          >
            Lihat Semua Paket
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} packageData={pkg} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
