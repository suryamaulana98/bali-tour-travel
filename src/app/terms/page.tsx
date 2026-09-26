import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat dan ketentuan pemesanan layanan tour di M8 Private Yacht & Tour Bali.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold font-serif text-gray-900 mb-2">Syarat & Ketentuan</h1>
          <p className="text-xs text-gray-400">Terakhir Diperbarui: 26 September 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <h2 className="text-lg font-bold text-gray-900 font-serif">1. Proses Pemesanan & Status Booking</h2>
          <p>
            Pemesanan melalui website ini menghasilkan Tiket Pemesanan dengan status awal <strong>PENDING (Menunggu Konfirmasi)</strong>. Booking baru dinyatakan <strong>CONFIRMED (Dikonfirmasi)</strong> setelah pihak travel mengonfirmasi ketersediaan armada/slot secara manual via WhatsApp.
          </p>

          <h2 className="text-lg font-bold text-gray-900 font-serif">2. Jadwal & Cuaca</h2>
          <p>
            Aktivitas tour laut (Private Yacht & Snorkeling) sangat bergantung pada kondisi cuaca dan keselamatan maritim. Jika terjadi cuaca buruk, pihak travel berhak mengalihkan rute atau menjadwalkan ulang demi keselamatan peserta.
          </p>

          <h2 className="text-lg font-bold text-gray-900 font-serif">3. Tanggung Jawab Peserta</h2>
          <p>
            Peserta wajib mematuhi seluruh instruksi keselamatan dari kapten dan guide. Peserta bertanggung jawab atas barang pribadi yang dibawa selama tour.
          </p>
        </div>
      </div>
    </div>
  );
}
