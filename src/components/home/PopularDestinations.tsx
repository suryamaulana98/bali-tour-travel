import Image from "next/image";

const DESTINATIONS = [
  {
    name: "Nusa Penida",
    tag: "Pulau Eksotis",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1200",
    description:
      "Tebing karst megah Kelingking Beach dan lanskap samudra tak bertepi.",
    featured: true,
  },
  {
    name: "Manta Bay",
    tag: "Spot Snorkeling",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
    description:
      "Berenang berdampingan dengan Manta Ray di habitat alaminya yang terlindungi.",
    featured: false,
  },
  {
    name: "Crystal Bay",
    tag: "Pantai Pasir Putih",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    description:
      "Ketenangan teluk berpasir putih dengan visibilitas bawah laut sejernih kaca.",
    featured: false,
  },
  {
    name: "Ubud",
    tag: "Pusat Budaya",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    description:
      "Hamparan terasering hijau subur, pura spiritual, dan ketenangan hutan tropis.",
    featured: false,
  },
];

export default function PopularDestinations() {
  const featured = DESTINATIONS[0];
  const others = DESTINATIONS.slice(1);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-[#E5E7EB]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-2.5">
            Destinasi Pilihan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-bold text-[#0B1F2A] tracking-tight leading-tight">
            Pesona Eksotis Bali & Kepulauan
          </h2>
          <p className="mt-3 text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
            Dari keajaiban bawah laut Nusa Penida hingga kedamaian lembah Ubud,
            setiap titik dirancang untuk memanjakan indera Anda.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Large Highlight (Left, spans 7 columns) */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex flex-col justify-end p-6 sm:p-10 shadow-xs">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/90 via-[#0B1F2A]/35 to-transparent pointer-events-none" />

            <div className="relative z-10 text-white max-w-lg">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E6A72C] block mb-2">
                {featured.tag}
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold mb-3 tracking-tight">
                {featured.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-light">
                {featured.description}
              </p>
            </div>
          </div>

          {/* Right Column (Spans 5 columns, 3 stacked or 1 tall + 2 sub) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-6 justify-between">
            {others.map((dest) => (
              <div
                key={dest.name}
                className="relative group rounded-2xl overflow-hidden h-[160px] sm:h-[180px] lg:h-[162px] flex flex-col justify-end p-5 sm:p-6 shadow-xs"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/85 via-[#0B1F2A]/30 to-transparent pointer-events-none" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E6A72C] block mb-1">
                    {dest.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-200/85 line-clamp-1 font-light">
                    {dest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
