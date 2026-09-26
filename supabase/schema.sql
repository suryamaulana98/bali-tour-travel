-- ============================================
-- M8 Private Yacht Bali - Database Schema
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- PACKAGES TABLE
-- ============================================
CREATE TABLE packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'tour',
  location TEXT NOT NULL,
  price INTEGER NOT NULL,
  price_type TEXT NOT NULL DEFAULT 'per person',
  max_guests INTEGER,
  short_description TEXT NOT NULL,
  description TEXT NOT NULL,
  hero_image TEXT NOT NULL,
  gallery JSONB DEFAULT '[]'::jsonb,
  destinations JSONB DEFAULT '[]'::jsonb,
  itinerary JSONB DEFAULT '[]'::jsonb,
  included JSONB DEFAULT '[]'::jsonb,
  excluded JSONB DEFAULT '[]'::jsonb,
  facilities JSONB DEFAULT '[]'::jsonb,
  important_notes JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- BOOKINGS TABLE
-- ============================================
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_code TEXT UNIQUE NOT NULL,
  booking_token TEXT UNIQUE NOT NULL DEFAULT uuid_generate_v4()::text,
  package_id UUID NOT NULL REFERENCES packages(id) ON DELETE RESTRICT,
  package_name TEXT NOT NULL,
  package_price INTEGER NOT NULL,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  tour_date DATE NOT NULL,
  guest_count INTEGER NOT NULL,
  pickup_location TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX idx_packages_slug ON packages(slug);
CREATE INDEX idx_packages_is_active ON packages(is_active);
CREATE INDEX idx_bookings_booking_code ON bookings(booking_code);
CREATE INDEX idx_bookings_booking_token ON bookings(booking_token);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_package_id ON bookings(package_id);

-- ============================================
-- UPDATED_AT TRIGGER
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER packages_updated_at
  BEFORE UPDATE ON packages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

-- Enable RLS
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Packages: anyone can read active packages
CREATE POLICY "Anyone can read active packages"
  ON packages FOR SELECT
  USING (is_active = true);

-- Packages: only service role can insert/update/delete
CREATE POLICY "Service role can manage packages"
  ON packages FOR ALL
  USING (auth.role() = 'service_role');

-- Bookings: service role can do everything
CREATE POLICY "Service role can manage bookings"
  ON bookings FOR ALL
  USING (auth.role() = 'service_role');

-- Bookings: anyone can read their own booking by token
CREATE POLICY "Anyone can read booking by token"
  ON bookings FOR SELECT
  USING (true);

-- ============================================
-- SEED DATA: PACKAGES
-- ============================================
INSERT INTO packages (slug, name, category, location, price, price_type, max_guests, short_description, description, hero_image, gallery, destinations, itinerary, included, excluded, facilities, important_notes, sort_order)
VALUES
(
  'private-yacht-nusa-penida',
  'Private Yacht Nusa Penida',
  'yacht',
  'Nusa Penida, Bali',
  8500000,
  'per group',
  15,
  'Jelajahi keindahan Nusa Penida dengan private yacht mewah. Nikmati snorkeling di Manta Bay & Crystal Bay, makan siang di atas kapal, dan sunset yang memukau.',
  'Rasakan pengalaman berlayar eksklusif menuju Nusa Penida dengan Private Yacht kami. Perjalanan dimulai dari Sanur Harbor menuju perairan kristal Nusa Penida. Anda akan menikmati snorkeling bersama Manta Ray di Manta Bay, berenang di Crystal Bay yang jernih, serta menikmati makan siang fresh di atas kapal. Kapal kami dilengkapi dengan fasilitas premium termasuk sundeck, music system, dan peralatan snorkeling lengkap. Cocok untuk keluarga, pasangan, maupun rombongan yang ingin menikmati Bali dari sisi laut.',
  '/images/yacht-hero.jpg',
  '["/images/yacht-1.jpg", "/images/yacht-2.jpg", "/images/yacht-3.jpg", "/images/yacht-4.jpg"]',
  '[{"name": "Manta Bay", "description": "Snorkeling bersama Manta Ray raksasa di habitat aslinya"}, {"name": "Crystal Bay", "description": "Berenang dan snorkeling di perairan kristal yang jernih"}, {"name": "Gamat Bay", "description": "Spot snorkeling dengan terumbu karang yang masih alami"}]',
  '[{"time": "07:00", "activity": "Pickup dari hotel"}, {"time": "08:00", "activity": "Check-in di Sanur Harbor"}, {"time": "08:30", "activity": "Berangkat menuju Nusa Penida"}, {"time": "10:00", "activity": "Snorkeling di Manta Bay"}, {"time": "11:30", "activity": "Snorkeling di Crystal Bay"}, {"time": "12:30", "activity": "Makan siang di atas kapal"}, {"time": "13:30", "activity": "Free time & swimming"}, {"time": "15:00", "activity": "Kembali ke Sanur"}, {"time": "16:30", "activity": "Tiba di Sanur Harbor"}, {"time": "17:00", "activity": "Transfer kembali ke hotel"}]',
  '["Private yacht untuk group Anda", "Peralatan snorkeling lengkap", "Makan siang & snack di kapal", "Air mineral, soft drink, & kopi/teh", "Life jacket & peralatan safety", "Handuk", "Guide snorkeling profesional", "Dokumentasi underwater (by request)", "Pickup & drop-off hotel (area Kuta/Seminyak/Sanur/Ubud)"]',
  '["Tiket masuk kawasan konservasi (Rp 25.000/orang)", "Tips untuk crew", "Pengeluaran pribadi", "Asuransi perjalanan"]',
  '["Sundeck dengan cushion", "Sound system & music", "Kabin berteduh", "Toilet", "Freshwater shower", "Cooler box", "First aid kit"]',
  '["Jadwal dapat berubah tergantung kondisi cuaca dan laut", "Tidak disarankan untuk ibu hamil dan anak di bawah 5 tahun", "Peserta wajib bisa berenang untuk aktivitas snorkeling", "Bawa sunscreen, topi, dan kacamata hitam", "Tersedia life jacket untuk semua peserta"]',
  1
),
(
  'ubud-adventure-day-trip',
  'Ubud Adventure Day Trip',
  'adventure',
  'Ubud, Bali',
  1200000,
  'per person',
  20,
  'Petualangan seru di Ubud! Kunjungi Monkey Forest, Jungle Swing, ATV ride melalui sawah, art gallery, dan rafting di Sungai Ayung.',
  'Nikmati petualangan seharian di Ubud, jantung budaya dan alam Bali. Perjalanan dimulai dengan mengunjungi Sacred Monkey Forest Sanctuary, dilanjutkan dengan pengalaman seru di Jungle Swing dengan pemandangan lembah yang spektakuler. Rasakan adrenalin dengan ATV ride melintasi persawahan dan hutan. Setelah makan siang, kunjungi art gallery lokal dan akhiri hari dengan rafting menantang di Sungai Ayung. Paket ini sempurna untuk pencinta alam dan petualangan.',
  '/images/ubud-hero.jpg',
  '["/images/ubud-1.jpg", "/images/ubud-2.jpg", "/images/ubud-3.jpg", "/images/ubud-4.jpg"]',
  '[{"name": "Sacred Monkey Forest", "description": "Hutan sakral dengan ratusan monyet dan pura kuno"}, {"name": "Tegallalang Rice Terrace", "description": "Sawah terasering ikonik dengan pemandangan spektakuler"}, {"name": "Jungle Swing", "description": "Ayunan di atas lembah hijau dengan view yang menakjubkan"}, {"name": "Sungai Ayung", "description": "Rafting seru di sungai terpanjang di Bali"}]',
  '[{"time": "07:30", "activity": "Pickup dari hotel"}, {"time": "09:00", "activity": "Kunjungan Sacred Monkey Forest"}, {"time": "10:30", "activity": "Tegallalang Rice Terrace & foto"}, {"time": "11:30", "activity": "Jungle Swing experience"}, {"time": "12:30", "activity": "Makan siang di restoran lokal"}, {"time": "13:30", "activity": "ATV ride melalui sawah & hutan"}, {"time": "15:00", "activity": "Kunjungan Art Gallery"}, {"time": "15:45", "activity": "Persiapan rafting"}, {"time": "16:00", "activity": "Rafting di Sungai Ayung"}, {"time": "17:30", "activity": "Selesai & transfer kembali ke hotel"}]',
  '["Transport AC dari/ke hotel", "Tiket masuk Monkey Forest", "Jungle Swing (1x ride)", "ATV ride (1 jam)", "Rafting termasuk peralatan & guide", "Makan siang Indonesian buffet", "Air mineral sepanjang hari", "Guide berbahasa Indonesia/Inggris", "Asuransi aktivitas"]',
  '["Tiket masuk Tegallalang Rice Terrace (Rp 15.000/orang)", "Tips untuk guide & driver", "Pengeluaran pribadi", "Oleh-oleh dan belanja"]',
  '["Kendaraan AC dengan driver berpengalaman", "Peralatan ATV lengkap (helm & sepatu boot)", "Peralatan rafting standar internasional", "Locker & ruang ganti di rafting point"]',
  '["Aktivitas fisik cukup intens, pastikan kondisi kesehatan baik", "Gunakan pakaian & alas kaki yang nyaman", "Bawa baju ganti untuk setelah rafting", "Bawa sunscreen dan topi", "Tidak disarankan untuk anak di bawah 7 tahun (ATV & rafting)"]',
  2
),
(
  'nusa-penida-island-tour',
  'Nusa Penida Island Tour',
  'island',
  'Nusa Penida, Bali',
  850000,
  'per person',
  10,
  'Full day tour ke spot-spot ikonik Nusa Penida: Kelingking Beach, Angel''s Billabong, Broken Beach, dan Crystal Bay.',
  'Jelajahi keajaiban alam Nusa Penida dalam satu hari penuh! Pulau ini menyimpan pemandangan alam yang luar biasa dan masih sangat alami. Kunjungi Kelingking Beach dengan tebing ikoniknya berbentuk T-Rex, Angel''s Billabong yang merupakan infinity pool alami, Broken Beach dengan jembatan batu alam yang menakjubkan, dan Crystal Bay untuk berenang dan bersantai. Perjalanan menyeberang menggunakan speedboat cepat dari Sanur.',
  '/images/nusa-penida-hero.jpg',
  '["/images/nusa-penida-1.jpg", "/images/nusa-penida-2.jpg", "/images/nusa-penida-3.jpg"]',
  '[{"name": "Kelingking Beach", "description": "Pantai ikonik dengan tebing berbentuk T-Rex dan air turquoise"}, {"name": "Angel''s Billabong", "description": "Kolam infinity alami di tepi tebing dengan air jernih"}, {"name": "Broken Beach", "description": "Lengkungan batu alam dengan laguna biru kehijauan"}, {"name": "Crystal Bay", "description": "Pantai pasir putih sempurna untuk berenang dan snorkeling"}]',
  '[{"time": "06:30", "activity": "Pickup dari hotel"}, {"time": "07:30", "activity": "Tiba di Sanur Harbor, check-in"}, {"time": "08:00", "activity": "Berangkat ke Nusa Penida via speedboat"}, {"time": "08:45", "activity": "Tiba di Nusa Penida"}, {"time": "09:15", "activity": "Kelingking Beach viewpoint & trekking"}, {"time": "11:00", "activity": "Angel''s Billabong"}, {"time": "11:45", "activity": "Broken Beach"}, {"time": "12:30", "activity": "Makan siang di restoran lokal"}, {"time": "13:30", "activity": "Crystal Bay – berenang & bersantai"}, {"time": "15:30", "activity": "Kembali ke pelabuhan"}, {"time": "16:00", "activity": "Speedboat kembali ke Sanur"}, {"time": "16:45", "activity": "Tiba di Sanur, transfer ke hotel"}]',
  '["Return speedboat Sanur - Nusa Penida", "Transport lokal di Nusa Penida (mobil AC)", "Driver & guide lokal", "Makan siang", "Air mineral", "Tiket masuk semua destinasi", "Asuransi penyeberangan"]',
  '["Tips untuk guide & driver", "Pengeluaran pribadi", "Snorkeling equipment (bisa sewa di Crystal Bay)", "Oleh-oleh"]',
  '["Speedboat cepat dengan safety equipment", "Mobil AC di Nusa Penida"]',
  '["Trekking ke Kelingking Beach cukup menantang, gunakan sepatu yang nyaman", "Bawa sunscreen dan topi", "Kondisi laut bisa berubah, jadwal speedboat fleksibel", "Tidak disarankan untuk yang takut ketinggian (Kelingking viewpoint)", "Bawa baju renang dan baju ganti"]',
  3
);
