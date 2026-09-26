import Link from 'next/link';
import Image from 'next/image';
import { Package } from '@/types';
import { formatPrice } from '@/lib/utils';

interface PackageCardProps {
  packageData: Package;
  featured?: boolean;
}

export default function PackageCard({ packageData, featured = false }: PackageCardProps) {
  const { slug, name, location, price, price_type, max_guests, short_description, hero_image, category } = packageData;

  const categoryBadges: Record<string, { label: string; color: string }> = {
    yacht: { label: 'Private Yacht', color: 'bg-cyan-500/90 text-white' },
    adventure: { label: 'Adventure', color: 'bg-amber-500/90 text-white' },
    island: { label: 'Island Tour', color: 'bg-emerald-500/90 text-white' },
  };

  const categoryBadge = categoryBadges[category] || { label: 'Tour', color: 'bg-primary/90 text-white' };

  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col ${
        featured ? 'md:col-span-2 md:flex-row' : ''
      }`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 aspect-4/3 md:aspect-auto' : 'aspect-4/3'}`}>
        <Image
          src={hero_image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Badge */}
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${categoryBadge.color}`}>
          {categoryBadge.label}
        </span>

        {/* Location Badge */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white/90 text-xs font-medium">
          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className={`p-6 flex flex-col justify-between flex-1 ${featured ? 'md:w-1/2 md:p-8' : ''}`}>
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors font-serif line-clamp-2">
              {name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {short_description}
          </p>
        </div>

        {/* Details & Pricing */}
        <div>
          {/* Capacity / Details info */}
          <div className="flex items-center gap-4 py-3 border-y border-gray-100 text-xs text-gray-500 mb-4">
            {max_guests && (
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Maks. {max_guests} orang</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant Confirmation</span>
            </div>
          </div>

          {/* Footer Card */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-gray-400 block">Mulai Dari</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-extrabold text-primary font-sans">
                  {formatPrice(price)}
                </span>
                <span className="text-xs text-gray-500">/{price_type}</span>
              </div>
            </div>

            <Link
              href={`/packages/${slug}`}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 shrink-0"
            >
              Lihat Detail
              <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
