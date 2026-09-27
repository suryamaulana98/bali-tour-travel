import type { Metadata } from "next";
import Image from "next/image";
import CTAWhatsApp from "@/components/home/CTAWhatsApp";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "M8 Travel Bali adalah penyedia layanan Private Yacht dan Tour Wisata eksklusif di Bali.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#F8F7F3] min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-2">
            Profil Perusahaan
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-bold text-[#0B1F2A] tracking-tight leading-tight">
            M8 Private Yacht & Tour Bali
          </h1>
          <p className="mt-3 text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
            Menghadirkan standar berlayar dan eksplorasi pulau tropis Bali
            secara privat, elegan, dan berkesan.
          </p>
        </div>

        {/* Content Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-xs">
            <Image
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000"
              alt="M8 Yacht Bali"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F2A]">
              Eksklusivitas & Kenyamanan Tanpa Kompromi
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              M8 Travel didirikan dengan visi menghadirkan pengalaman liburan
              berkelas di Bali. Kami memfokuskan layanan pada private tour
              murni—tanpa menggabungkan tamu kami dengan rombongan umum lain.
            </p>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Didukung oleh armada kapal private yacht yang terawat prima, kru
              terlatih, serta perlengkapan snorkeling standar internasional,
              kami memastikan kenyamanan dan privasi Anda selalu menjadi
              prioritas utama.
            </p>
          </div>
        </div>

        {/* 3 Pillar Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 pt-10 border-t border-[#E5E7EB]">
          <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E5E7EB]">
            <span className="font-serif text-2xl font-bold text-[#E6A72C] mb-2 block">
              01
            </span>
            <h3 className="font-serif font-bold text-[#0B1F2A] text-base mb-2">
              Keamanan Terverifikasi
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Kapal dan perlengkapan keselamatan diperiksa berkala sesuai
              standar regulasi maritim.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E5E7EB]">
            <span className="font-serif text-2xl font-bold text-[#E6A72C] mb-2 block">
              02
            </span>
            <h3 className="font-serif font-bold text-[#0B1F2A] text-base mb-2">
              Privasi Maksimal
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Setiap charter dan perjalanan dinikmati khusus bersama keluarga
              atau orang terdekat Anda.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E5E7EB]">
            <span className="font-serif text-2xl font-bold text-[#E6A72C] mb-2 block">
              03
            </span>
            <h3 className="font-serif font-bold text-[#0B1F2A] text-base mb-2">
              Komunikasi Responsif
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Layanan konsultasi langsung via WhatsApp dengan respon cepat dan
              fleksibilitas jadwal.
            </p>
          </div>
        </div>
      </div>

      <CTAWhatsApp />
    </div>
  );
}
