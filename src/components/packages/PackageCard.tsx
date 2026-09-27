"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Package } from "@/types";
import { formatPrice } from "@/lib/utils";
import { DEFAULT_IMAGES } from "@/data/packages";

interface PackageCardProps {
  packageData: Package;
}

export default function PackageCard({ packageData }: PackageCardProps) {
  const {
    slug,
    name,
    location,
    price,
    price_type,
    short_description,
    hero_image,
    category,
  } = packageData;
  const [imgSrc, setImgSrc] = useState(
    hero_image?.startsWith("http")
      ? hero_image
      : DEFAULT_IMAGES[slug] || DEFAULT_IMAGES["default"],
  );

  const categoryLabels: Record<string, string> = {
    yacht: "Private Yacht",
    adventure: "Island Adventure",
    island: "Island Tour",
  };

  const categoryName = categoryLabels[category] || category || "Exclusive Tour";

  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-[#E5E7EB] hover:border-[#087F8C]/40 hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Image Container with Consistent Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={imgSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
          onError={() =>
            setImgSrc(DEFAULT_IMAGES[slug] || DEFAULT_IMAGES["default"])
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Category Pill Tag */}
        <span className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/95 text-[#0B1F2A] shadow-xs">
          {categoryName}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-6 lg:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#64748B] mb-2.5 font-medium">
            <svg
              className="w-3.5 h-3.5 text-[#087F8C] shrink-0"
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
            <span>{location}, Bali</span>
          </div>

          {/* Package Name */}
          <h3 className="text-[22px] sm:text-2xl font-serif font-bold text-[#0B1F2A] group-hover:text-[#087F8C] transition-colors line-clamp-1 mb-2.5">
            <Link href={`/packages/${slug}`}>{name}</Link>
          </h3>

          {/* Short Description */}
          <p className="text-[#64748B] text-[15px] leading-relaxed line-clamp-2 mb-5">
            {short_description}
          </p>
        </div>

        {/* Pricing & CTA Row */}
        <div className="pt-5 border-t border-[#E5E7EB] flex items-center justify-between gap-5 mt-auto">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#64748B] block font-medium">
              Mulai dari
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-[28px] font-serif font-bold text-[#0B1F2A] leading-none">
                {formatPrice(price)}
              </span>
              <span className="text-xs text-[#64748B]">/{price_type}</span>
            </div>
          </div>

          <Link
            href={`/packages/${slug}`}
            className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-3 rounded-lg bg-[#0B1F2A] hover:bg-[#087F8C] text-white text-sm font-medium tracking-wide transition-colors group/btn"
          >
            <span>Lihat Paket</span>
            <span className="group-hover/btn:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
