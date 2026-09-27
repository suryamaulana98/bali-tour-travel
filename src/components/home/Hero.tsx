import Link from "next/link";
import { getWhatsAppContactLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-20">
      {/* Background Ocean/Diving Image with Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center bg-no-repeat transform scale-102 transition-transform duration-1000">
        {/* Subtle balanced overlay so the ocean photography shines through */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#0B1F2A]/45 to-[#0B1F2A]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 mb-6 sm:mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6A72C]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-100">
            PRIVATE BALI EXPERIENCE
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] xl:text-[60px] font-serif font-bold tracking-tight leading-[1.08] max-w-4xl mx-auto mb-5">
          Private Yacht & Premium Tour <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E6A72C]">in Bali</span>
        </h1>

        {/* Subheading */}
        <p className="text-[15px] sm:text-base lg:text-[18px] text-slate-200/90 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
          Eksplorasi perairan eksotis Nusa Penida, laut kristal Manta Bay,
          hingga pesona budaya Ubud bersama armada pribadi dan pelayanan
          profesional M8 Travel.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-10 sm:mb-12">
          <Link
            href="/packages"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-12 px-5 sm:px-6 rounded-full bg-[#E6A72C] hover:bg-[#CF921F] text-[#0B1F2A] font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 text-center"
          >
            Jelajahi Paket
          </Link>

          <a
            href={getWhatsAppContactLink(
              "Halo M8 Travel, saya ingin konsultasi mengenai paket tour di Bali.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-12 px-5 sm:px-6 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs border border-white/25 font-medium text-sm tracking-wide transition-all duration-200 gap-2"
          >
            <svg
              className="w-4 h-4 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Konsultasi WhatsApp</span>
          </a>
        </div>

        {/* Minimalist Trust Indicators (Clean, no bulky cards) */}
        <div className="pt-6 sm:pt-8 border-t border-white/15 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E6A72C] shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Private Tour
              </p>
              <p className="text-[11px] text-slate-300">Rombongan sendiri</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E6A72C] shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Premium Experience
              </p>
              <p className="text-[11px] text-slate-300">
                Armada & kru berlisensi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E6A72C] shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                WhatsApp Support
              </p>
              <p className="text-[11px] text-slate-300">Respon ramah & cepat</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E6A72C] shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Flexible Itinerary
              </p>
              <p className="text-[11px] text-slate-300">
                Disesuaikan preferensi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
