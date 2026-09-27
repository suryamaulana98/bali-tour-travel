import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookingTicket from "@/components/booking/BookingTicket";

type Props = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  return {
    title: `Status Booking #${code}`,
    description: `Cek status pemesanan tour Bali dengan kode ${code}.`,
  };
}

async function getBooking(code: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/booking?code=${code}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success) return data.booking;
    }
  } catch (e) {
    console.error("Fetch booking status error:", e);
  }
  return null;
}

export default async function BookingStatusPage({ params }: Props) {
  const { code } = await params;
  const booking = await getBooking(code);

  if (!booking) {
    notFound();
  }

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-2">
            Status Pemesanan
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B1F2A]">
            Detail Booking #{booking.booking_code}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B]">
            Informasi terkini mengenai status reservasi paket tour Anda.
          </p>
        </div>

        <BookingTicket booking={booking} />
      </div>
    </div>
  );
}
