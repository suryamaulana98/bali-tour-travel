import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi dan perlindungan data pelanggan M8 Private Yacht & Tour Bali.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold font-serif text-gray-900 mb-2">Kebijakan Privasi</h1>
          <p className="text-xs text-gray-400">Terakhir Diperbarui: 26 September 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p>
            M8 Private Yacht & Tour Bali ("Kami") berkomitmen untuk melindungi dan menghormati hak privasi setiap pelanggan dan pengunjung situs web kami.
          </p>

          <h2 className="text-lg font-bold text-gray-900 font-serif">1. Informasi Yang Kami Kumpulkan</h2>
          <p>
            Saat Anda mengisi formulir pemesanan di situs kami, kami mengumpulkan informasi tertentu yang Anda berikan secara langsung, meliputi:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nama Lengkap</li>
            <li>Nomor Telepon / WhatsApp</li>
            <li>Alamat Email</li>
            <li>Tanggal Perjalanan Tour & Jumlah Peserta</li>
            <li>Lokasi Pickup Hotel & Catatan Khusus</li>
          </ul>

          <h2 className="text-lg font-bold text-gray-900 font-serif">2. Penggunaan Informasi</h2>
          <p>Informasi yang kami kumpulkan hanya digunakan untuk keperluan:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Memproses dan membuat Tiket Pemesanan Tour (Kode Booking).</li>
            <li>Menghubungi Anda melalui WhatsApp/Email untuk mengonfirmasi ketersediaan paket.</li>
            <li>Mengatur penjemputan (pickup) di lokasi hotel Anda.</li>
          </ul>

          <h2 className="text-lg font-bold text-gray-900 font-serif">3. Perlindungan & Keamanan Data</h2>
          <p>
            Kami menggunakan standar keamanan teknis untuk mencegah akses tidak sah ke data pribadi Anda. Kami <strong>tidak pernah menjual, menyewakan, atau membagikan</strong> informasi pribadi Anda kepada pihak ketiga mana pun untuk keperluan pemasaran.
          </p>

          <h2 className="text-lg font-bold text-gray-900 font-serif">4. Kontak Privasi</h2>
          <p>
            Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau ingin meminta penghapusan data booking Anda, silakan hubungi tim kami via WhatsApp di +62 887-3046-610 atau email info@m8travel.com.
          </p>
        </div>
      </div>
    </div>
  );
}
