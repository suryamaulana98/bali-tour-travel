const BENEFITS = [
  {
    number: "01",
    title: "Private Experience",
    description:
      "Perjalanan lebih personal tanpa bergabung dengan rombongan umum, memberikan kenyamanan penuh bagi Anda dan keluarga.",
  },
  {
    number: "02",
    title: "Professional Service",
    description:
      "Tim dan kapten berlisensi siap mendampingi setiap proses perjalanan dari awal konsultasi hingga tour selesai dengan selamat.",
  },
  {
    number: "03",
    title: "Flexible Itinerary",
    description:
      "Pilihan destinasi dan alur waktu dapat disesuaikan dengan kebutuhan serta ritme santai liburan Anda di Bali.",
  },
  {
    number: "04",
    title: "Fast WhatsApp Support",
    description:
      "Komunikasi langsung dan responsif bersama tim M8 Travel tanpa prosedur pemesanan yang berbelit-belit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F3] border-t border-[#E5E7EB]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-2">
            Komitmen Kami
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-bold text-[#0B1F2A] tracking-tight leading-tight">
            Mengapa Memilih M8 Travel
          </h2>
          <p className="mt-3 text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
            Menyajikan standar perjalanan liburan terbaik yang mengutamakan
            privasi, kenyamanan, serta kemudahan komunikasi.
          </p>
        </div>

        {/* 4 Clean Benefits (Clean, non-bulky layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {BENEFITS.map((item) => (
            <div
              key={item.number}
              className="flex flex-col pt-6 border-t border-[#E5E7EB] group hover:border-[#087F8C] transition-colors duration-300"
            >
              <span className="font-serif text-2xl font-bold text-[#E6A72C] mb-3">
                {item.number}
              </span>
              <h3 className="text-lg font-serif font-bold text-[#0B1F2A] mb-2 group-hover:text-[#087F8C] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
