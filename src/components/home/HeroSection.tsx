import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';
import { siteConfig } from '../../data/siteConfig';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);
  const activeDivision = siteConfig.divisions[activeDivisionIndex];

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'builders':
        return <Building2 className="w-4 h-4 text-gold-400" />;
      case 'software-technologies':
        return <Cpu className="w-4 h-4 text-gold-400" />;
      case 'real-estate':
        return <Layers className="w-4 h-4 text-gold-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-gold-400" />;
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 bg-navy-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Architectural Grid & Subtle Radial Golden Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Subtle grid pattern */}
        <div className="w-full h-full opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
        {/* Golden radial ambient light */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        {/* Secondary deep navy glow */}
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-slate-700/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Top Pre-header Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-navy-900/90 border border-slate-700/80 rounded-[2px] shadow-subtle backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-gold-300">
              navanextventures
            </span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-xs text-slate-400 font-mono tracking-wider hidden sm:inline">
            4 Consolidated Operating Divisions
          </span>
        </div>

        {/* Main Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Prestigious Editorial Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tightest leading-[1.03] text-white">
              One Group.
              <br />
              <span className="text-gold-gradient font-luxury font-normal italic tracking-normal sm:text-[1.12em]">
                Multiple Possibilities.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Bringing expertise across construction, software technologies, prime real estate, and emerging industries together under one trusted corporate standard.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                to="/#businesses"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-gold-glow"
              >
                Explore Our Businesses
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="text-white border-slate-700 hover:border-gold-500 hover:bg-white/5"
              >
                Start a Conversation
              </Button>
            </div>

            {/* Authentic Principle-Based Governance Metrics */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center">
                  04<span className="text-gold-400 text-lg">.</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-0.5">
                  Operating Divisions
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center">
                  100<span className="text-gold-400 text-xs">%</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-0.5">
                  Unified Governance
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center">
                  Single<span className="text-gold-400 text-xs font-serif italic ml-1">Desk</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-0.5">
                  Accountability
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center">
                  Cross<span className="text-gold-400 text-xs font-serif italic ml-1">Synergy</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-0.5">
                  Domain Integration
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Division Cinema Stage (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-[2px] border border-slate-700/80 bg-navy-900 shadow-dark-glow">
              {/* Dynamic Division Visual */}
              <div className="relative h-[380px] sm:h-[460px] overflow-hidden">
                <img
                  key={activeDivision.id}
                  src={activeDivision.heroImage}
                  alt={activeDivision.name}
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-all duration-500 animate-in fade-in zoom-in-95 scale-100 transform-gpu will-change-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/builders_hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

                {/* Top Badge on Card */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3 py-1 bg-navy-950/85 backdrop-blur-md border border-slate-700 text-xs font-mono text-gold-400 font-bold rounded-[2px] flex items-center gap-2">
                    {getDivisionIcon(activeDivision.id)}
                    <span>DIVISION {activeDivision.divisionNumber}</span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 bg-white/10 backdrop-blur-md text-slate-300 rounded-[2px]">
                    {activeDivision.industry.split('&')[0]}
                  </span>
                </div>

                {/* Overlaid Editorial Division Information */}
                <div className="absolute bottom-4 left-4 right-4 p-5 bg-navy-950/90 backdrop-blur-xl border border-slate-700/80 rounded-[2px] shadow-elevated">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                    {activeDivision.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed font-light">
                    {activeDivision.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-gold-400 font-mono text-[11px]">
                      Specialized Entity
                    </span>
                    <Link
                      to={`/businesses/${activeDivision.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-gold-400 transition-colors"
                    >
                      <span>Explore Division</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Corner */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-gold-500/40 pointer-events-none hidden sm:block"></div>
          </div>
        </div>

        {/* Division Selector Switcher Strip */}
        <div className="mt-12 pt-6 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-slate-400">
              Interactive Division Cinema:
            </span>
            <span className="text-[11px] text-gold-400/80 font-mono hidden sm:inline">
              Select any division below to preview capability
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {siteConfig.divisions.map((div, idx) => {
              const isActive = activeDivisionIndex === idx;
              return (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => setActiveDivisionIndex(idx)}
                  className={`text-left p-3 rounded-[2px] border transition-all duration-300 relative ${
                    isActive
                      ? 'bg-navy-900 border-gold-500/80 shadow-gold-glow'
                      : 'bg-navy-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-navy-900/40'
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600"></span>
                  )}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-gold-400 font-bold">
                      {div.divisionNumber}
                    </span>
                    {getDivisionIcon(div.id)}
                  </div>
                  <div className="text-xs font-bold text-white truncate">
                    {div.name.replace('Navanext ', '')}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">
                    {div.industry.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
