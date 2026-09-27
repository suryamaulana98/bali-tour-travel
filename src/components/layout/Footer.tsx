import Link from "next/link";
import { getWhatsAppContactLink } from "@/lib/whatsapp";

const FOOTER_LINKS = {
  tours: [
    { href: "/packages", label: "Semua Paket" },
    {
      href: "/packages/private-yacht-nusa-penida",
      label: "Private Yacht Nusa Penida",
    },
    {
      href: "/packages/ubud-adventure-day-trip",
      label: "Ubud Adventure Day Trip",
    },
    {
      href: "/packages/nusa-penida-island-tour",
      label: "Nusa Penida Island Tour",
    },
  ],
  company: [
    { href: "/about", label: "Tentang Kami" },
    { href: "/contact", label: "Kontak" },
    { href: "/privacy-policy", label: "Kebijakan Privasi" },
    { href: "/terms", label: "Syarat & Ketentuan" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1F2A] text-white border-t border-[#163649]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Kolom 1: M8 Travel (Spans 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-md bg-[#163649] border border-[#E6A72C]/40 flex items-center justify-center">
                <span className="font-serif font-bold text-sm text-[#E6A72C]">
                  M8
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-tight leading-none text-white">
                  M8 Travel
                </span>
                <span className="text-[9px] tracking-[0.16em] font-medium uppercase text-slate-400 mt-1 leading-none">
                  PRIVATE YACHT & TOUR BALI
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Spesialis liburan private yacht dan tur eksklusif di Bali.
              Menghadirkan pengalaman berlayar tak tertandingi dengan standar
              privasi tinggi.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppContactLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#E6A72C] hover:text-[#CF921F] font-medium transition-colors"
              >
                <span>Konsultasi Cepat via WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Kolom 2: Paket (Spans 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Paket Tour
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.tours.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Perusahaan (Spans 2) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Perusahaan
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak (Spans 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Kontak
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <span className="text-[#087F8C]">Lokasi:</span>
                <span>Sanur & Benoa Harbor, Denpasar, Bali, Indonesia</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#087F8C]">WhatsApp:</span>
                <a
                  href="https://wa.me/628873046610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  +62 887 3046 610
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#087F8C]">Email:</span>
                <a
                  href="mailto:info@m8travel.com"
                  className="hover:text-white transition-colors font-mono"
                >
                  info@m8travel.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-5 border-t border-[#163649] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} M8 Travel Bali. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
