import React from 'react';

export const CorporateTicker: React.FC = () => {
  const tickerItems = [
    'NAVANEXT BUILDERS',
    'CONSTRUCTION & CIVIL INFRASTRUCTURE',
    'NAVANEXT SOFTWARE TECHNOLOGIES',
    'ENTERPRISE CLOUD PLATFORMS',
    'NAVANEXT REAL ESTATE',
    'PRIME COMMERCIAL & RESIDENTIAL ASSETS',
    'NAVANEXT ADVISORY',
    'STRATEGIC CORPORATE ENABLEMENT',
    'UNIFIED GOVERNANCE',
    'FOUR SPECIALIZED ENTITIES',
  ];

  return (
    <div className="relative py-4 bg-navy-950 border-y border-slate-800/80 overflow-hidden select-none">
      {/* Ambient gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-marquee whitespace-nowrap transform-gpu will-change-transform">
        {/* Render twice for continuous loop */}
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-5">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] font-medium text-slate-300">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500/80 inline-block"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
