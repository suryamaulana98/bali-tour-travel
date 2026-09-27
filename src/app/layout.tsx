import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  title: {
    default: "M8 Travel | Private Yacht & Tour Bali",
    template: "%s | M8 Travel Bali",
  },
  description:
    "Jelajahi keindahan Bali bersama M8 Travel. Private yacht, snorkeling Nusa Penida, dan tour eksklusif dengan pelayanan premium & personal.",
  keywords: [
    "tour bali",
    "private yacht bali",
    "wisata bali",
    "nusa penida private tour",
    "ubud private tour",
    "snorkeling manta bay",
    "sewa yacht bali",
    "luxury bali travel",
  ],
  authors: [{ name: "M8 Travel Bali" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "M8 Travel Bali",
    title: "M8 Travel | Private Yacht & Tour Bali",
    description:
      "Jelajahi keindahan Bali bersama M8 Travel. Private yacht, snorkeling Nusa Penida, dan tour eksklusif dengan pelayanan premium.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M8 Travel Bali - Luxury Private Tour",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} scroll-smooth scroll-pt-20`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden font-sans bg-[#F8F7F3] text-[#0B1F2A] antialiased selection:bg-[#E6A72C]/20 selection:text-[#0B1F2A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
