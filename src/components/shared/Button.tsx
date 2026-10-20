import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...rest
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500 rounded-sm select-none active:scale-[0.99] cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 tracking-wide',
    md: 'text-sm px-5 py-2.5 gap-2 tracking-wide',
    lg: 'text-sm sm:text-base px-6 py-3.5 gap-2.5 tracking-wide font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-navy-900 text-white hover:bg-navy-850 hover:shadow-elevated border border-navy-900',
    secondary:
      'bg-white text-navy-900 hover:bg-warm-100 hover:border-slate-400 border border-border shadow-subtle',
    gold:
      'bg-gold-500 text-white hover:bg-gold-600 hover:shadow-elevated border border-gold-500 font-semibold',
    outline:
      'bg-transparent text-navy-900 border border-slate-700/30 hover:border-navy-900 hover:bg-navy-900/5',
    ghost:
      'bg-transparent text-navy-900 hover:bg-black/5 hover:text-navy-950',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...rest}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
