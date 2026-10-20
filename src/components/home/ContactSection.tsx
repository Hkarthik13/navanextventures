import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { SectionHeader } from '../shared/SectionHeader';
import { Button } from '../shared/Button';
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  AlertCircle,
  Send,
  Building2,
  Info,
} from 'lucide-react';

interface FormState {
  fullName: string;
  businessEmail: string;
  companyName: string;
  division: string;
  serviceInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  division?: string;
  serviceInterest?: string;
  message?: string;
}

export const ContactSection: React.FC<{ initialDivision?: string; isStandalone?: boolean }> = ({
  initialDivision,
  isStandalone = false,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    division: initialDivision || '',
    serviceInterest: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Please provide a business email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Please enter a valid email address.';
    }

    if (!formData.division) {
      errs.division = 'Please select a business division or "Not Sure Yet".';
    }

    if (!formData.serviceInterest.trim()) {
      errs.serviceInterest = 'Please mention your project or service of interest.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share a brief summary of your requirements (minimum 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean corporate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      division: '',
      serviceInterest: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className={`${
        isStandalone ? 'pt-4 sm:pt-6 pb-14 sm:pb-20' : 'py-14 sm:py-20'
      } bg-warm-100 hairline-b scroll-mt-16 perf-section`}
    >
      <div className="max-w-corporate mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Reassurance & Corporate Placeholders (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              eyebrow="Direct Dialogue"
              title="Let's Talk About What Comes Next."
              description="Tell us a little about your project or business needs. We'll help you identify the appropriate Navanext team to contact."
              className="mb-6"
            />

            {/* Corporate Desk Placeholders Box */}
            <div className="bg-white p-6 sm:p-7 border border-border shadow-subtle rounded-sm space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-widest-caps text-gold-600 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Executive & Regional Inquiries</span>
              </h3>

              <div className="space-y-4 text-xs text-charcoal-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy-900">Headquarters Location</div>
                    <div className="text-muted leading-relaxed">
                      {siteConfig.contactInfo.headquarters}
                      <br />
                      {siteConfig.contactInfo.cityCountry}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy-900">Direct Inquiries Inbox</div>
                    <div className="font-mono text-muted">{siteConfig.contactInfo.email}</div>
                    <div className="text-[10px] text-gold-600 italic mt-0.5">
                      {siteConfig.contactInfo.emailNote}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy-900">Direct Telephone</div>
                    <div className="font-mono text-muted">{siteConfig.contactInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy-900">Desk Hours</div>
                    <div className="text-muted">{siteConfig.contactInfo.businessHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Notice */}
            <div className="p-4 bg-white/70 border border-border/80 rounded-sm text-xs text-muted flex items-start gap-2.5">
              <Info className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <span>
                <strong>Technical Note:</strong> Form is wired with React state and live validation. To connect live backend routing (e.g. AWS SES, Resend, or corporate CRM webhook), modify the handler in <code>ContactSection.tsx</code>.
              </span>
            </div>
          </div>

          {/* Right Column: Premium Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 border border-border rounded-sm shadow-elevated">
              {isSubmitted ? (
                /* Success State */
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-subtle">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-navy-900">
                      Enquiry Recorded (Demonstration State)
                    </h3>
                    <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-navy-900">{formData.fullName}</strong>. In production, this enquiry would be automatically routed to the executive desk for <strong>{formData.division}</strong>.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 bg-warm-50 border border-border rounded-sm max-w-md mx-auto text-left text-xs space-y-2 text-charcoal-800">
                    <div>
                      <span className="font-bold text-navy-900">Business Email:</span>{' '}
                      {formData.businessEmail}
                    </div>
                    {formData.companyName && (
                      <div>
                        <span className="font-bold text-navy-900">Company:</span>{' '}
                        {formData.companyName}
                      </div>
                    )}
                    <div>
                      <span className="font-bold text-navy-900">Division:</span>{' '}
                      {formData.division}
                    </div>
                    <div>
                      <span className="font-bold text-navy-900">Interest:</span>{' '}
                      {formData.serviceInterest}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button onClick={resetForm} variant="secondary" size="md">
                      Send Another Demonstration Enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-border/80 pb-4 mb-2">
                    <h3 className="font-display text-xl font-bold text-navy-900">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-muted mt-1">
                      Please complete the fields below to initiate a structured conversation with Navanext leadership.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1.5"
                      >
                        Full Name <span className="text-gold-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-warm-50/50 text-navy-900 focus:bg-white focus:outline-none focus:ring-1 transition-colors ${
                          errors.fullName
                            ? 'border-rose-400 focus:ring-rose-400'
                            : 'border-border focus:border-gold-500 focus:ring-gold-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="businessEmail"
                        className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1.5"
                      >
                        Business Email <span className="text-gold-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="businessEmail"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        placeholder="e.g. e.vance@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-warm-50/50 text-navy-900 focus:bg-white focus:outline-none focus:ring-1 transition-colors ${
                          errors.businessEmail
                            ? 'border-rose-400 focus:ring-rose-400'
                            : 'border-border focus:border-gold-500 focus:ring-gold-500'
                        }`}
                      />
                      {errors.businessEmail && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.businessEmail}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company Name (optional) & Business Division */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1.5"
                      >
                        Company Name <span className="text-muted font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Holdings"
                        className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-border bg-warm-50/50 text-navy-900 focus:bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="division"
                        className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1.5"
                      >
                        Business Division <span className="text-gold-600">*</span>
                      </label>
                      <select
                        id="division"
                        value={formData.division}
                        onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-warm-50/50 text-navy-900 focus:bg-white focus:outline-none focus:ring-1 transition-colors ${
                          errors.division
                            ? 'border-rose-400 focus:ring-rose-400'
                            : 'border-border focus:border-gold-500 focus:ring-gold-500'
                        }`}
                      >
                        <option value="">Select a business division...</option>
                        {siteConfig.divisions.map((div) => (
                          <option key={div.id} value={div.name}>
                            {div.name} ({div.industry})
                          </option>
                        ))}
                        <option value="Not Sure Yet / Multiple Divisions">
                          Not Sure Yet (Group Advisory / Cross-Division)
                        </option>
                      </select>
                      {errors.division && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.division}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Project or Service Interest */}
                  <div>
                    <label
                      htmlFor="serviceInterest"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1.5"
                    >
                      Project or Service Interest <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      placeholder="e.g. Commercial infrastructure, Enterprise cloud migration, Property master plan"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-warm-50/50 text-navy-900 focus:bg-white focus:outline-none focus:ring-1 transition-colors ${
                        errors.serviceInterest
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-border focus:border-gold-500 focus:ring-gold-500'
                      }`}
                    />
                    {errors.serviceInterest && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.serviceInterest}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1.5"
                    >
                      Message / Project Context <span className="text-gold-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current requirements, target timelines, or any specific considerations..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-warm-50/50 text-navy-900 focus:bg-white focus:outline-none focus:ring-1 transition-colors ${
                        errors.message
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-border focus:border-gold-500 focus:ring-gold-500'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Recording Enquiry...' : 'Send an Enquiry'}
                    </Button>

                    <span className="text-[11px] text-muted">
                      Your information is held in strict commercial confidentiality.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
