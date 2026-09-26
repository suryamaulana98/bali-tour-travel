import type { Metadata } from 'next';
import Image from 'next/image';
import CTAWhatsApp from '@/components/home/CTAWhatsApp';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'M8 Travel Bali adalah penyedia layanan Private Yacht dan Tour Wisata eksklusif di Bali.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2">
            Profil Perusahaan
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-gray-900 mb-6">
            M8 Private Yacht & Tour Bali
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
            Kami hadir untuk memberikan pengalaman liburan tropis di Bali secara private, aman, nyaman, dan berkesan.
          </p>
        </div>

        {/* Content Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000"
              alt="M8 Yacht Bali"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-serif text-gray-900">
              Pelayanan Eksklusif Tanpa Kompromi
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              M8 Travel didirikan dengan visi menghadirkan wisata berkualitas tinggi di Bali. Berbeda dari tour umum yang menggabungkan banyak peserta asing, kami mengkhususkan diri pada tour private untuk grup, keluarga, maupun pasangan.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Dengan armada kapal Private Yacht premium, kendaraan bersih ber-AC, serta kapten dan guide profesional, kami memastikan setiap momen perjalanan Anda di Nusa Penida dan Ubud menjadi kenangan tak terlupakan.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mx-auto mb-4 font-serif">
              01
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Keamanan Utama</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Seluruh kapal dan kendaraan kami dilengkapi standar peralatan keselamatan terbaik.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold text-xl mx-auto mb-4 font-serif">
              02
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Privasi Maksimal</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Perjalanan eksklusif hanya untuk rombongan Anda tanpa gangguan peserta lain.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl mx-auto mb-4 font-serif">
              03
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Respon Cepat</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Layanan tim customer care ramah & cepat via WhatsApp selama 7 hari seminggu.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <CTAWhatsApp />
      </div>
    </div>
  );
}
