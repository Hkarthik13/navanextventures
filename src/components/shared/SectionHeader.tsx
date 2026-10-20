import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'dark',
  className = '',
}) => {
  const isLight = variant === 'light';
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-6 sm:mb-8 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2 mb-3.5 text-xs font-semibold uppercase tracking-widest-caps ${
            isCenter ? 'justify-center' : 'justify-start'
          } ${isLight ? 'text-gold-400' : 'text-gold-600'}`}
        >
          <span className="w-5 h-[1.5px] bg-gold-500 inline-block"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.18] mb-4 ${
          isLight ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-300' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
