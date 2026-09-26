'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import StatusBadge from '@/components/ui/StatusBadge';
import { Booking } from '@/types';
import { formatPrice, formatDate, getBaseUrl } from '@/lib/utils';
import { buildWhatsAppLink } from '@/lib/whatsapp';

interface BookingTicketProps {
  booking: Booking;
}

export default function BookingTicket({ booking }: BookingTicketProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  const statusUrl = `${getBaseUrl()}/status/${booking.booking_code}`;

  useEffect(() => {
    QRCode.toDataURL(statusUrl, { margin: 1, width: 160 })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error('Failed to generate QR code', err));
  }, [statusUrl]);

  const waLink = buildWhatsAppLink({
    booking_code: booking.booking_code,
    customer_name: booking.customer_name,
    phone: booking.phone,
    package_name: booking.package_name,
    tour_date: booking.tour_date,
    guest_count: booking.guest_count,
    pickup_location: booking.pickup_location || '',
    notes: booking.notes || '',
    booking_url: statusUrl,
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Action Bar (Hidden when printing) */}
      <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
        <div className="text-xs text-gray-500">
          Status: <strong className="text-gray-900">{booking.booking_code}</strong>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Cetak / PDF
          </button>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hubungi WhatsApp
          </a>
        </div>
      </div>

      {/* Ticket Card Container */}
      <div className="print-ticket bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden relative">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-primary-dark to-primary p-6 sm:p-8 text-white relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center font-serif font-bold text-lg text-accent-light">
                M8
              </div>
              <div>
                <h2 className="font-bold text-lg leading-tight">M8 Private Yacht Bali</h2>
                <span className="text-xs text-white/70">Booking Ticket Request</span>
              </div>
            </div>

            <StatusBadge status={booking.status} size="sm" />
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-end justify-between">
            <div>
              <span className="text-xs text-white/60 block">KODE BOOKING</span>
              <span className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-accent-light">
                {booking.booking_code}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-white/60 block">TANGGAL PEMESANAN</span>
              <span className="text-xs font-mono">{formatDate(booking.created_at)}</span>
            </div>
          </div>
        </div>

        {/* Ticket Details Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Warning Banner for Pending */}
          {booking.status === 'pending' && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong>Perhatian:</strong> Permintaan booking ini masih dalam status <strong>MENUNGGU KONFIRMASI</strong> dari pihak travel. Silakan tekan tombol "Hubungi WhatsApp" untuk melakukan konfirmasi ketersediaan dengan tim kami.
              </div>
            </div>
          )}

          {/* Details Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Nama Pemesan</span>
              <span className="font-bold text-gray-900">{booking.customer_name}</span>
            </div>

            <div>
              <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">No. WhatsApp / HP</span>
              <span className="font-mono text-gray-800">{booking.phone}</span>
            </div>

            <div>
              <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Paket Tour</span>
              <span className="font-bold text-primary">{booking.package_name}</span>
            </div>

            <div>
              <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Tanggal Tour</span>
              <span className="font-bold text-gray-900">{formatDate(booking.tour_date)}</span>
            </div>

            <div>
              <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Jumlah Peserta</span>
              <span className="font-semibold text-gray-800">{booking.guest_count} Orang</span>
            </div>

            <div>
              <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Estimasi Total Harga</span>
              <span className="font-bold text-lg text-primary">{formatPrice(booking.package_price)}</span>
            </div>
          </div>

          {/* Pickup & Notes */}
          <div className="pt-4 border-t border-gray-100 space-y-3 text-sm">
            <div>
              <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Lokasi Pickup</span>
              <span className="text-gray-700">{booking.pickup_location || '-'}</span>
            </div>

            {booking.notes && (
              <div>
                <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Catatan Khusus</span>
                <span className="text-gray-700 italic">{booking.notes}</span>
              </div>
            )}
          </div>

          {/* QR Code & Link Section */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {qrCodeUrl ? (
                <img src={qrCodeUrl} alt="Booking QR Code" className="w-24 h-24 rounded-lg border border-gray-200" />
              ) : (
                <div className="w-24 h-24 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                  QR Code
                </div>
              )}
              <div className="text-xs text-gray-500">
                <p className="font-semibold text-gray-900">Scan QR Code</p>
                <p>Untuk melihat status booking terbaru secara online.</p>
              </div>
            </div>

            <div className="text-right text-xs text-gray-400">
              <p>M8 Private Yacht & Tour Bali</p>
              <p>+62 887-3046-610</p>
              <p className="font-mono text-[10px] mt-1 text-gray-300">ID: {booking.id}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
