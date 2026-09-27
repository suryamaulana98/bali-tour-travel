const STEPS = [
  {
    step: "01",
    title: "Pilih Paket",
    description:
      "Tentukan paket Private Yacht atau Tour yang sesuai keinginan Anda.",
  },
  {
    step: "02",
    title: "Isi Data",
    description:
      "Lengkapi tanggal perjalanan, jumlah peserta, serta kontak pemesan.",
  },
  {
    step: "03",
    title: "Dapatkan Booking Code",
    description:
      "Sistem menerbitkan kode reservasi unik dan bukti booking PENDING.",
  },
  {
    step: "04",
    title: "Konfirmasi via WhatsApp",
    description:
      "Kirimkan detail via WhatsApp untuk konfirmasi ketersediaan dengan tim travel.",
  },
];

export default function HowBookingWorks() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-[#E5E7EB]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-2">
            Alur Pemesanan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-bold text-[#0B1F2A] tracking-tight leading-tight">
            Proses Booking Mudah & Transparan
          </h2>
          <p className="mt-3 text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Tanpa perlu registrasi akun. Selesaikan dalam 4 tahapan cepat dan
            langsung terhubung dengan tim kami.
          </p>
        </div>

        {/* Desktop Horizontal Stepper */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col items-start pr-6"
            >
              {/* Stepper Header (Number + Connector) */}
              <div className="w-full flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full border border-[#087F8C] text-[#087F8C] font-serif font-bold text-sm flex items-center justify-center bg-white shadow-xs">
                  {item.step}
                </span>
                {idx < STEPS.length - 1 && (
                  <div className="flex-1 h-[1px] bg-[#E5E7EB] mx-3 relative">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-[#64748B]/50 font-sans">
                      →
                    </span>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-serif font-bold text-[#0B1F2A] mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet Horizontal Stepper (2x2 with clean flow) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="flex gap-4 items-start pb-6 border-b border-[#E5E7EB]"
            >
              <span className="w-9 h-9 rounded-full border border-[#087F8C] text-[#087F8C] font-serif font-bold text-sm flex items-center justify-center shrink-0 bg-white">
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-serif font-bold text-[#0B1F2A] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="md:hidden space-y-6 relative pl-3">
          <div className="absolute left-7 top-4 bottom-6 w-[1px] bg-[#E5E7EB]" />
          {STEPS.map((item) => (
            <div key={item.step} className="relative flex items-start gap-4">
              <span className="relative z-10 w-9 h-9 rounded-full border border-[#087F8C] bg-white text-[#087F8C] font-serif font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                {item.step}
              </span>
              <div className="pt-1">
                <h3 className="text-sm font-serif font-bold text-[#0B1F2A] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
