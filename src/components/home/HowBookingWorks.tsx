const STEPS = [
  {
    step: '01',
    title: 'Pilih Paket Tour',
    description: 'Pilih paket Private Yacht atau Day Trip sesuai keinginan liburan Anda.',
  },
  {
    step: '02',
    title: 'Isi Form Booking',
    description: 'Lengkapi data pemesanan seperti tanggal tour, jumlah peserta, dan titik pickup.',
  },
  {
    step: '03',
    title: 'Dapatkan Kode & Tiket',
    description: 'Sistem membuat Kode Booking unik dan tiket dengan status awal PENDING.',
  },
  {
    step: '04',
    title: 'Konfirmasi via WhatsApp',
    description: 'Klik tombol WhatsApp untuk mengirim detail booking otomatis ke tim kami.',
  },
];

export default function HowBookingWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest block mb-2">
            Cara Pemesanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mb-4">
            Proses Booking Yang Sangat Mudah
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Tanpa ribet, tanpa buat akun. Cukup 4 langkah mudah menuju petualangan Bali Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => (
            <div key={step.step} className="relative bg-gray-50/80 p-8 rounded-2xl border border-gray-100">
              <span className="text-4xl font-black font-serif text-primary/20 block mb-4">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
