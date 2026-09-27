import Link from "next/link";
import { getWhatsAppContactLink } from "@/lib/whatsapp";

export default function CTAWhatsApp() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#0B1F2A] text-white relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#087F8C]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#E6A72C]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#E6A72C] text-[11px] font-semibold uppercase tracking-[0.2em] mb-5 border border-white/10">
          Konsultasi & Reservasi Langsung
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-serif font-bold mb-4 leading-tight tracking-tight max-w-3xl mx-auto">
          Rencanakan Liburan Impian Anda di Bali Bersama Kami
        </h2>

        <p className="text-slate-300 text-[15px] sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Punya rute impian, perjalanan keluarga besar, atau ingin memastikan
          ketersediaan yacht pada tanggal tertentu? Tim kami siap melayani Anda
          melalui WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            href={getWhatsAppContactLink(
              "Halo M8 Travel, saya ingin menanyakan informasi dan ketersediaan paket tour di Bali.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-12 px-6 py-3 rounded-full bg-[#E6A72C] hover:bg-[#CF921F] text-[#0B1F2A] font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg gap-2"
          >
            <svg
              className="w-4 h-4 text-[#0B1F2A]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Hubungi via WhatsApp</span>
          </a>

          <Link
            href="/packages"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-11 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm tracking-wide transition-all text-center"
          >
            Lihat Katalog Paket
          </Link>
        </div>
      </div>
    </section>
  );
}
