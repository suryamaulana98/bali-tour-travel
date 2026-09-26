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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest block mb-2">
            Destinasi Eksotik
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mb-4">
            Destinasi Pilihan di Bali
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Temukan tempat-tempat menakjubkan yang kami kunjungi dalam setiap petualangan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.name}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
                  {dest.location}
                </span>
                <h3 className="text-xl font-bold font-serif mb-2">{dest.name}</h3>
                <p className="text-xs text-gray-300 line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity">
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
