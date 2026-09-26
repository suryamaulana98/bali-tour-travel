import type { Metadata } from 'next';
import { getWhatsAppContactLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Hubungi M8 Private Yacht & Tour Bali via WhatsApp, Telepon, atau Email.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2">
            Kontak & Lokasi
          </span>
          <h1 className="text-4xl font-extrabold font-serif text-gray-900 mb-4">
            Hubungi M8 Travel Bali
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Punya pertanyaan mengenai rute tour, kapasitas yacht, atau custom itinerary? Tim kami siap menjawab pesan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card WhatsApp direct */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">WhatsApp Direct</h3>
              <p className="text-sm text-gray-600 mb-6">
                Cara paling cepat untuk respon ketersediaan dan pertanyaan informasi tour.
              </p>
            </div>
            <a
              href={getWhatsAppContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm text-center block transition-colors"
            >
              +62 887 3046 610
            </a>
          </div>

          {/* Card Office & Email */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md space-y-6">
            <div>
              <span className="text-xs text-gray-400 block uppercase font-semibold tracking-wider mb-1">Alamat Ops</span>
              <p className="font-bold text-gray-900 text-sm">Sanur Harbor & Denpasar, Bali</p>
              <p className="text-xs text-gray-500 mt-1">Indonesia</p>
            </div>

            <div>
              <span className="text-xs text-gray-400 block uppercase font-semibold tracking-wider mb-1">Email Resmi</span>
              <a href="mailto:info@m8travel.com" className="font-bold text-primary text-sm hover:underline">
                info@m8travel.com
              </a>
            </div>

            <div>
              <span className="text-xs text-gray-400 block uppercase font-semibold tracking-wider mb-1">Jam Operasional</span>
              <p className="text-sm font-semibold text-gray-800">Setiap Hari: 07.00 - 21.00 WITA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
