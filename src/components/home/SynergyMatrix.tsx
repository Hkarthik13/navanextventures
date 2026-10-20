import React, { useState } from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import {
  Building2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Check,
} from 'lucide-react';

export const SynergyMatrix: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'physical' | 'digital' | 'spatial' | 'strategic'>('physical');

  const nodes = [
    {
      id: 'physical' as const,
      division: 'Navanext Builders',
      domain: 'Physical Infrastructure',
      icon: <Building2 className="w-5 h-5 text-gold-500" />,
      tagline: 'Engineering the Built Environment',
      description: 'Executes civil engineering, heavy structural construction, and facilities with precision and strict safety protocols.',
      synergies: [
        'Direct coordination with Real Estate for land feasibility and construction handover',
        'Integrates Software Technologies for smart building sensors and telemetry',
        'Centralized material procurement and supply governance through Advisory',
      ],
      metric: 'Structural Rigor',
    },
    {
      id: 'digital' as const,
      division: 'Navanext Software Technologies',
      domain: 'Digital Intelligence',
      icon: <Cpu className="w-5 h-5 text-gold-500" />,
      tagline: 'Enterprise Software & Cloud Platforms',
      description: 'Designs scalable cloud platforms, automated workflows, and data pipelines for demanding business operations.',
      synergies: [
        'Powers real-time operational telemetry for civil and logistics facilities',
        'Delivers client asset management portals for Real Estate tenants and investors',
        'Establishes enterprise data security and compliance across group operations',
      ],
      metric: 'Scalable Systems',
    },
    {
      id: 'spatial' as const,
      division: 'Navanext Real Estate',
      domain: 'Spatial & Commercial Curation',
      icon: <Layers className="w-5 h-5 text-gold-500" />,
      tagline: 'Strategic Property Stewardship',
      description: 'Sources, structures, and manages high-value real estate opportunities with long-term capital preservation in mind.',
      synergies: [
        'Leverages Builders for high-spec construction without third-party markup friction',
        'Utilizes modern digital platforms to manage tenant services and energy efficiency',
        'Collaborates with Advisory for structured capital allocations and joint ventures',
      ],
      metric: 'Long-Term Value',
    },
    {
      id: 'strategic' as const,
      division: 'Navanext Advisory & Solutions',
      domain: 'Strategic Governance',
      icon: <Sparkles className="w-5 h-5 text-gold-500" />,
      tagline: 'Unified Stewardship & Enablement',
      description: 'Provides executive direction, supply governance, and incubation for emerging high-growth verticals.',
      synergies: [
        'Eliminates vendor silos through consolidated project accountability',
        'Audits trade standards, contracts, and ESG compliance across every project',
        'Acts as the single point of executive contact for multi-disciplinary briefs',
      ],
      metric: 'Consolidated Governance',
    },
  ];

  const current = nodes.find((n) => n.id === activeNode)!;

  return (
    <section className="py-12 sm:py-16 bg-white hairline-b perf-section">
      <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <SectionHeader
            eyebrow="Conglomerate Architecture"
            title="The Navanext Connected Ecosystem"
            description="Our specialized businesses are not isolated companies. They operate as an integrated ecosystem, multiplying value across physical, digital, and spatial domains."
            className="mb-0"
          />
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 bg-warm-100 border border-border text-xs font-mono text-slate-700 rounded-[2px]">
            <Shield className="w-3.5 h-3.5 text-gold-600" />
            <span>Interactive Synergy Explorer</span>
          </div>
        </div>

        {/* Interactive Matrix Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 4 Interactive Division Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {nodes.map((node) => {
              const isSelected = activeNode === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNode(node.id)}
                  className={`w-full text-left p-5 rounded-[2px] border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-navy-950 text-white border-gold-500 shadow-elevated scale-[1.01]'
                      : 'bg-warm-50 text-charcoal-900 border-border hover:border-slate-400 hover:bg-white'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-[2px] mt-0.5 shrink-0 ${
                      isSelected ? 'bg-navy-900 border border-slate-700' : 'bg-white border border-border'
                    }`}
                  >
                    {node.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                          isSelected ? 'text-gold-400' : 'text-slate-500'
                        }`}
                      >
                        {node.domain}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-[2px] ${
                          isSelected ? 'bg-gold-500 text-navy-950 font-bold' : 'bg-warm-200 text-charcoal-800'
                        }`}
                      >
                        {node.metric}
                      </span>
                    </div>

                    <h4
                      className={`font-display text-base font-bold mt-1 ${
                        isSelected ? 'text-white' : 'text-navy-900'
                      }`}
                    >
                      {node.division}
                    </h4>

                    <p
                      className={`text-xs mt-1 line-clamp-1 ${
                        isSelected ? 'text-slate-300' : 'text-muted'
                      }`}
                    >
                      {node.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Synergy Deep-Dive Panel (7 cols) */}
          <div className="lg:col-span-7 bg-navy-950 text-white p-7 sm:p-10 rounded-[2px] border border-slate-800 shadow-dark-glow flex flex-col justify-between relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500"></span>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400 font-bold">
                    Group Synergy Focus
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {current.division}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {current.tagline}
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed font-light">
                  {current.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gold-300 font-semibold flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-gold-400" />
                  <span>How This Division Integrates Across The Group:</span>
                </h4>

                <div className="space-y-2.5">
                  {current.synergies.map((syn, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-navy-900/80 border border-slate-800 rounded-[2px] flex items-start gap-3"
                    >
                      <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs text-slate-200 leading-relaxed font-normal">
                        {syn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <span className="text-xs text-slate-400 font-mono">
                Single-source corporate accountability
              </span>
              <a
                href="#businesses"
                className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
              >
                <span>View Full Division Scope</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
