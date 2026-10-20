import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { SectionHeader } from '../shared/SectionHeader';

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-12 sm:py-16 bg-navy-950 text-white hairline-b border-slate-800 scroll-mt-16 relative overflow-hidden perf-section">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Operational Philosophy"
          title="Built Around Clear Thinking and Thoughtful Execution."
          description="A uniform four-stage governance methodology practiced across our construction, software, real estate, and advisory verticals."
          variant="light"
        />

        {/* Sequence Grid */}
        <div className="relative mt-8 sm:mt-10">
          {/* Connecting line across desktop cards */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-slate-800 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {siteConfig.approachPrinciples.map((principle, index) => (
              <div
                key={principle.number}
                className="group relative bg-navy-900/80 hover:bg-navy-900 p-6 sm:p-7 border border-slate-800 hover:border-gold-500/60 rounded-[2px] transition-all duration-300 shadow-dark-glow hover:shadow-gold-glow flex flex-col justify-between"
              >
                <div>
                  {/* Step Monospace Numeral */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 flex items-center justify-center font-mono text-sm font-bold text-gold-400 bg-navy-950 border border-slate-700 rounded-[2px] group-hover:border-gold-500 transition-colors">
                      {principle.number}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  {/* Principle Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight group-hover:text-gold-300 transition-colors">
                    {principle.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs font-semibold text-slate-200 mb-3 leading-relaxed">
                    {principle.summary}
                  </p>

                  {/* Operational Details */}
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {principle.details}
                  </p>
                </div>

                {/* Bottom Phase Indicator */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Standard 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-500 transition-colors"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
