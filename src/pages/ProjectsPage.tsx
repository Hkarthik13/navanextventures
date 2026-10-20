import React from 'react';
import { ShowcaseSection } from '../components/home/ShowcaseSection';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 bg-white min-h-screen page-entrance">
      <ShowcaseSection isPage />
    </div>
  );
};

