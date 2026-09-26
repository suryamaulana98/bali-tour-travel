'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Package } from '@/types';
import { formatPrice } from '@/lib/utils';
import { DEFAULT_IMAGES } from '@/data/packages';

interface PackageCardProps {
  packageData: Package;
}

export default function PackageCard({ packageData }: PackageCardProps) {
  const { slug, name, location, price, price_type, max_guests, short_description, hero_image, category } = packageData;
  const [imgSrc, setImgSrc] = useState(
    hero_image?.startsWith('http') ? hero_image : DEFAULT_IMAGES[slug] || DEFAULT_IMAGES['default']
  );

  const categoryBadges: Record<string, { label: string; bg: string; text: string }> = {
    yacht: { label: 'Private Yacht', bg: 'bg-cyan-600', text: 'text-white' },
    adventure: { label: 'Adventure', bg: 'bg-amber-500', text: 'text-white' },
    island: { label: 'Island Tour', bg: 'bg-emerald-600', text: 'text-white' },
  };

  const badge = categoryBadges[category] || { label: 'Tour', bg: 'bg-[#0C7B93]', text: 'text-white' };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        {/* Fixed Height Image Container with Fallback */}
        <div className="relative h-64 w-full overflow-hidden bg-slate-100">
          <Image
            src={imgSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            onError={() => setImgSrc(DEFAULT_IMAGES[slug] || DEFAULT_IMAGES['default'])}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-md ${badge.bg} ${badge.text}`}>
              {badge.label}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-white backdrop-blur-md border border-white/20">
              Bali
            </span>
          </div>

          {/* Location on image bottom */}
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-xs font-medium drop-shadow">
            <svg className="w-4 h-4 text-[#E8A838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-serif text-gray-900 group-hover:text-[#0C7B93] transition-colors line-clamp-1 mb-2">
            {name}
          </h3>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
            {short_description}
          </p>

          {/* Capacity and Features Bar */}
          <div className="flex items-center gap-4 py-3 border-y border-gray-100 text-xs text-gray-600 mb-6 font-medium">
            {max_guests && (
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#0C7B93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        </div>
      </div>

      {/* Footer Pricing & CTA Button */}
      <div className="p-6 pt-0 flex items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">Mulai Dari</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-[#0C7B93] font-serif">
              {formatPrice(price)}
            </span>
            <span className="text-xs text-gray-500 font-medium">/{price_type}</span>
          </div>
        </div>

        <Link
          href={`/packages/${slug}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0C7B93] hover:bg-[#095E72] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg hover:scale-105 shrink-0"
        >
          <span>Detail</span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
