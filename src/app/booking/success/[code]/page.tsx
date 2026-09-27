import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookingTicket from "@/components/booking/BookingTicket";

type Props = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  return {
    title: `Bukti Booking - ${code}`,
    description: `Bukti pemesanan tour Bali dengan kode booking ${code}.`,
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
    console.error("Fetch booking error:", e);
  }
  return null;
}

export default async function BookingSuccessPage({ params }: Props) {
  const { code } = await params;
  const booking = await getBooking(code);

  if (!booking) {
    notFound();
  }

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#087F8C] block mb-1">
            Pengajuan Berhasil Terkirim
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F2A]">
            Bukti Reservasi Tour Anda
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Terima kasih! Permintaan booking Anda telah tersimpan dengan status{" "}
            <strong>PENDING</strong>. Silakan tekan tombol{" "}
            <strong>Konfirmasi WhatsApp</strong> di bawah untuk finalisasi
            bersama tim kami.
          </p>
        </div>

        <BookingTicket booking={booking} />
      </div>
    </div>
  );
}
