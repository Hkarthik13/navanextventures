import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CorporateTicker } from '../components/home/CorporateTicker';
import { IntroSection } from '../components/home/IntroSection';
import { BusinessesSection } from '../components/home/BusinessesSection';
import { SynergyMatrix } from '../components/home/SynergyMatrix';
import { ApproachSection } from '../components/home/ApproachSection';
import { WhyNavanextSection } from '../components/home/WhyNavanextSection';
import { ShowcaseSection } from '../components/home/ShowcaseSection';
import { ContactSection } from '../components/home/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="page-entrance">
      <HeroSection />
      <CorporateTicker />
      <IntroSection />
      <BusinessesSection />
      <SynergyMatrix />
      <ApproachSection />
      <WhyNavanextSection />
      <ShowcaseSection limit={6} />
      <ContactSection />
    </div>
  );
};
