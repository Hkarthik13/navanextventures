import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { SectionHeader } from '../components/shared/SectionHeader';
import { Button } from '../components/shared/Button';
import { ContactSection } from '../components/home/ContactSection';
import { ProjectModal } from '../components/shared/ProjectModal';
import type { ShowcaseProject } from '../types';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
  Briefcase,
} from 'lucide-react';

export const BusinessDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const division = siteConfig.divisions.find((d) => d.slug === slug);

  if (!division) {
    return <Navigate to="/" replace />;
  }

  // Cross-division navigation: all other 3 businesses
  const otherDivisions = siteConfig.divisions.filter((d) => d.id !== division.id);

  // Map division illustrative projects into ShowcaseProject shape for modal inspection if clicked
  const handleOpenIllustrativeModal = (project: (typeof division.illustrativeProjects)[0]) => {
    const modalProject: ShowcaseProject = {
      id: `${division.id}-${project.title}`,
      title: project.title,
      divisionId: division.id,
      divisionName: division.name,
      category:
        division.id === 'builders'
          ? 'Construction'
          : division.id === 'software-technologies'
          ? 'Technology'
          : division.id === 'real-estate'
          ? 'Real Estate'
          : 'Other Businesses',
      shortDescription: project.scope,
      fullOverview: project.description,
      image: project.image,
      keyHighlights: [
        'Illustrative corporate design framework',
        'Standardized technical review criteria',
        'Adherence to parent group quality controls',
      ],
      isConcept: true,
      locationOrDomain: project.category,
    };
    setSelectedProject(modalProject);
  };

  return (
    <div className="pt-16 sm:pt-20 bg-warm-100 min-h-screen page-entrance">
      {/* Top Breadcrumb & Parent Brand Return Bar */}
      <div className="bg-white border-b border-border py-2.5">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <nav className="flex items-center gap-2 text-muted" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy-900 transition-colors">
              navanextventures
            </Link>
            <span>/</span>
            <Link to="/#businesses" className="hover:text-navy-900 transition-colors">
              Our Businesses
            </Link>
            <span>/</span>
            <span className="font-semibold text-navy-900">{division.name}</span>
          </nav>

          <Link
            to="/#businesses"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Businesses</span>
          </Link>
        </div>
      </div>

      {/* Placeholder Domain Banner if 4th division */}
      {division.isPlaceholder && (
        <div className="bg-amber-50 border-b border-amber-200 py-3 text-amber-900 text-xs">
          <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Configurable Domain Template:</strong> {division.placeholderNotice}
            </span>
          </div>
        </div>
      )}

      {/* Business Hero Section */}
      <section className="relative bg-navy-950 text-white overflow-hidden py-12 sm:py-16">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={division.heroImage}
            alt={division.name}
            decoding="async"
            className="w-full h-full object-cover opacity-25 transform-gpu will-change-transform"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/builders_hero.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70"></div>
        </div>

        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-gold-500 text-navy-950 font-mono text-xs font-bold rounded-sm">
                Division {division.divisionNumber}
              </span>
              <span className="text-xs uppercase font-semibold tracking-widest text-gold-400">
                {division.industry}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              {division.name}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
              {division.valueProposition}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#division-contact" variant="gold" size="md">
                Consult With {division.name.replace('Navanext ', '')}
              </Button>
              <Button href="#core-services" variant="outline" size="md" className="text-white border-white/30 hover:border-white hover:bg-white/10">
                View Services & Scope
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview & Philosophy */}
      <section className="py-12 sm:py-16 bg-white hairline-b">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest-caps text-gold-600">
                Strategic Foundation
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 leading-snug">
                {division.tagline}
              </h2>
              <div className="p-4 bg-warm-100 border border-border rounded-sm text-xs text-charcoal-800 leading-relaxed">
                <strong>Parent Group Alignment:</strong> Operating under Navanext's central governance, {division.name} maintains unified financial accountability and direct executive supervision.
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-charcoal-800 leading-relaxed font-normal">
              <p>{division.fullOverview}</p>
              <p className="text-muted text-sm">
                Our team is structured to engage with enterprise clients, commercial developers, and institutional partners, prioritizing long-term durability and measurable outcomes over short-term expediency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="core-services" className="py-12 sm:py-16 bg-warm-100 hairline-b scroll-mt-20">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Specialized Capabilities"
            title="Core Services & Deliverables"
            description={`Structured capabilities provided by ${division.name} to meet high-consequence enterprise and commercial requirements.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {division.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-7 sm:p-8 border border-border rounded-sm shadow-subtle hover:shadow-elevated transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold-600 bg-warm-100 px-2 py-0.5 rounded-sm">
                      0{index + 1}
                    </span>
                    <Briefcase className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy-900">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/70">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted block mb-2">
                    Scope of Delivery:
                  </span>
                  <ul className="space-y-1.5 text-xs text-charcoal-800">
                    {service.scope.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Approach / Phasing */}
      <section className="py-12 sm:py-16 bg-white hairline-b">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Project Phasing"
            title="How We Deliver"
            description={`Our structured execution process for ${division.name} projects, ensuring transparent milestones from discovery to completion.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {division.approachSteps.map((step) => (
              <div
                key={step.number}
                className="bg-warm-50 p-6 border border-border rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-gold-600 mb-3">
                    Phase {step.number}
                  </div>
                  <h4 className="font-display text-base font-bold text-navy-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustrative Sample Projects */}
      <section className="py-12 sm:py-16 bg-warm-100 hairline-b">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <SectionHeader
              eyebrow="Portfolio Blueprint"
              title="Illustrative Project Frameworks"
              description={`Sample project layouts illustrating how ${division.name} scopes, documents, and coordinates deliverables.`}
              className="mb-0"
            />
            <span className="text-[11px] font-mono text-muted bg-white px-3 py-1.5 border border-border rounded-sm shadow-subtle shrink-0">
              Sample Concepts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {division.illustrativeProjects.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenIllustrativeModal(proj)}
                className="group cursor-pointer bg-white border border-border rounded-sm overflow-hidden shadow-subtle hover:shadow-elevated smooth-card flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-navy-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu will-change-transform"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/builders_hero.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-navy-900/90 text-gold-400 font-mono text-[10px] uppercase font-bold rounded-sm border border-navy-800">
                      {proj.statusBadge}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-mono text-muted uppercase">
                      {proj.category}
                    </span>
                    <h4 className="font-display text-base font-bold text-navy-900 mt-1 group-hover:text-gold-600 transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-charcoal-800 mt-2 line-clamp-2 leading-relaxed">
                      {proj.scope}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-navy-900 font-semibold group-hover:text-gold-600">
                    <span>Inspect Prototype Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Group Businesses Navigation */}
      <section className="py-12 sm:py-16 bg-white hairline-b">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest-caps text-gold-600">
              Parent Company Synergy
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mt-1">
              Explore Other Navanext Divisions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherDivisions.map((other) => (
              <Link
                key={other.id}
                to={`/businesses/${other.slug}`}
                className="group p-5 bg-warm-50 hover:bg-white border border-border rounded-sm transition-all shadow-subtle hover:shadow-elevated"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-gold-600">
                    {other.divisionNumber}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-navy-900 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-display text-base font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                  {other.name}
                </h4>
                <p className="text-xs text-muted mt-1">
                  {other.industry}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Division-Specific Contact Section Anchor */}
      <div id="division-contact">
        <ContactSection initialDivision={division.name} />
      </div>

      {/* Modal for Project Inspection */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
