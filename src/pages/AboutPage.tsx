import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { SectionHeader } from '../components/shared/SectionHeader';
import { Button } from '../components/shared/Button';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-20 bg-warm-100 min-h-screen page-entrance">
      {/* Editorial Corporate Header */}
      <section className="py-10 sm:py-14 border-b border-border">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest-caps text-gold-600">
              <span className="w-5 h-[1.5px] bg-gold-500 inline-block"></span>
              <span>Parent Brand Profile</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.12]">
              A Unified Corporate Identity Connecting Specialized Industry Leaders.
            </h1>

            <p className="text-lg sm:text-xl text-charcoal-800 leading-relaxed font-normal">
              Navanext operates as the parent umbrella for four distinct business entities, providing strategic direction, disciplined capital allocation, and collaborative cross-industry capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy & Structure */}
      <section className="py-12 sm:py-16 bg-white hairline-b">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="overflow-hidden rounded-sm border border-border shadow-elevated bg-navy-950">
                <img
                  src="/images/group_hero.jpg"
                  alt="Navanext Corporate Architecture"
                  decoding="async"
                  className="w-full h-80 sm:h-96 object-cover transform-gpu will-change-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/builders_hero.jpg';
                  }}
                />
              </div>

              <div className="p-5 bg-warm-100 border border-border rounded-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                  Parent Brand Governance
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Navanext coordinates group-wide strategy while giving individual operating companies the autonomy to focus entirely on deep domain craftsmanship.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-charcoal-800 leading-relaxed text-sm sm:text-base">
              <SectionHeader
                eyebrow="Corporate Mandate"
                title="The Multi-Industry Advantage"
                className="mb-4"
              />

              <p>
                Modern commerce and large-scale projects rarely fit neatly into a single discipline. A high-value commercial development requires civil construction, reliable software systems, and strategic real estate asset curation. By uniting these capabilities under the Navanext banner, our partners benefit from seamless coordination, reduced counterparty risk, and single-source accountability.
              </p>

              <p>
                Each division operates with dedicated industry leadership, specialized engineers, and trade professionals. Rather than treating these sectors as disparate enterprises, Navanext weaves them together through standardized risk management, uniform communication protocols, and a shared commitment to long-term trust.
              </p>

              <div className="pt-4 border-t border-border">
                <h3 className="font-display text-base font-bold text-navy-900 mb-3">
                  Foundational Operating Commitments:
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Verifiable Quality Standards:</strong> We measure success by structural longevity, software uptime, and lasting community value.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Commercial Integrity:</strong> Clear contracts, transparent milestone reporting, and honest delivery projections.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Autonomous Excellence:</strong> Domain teams remain deeply specialized rather than generalized across disciplines.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Divisions Overview Grid */}
      <section className="py-16 sm:py-24 bg-warm-100 hairline-b">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Group Architecture"
            title="Our Four Operating Verticals"
            description="Four specialized businesses united under navanextventures, each offering focused industry solutions."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {siteConfig.divisions.map((division) => (
              <div
                key={division.id}
                className="bg-white p-6 border border-border rounded-sm shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-gold-600 bg-warm-100 px-2 py-0.5 rounded-sm">
                      {division.divisionNumber}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-muted">
                      {division.industry.split('&')[0]}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                    {division.name}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed line-clamp-3">
                    {division.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    to={`/businesses/${division.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    <span>View Division</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-20 bg-navy-950 text-white">
        <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest-caps text-gold-400">
            Collaborative Engagement
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
            Ready to explore how Navanext can support your next enterprise initiative?
          </h2>
          <div className="pt-2">
            <Button to="/contact" variant="gold" size="lg">
              Start a Conversation With Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
