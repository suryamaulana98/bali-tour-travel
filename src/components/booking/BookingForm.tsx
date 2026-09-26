'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Package } from '@/types';
import { getMinBookingDate, formatPrice } from '@/lib/utils';

interface BookingFormProps {
  packageData: Package;
}

export default function BookingForm({ packageData }: BookingFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState('');

  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    email: '',
    tour_date: getMinBookingDate(),
    guest_count: 1,
    pickup_location: '',
    notes: '',
    agreePrivacy: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear field error
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    if (!formData.agreePrivacy) {
      setErrors((prev) => ({ ...prev, agreePrivacy: 'Anda harus menyetujui Kebijakan Privasi' }));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          package_id: packageData.id,
          package_slug: packageData.slug,
          customer_name: formData.customer_name,
          phone: formData.phone,
          email: formData.email,
          tour_date: formData.tour_date,
          guest_count: Number(formData.guest_count),
          pickup_location: formData.pickup_location,
          notes: formData.notes,
        }),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        if (resData.errors) {
          setErrors(resData.errors);
        } else {
          setServerError(resData.error || 'Gagal mengirim booking. Silakan coba lagi.');
        }
        setLoading(false);
        return;
      }

      // Success -> Redirect to success page with booking code or token
      router.push(`/booking/success/${resData.booking_code}`);
    } catch (err) {
      console.error(err);
      setServerError('Terjadi kesalahan jaringan. Silakan periksa koneksi Anda.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold font-serif text-gray-900 border-b border-gray-100 pb-4">
        Formulir Pemesanan
      </h2>

      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {serverError}
        </div>
      )}

      {/* Package Summary Box */}
      <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-400 block">Paket Dipilih</span>
          <h3 className="font-bold text-gray-900 text-sm">{packageData.name}</h3>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-400 block">Harga Estimasi</span>
          <span className="font-bold text-primary text-sm">{formatPrice(packageData.price)}</span>
        </div>
      </div>

      {/* Input: Nama Lengkap */}
      <div>
        <label htmlFor="customer_name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
          Nama Lengkap <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="customer_name"
          name="customer_name"
          value={formData.customer_name}
          onChange={handleChange}
          placeholder="Contoh: Budi Santoso"
          required
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
            errors.customer_name
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:border-primary focus:ring-primary/20'
          }`}
        />
        {errors.customer_name && <p className="text-xs text-red-500 mt-1">{errors.customer_name}</p>}
      </div>

      {/* Input Grid: Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
            No. WhatsApp / HP <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="08123456789"
            required
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
              errors.phone
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
            Alamat Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="budi@example.com"
            required
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Input Grid: Tour Date & Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="tour_date" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
            Tanggal Tour <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="tour_date"
            name="tour_date"
            min={getMinBookingDate()}
            value={formData.tour_date}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
              errors.tour_date
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'
            }`}
          />
          {errors.tour_date && <p className="text-xs text-red-500 mt-1">{errors.tour_date}</p>}
        </div>

        <div>
          <label htmlFor="guest_count" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
            Jumlah Peserta <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="guest_count"
            name="guest_count"
            min={1}
            max={packageData.max_guests || 50}
            value={formData.guest_count}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
              errors.guest_count
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'
            }`}
          />
          {errors.guest_count && <p className="text-xs text-red-500 mt-1">{errors.guest_count}</p>}
        </div>
      </div>

      {/* Input: Pickup Location */}
      <div>
        <label htmlFor="pickup_location" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
          Lokasi Pickup / Nama Hotel
        </label>
        <input
          type="text"
          id="pickup_location"
          name="pickup_location"
          value={formData.pickup_location}
          onChange={handleChange}
          placeholder="Contoh: Grand Inna Kuta Hotel, Lobby Utam"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
        />
      </div>

      {/* Input: Notes */}
      <div>
        <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
          Catatan / Permintaan Khusus
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Contoh: Diet vegetarian, butuh car seat anak, dll."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
        />
      </div>

      {/* Privacy Notice Agreement */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="agreePrivacy"
            checked={formData.agreePrivacy}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            Saya menyetujui bahwa informasi kontak dan booking ini akan disimpan untuk pemrosesan tiket dan konfirmasi WhatsApp sesuai dengan{' '}
            <a href="/privacy-policy" target="_blank" className="text-primary underline">
              Kebijakan Privasi
            </a>.
          </span>
        </label>
        {errors.agreePrivacy && <p className="text-xs text-red-500 mt-1">{errors.agreePrivacy}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-bold text-base shadow-lg hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Memproses Booking...
          </>
        ) : (
          <>
            Kirim Pemesanan
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
