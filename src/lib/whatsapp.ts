const WHATSAPP_NUMBER = '628873046610';

interface WhatsAppMessageData {
  booking_code: string;
  customer_name: string;
  phone: string;
  package_name: string;
  tour_date: string;
  guest_count: number;
  pickup_location: string;
  notes: string;
  booking_url: string;
}

/**
 * Build a WhatsApp deep link with pre-filled booking message
 */
export function buildWhatsAppLink(data: WhatsAppMessageData): string {
  const message = `Halo M8 Private Yacht Bali,

Saya ingin melakukan booking tour.

Kode Booking: ${data.booking_code}

Nama: ${data.customer_name}
No. WhatsApp: ${data.phone}
Paket: ${data.package_name}
Tanggal: ${formatDate(data.tour_date)}
Jumlah Peserta: ${data.guest_count} orang
Pickup: ${data.pickup_location || '-'}

Catatan:
${data.notes || '-'}

Link Booking:
${data.booking_url}

Mohon informasi terkait ketersediaan dan proses selanjutnya.

Terima kasih.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Build a simple WhatsApp contact link
 */
export function getWhatsAppContactLink(message?: string): string {
  const defaultMessage = 'Halo M8 Private Yacht Bali, saya ingin bertanya tentang paket tour yang tersedia.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || defaultMessage)}`;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
