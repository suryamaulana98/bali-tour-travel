'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Paket Tour' },
  { href: '/about', label: 'Tentang Kami' },
  { href: '/contact', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 text-gray-900'
    : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white';

  const linkTextColor = scrolled || !isHome
    ? 'text-gray-700 hover:text-[#0C7B93] hover:bg-slate-50'
    : 'text-white/90 hover:text-white hover:bg-white/10';

  const activeLinkColor = scrolled || !isHome
    ? 'text-[#0C7B93] font-bold bg-cyan-50'
    : 'text-[#E8A838] font-bold bg-white/15';

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform hover:scale-102"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0C7B93] to-[#095E72] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl font-serif">M8</span>
            </div>
            <div>
              <span className="font-extrabold text-xl leading-tight block tracking-tight">M8 Travel</span>
              <span className={`text-[11px] font-medium leading-tight block tracking-wide uppercase ${scrolled || !isHome ? 'text-gray-500' : 'text-gray-300'}`}>
                Private Yacht & Tour Bali
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Generous Gap */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm transition-all duration-200 ${
                    isActive ? activeLinkColor : linkTextColor
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Prominent Booking CTA Button */}
            <Link
              href="/packages"
              className="ml-4 px-6 py-2.5 rounded-full bg-[#E8A838] hover:bg-[#CC8E1E] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Booking Sekarang
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled || !isHome ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-900 border-t border-gray-100 shadow-2xl animate-slide-down">
          <div className="px-5 py-4 space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive ? 'bg-cyan-50 text-[#0C7B93]' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/packages"
              className="block mt-4 px-5 py-3.5 bg-[#E8A838] hover:bg-[#CC8E1E] text-white rounded-xl text-center font-bold text-base shadow-md"
            >
              Booking Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
