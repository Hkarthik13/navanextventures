import React from 'react';
import type { ShowcaseProject } from '../../types';
import { X, Building2, Tag, Check, Info } from 'lucide-react';
import { Button } from './Button';

interface ProjectModalProps {
  project: ShowcaseProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
    if (project) {
      window.__lenis?.stop();
    } else {
      window.__lenis?.start();
    }
    return () => {
      window.__lenis?.start();
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-sm border border-border shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header Image with Badges */}
        <div className="relative h-64 sm:h-80 bg-navy-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            decoding="async"
            className="w-full h-full object-cover transform-gpu will-change-transform"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/builders_hero.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-navy-900/80 hover:bg-navy-900 text-white rounded-sm transition-colors focus-visible:outline-gold-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
            <span className="px-2.5 py-1 bg-white/95 text-navy-900 text-xs font-semibold rounded-sm shadow-subtle flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-gold-600" />
              {project.divisionName}
            </span>
            <span className="px-2.5 py-1 bg-gold-500 text-white font-mono text-[11px] font-bold uppercase rounded-sm">
              Illustrative Prototype Concept
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted mb-2">
              <Tag className="w-3.5 h-3.5 text-gold-500" />
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.locationOrDomain}</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-navy-900">
              {project.title}
            </h3>
          </div>

          {/* Prototype Concept Clarification Banner */}
          <div className="p-3.5 bg-warm-100 border-l-4 border-gold-500 rounded-sm flex items-start gap-3 text-xs text-charcoal-800">
            <Info className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-navy-900">Illustrative Concept Framework: </span>
              This case study layout demonstrates how verified Navanext project deliverables, architectural specs, and client milestones will be presented upon live production deployment.
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Project Concept Scope & Overview
            </h4>
            <p className="text-sm text-charcoal-800 leading-relaxed font-normal">
              {project.fullOverview}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Key Technical & Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-charcoal-800">
                  <span className="w-4 h-4 rounded-full bg-warm-200 text-gold-600 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-muted">
              navanextventures Presentation Portfolio
            </span>
            <div className="flex items-center gap-3">
              <Button onClick={onClose} variant="secondary" size="sm">
                Close
              </Button>
              <Button to="/contact" variant="primary" size="sm">
                Discuss Similar Scope
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
