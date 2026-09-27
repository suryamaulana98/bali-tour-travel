import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi dan perlindungan data pelanggan M8 Private Yacht & Tour Bali.",
};

export default function PrivacyPolicyPage() {
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
          <span className="text-[#0B1F2A] font-medium">Kebijakan Privasi</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-xl border border-[#E5E7EB] shadow-xs space-y-8">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#087F8C] block mb-1">
              Perlindungan Data
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F2A] mb-2">
              Kebijakan Privasi
            </h1>
            <p className="text-xs text-[#64748B]">
              Terakhir Diperbarui: September 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#64748B] leading-relaxed">
            <p>
              M8 Travel Bali ("Kami") berkomitmen menjaga privasi serta
              kerahasiaan data pribadi seluruh tamu dan pengunjung situs kami.
            </p>

            <div>
              <h2 className="text-base font-serif font-bold text-[#0B1F2A] mb-2">
                1. Data Yang Dikumpulkan
              </h2>
              <p className="mb-2">
                Saat Anda mengajukan reservasi paket, kami mengumpulkan data
                yang diberikan secara sukarela:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Nama Lengkap Pemesan</li>
                <li>Nomor WhatsApp / Telepon</li>
                <li>Alamat Email</li>
                <li>Tanggal Perjalanan & Jumlah Peserta</li>
                <li>Lokasi Penjemputan & Catatan Perjalanan</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-serif font-bold text-[#0B1F2A] mb-2">
                2. Penggunaan Data
              </h2>
              <p className="mb-2">Data tersebut kami manfaatkan murni untuk:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Penerbitan Bukti Booking dan Kode Reservasi unik.</li>
                <li>
                  Komunikasi konfirmasi ketersediaan armada yacht via WhatsApp.
                </li>
                <li>
                  Koordinasi operasional penjemputan tamu di hotel/area
                  pelabuhan.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-serif font-bold text-[#0B1F2A] mb-2">
                3. Keamanan Informasi
              </h2>
              <p>
                Kami tidak pernah menjual, menyewakan, atau mendistribusikan
                data pribadi Anda ke pihak ketiga di luar kebutuhan operasional
                perjalanan Anda bersama M8 Travel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
