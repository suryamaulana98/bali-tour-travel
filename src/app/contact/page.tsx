import type { Metadata } from "next";
import { getWhatsAppContactLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontak Kami",
  description:
    "Hubungi tim M8 Private Yacht & Tour Bali via WhatsApp resmi, telepon, atau email.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-2">
            Informasi & Layanan Tamu
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-bold text-[#0B1F2A] tracking-tight leading-tight">
            Hubungi Tim M8 Travel
          </h1>
          <p className="mt-3 text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
            Konsultasikan pertanyaan seputar rute pulau, private charter yacht,
            ketersediaan tanggal, atau permintaan khusus perjalanan Anda.
          </p>
        </div>

        {/* 2 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {/* Card WhatsApp direct */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#E6F4F5] text-[#087F8C] flex items-center justify-center mb-4 sm:mb-5">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B1F2A] mb-2">
                WhatsApp Official
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6 leading-relaxed">
                Saluran tercepat untuk respon ketersediaan jadwal, penawaran
                harga grup, dan konsultasi custom trip.
              </p>
            </div>
            <a
              href={getWhatsAppContactLink(
                "Halo M8 Travel, saya ingin konsultasi mengenai paket wisata di Bali.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full min-h-11 px-5 py-3 rounded-lg bg-[#E6A72C] hover:bg-[#CF921F] text-[#0B1F2A] font-semibold text-sm text-center transition-colors tracking-wide"
            >
              Hubungi via WhatsApp (+62 887-3046-610)
            </a>
          </div>

          {/* Card Kantor & Email */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#E5E7EB] shadow-xs space-y-5">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B] block mb-1">
                Lokasi Operasional
              </span>
              <p className="font-semibold text-[#0B1F2A] text-sm">
                Sanur & Benoa Harbor
              </p>
              <p className="text-xs text-[#64748B] mt-0.5">
                Denpasar, Bali, Indonesia
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB]">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B] block mb-1">
                Email Resmi
              </span>
              <a
                href="mailto:info@m8travel.com"
                className="font-semibold text-[#087F8C] text-sm hover:underline"
              >
                info@m8travel.com
              </a>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB]">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B] block mb-1">
                Jam Layanan Tamu
              </span>
              <p className="text-sm font-semibold text-[#0B1F2A]">
                Setiap Hari: 07.00 - 21.00 WITA
              </p>
              <p className="text-xs text-[#64748B] mt-0.5">
                Tim customer care siap melayani melalui chat WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
