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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md shadow-md'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-text-primary' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-primary' : 'text-white';

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 transition-colors duration-300 ${logoColor}`}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">M8</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg leading-tight block">M8 Travel</span>
              <span className={`text-xs leading-tight block ${scrolled || !isHome ? 'text-text-tertiary' : 'text-white/70'}`}>
                Private Yacht & Tour Bali
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive
                      ? 'bg-primary/10 text-primary'
                      : `${textColor} hover:bg-primary/5 hover:text-primary`
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/packages"
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-dark text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Booking Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${textColor} hover:bg-black/5`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-slide-down bg-white border-t border-border-light shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-primary hover:bg-gray-50'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/packages"
              className="block mt-2 px-4 py-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-xl text-sm font-semibold text-center"
            >
              Booking Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
