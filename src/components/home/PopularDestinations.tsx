import Image from 'next/image';

const DESTINATIONS = [
  {
    name: 'Manta Bay',
    location: 'Nusa Penida',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600',
    description: 'Berenang bersama Manta Ray raksasa di habitat alaminya.',
  },
  {
    name: 'Crystal Bay',
    location: 'Nusa Penida',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
    description: 'Pantai pasir putih dengan air jernih bak kristal.',
  },
  {
    name: 'Kelingking Beach',
    location: 'Nusa Penida',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=600',
    description: 'Tebing ikonik berbentuk T-Rex dengan view samudra biru.',
  },
  {
    name: 'Sacred Monkey Forest',
    location: 'Ubud',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600',
    description: 'Hutan tropis alami yang menjadi tempat tinggal monyet sakral.',
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            Destinasi Eksotik
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-gray-900 tracking-tight mb-4">
            Destinasi Pilihan di Bali
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Temukan tempat-tempat menakjubkan yang kami kunjungi dalam setiap petualangan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.name}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8A838] block mb-1.5">
                  {dest.location}
                </span>
                <h3 className="text-2xl font-bold font-serif mb-2">{dest.name}</h3>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
