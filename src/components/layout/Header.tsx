import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { BrandMark } from './BrandMark';
import { Button } from '../shared/Button';
import { siteConfig } from '../../data/siteConfig';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setBusinessDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          setBusinessDropdownOpen((prev) => (prev ? false : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.business-dropdown-container')) {
        setBusinessDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hashTarget: string) => {
    setBusinessDropdownOpen(false);
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const targetId = hashTarget.replace(/^\/?#/, '');
      const element = document.getElementById(targetId);
      if (element && window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -70, duration: 1.2 });
      } else if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'builders':
        return <Building2 className="w-4 h-4 text-gold-400 shrink-0" />;
      case 'software-technologies':
        return <Cpu className="w-4 h-4 text-gold-400 shrink-0" />;
      case 'real-estate':
        return <Layers className="w-4 h-4 text-gold-400 shrink-0" />;
      default:
        return <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />;
    }
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Our Businesses', to: '/#businesses', isDropdown: true },
    { label: 'Our Approach', to: '/#approach' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transform-gpu will-change-transform transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950 shadow-dark-glow border-b border-slate-800/90 py-3.5'
            : 'bg-navy-950 border-b border-slate-800/60 py-4.5 sm:py-5'
        }`}
      >
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Typographic Wordmark & Monogram in Light/Gold */}
            <BrandMark variant="light" size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative business-dropdown-container"
                      onMouseEnter={() => setBusinessDropdownOpen(true)}
                      onMouseLeave={() => setBusinessDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setBusinessDropdownOpen(!businessDropdownOpen);
                        }}
                        aria-expanded={businessDropdownOpen}
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono uppercase tracking-[0.14em] font-medium transition-colors rounded-[2px] focus-visible:outline-gold-500 ${
                          location.pathname.startsWith('/businesses')
                            ? 'text-gold-400 font-bold'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                            businessDropdownOpen ? 'rotate-180 text-gold-400' : ''
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-0 top-full pt-2.5 w-[360px] max-w-[calc(100vw-2rem)] transition-all duration-200 ${
                          businessDropdownOpen
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-navy-950 border border-slate-700/80 shadow-dark-glow rounded-md p-2.5 text-white">
                          <div className="px-2.5 py-2.5 mb-1.5 border-b border-slate-800 flex items-center justify-between gap-4">
                            <span className="text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-gold-400">Our Businesses</span>
                            <span className="shrink-0 text-[10px] font-mono text-slate-400">04 divisions</span>
                          </div>
                          {siteConfig.divisions.map((division) => (
                            <Link
                              key={division.id}
                              to={`/businesses/${division.slug}`}
                              onClick={() => setBusinessDropdownOpen(false)}
                              className="group flex items-center gap-3 px-2.5 py-3 rounded-md hover:bg-navy-900 transition-colors"
                            >
                              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md bg-navy-900 border border-slate-800 text-gold-400 group-hover:border-gold-500/60 transition-colors">
                                {getDivisionIcon(division.id)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-3">
                                  <span className="text-sm leading-snug font-semibold text-white group-hover:text-gold-300 transition-colors">
                                    {division.name}
                                  </span>
                                  <span className="shrink-0 text-[10px] text-slate-500 font-mono">
                                    {division.divisionNumber}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-400 line-clamp-1 mt-1 font-light">
                                  {division.industry}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <div className="mt-1 pt-2.5 border-t border-slate-800 px-2.5 pb-1">
                            <a
                              href="/#businesses"
                              onClick={(e) => handleAnchorClick(e, '/#businesses')}
                              className="flex items-center justify-between py-1 text-xs font-mono font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                            >
                              <span>Explore All Portfolios</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                const isHash = link.to.startsWith('/#');
                if (isHash) {
                  return (
                    <a
                      key={link.label}
                      href={link.to}
                      onClick={(e) => handleAnchorClick(e, link.to)}
                      className="px-3.5 py-2 text-xs font-mono uppercase tracking-[0.14em] font-medium text-slate-300 hover:text-white transition-colors rounded-[2px] focus-visible:outline-gold-500"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `px-3.5 py-2 text-xs font-mono uppercase tracking-[0.14em] font-medium transition-colors rounded-[2px] focus-visible:outline-gold-500 relative ${
                        isActive
                          ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[2px] after:bg-gold-500'
                          : 'text-slate-300 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right: Primary CTA with Gold Glow */}
            <div className="hidden sm:flex items-center gap-3">
              <Button to="/contact" variant="gold" size="sm" className="shadow-gold-glow">
                Discuss a Project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <Button to="/contact" variant="gold" size="sm" className="px-3 py-1.5 text-xs">
                Discuss
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                className="p-2 text-white hover:bg-navy-900 rounded-[2px] focus-visible:outline-gold-500 transition-colors border border-slate-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-navy-950 border-l border-slate-800 shadow-dark-glow flex flex-col lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-navy-900/60">
          <BrandMark variant="light" size="sm" withLink={false} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-[2px] focus-visible:outline-gold-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-white">
          <div className="space-y-1">
            <Link
              to="/"
              className="block px-3 py-2.5 text-sm font-mono uppercase tracking-wider text-white hover:bg-navy-900 rounded-[2px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2.5 text-sm font-mono uppercase tracking-wider text-white hover:bg-navy-900 rounded-[2px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <a
              href="/#businesses"
              className="block px-3 py-2.5 text-sm font-mono uppercase tracking-wider text-white hover:bg-navy-900 rounded-[2px]"
              onClick={(e) => handleAnchorClick(e, '/#businesses')}
            >
              Our Businesses
            </a>
            <a
              href="/#approach"
              className="block px-3 py-2.5 text-sm font-mono uppercase tracking-wider text-white hover:bg-navy-900 rounded-[2px]"
              onClick={(e) => handleAnchorClick(e, '/#approach')}
            >
              Our Approach
            </a>
            <Link
              to="/projects"
              className="block px-3 py-2.5 text-sm font-mono uppercase tracking-wider text-white hover:bg-navy-900 rounded-[2px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects & Concepts
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2.5 text-sm font-mono uppercase tracking-wider text-white hover:bg-navy-900 rounded-[2px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Business Divisions Group */}
          <div className="pt-4 border-t border-slate-800">
            <div className="px-3 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gold-400 mb-2">
              Our Businesses
            </div>
            <div className="space-y-1">
              {siteConfig.divisions.map((division) => (
                <Link
                  key={division.id}
                  to={`/businesses/${division.slug}`}
                  className="flex items-center justify-between px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-navy-900 rounded-[2px] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-medium">{division.name}</span>
                  <span className="text-[10px] text-gold-400 font-mono">{division.divisionNumber}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-slate-800 bg-navy-900/60 space-y-3">
          <Button to="/contact" variant="gold" size="md" className="w-full">
            Discuss a Project
          </Button>
          <div className="text-[10px] font-mono text-center text-slate-500 uppercase tracking-wider">
            navanextventures
          </div>
        </div>
      </div>
    </>
  );
};
