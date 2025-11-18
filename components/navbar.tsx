'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/drivers', label: 'Drivers' },
  { href: '/races', label: 'Races' },
  { href: '/team', label: 'Team' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled ? 'bg-background/90 border-border/20 backdrop-blur-md' : 'bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-4">
   <div className="flex h-16 items-center justify-between">
  
  {/* LEFT SECTION: Logo + Menu */}
  <div className="flex items-center gap-10">
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2">
      <Image src="/RBR.svg" alt="Red Bull Racing" width={140} height={500} />
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'px-4 py-2 rounded-md text-sm font-medium transition-all relative group',
            pathname === link.href
              ? 'text-rb-white'
              : 'text-foreground hover:text-rb-white'
          )}
        >
          {link.label}

          {pathname === link.href && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rb-red" />
          )}
        </Link>
      ))}
    </div>
  </div>

  {/* RIGHT SECTION: Mobile Button */}
  <Button
    variant="ghost"
    size="icon"
    className="md:hidden"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
  </Button>

</div>

 
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 border-t border-border/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-md text-sm font-medium transition-all',
                  pathname === link.href
                    ? 'bg-rb-yellow/10 text-rb-yellow border border-rb-yellow/20'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
