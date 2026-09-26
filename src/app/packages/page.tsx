import Metadata from 'next';
import PackageCard from '@/components/packages/PackageCard';
import { getPackagesData } from '@/data/packages';

export const metadata = {
  title: 'Katalog Paket Tour & Private Yacht Bali',
  description: 'Lihat daftar lengkap paket wisata premium Bali. Dari Private Yacht Nusa Penida hingga Ubud Day Trip dengan harga transparan.',
};

export default async function PackagesPage() {
  const packages = await getPackagesData();

  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-primary-dark via-primary to-cyan-800 rounded-3xl p-8 sm:p-12 text-white mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent-light block mb-2">
              Katalog Wisata
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif mb-4">
              Paket Tour & Yacht Bali
            </h1>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
              Pilih paket wisata impian Anda di Bali. Semua paket dirancang untuk kenyamanan maksimal dengan pelayanan eksklusif dan privat.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
            <svg className="w-96 h-96 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 22h20L12 2zm0 3.8L18.6 20H5.4L12 5.8z" />
            </svg>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
