import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import type { ShowcaseProject } from '../../types';
import { SectionHeader } from '../shared/SectionHeader';
import { ProjectModal } from '../shared/ProjectModal';
import { ArrowUpRight, Sparkles, Filter, Eye } from 'lucide-react';

type FilterCategory = 'All' | 'Construction' | 'Technology' | 'Real Estate' | 'Other Businesses';

export const ShowcaseSection: React.FC<{ limit?: number; isPage?: boolean }> = ({ limit, isPage }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const categories: FilterCategory[] = [
    'All',
    'Construction',
    'Technology',
    'Real Estate',
    'Other Businesses',
  ];

  const filteredProjects = siteConfig.showcaseProjects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section
      id="showcase"
      className={`${
        isPage ? 'pt-4 sm:pt-6 pb-14 sm:pb-20' : 'py-14 sm:py-20'
      } bg-white hairline-b scroll-mt-16 perf-section`}
    >
      <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Disclaimer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <SectionHeader
            eyebrow="Portfolio Architecture"
            title="Project Showcase & Concepts"
            description="An illustrative presentation framework demonstrating how completed works, specifications, and client milestones are structured across navanextventures."
            className="mb-0"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-navy-950 text-white border border-slate-700 text-xs font-mono rounded-[2px] shadow-subtle shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-gold-300 font-bold">Illustrative Concept Framework</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 pb-3 border-b border-border/70">
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted mr-3">
            <Filter className="w-3.5 h-3.5 text-gold-500" />
            <span>Filter Portfolio:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-[2px] transition-all duration-200 focus-visible:outline-gold-500 ${
                activeFilter === cat
                  ? 'bg-navy-950 text-gold-400 font-bold border border-gold-500 shadow-elevated'
                  : 'bg-warm-100 hover:bg-warm-200 text-charcoal-800 border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Image Grid (Bento Scale Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {displayProjects.map((project, index) => {
            const isWide = index % 3 === 0;
            const colSpan = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group cursor-pointer bg-white border border-border hover:border-gold-500/70 rounded-[2px] overflow-hidden shadow-subtle hover:shadow-hover smooth-card flex flex-col`}
              >
                {/* Visual Canvas */}
                <div className="relative h-64 sm:h-76 overflow-hidden bg-navy-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu will-change-transform"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/builders_hero.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-navy-950/90 backdrop-blur-sm text-white text-[11px] font-mono font-semibold rounded-[2px] border border-slate-700">
                      {project.divisionName}
                    </span>
                    <span className="px-2 py-0.5 bg-gold-500 text-navy-950 font-mono text-[10px] uppercase font-bold rounded-[2px]">
                      Concept
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-9 h-9 rounded-[2px] bg-gold-500 text-navy-950 flex items-center justify-center shadow-elevated">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-gold-600 font-semibold mb-1">
                      {project.category} • {project.locationOrDomain}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-800 mt-2 line-clamp-2 font-normal leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Blueprint ID: {project.id}</span>
                    <span className="text-navy-900 font-bold group-hover:text-gold-600 flex items-center gap-1.5">
                      <span>Inspect Model</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mt-8 sm:mt-10 p-4 bg-warm-100 border border-border rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-muted">
          <div>
            <span className="font-bold text-navy-900">Portfolio Note: </span>
            Illustrative project models shown above serve as structural templates for corporate review. Real client commissions and verified case studies can be plugged in via configuration.
          </div>
          <span className="font-mono text-gold-600 whitespace-nowrap">
            src/data/siteConfig.ts
          </span>
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
