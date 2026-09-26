const STEPS = [
  {
    step: '01',
    title: 'Pilih Paket Tour',
    description: 'Pilih paket Private Yacht atau Day Trip impian Anda di katalog kami.',
    icon: (
      <svg className="w-6 h-6 text-[#0C7B93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Isi Form Booking',
    description: 'Lengkapi tanggal tour, jumlah peserta, lokasi hotel, dan catatan khusus.',
    icon: (
      <svg className="w-6 h-6 text-[#0C7B93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Dapatkan Kode & Tiket',
    description: 'Sistem langsung membuat Kode Booking unik & e-tiket berstatus PENDING.',
    icon: (
      <svg className="w-6 h-6 text-[#0C7B93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Konfirmasi WhatsApp',
    description: 'Klik tombol WhatsApp untuk mengirim detail booking langsung ke tim M8 Travel.',
    icon: (
      <svg className="w-6 h-6 text-[#0C7B93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function HowBookingWorks() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            Cara Pemesanan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-gray-900 tracking-tight mb-4">
            Proses Booking Yang Sangat Mudah
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Tanpa registrasi akun yang berbelit-belit. Cukup 4 langkah cepat menuju liburan terbaik Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="relative bg-slate-50/90 hover:bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black font-serif text-[#0C7B93]/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center gap-1.5 text-xs text-[#0C7B93] font-semibold">
                <span>Langkah {step.step}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
