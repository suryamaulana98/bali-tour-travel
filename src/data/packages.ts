import { Package } from '@/types';

export const SEED_PACKAGES: Package[] = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    slug: 'private-yacht-nusa-penida',
    name: 'Private Yacht Nusa Penida',
    category: 'yacht',
    location: 'Nusa Penida, Bali',
    price: 8500000,
    price_type: 'per group',
    max_guests: 15,
    short_description: 'Jelajahi keindahan Nusa Penida dengan private yacht mewah. Nikmati snorkeling di Manta Bay & Crystal Bay, makan siang di atas kapal, dan sunset yang memukau.',
    description: 'Rasakan pengalaman berlayar eksklusif menuju Nusa Penida dengan Private Yacht kami. Perjalanan dimulai dari Sanur Harbor menuju perairan kristal Nusa Penida. Anda akan menikmati snorkeling bersama Manta Ray di Manta Bay, berenang di Crystal Bay yang jernih, serta menikmati makan siang fresh di atas kapal. Kapal kami dilengkapi dengan fasilitas premium termasuk sundeck, music system, dan peralatan snorkeling lengkap. Cocok untuk keluarga, pasangan, maupun rombongan yang ingin menikmati Bali dari sisi laut.',
    hero_image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
    ],
    destinations: [
      { name: 'Manta Bay', description: 'Snorkeling bersama Manta Ray raksasa di habitat aslinya' },
      { name: 'Crystal Bay', description: 'Berenang dan snorkeling di perairan kristal yang jernih' },
      { name: 'Gamat Bay', description: 'Spot snorkeling dengan terumbu karang yang masih alami' }
    ],
    itinerary: [
      { time: '07:00', activity: 'Pickup dari hotel' },
      { time: '08:00', activity: 'Check-in di Sanur Harbor' },
      { time: '08:30', activity: 'Berangkat menuju Nusa Penida' },
      { time: '10:00', activity: 'Snorkeling di Manta Bay' },
      { time: '11:30', activity: 'Snorkeling di Crystal Bay' },
      { time: '12:30', activity: 'Makan siang di atas kapal' },
      { time: '13:30', activity: 'Free time & swimming' },
      { time: '15:00', activity: 'Kembali ke Sanur' },
      { time: '16:30', activity: 'Tiba di Sanur Harbor' },
      { time: '17:00', activity: 'Transfer kembali ke hotel' }
    ],
    included: [
      'Private yacht untuk group Anda',
      'Peralatan snorkeling lengkap',
      'Makan siang & snack di kapal',
      'Air mineral, soft drink, & kopi/teh',
      'Life jacket & peralatan safety',
      'Handuk',
      'Guide snorkeling profesional',
      'Dokumentasi underwater (by request)',
      'Pickup & drop-off hotel (area Kuta/Seminyak/Sanur/Ubud)'
    ],
    excluded: [
      'Tiket masuk kawasan konservasi (Rp 25.000/orang)',
      'Tips untuk crew',
      'Pengeluaran pribadi',
      'Asuransi perjalanan'
    ],
    facilities: [
      'Sundeck dengan cushion',
      'Sound system & music',
      'Kabin berteduh',
      'Toilet',
      'Freshwater shower',
      'Cooler box',
      'First aid kit'
    ],
    important_notes: [
      'Jadwal dapat berubah tergantung kondisi cuaca dan laut',
      'Tidak disarankan untuk ibu hamil dan anak di bawah 5 tahun',
      'Peserta wajib bisa berenang untuk aktivitas snorkeling',
      'Bawa sunscreen, topi, dan kacamata hitam',
      'Tersedia life jacket untuk semua peserta'
    ],
    is_active: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    slug: 'ubud-adventure-day-trip',
    name: 'Ubud Adventure Day Trip',
    category: 'adventure',
    location: 'Ubud, Bali',
    price: 1200000,
    price_type: 'per person',
    max_guests: 20,
    short_description: 'Petualangan seru di Ubud! Kunjungi Monkey Forest, Jungle Swing, ATV ride melalui sawah, art gallery, dan rafting di Sungai Ayung.',
    description: 'Nikmati petualangan seharian di Ubud, jantung budaya dan alam Bali. Perjalanan dimulai dengan mengunjungi Sacred Monkey Forest Sanctuary, dilanjutkan dengan pengalaman seru di Jungle Swing dengan pemandangan lembah yang spektakuler. Rasakan adrenalin dengan ATV ride melintasi persawahan dan hutan. Setelah makan siang, kunjungi art gallery lokal dan akhiri hari dengan rafting menantang di Sungai Ayung. Paket ini sempurna untuk pencinta alam dan petualangan.',
    hero_image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800'
    ],
    destinations: [
      { name: 'Sacred Monkey Forest', description: 'Hutan sakral dengan ratusan monyet dan pura kuno' },
      { name: 'Tegallalang Rice Terrace', description: 'Sawah terasering ikonik dengan pemandangan spektakuler' },
      { name: 'Jungle Swing', description: 'Ayunan di atas lembah hijau dengan view yang menakjubkan' },
      { name: 'Sungai Ayung', description: 'Rafting seru di sungai terpanjang di Bali' }
    ],
    itinerary: [
      { time: '07:30', activity: 'Pickup dari hotel' },
      { time: '09:00', activity: 'Kunjungan Sacred Monkey Forest' },
      { time: '10:30', activity: 'Tegallalang Rice Terrace & foto' },
      { time: '11:30', activity: 'Jungle Swing experience' },
      { time: '12:30', activity: 'Makan siang di restoran lokal' },
      { time: '13:30', activity: 'ATV ride melalui sawah & hutan' },
      { time: '15:00', activity: 'Kunjungan Art Gallery' },
      { time: '15:45', activity: 'Persiapan rafting' },
      { time: '16:00', activity: 'Rafting di Sungai Ayung' },
      { time: '17:30', activity: 'Selesai & transfer kembali ke hotel' }
    ],
    included: [
      'Transport AC dari/ke hotel',
      'Tiket masuk Monkey Forest',
      'Jungle Swing (1x ride)',
      'ATV ride (1 jam)',
      'Rafting termasuk peralatan & guide',
      'Makan siang Indonesian buffet',
      'Air mineral sepanjang hari',
      'Guide berbahasa Indonesia/Inggris',
      'Asuransi aktivitas'
    ],
    excluded: [
      'Tiket masuk Tegallalang Rice Terrace (Rp 15.000/orang)',
      'Tips untuk guide & driver',
      'Pengeluaran pribadi',
      'Oleh-oleh dan belanja'
    ],
    facilities: [
      'Kendaraan AC dengan driver berpengalaman',
      'Peralatan ATV lengkap (helm & sepatu boot)',
      'Peralatan rafting standar internasional',
      'Locker & ruang ganti di rafting point'
    ],
    important_notes: [
      'Aktivitas fisik cukup intens, pastikan kondisi kesehatan baik',
      'Gunakan pakaian & alas kaki yang nyaman',
      'Bawa baju ganti untuk setelah rafting',
      'Bawa sunscreen dan topi',
      'Tidak disarankan untuk anak di bawah 7 tahun (ATV & rafting)'
    ],
    is_active: true,
    sort_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    slug: 'nusa-penida-island-tour',
    name: 'Nusa Penida Island Tour',
    category: 'island',
    location: 'Nusa Penida, Bali',
    price: 850000,
    price_type: 'per person',
    max_guests: 10,
    short_description: "Full day tour ke spot-spot ikonik Nusa Penida: Kelingking Beach, Angel's Billabong, Broken Beach, dan Crystal Bay.",
    description: "Jelajahi keajaiban alam Nusa Penida dalam satu hari penuh! Pulau ini menyimpan pemandangan alam yang luar biasa dan masih sangat alami. Kunjungi Kelingking Beach dengan tebing ikoniknya berbentuk T-Rex, Angel's Billabong yang merupakan infinity pool alami, Broken Beach dengan jembatan batu alam yang menakjubkan, dan Crystal Bay untuk berenang dan bersantai. Perjalanan menyeberang menggunakan speedboat cepat dari Sanur.",
    hero_image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
    ],
    destinations: [
      { name: 'Kelingking Beach', description: 'Pantai ikonik dengan tebing berbentuk T-Rex dan air turquoise' },
      { name: "Angel's Billabong", description: 'Kolam infinity alami di tepi tebing dengan air jernih' },
      { name: 'Broken Beach', description: 'Lengkungan batu alam dengan laguna biru kehijauan' },
      { name: 'Crystal Bay', description: 'Pantai pasir putih sempurna untuk berenang dan snorkeling' }
    ],
    itinerary: [
      { time: '06:30', activity: 'Pickup dari hotel' },
      { time: '07:30', activity: 'Tiba di Sanur Harbor, check-in' },
      { time: '08:00', activity: 'Berangkat ke Nusa Penida via speedboat' },
      { time: '08:45', activity: 'Tiba di Nusa Penida' },
      { time: '09:15', activity: 'Kelingking Beach viewpoint & trekking' },
      { time: '11:00', activity: "Angel's Billabong" },
      { time: '11:45', activity: 'Broken Beach' },
      { time: '12:30', activity: 'Makan siang di restoran lokal' },
      { time: '13:30', activity: 'Crystal Bay – berenang & bersantai' },
      { time: '15:30', activity: 'Kembali ke pelabuhan' },
      { time: '16:00', activity: 'Speedboat kembali ke Sanur' },
      { time: '16:45', activity: 'Tiba di Sanur, transfer ke hotel' }
    ],
    included: [
      'Return speedboat Sanur - Nusa Penida',
      'Transport lokal di Nusa Penida (mobil AC)',
      'Driver & guide lokal',
      'Makan siang',
      'Air mineral',
      'Tiket masuk semua destinasi',
      'Asuransi penyeberangan'
    ],
    excluded: [
      'Tips untuk guide & driver',
      'Pengeluaran pribadi',
      'Snorkeling equipment (bisa sewa di Crystal Bay)',
      'Oleh-oleh'
    ],
    facilities: [
      'Speedboat cepat dengan safety equipment',
      'Mobil AC di Nusa Penida'
    ],
    important_notes: [
      'Trekking ke Kelingking Beach cukup menantang, gunakan sepatu yang nyaman',
      'Bawa sunscreen dan topi',
      'Kondisi laut bisa berubah, jadwal speedboat fleksibel',
      'Tidak disarankan untuk yang takut ketinggian (Kelingking viewpoint)',
      'Bawa baju renang dan baju ganti'
    ],
    is_active: true,
    sort_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export async function getPackagesData(): Promise<Package[]> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('your-project')) {
      const { supabase } = await import('@/lib/supabase/client');
      const { data, error } = await supabase
        .from('packages')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (!error && data && data.length > 0) {
        return data as Package[];
      }
    }
  } catch (err) {
    console.error('Failed to fetch packages from Supabase, using fallback data:', err);
  }

  return SEED_PACKAGES;
}

export async function getPackageBySlugData(slug: string): Promise<Package | null> {
  const packages = await getPackagesData();
  return packages.find((p) => p.slug === slug) || null;
}
