import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: "M8 Private Yacht & Tour Bali | Wisata Premium di Bali",
    template: "%s | M8 Travel Bali",
  },
  description:
    "Jelajahi keindahan Bali bersama M8 Travel. Private yacht, snorkeling, island tour, dan adventure trip dengan pelayanan premium. Booking mudah via WhatsApp.",
  keywords: [
    "tour bali",
    "private yacht bali",
    "wisata bali",
    "nusa penida tour",
    "ubud tour",
    "snorkeling bali",
    "travel bali",
    "paket wisata bali",
  ],
  authors: [{ name: "M8 Travel Bali" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "M8 Private Yacht & Tour Bali",
    title: "M8 Private Yacht & Tour Bali | Wisata Premium di Bali",
    description:
      "Jelajahi keindahan Bali bersama M8 Travel. Private yacht, snorkeling, island tour, dan adventure trip dengan pelayanan premium.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M8 Private Yacht & Tour Bali",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
