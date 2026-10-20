import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { SectionHeader } from '../shared/SectionHeader';
import {
  ArrowRight,
  Building2,
  Cpu,
  Layers,
  ArrowUpRight,
  CheckCircle,
  Briefcase,
  ChevronRight,
} from 'lucide-react';

export const BusinessesSection: React.FC = () => {
  const [b1, b2, b3, b4] = siteConfig.divisions;
  const [activeTab, setActiveTab] = useState(0);

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'builders':
        return <Building2 className="w-5 h-5 text-gold-500" />;
      case 'software-technologies':
        return <Cpu className="w-5 h-5 text-gold-500" />;
      case 'real-estate':
        return <Layers className="w-5 h-5 text-gold-500" />;
      default:
        return <Briefcase className="w-5 h-5 text-gold-500" />;
    }
  };

  const getDivisionFallback = (id: string) => {
    switch (id) {
      case 'builders':
        return '/images/builders_hero.jpg';
      case 'software-technologies':
        return '/images/software_hero.jpg';
      case 'real-estate':
        return '/images/realestate_hero.jpg';
      default:
        return '/images/advisory_hero.jpg';
    }
  };

  const currentTabDivision = siteConfig.divisions[activeTab];

  return (
    <section id="businesses" className="py-12 sm:py-16 bg-warm-100 hairline-b scroll-mt-16 perf-section">
      <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <SectionHeader
            eyebrow="Integrated Portfolios"
            title="Expertise Across Industries"
            description="Explore the specialized businesses that form navanextventures, each operating with dedicated domain mastery."
            className="mb-0"
          />

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-navy-900 bg-white px-3.5 py-2 border border-border rounded-[2px] shadow-subtle">
              04 Specialized Entities
            </span>
          </div>
        </div>

        {/* =========================================================================
            FEATURED INTERACTIVE DIVISION CINEMA SHOWCASE
           ========================================================================= */}
        <div className="bg-navy-950 text-white rounded-[2px] border border-slate-800 shadow-dark-glow overflow-hidden mb-10 sm:mb-12">
          {/* Top Division Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-800/80 bg-navy-900/60">
            {siteConfig.divisions.map((div, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 sm:p-5 text-left border-r last:border-r-0 border-slate-800 transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-navy-950 text-white'
                      : 'hover:bg-navy-900/40 text-slate-400'
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-gold-500 shadow-gold-glow"></span>
                  )}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-gold-400">
                      {div.divisionNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      Vertical
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">
                    {div.name.replace('Navanext ', '')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Division Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content Column (6 cols) */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  {getDivisionIcon(currentTabDivision.id)}
                  <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold">
                    {currentTabDivision.industry}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentTabDivision.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {currentTabDivision.valueProposition}
                </p>

                {/* Core Services Pills */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Core Delivery Pillars:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {currentTabDivision.services.map((svc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                        <span className="truncate">{svc.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
                <Link
                  to={`/businesses/${currentTabDivision.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all shadow-gold-glow"
                >
                  <span>Explore Division Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <span>Consult Directly</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                </Link>
              </div>
            </div>

            {/* Right Image Visual Column (6 cols) */}
            <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] bg-navy-900 overflow-hidden">
              <img
                key={currentTabDivision.id}
                src={currentTabDivision.heroImage}
                alt={currentTabDivision.name}
                decoding="async"
                className="w-full h-full object-cover object-center animate-in fade-in duration-500 transform-gpu will-change-transform"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = getDivisionFallback(currentTabDivision.id);
                  if (target.src !== window.location.origin + fallback) {
                    target.src = fallback;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-navy-950/90 backdrop-blur-md border border-slate-700/80 rounded-[2px] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-gold-400 uppercase">
                    Operating Discipline
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {currentTabDivision.tagline}
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Division {currentTabDivision.divisionNumber}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAILED ASYMMETRIC PANELS (All 4 Businesses)
           ========================================================================= */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-slate-500">
            Dedicated Entity Overview:
          </span>
          <span className="text-xs font-mono text-gold-600">
            Independent Domain Mastery • Unified Leadership
          </span>
        </div>

        <div className="space-y-8">
          {/* BUSINESS 01 — NAVANEXT BUILDERS */}
          <div className="group bg-white border border-border rounded-[2px] overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] overflow-hidden bg-navy-900">
                <img
                  src={b1.heroImage}
                  alt={b1.name}
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 transform-gpu will-change-transform"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/builders_hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-navy-900/90 backdrop-blur-sm text-gold-400 font-mono text-xs font-bold rounded-[2px] border border-navy-800">
                    {b1.divisionNumber}
                  </span>
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-semibold rounded-[2px]">
                    {b1.industry}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gold-600">
                    <Building2 className="w-5 h-5" />
                    <span className="text-xs uppercase font-bold tracking-widest-caps">
                      Construction & Engineering
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                    {b1.name}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-normal">
                    {b1.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-border/80">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-muted mb-2">
                      Core Disciplines:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-charcoal-800">
                      {b1.services.slice(0, 4).map((s, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span className="truncate">{s.title.split('&')[0]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <Link
                    to={`/businesses/${b1.slug}`}
                    className="inline-flex items-center justify-between w-full sm:w-auto gap-4 px-5 py-2.5 bg-navy-900 text-white hover:bg-gold-600 text-xs font-semibold rounded-[2px] tracking-wide transition-all"
                  >
                    <span>Explore Builders</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* TWO-COLUMN GRID: SOFTWARE TECHNOLOGIES & REAL ESTATE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BUSINESS 02 — NAVANEXT SOFTWARE TECHNOLOGIES */}
            <div className="group bg-white border border-border rounded-[2px] overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-navy-950">
                <img
                  src={b2.heroImage}
                  alt={b2.name}
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 transform-gpu will-change-transform"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/software_hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-navy-900/90 backdrop-blur-sm text-gold-400 font-mono text-xs font-bold rounded-[2px] border border-navy-800">
                    {b2.divisionNumber}
                  </span>
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-semibold rounded-[2px]">
                    {b2.industry}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gold-600">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold tracking-widest-caps">
                      Digital Infrastructure
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
                    {b2.name}
                  </h3>

                  <p className="text-sm text-charcoal-800 leading-relaxed font-normal">
                    {b2.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border/80 flex items-center justify-between">
                  <span className="text-xs text-muted font-medium">Enterprise Systems</span>
                  <Link
                    to={`/businesses/${b2.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors"
                  >
                    <span>Explore Technology</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* BUSINESS 03 — NAVANEXT REAL ESTATE */}
            <div className="group bg-white border border-border rounded-[2px] overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-navy-950">
                <img
                  src={b3.heroImage}
                  alt={b3.name}
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 transform-gpu will-change-transform"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/realestate_hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-navy-900/90 backdrop-blur-sm text-gold-400 font-mono text-xs font-bold rounded-[2px] border border-navy-800">
                    {b3.divisionNumber}
                  </span>
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-semibold rounded-[2px]">
                    {b3.industry}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gold-600">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold tracking-widest-caps">
                      Property & Development
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
                    {b3.name}
                  </h3>

                  <p className="text-sm text-charcoal-800 leading-relaxed font-normal">
                    {b3.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border/80 flex items-center justify-between">
                  <span className="text-xs text-muted font-medium">Commercial & Residential</span>
                  <Link
                    to={`/businesses/${b3.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors"
                  >
                    <span>Explore Real Estate</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* BUSINESS 04 — NAVANEXT [FOURTH DIVISION] (Configurable Placeholder Domain) */}
          <div className="group bg-white border border-dashed border-slate-400/80 rounded-[2px] overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300">
            <div className="p-4 bg-warm-200/60 border-b border-border flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                <span>Configurable Division Slot (Placeholder)</span>
              </div>
              <span className="text-[11px] font-mono text-muted">
                Configurable via src/data/siteConfig.ts
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-8 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-navy-900 text-gold-400 font-mono text-xs font-bold rounded-[2px]">
                    {b4.divisionNumber}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {b4.industry}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-navy-900 tracking-tight">
                  {b4.name}
                </h3>

                <p className="text-sm text-charcoal-800 leading-relaxed max-w-2xl font-normal">
                  {b4.shortDescription}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/businesses/${b4.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white hover:bg-gold-600 text-xs font-semibold rounded-[2px] tracking-wide transition-all"
                  >
                    <span>Explore Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-muted">
                    Replaceable vertical ready for client customization
                  </span>
                </div>
              </div>

              <div className="md:col-span-4 h-56 md:h-full min-h-[220px] relative overflow-hidden bg-slate-800">
                <img
                  src={b4.heroImage}
                  alt={b4.name}
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 transform-gpu will-change-transform opacity-90"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/advisory_hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-navy-950/40"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="inline-block px-3 py-1 bg-white/95 text-navy-900 text-[11px] font-semibold rounded-[2px] shadow-subtle">
                    Domain Slot Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
