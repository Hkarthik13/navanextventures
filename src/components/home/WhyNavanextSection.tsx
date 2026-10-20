import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { SectionHeader } from '../shared/SectionHeader';
import { Network, ShieldCheck, Compass, SlidersHorizontal } from 'lucide-react';

export const WhyNavanextSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'multi-industry':
        return <Network className="w-5 h-5 text-gold-500" />;
      case 'single-contact':
        return <ShieldCheck className="w-5 h-5 text-gold-500" />;
      case 'structured-approach':
        return <Compass className="w-5 h-5 text-gold-500" />;
      case 'tailored-alignment':
        return <SlidersHorizontal className="w-5 h-5 text-gold-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-gold-500" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-warm-100 hairline-b relative perf-section">
      <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Context (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              eyebrow="Corporate Alignment"
              title="A Connected Group. A Clearer Way Forward."
              description="Navanext is organized to solve the friction of fragmented vendor coordination. By bringing construction, software, real estate, and strategic solutions under unified leadership, we offer a more transparent and dependable partnership."
              className="mb-6"
            />

            <div className="p-6 bg-navy-950 text-white rounded-[2px] border border-slate-800 shadow-dark-glow space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-400 font-bold">
                  GOVERNANCE MANDATE
                </span>
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
              </div>
              <p className="font-serif italic text-sm text-slate-200 leading-relaxed">
                "Direct executive access, verified methodologies, and focused domain capabilities without artificial complexity."
              </p>
              <div className="pt-2 text-[10px] font-mono text-slate-400">
                Single Point of Executive Oversight
              </div>
            </div>
          </div>

          {/* Right Column: 4 Credible Differentiators (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {siteConfig.whyNavanext.map((point, idx) => (
                <div
                  key={point.id}
                  className="bg-white p-7 border border-border rounded-[2px] shadow-subtle hover:shadow-elevated hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-[2px] bg-warm-100 border border-border/80">
                        {getIcon(point.id)}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-navy-900 mb-2">
                      {point.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Verified Principle</span>
                    <span className="text-gold-600 font-bold">Standard 0{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
