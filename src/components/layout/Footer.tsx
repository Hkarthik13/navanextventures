import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';
import { siteConfig } from '../../data/siteConfig';
import { MapPin, Mail, Phone, Clock, ArrowUpRight, ShieldCheck, FileText, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const openLegalModal = (type: 'privacy' | 'terms') => {
    if (type === 'privacy') {
      setModalContent({
        title: 'Privacy Policy & Governance',
        content: `This corporate prototype demonstrates the structural architecture for the navanextventures portfolio. 

In a production deployment, this privacy policy will detail the parent company's adherence to international data protection standards, client confidentiality protocols, cookie disclosures, and data retention procedures across all four divisions.

No real visitor information is harvested or sold. Form submissions on this prototype are processed locally for evaluation purposes.`,
      });
    } else {
      setModalContent({
        title: 'Terms of Use & Legal Notice',
        content: `The materials, specifications, and project visual concepts presented on this website are illustrative prototypes designed to represent the corporate capabilities of navanextventures and its specialized business entities.

All trademarks, trade names, and brand marks depicted herein belong to navanextventures and its respective divisions. Illustrative project concepts are clearly designated and do not constitute representations of past commercial commissions unless explicitly verified.`,
      });
    }
  };

  return (
    <footer className="bg-navy-950 text-white hairline-t border-slate-800">
      {/* Top Banner: Corporate Continuity */}
      <div className="border-b border-slate-800/80 bg-navy-900/40">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest-caps text-gold-400 font-semibold mb-1">
                Parent Company Structure
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                One Group. Multiple Possibilities.
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-4 py-2.5 bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors rounded-sm"
              >
                <span>Connect With Group</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Parent Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <BrandMark variant="light" size="md" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Navanext is the unified umbrella brand connecting specialized businesses across construction, software technologies, real estate, and emerging industry verticals under one trusted corporate standard.
            </p>
            <div className="pt-2 text-xs text-slate-500 font-mono">
              Corporate Prototype Version 1.0 • Ready for Production Data
            </div>
          </div>

          {/* Column 2: Our Businesses (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest-caps text-gold-400">
              Our Businesses
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.divisions.map((division) => (
                <li key={division.id}>
                  <Link
                    to={`/businesses/${division.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="text-[11px] font-mono text-gold-500/70 group-hover:text-gold-400">
                      {division.divisionNumber}
                    </span>
                    <span>{division.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest-caps text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#approach" className="hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Project Concepts
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest-caps text-gold-400">
              Corporate Desk (Placeholder)
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-snug">
                  {siteConfig.contactInfo.headquarters}
                  <br />
                  {siteConfig.contactInfo.cityCountry}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-slate-400 font-mono">
                  {siteConfig.contactInfo.email}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-slate-400 font-mono">
                  {siteConfig.contactInfo.phone}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-slate-400">
                  {siteConfig.contactInfo.businessHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} navanextventures. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => openLegalModal('privacy')}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Privacy Policy</span>
            </button>
            <button
              type="button"
              onClick={() => openLegalModal('terms')}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-gold-400" />
              <span>Terms of Use</span>
            </button>
          </div>
        </div>
      </div>

      {/* Informational Legal Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-navy-900 rounded-sm border border-border shadow-2xl max-w-lg w-full p-6 sm:p-8 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <h3 className="font-display text-lg font-bold text-navy-900">
                {modalContent.title}
              </h3>
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="text-muted hover:text-navy-900 p-1 rounded-sm focus-visible:outline-gold-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-5 text-sm leading-relaxed text-charcoal-800 whitespace-pre-line">
              {modalContent.content}
            </div>
            <div className="pt-4 border-t border-border flex justify-end">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="px-4 py-2 bg-navy-900 text-white text-xs font-semibold rounded-sm hover:bg-navy-800 transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
