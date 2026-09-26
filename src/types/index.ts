// ============================================
// TypeScript Types for M8 Bali Tour Travel
// ============================================

export interface Package {
  id: string;
  slug: string;
  name: string;
  category: string;
  location: string;
  price: number;
  price_type: string;
  max_guests: number | null;
  short_description: string;
  description: string;
  hero_image: string;
  gallery: string[];
  destinations: Destination[];
  itinerary: ItineraryItem[];
  included: string[];
  excluded: string[];
  facilities: string[];
  important_notes: string[];
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Destination {
  name: string;
  description: string;
}

export interface ItineraryItem {
  time: string;
  activity: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  booking_code: string;
  booking_token: string;
  package_id: string;
  package_name: string;
  package_price: number;
  customer_name: string;
  phone: string;
  email: string;
  tour_date: string;
  guest_count: number;
  pickup_location: string | null;
  notes: string | null;
  status: BookingStatus;
  created_at: string;
  updated_at: string;
}

export interface BookingFormData {
  customer_name: string;
  phone: string;
  email: string;
  tour_date: string;
  guest_count: number;
  pickup_location: string;
  notes: string;
}

export interface BookingResponse {
  success: boolean;
  booking_code?: string;
  booking_token?: string;
  error?: string;
  errors?: Record<string, string>;
}

export const STATUS_CONFIG: Record<BookingStatus, { label: string; description: string; color: string; icon: string }> = {
  pending: {
    label: 'Menunggu Konfirmasi',
    description: 'Permintaan booking sudah diterima. Menunggu konfirmasi dari tim travel.',
    color: 'amber',
    icon: '⏳',
  },
  confirmed: {
    label: 'Dikonfirmasi',
    description: 'Booking Anda telah dikonfirmasi. Silakan persiapkan perjalanan Anda!',
    color: 'emerald',
    icon: '✅',
  },
  cancelled: {
    label: 'Dibatalkan',
    description: 'Booking ini telah dibatalkan.',
    color: 'red',
    icon: '❌',
  },
  completed: {
    label: 'Selesai',
    description: 'Booking telah selesai. Terima kasih telah menggunakan layanan kami!',
    color: 'blue',
    icon: '🎉',
  },
};
