import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { ArrowRight, ShieldCheck, Scale, Compass, Award } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="about-intro" className="py-12 sm:py-16 bg-white hairline-b perf-section">
      <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Supporting Architectural / Corporate Visual (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-[2px] border border-border shadow-elevated bg-navy-950">
                <img
                  src={siteConfig.intro.image}
                  alt="navanextventures architectural structure"
                  decoding="async"
                  className="w-full h-[440px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-500 transform-gpu will-change-transform"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/group_hero.jpg';
                  }}
                />
              </div>

              {/* Restrained Luxury Quote Box */}
              <div className="absolute -bottom-6 -right-6 p-6 sm:p-7 bg-navy-950 text-white border border-slate-700 shadow-dark-glow rounded-[2px] hidden sm:block max-w-sm">
                <p className="text-[10px] uppercase font-mono tracking-[0.2em] font-bold text-gold-400 mb-2">
                  PARENT GROUP MANDATE
                </p>
                <p className="font-serif italic text-sm text-slate-200 leading-relaxed">
                  "Autonomous operational expertise anchored by collective integrity and capital discipline."
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
                  Navanext Executive Leadership
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest-caps text-gold-600">
              <span className="w-5 h-[1.5px] bg-gold-500 inline-block"></span>
              <span>{siteConfig.intro.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.12]">
              {siteConfig.intro.heading}
            </h2>

            <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed font-normal">
              {siteConfig.intro.bodyText}
            </p>

            <p className="text-sm sm:text-base text-muted leading-relaxed font-light">
              {siteConfig.intro.secondaryParagraph}
            </p>

            {/* Verifiable Principles Checklist with High-Craft Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-3.5 bg-warm-50 border border-border rounded-[2px] flex items-start gap-3">
                <Scale className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-navy-900">Capital Discipline</div>
                  <div className="text-[11px] text-muted mt-0.5">Consistent financial oversight across all business verticals.</div>
                </div>
              </div>

              <div className="p-3.5 bg-warm-50 border border-border rounded-[2px] flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-navy-900">Unified Governance</div>
                  <div className="text-[11px] text-muted mt-0.5">Single corporate point of executive contact and stewardship.</div>
                </div>
              </div>

              <div className="p-3.5 bg-warm-50 border border-border rounded-[2px] flex items-start gap-3">
                <Compass className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-navy-900">Domain Autonomy</div>
                  <div className="text-[11px] text-muted mt-0.5">Specialized trade and software engineers focused on outcomes.</div>
                </div>
              </div>

              <div className="p-3.5 bg-warm-50 border border-border rounded-[2px] flex items-start gap-3">
                <Award className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-navy-900">Enduring Durability</div>
                  <div className="text-[11px] text-muted mt-0.5">Projects and systems built to generate lasting generational value.</div>
                </div>
              </div>
            </div>

            {/* Subtle Discover Navanext Link */}
            <div className="pt-3">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] font-bold text-navy-900 hover:text-gold-600 transition-colors"
              >
                <span>{siteConfig.intro.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
