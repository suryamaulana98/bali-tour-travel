"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Package } from "@/types";
import { getMinBookingDate, formatPrice } from "@/lib/utils";
import { DEFAULT_IMAGES } from "@/data/packages";

interface BookingFormProps {
  packageData: Package;
}

export default function BookingForm({ packageData }: BookingFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  const [formData, setFormData] = useState({
    customer_name: "",
    phone: "",
    email: "",
    tour_date: getMinBookingDate(),
    guest_count: 1,
    pickup_location: "",
    notes: "",
    agreePrivacy: true,
  });

  const heroImg = packageData.hero_image?.startsWith("http")
    ? packageData.hero_image
    : DEFAULT_IMAGES[packageData.slug] || DEFAULT_IMAGES["default"];

  // Calculate estimated total price
  const estimatedTotal =
    packageData.price_type === "per person"
      ? packageData.price * (formData.guest_count || 1)
      : packageData.price;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
    setServerError("");

    if (!formData.agreePrivacy) {
      setErrors((prev) => ({
        ...prev,
        agreePrivacy: "Anda harus menyetujui Kebijakan Privasi",
      }));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          setServerError(
            resData.error || "Gagal mengirim booking. Silakan coba lagi.",
          );
        }
        setLoading(false);
        return;
      }

      router.push(`/booking/success/${resData.booking_code}`);
    } catch (err) {
      console.error(err);
      setServerError(
        "Terjadi kesalahan jaringan. Silakan periksa koneksi internet Anda.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* FORM SECTION (lg:col-span-7) */}
      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 sm:p-8 lg:p-10 rounded-xl border border-[#E5E7EB] space-y-10"
        >
          {serverError && (
            <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm">
              {serverError}
            </div>
          )}

          {/* Section 1: DATA PEMESAN */}
          <div>
            <div className="border-b border-[#E5E7EB] pb-4 mb-8">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#087F8C] block mb-1">
                Langkah 1
              </span>
              <h2 className="text-lg font-serif font-bold text-[#0B1F2A]">
                DATA PEMESAN
              </h2>
              <p className="text-xs text-[#64748B] mt-0.5">
                Data kontak perwakilan untuk konfirmasi dan update perjalanan.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {/* Nama */}
              <div>
                <label
                  htmlFor="customer_name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F2A] mb-2"
                >
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="customer_name"
                  name="customer_name"
                  required
                  value={formData.customer_name}
                  onChange={handleChange}
                  placeholder="Contoh: Budi Pratama"
                  className={`w-full min-h-12 px-4 py-3 rounded-lg border text-sm text-[#0B1F2A] placeholder:text-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-colors ${
                    errors.customer_name
                      ? "border-rose-400 bg-rose-50/30"
                      : "border-[#E5E7EB] bg-white"
                  }`}
                />
                {errors.customer_name && (
                  <p className="text-xs text-rose-600 mt-1">
                    {errors.customer_name}
                  </p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F2A] mb-2"
                >
                  Nomor WhatsApp <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 08123456789 atau +628123456789"
                  className={`w-full min-h-12 px-4 py-3 rounded-lg border text-sm text-[#0B1F2A] placeholder:text-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-colors ${
                    errors.phone
                      ? "border-rose-400 bg-rose-50/30"
                      : "border-[#E5E7EB] bg-white"
                  }`}
                />
                <p className="text-[11px] text-[#64748B] mt-1.5">
                  Digunakan untuk pengiriman konfirmasi ketersediaan & tiket
                  booking.
                </p>
                {errors.phone && (
                  <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F2A] mb-2"
                >
                  Alamat Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Contoh: budi@gmail.com"
                  className={`w-full min-h-12 px-4 py-3 rounded-lg border text-sm text-[#0B1F2A] placeholder:text-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-colors ${
                    errors.email
                      ? "border-rose-400 bg-rose-50/30"
                      : "border-[#E5E7EB] bg-white"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: DETAIL PERJALANAN */}
          <div>
            <div className="border-b border-[#E5E7EB] pb-4 mb-8">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#087F8C] block mb-1">
                Langkah 2
              </span>
              <h2 className="text-lg font-serif font-bold text-[#0B1F2A]">
                DETAIL PERJALANAN
              </h2>
              <p className="text-xs text-[#64748B] mt-0.5">
                Rencana tanggal, jumlah peserta rombongan, dan detail
                penjemputan.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {/* Tanggal & Jumlah Peserta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Tanggal */}
                <div>
                  <label
                    htmlFor="tour_date"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F2A] mb-2"
                  >
                    Tanggal Tour <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="tour_date"
                    name="tour_date"
                    required
                    min={getMinBookingDate()}
                    value={formData.tour_date}
                    onChange={handleChange}
                    className={`w-full min-h-12 px-4 py-3 rounded-lg border text-sm text-[#0B1F2A] focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-colors ${
                      errors.tour_date
                        ? "border-rose-400 bg-rose-50/30"
                        : "border-[#E5E7EB] bg-white"
                    }`}
                  />
                  {errors.tour_date && (
                    <p className="text-xs text-rose-600 mt-1">
                      {errors.tour_date}
                    </p>
                  )}
                </div>

                {/* Jumlah Peserta */}
                <div>
                  <label
                    htmlFor="guest_count"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F2A] mb-2"
                  >
                    Jumlah Peserta <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="guest_count"
                    name="guest_count"
                    required
                    min={1}
                    max={packageData.max_guests || 50}
                    value={formData.guest_count}
                    onChange={handleChange}
                    className={`w-full min-h-12 px-4 py-3 rounded-lg border text-sm text-[#0B1F2A] focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-colors ${
                      errors.guest_count
                        ? "border-rose-400 bg-rose-50/30"
                        : "border-[#E5E7EB] bg-white"
                    }`}
                  />
                  <p className="text-[11px] text-[#64748B] mt-1.5">
                    {packageData.max_guests
                      ? `Maks. ${packageData.max_guests} orang`
                      : "Kapasitas fleksibel"}
                  </p>
                  {errors.guest_count && (
                    <p className="text-xs text-rose-600 mt-1">
                      {errors.guest_count}
                    </p>
                  )}
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label
                  htmlFor="pickup_location"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F2A] mb-2"
                >
                  Lokasi / Hotel Penjemputan
                </label>
                <input
                  type="text"
                  id="pickup_location"
                  name="pickup_location"
                  value={formData.pickup_location}
                  onChange={handleChange}
                  placeholder="Contoh: The Mulia Nusa Dua, atau Bertemu di Pelabuhan Sanur"
                  className="w-full min-h-12 px-4 py-3 rounded-lg border border-[#E5E7EB] text-sm text-[#0B1F2A] placeholder:text-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-colors"
                />
                <p className="text-[11px] text-[#64748B] mt-1.5">
                  Bisa dikonfirmasi ulang via WhatsApp mendekati hari
                  keberangkatan.
                </p>
              </div>

              {/* Catatan Khusus */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F2A] mb-2"
                >
                  Catatan Khusus
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Contoh: Ada anak kecil 4 tahun, permintaan menu vegetarian, dsb."
                  className="w-full min-h-[120px] px-4 py-3 rounded-lg border border-[#E5E7EB] text-sm text-[#0B1F2A] placeholder:text-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#087F8C] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Privacy Checkbox */}
          <div className="pt-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreePrivacy"
                checked={formData.agreePrivacy}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-[#E5E7EB] text-[#087F8C] focus:ring-[#087F8C]"
              />
              <span className="text-xs text-[#64748B] leading-relaxed">
                Saya menyetujui bahwa data yang dimasukkan akan digunakan untuk
                keperluan konfirmasi reservasi dan penerbitan bukti pemesanan
                tour oleh tim M8 Travel.
              </span>
            </label>
            {errors.agreePrivacy && (
              <p className="text-xs text-rose-600 mt-1 pl-7">
                {errors.agreePrivacy}
              </p>
            )}
          </div>

          {/* CTA Utama */}
          <div className="pt-6 sm:pt-7">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center w-full min-h-12 px-6 py-3 rounded-lg bg-[#E6A72C] hover:bg-[#CF921F] disabled:opacity-50 text-[#0B1F2A] font-semibold text-sm uppercase tracking-wider shadow-xs hover:shadow transition-all duration-200 cursor-pointer disabled:cursor-not-allowed text-center"
            >
              {loading ? "Memproses Reservasi..." : "Ajukan Booking"}
            </button>
            <p className="text-center text-xs text-[#64748B] mt-3">
              Status awal: <strong>PENDING</strong> (Menunggu konfirmasi
              ketersediaan dari pihak travel via WhatsApp).
            </p>
          </div>
        </form>
      </div>

      {/* RIGHT COLUMN: Package Summary Card (lg:col-span-5) */}
      <aside className="lg:col-span-5 sticky top-28 space-y-6">
        <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-xs">
          {/* Package Image */}
          <div className="relative h-48 w-full bg-slate-100">
            <Image
              src={heroImg}
              alt={packageData.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="text-[10px] text-[#E6A72C] uppercase tracking-wider font-semibold block">
                {packageData.location}, Bali
              </span>
              <h3 className="text-lg font-serif font-bold leading-tight">
                {packageData.name}
              </h3>
            </div>
          </div>

          {/* Breakdown Body */}
          <div className="p-6 sm:p-7 lg:p-7 space-y-6">
            <div className="space-y-4 text-xs text-[#64748B]">
              <div className="flex justify-between items-center">
                <span>Tarif Dasar:</span>
                <span className="font-semibold text-[#0B1F2A]">
                  {formatPrice(packageData.price)} /{packageData.price_type}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Jumlah Peserta:</span>
                <span className="font-semibold text-[#0B1F2A]">
                  {formData.guest_count} Orang
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Status Reservasi:</span>
                <span className="text-[#087F8C] bg-[#E6F4F5] px-2 py-0.5 rounded-full font-medium text-[11px]">
                  Menunggu Konfirmasi
                </span>
              </div>
            </div>

            {/* Total Estimated Price */}
            <div className="pt-5 border-t border-[#E5E7EB] flex items-baseline justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#64748B] block font-medium">
                  Estimasi Total
                </span>
                <span className="text-xs text-[#64748B]">(Belum ditagih)</span>
              </div>
              <span className="text-2xl font-serif font-bold text-[#0B1F2A]">
                {formatPrice(estimatedTotal)}
              </span>
            </div>

            {/* Reassurance Info */}
            <div className="pt-5 border-t border-[#E5E7EB] space-y-3 text-[11px] text-[#64748B]">
              <p className="flex items-start gap-2">
                <span className="text-[#087F8C] font-bold">✓</span>
                <span>Tidak ada pembayaran saat submit form ini.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#087F8C] font-bold">✓</span>
                <span>Kode booking unik akan diterbitkan otomatis.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#087F8C] font-bold">✓</span>
                <span>
                  Konfirmasi jadwal & ketersediaan armada via WhatsApp.
                </span>
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
