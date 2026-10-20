import React from 'react';
import { ContactSection } from '../components/home/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-20 bg-warm-100 min-h-screen page-entrance">
      <ContactSection isStandalone />
    </div>
  );
};
