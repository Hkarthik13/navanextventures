import React from 'react';
import { Link } from 'react-router-dom';

interface BrandMarkProps {
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withLink?: boolean;
  divisionLabel?: string;
  className?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  variant = 'dark',
  size = 'md',
  withLink = true,
  divisionLabel,
  className = '',
}) => {
  const isLight = variant === 'light';
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-4xl sm:text-5xl',
  };

  const content = (
    <div className={`flex items-center gap-2.5 select-none group ${className}`}>
      {/* Navanext Ventures angular N mark */}
      <div className={`${iconSizes[size]} relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            d="M6 32V8L34 32V8M6 32L20 20L34 32"
            stroke="#205344"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span className={`font-sans font-semibold tracking-[0.01em] lowercase whitespace-nowrap ${textSizes[size]} ${isLight ? 'text-white' : 'text-[#111713]'}`}>
        navanextventures<span className="text-[#205344]">.</span>
        {divisionLabel && <span className="sr-only"> {divisionLabel}</span>}
      </span>
    </div>
  );

  if (withLink) {
    return (
      <Link
        to="/"
        className="inline-block transition-opacity hover:opacity-95 focus-visible:outline-gold-500"
        aria-label="navanextventures homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
};
