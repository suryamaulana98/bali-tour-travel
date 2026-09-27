import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan pemesanan layanan tour di M8 Private Yacht & Tour Bali.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[#64748B] mb-8 font-light"
        >
          <Link href="/" className="hover:text-[#087F8C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#0B1F2A] font-medium">Syarat & Ketentuan</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-xl border border-[#E5E7EB] shadow-xs space-y-8">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#087F8C] block mb-1">
              Ketentuan Layanan
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F2A] mb-2">
              Syarat & Ketentuan
            </h1>
            <p className="text-xs text-[#64748B]">
              Terakhir Diperbarui: September 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#64748B] leading-relaxed">
            <div>
              <h2 className="text-base font-serif font-bold text-[#0B1F2A] mb-2">
                1. Proses Pemesanan & Status Booking
              </h2>
              <p>
                Pemesanan melalui website ini menghasilkan Bukti Booking dengan
                status awal <strong>PENDING (Menunggu Konfirmasi)</strong>.
                Booking baru dinyatakan{" "}
                <strong>CONFIRMED (Dikonfirmasi)</strong> setelah pihak travel
                mengonfirmasi ketersediaan armada/slot secara manual melalui
                komunikasi WhatsApp resmi.
              </p>
            </div>

            <div>
              <h2 className="text-base font-serif font-bold text-[#0B1F2A] mb-2">
                2. Jadwal & Kondisi Alam
              </h2>
              <p>
                Aktivitas perjalanan laut (Private Yacht & Snorkeling) sangat
                memperhatikan faktor keselamatan maritim dan kondisi cuaca di
                perairan Bali/Nusa Penida. Jika terjadi ombak ekstrem atau
                instruksi syahbandar, M8 Travel berhak menyesuaikan rute atau
                menjadwalkan ulang demi keselamatan seluruh penumpang.
              </p>
            </div>

            <div>
              <h2 className="text-base font-serif font-bold text-[#0B1F2A] mb-2">
                3. Tanggung Jawab & Keselamatan
              </h2>
              <p>
                Seluruh tamu diwajibkan menggunakan pelampung keselamatan selama
                berada di atas yacht dan mematuhi arahan kapten kapal serta tour
                guide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
