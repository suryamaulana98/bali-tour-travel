"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Paket Tour" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isSolid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs"
          : "bg-gradient-to-b from-[#0B1F2A]/80 via-[#0B1F2A]/30 to-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-md bg-[#0B1F2A] border border-[#E6A72C]/50 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              <span className="font-serif font-bold text-sm text-[#E6A72C]">
                M8
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-base font-bold tracking-tight leading-none transition-colors ${
                  isSolid ? "text-[#0B1F2A]" : "text-white"
                }`}
              >
                M8 Travel
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.16em] font-medium uppercase mt-0.5 leading-none ${
                  isSolid ? "text-[#64748B]" : "text-white/70"
                }`}
              >
                PRIVATE YACHT & TOUR BALI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide font-medium transition-colors duration-200 relative py-1 ${
                    isSolid
                      ? isActive
                        ? "text-[#087F8C] font-semibold"
                        : "text-[#0B1F2A]/80 hover:text-[#087F8C]"
                      : isActive
                        ? "text-[#E6A72C] font-semibold"
                        : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        isSolid ? "bg-[#087F8C]" : "bg-[#E6A72C]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="/packages"
              className="inline-flex items-center justify-center min-h-11 px-5 py-3 rounded-full bg-[#E6A72C] hover:bg-[#CF921F] text-[#0B1F2A] text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              Booking Sekarang
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#087F8C] ${
              isSolid
                ? "text-[#0B1F2A] hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Buka menu navigasi"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] shadow-lg animate-fade-subtle">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#E6F4F5] text-[#087F8C] font-semibold"
                      : "text-[#0B1F2A] hover:bg-[#F8F7F3]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#E5E7EB]">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center w-full min-h-12 px-6 py-3 text-center rounded-full bg-[#E6A72C] hover:bg-[#CF921F] text-[#0B1F2A] text-sm font-semibold uppercase tracking-wider shadow-xs"
              >
                Booking Sekarang
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
