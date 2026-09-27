# Bali Tour Travel

Website travel untuk promosi paket wisata Bali, private yacht, dan sistem booking sederhana berbasis Next.js. Project ini dibuat untuk menampilkan katalog paket, halaman detail, formulir reservasi, serta alur status booking yang bisa dipakai untuk demo.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database / Backend service:** Supabase
- **Lainnya:** QR code generation, ESLint

## Fitur Utama

- Homepage dengan hero section, paket unggulan, destinasi, testimoni, dan CTA WhatsApp
- Halaman daftar paket wisata
- Halaman detail paket dengan itinerary, fasilitas, dan informasi penting
- Form booking dengan validasi data di server
- Endpoint API booking untuk menyimpan data reservasi
- Halaman success dan status booking
- Fallback demo lokal: jika Supabase belum dikonfigurasi, booking tetap bisa berjalan memakai memory store sementara

## Struktur Halaman

- `/` -> homepage
- `/packages` -> katalog paket wisata
- `/packages/[slug]` -> detail paket
- `/booking/[slug]` -> formulir booking
- `/booking/success/[code]` -> halaman sukses booking
- `/status/[code]` -> cek status booking
- `/about` -> halaman about
- `/contact` -> halaman contact
- `/privacy-policy` -> kebijakan privasi
- `/terms` -> syarat dan ketentuan

## Alur Aplikasi

1. User membuka homepage.
2. User melihat daftar paket dan memilih salah satu paket.
3. User masuk ke halaman detail paket untuk membaca deskripsi, destinasi, itinerary, dan fasilitas.
4. User klik booking lalu mengisi formulir reservasi.
5. Data dikirim ke endpoint `/api/booking` untuk divalidasi.
6. Jika Supabase aktif, data disimpan ke database.
7. Jika Supabase belum aktif, project memakai fallback memory store agar demo tetap bisa berjalan.
8. Setelah sukses, user diarahkan ke halaman booking success dan mendapatkan booking code.

## Cara Menjalankan Project

### 1. Install dependency

```bash
npm install
```

### 2. Siapkan environment variable

Buat file `.env.local` di root project lalu isi variabel berikut jika ingin memakai Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

Kalau variabel Supabase belum diisi, project tetap bisa dijalankan untuk demo. Booking akan disimpan sementara di memory selama server hidup.

### 3. Jalankan development server

```bash
npm run dev
```

Lalu buka:

```bash
http://localhost:3000
```

### 4. Build untuk production

```bash
npm run build
npm run start
```

### 5. Lint project

```bash
npm run lint
```

## Setup Supabase

Jika ingin booking tersimpan permanen, jalankan schema database dari folder `supabase/` ke project Supabase Anda, lalu pastikan environment variable di atas sudah terisi.

## Folder Penting

- `src/app/` -> halaman dan route utama Next.js
- `src/components/` -> komponen UI
- `src/data/` -> data paket dan seed data
- `src/lib/` -> helper, validasi, utilitas booking, dan koneksi Supabase
- `src/app/api/booking/route.ts` -> endpoint booking
- `supabase/schema.sql` -> skema database Supabase

## Catatan Demo

- Project ini cocok untuk demo website travel dan flow booking end-to-end.
- Jika Supabase belum disiapkan, demo tetap bisa dijalankan tanpa database.
- Booking code dibuat otomatis agar user bisa lanjut ke halaman success/status.

## License

Project ini digunakan untuk kebutuhan demo dan pengembangan internal.
