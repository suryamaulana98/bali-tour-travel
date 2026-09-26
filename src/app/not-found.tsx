import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <span className="text-6xl font-extrabold font-serif text-primary block mb-4">404</span>
        <h1 className="text-2xl font-bold font-serif text-gray-900 mb-2">Halaman Tidak Ditemukan</h1>
        <p className="text-sm text-gray-600 mb-8">
          Maaf, halaman atau booking yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all shadow-md"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
