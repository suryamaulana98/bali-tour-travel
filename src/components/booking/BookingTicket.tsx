"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import StatusBadge from "@/components/ui/StatusBadge";
import { Booking } from "@/types";
import { formatPrice, formatDate, getBaseUrl } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface BookingTicketProps {
  booking: Booking;
}

export default function BookingTicket({ booking }: BookingTicketProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  const statusUrl = `${getBaseUrl()}/status/${booking.booking_code}`;

  useEffect(() => {
    QRCode.toDataURL(statusUrl, { margin: 1, width: 140 })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error("Failed to generate QR code", err));
  }, [statusUrl]);

  const waLink = buildWhatsAppLink({
    booking_code: booking.booking_code,
    customer_name: booking.customer_name,
    phone: booking.phone,
    package_name: booking.package_name,
    tour_date: booking.tour_date,
    guest_count: booking.guest_count,
    pickup_location: booking.pickup_location || "",
    notes: booking.notes || "",
    booking_url: statusUrl,
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-xl bg-white border border-[#E5E7EB] shadow-xs">
        <div className="text-xs text-[#64748B]">
          Kode Reservasi:{" "}
          <strong className="text-[#0B1F2A] font-mono text-sm">
            {booking.booking_code}
          </strong>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center flex-1 sm:flex-none min-h-11 px-4 py-3 rounded-lg border border-[#E5E7EB] text-[#0B1F2A] text-sm font-semibold hover:bg-[#F8F7F3] transition-colors gap-2 cursor-pointer"
          >
            <svg
              className="w-4 h-4 text-[#64748B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            <span>Cetak / Simpan PDF</span>
          </button>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center flex-1 sm:flex-none min-h-11 px-5 py-3 rounded-lg bg-[#E6A72C] hover:bg-[#CF921F] text-[#0B1F2A] text-sm font-bold tracking-wide transition-all shadow-xs gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Konfirmasi WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Boarding Pass / Travel Voucher Ticket */}
      <div className="print-ticket bg-white rounded-xl border border-[#E5E7EB] shadow-xs overflow-hidden">
        {/* Ticket Top Header — Deep Navy */}
        <div className="bg-[#0B1F2A] p-6 sm:p-8 text-white">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#163649] border border-[#E6A72C]/40 flex items-center justify-center shrink-0">
                <span className="font-serif font-bold text-sm text-[#E6A72C]">
                  M8
                </span>
              </div>
              <div>
                <h2 className="font-serif font-bold text-base leading-tight">
                  M8 Travel Bali
                </h2>
                <span className="text-[10px] tracking-widest uppercase text-slate-300">
                  BUKTI BOOKING / RESERVATION TICKET
                </span>
              </div>
            </div>

            <StatusBadge status={booking.status} size="sm" />
          </div>

          {/* Ticket Booking Code Banner */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-end justify-between">
            <div>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 block font-medium">
                KODE BOOKING
              </span>
              <span className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-[#E6A72C]">
                {booking.booking_code}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] tracking-wider uppercase text-slate-400 block font-medium">
                TANGGAL PENGAJUAN
              </span>
              <span className="text-xs font-mono text-slate-200">
                {formatDate(booking.created_at)}
              </span>
            </div>
          </div>
        </div>

        {/* Status Callout Banner */}
        {booking.status === "pending" && (
          <div className="px-6 py-3.5 bg-amber-50/70 border-b border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
            <svg
              className="w-4 h-4 text-amber-600 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <strong>Menunggu Konfirmasi Travel:</strong> Dokumen ini merupakan
              bukti pengajuan awal. Mohon kirim detail ke WhatsApp untuk
              verifikasi ketersediaan armada dan jadwal resmi.
            </div>
          </div>
        )}

        {/* Ticket Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Passenger & Tour Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#64748B] block font-semibold mb-0.5">
                Nama Pemesan (Customer)
              </span>
              <span className="font-semibold text-[#0B1F2A]">
                {booking.customer_name}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#64748B] block font-semibold mb-0.5">
                Nomor WhatsApp
              </span>
              <span className="font-mono text-[#0B1F2A]">{booking.phone}</span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#64748B] block font-semibold mb-0.5">
                Paket Wisata (Package)
              </span>
              <span className="font-serif font-bold text-[#087F8C]">
                {booking.package_name}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#64748B] block font-semibold mb-0.5">
                Tanggal Perjalanan (Tour Date)
              </span>
              <span className="font-semibold text-[#0B1F2A]">
                {formatDate(booking.tour_date)}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#64748B] block font-semibold mb-0.5">
                Jumlah Peserta (Guest Count)
              </span>
              <span className="text-[#0B1F2A]">
                {booking.guest_count} Orang
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#64748B] block font-semibold mb-0.5">
                Estimasi Total (Estimated Price)
              </span>
              <span className="font-serif font-bold text-base text-[#0B1F2A]">
                {formatPrice(booking.package_price)}
              </span>
            </div>

            <div className="sm:col-span-2">
              <span className="text-[10px] uppercase tracking-wider text-[#64748B] block font-semibold mb-0.5">
                Lokasi Penjemputan (Pickup Location)
              </span>
              <span className="text-[#0B1F2A]">
                {booking.pickup_location || "Dikonfirmasi via WhatsApp"}
              </span>
            </div>

            {booking.notes && (
              <div className="sm:col-span-2">
                <span className="text-[10px] uppercase tracking-wider text-[#64748B] block font-semibold mb-0.5">
                  Catatan Khusus (Notes)
                </span>
                <span className="text-[#64748B] italic text-xs">
                  {booking.notes}
                </span>
              </div>
            )}
          </div>

          {/* QR Code & Verification Footer */}
          <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              {qrCodeUrl ? (
                <img
                  src={qrCodeUrl}
                  alt="QR Code Status Booking"
                  className="w-20 h-20 rounded-md border border-[#E5E7EB]"
                />
              ) : (
                <div className="w-20 h-20 rounded-md bg-[#F8F7F3] border border-[#E5E7EB] flex items-center justify-center text-[10px] text-[#64748B]">
                  QR Code
                </div>
              )}
              <div className="text-xs text-[#64748B]">
                <p className="font-semibold text-[#0B1F2A] mb-0.5">
                  Scan untuk Verifikasi Online
                </p>
                <p className="text-[11px] leading-relaxed">
                  Periksa pembaruan status booking melalui tautan resmi M8
                  Travel.
                </p>
              </div>
            </div>

            <div className="text-right text-[11px] text-[#64748B] space-y-0.5 shrink-0">
              <p className="font-serif font-semibold text-[#0B1F2A]">
                M8 Travel Bali
              </p>
              <p>Hotline: +62 887 3046 610</p>
              <p className="font-mono text-[10px] text-[#64748B]/70">
                ID: {booking.id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
