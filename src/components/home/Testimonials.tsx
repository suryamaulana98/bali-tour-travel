const TESTIMONIALS = [
  {
    name: 'Budi & Family',
    role: 'Jakarta',
    tour: 'Private Yacht Nusa Penida',
    comment: 'Pengalaman berlayar yang sangat luar biasa! Kapalnya bersih, tempat berjemurnya nyaman, dan pelayanan crew M8 luar biasa ramah. Anak-anak sangat senang snorkeling di Manta Bay!',
    rating: 5,
  },
  {
    name: 'Sarah & Friends',
    role: 'Surabaya',
    tour: 'Ubud Adventure Day Trip',
    comment: 'Petualangan teratur dan seru! Dari Jungle Swing sampai rafting Sungai Ayung semuanya lancar tanpa hambatan. Driver sangat tepat waktu.',
    rating: 5,
  },
  {
    name: 'David W.',
    role: 'Singapore',
    tour: 'Nusa Penida Island Tour',
    comment: 'Amazing tour! The booking process via WhatsApp was fast and easy. Kelingking beach view is breathtaking. Highly recommended!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest block mb-2">
            Ulasan Wisatawan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mb-4">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Kepuasan wisatawan adalah kebanggaan utama tim M8 Travel Bali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <span className="text-xs text-gray-400">{t.role}</span>
                </div>
                <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary font-medium rounded-md">
                  {t.tour}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
