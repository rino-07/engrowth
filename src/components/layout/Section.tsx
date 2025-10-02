import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'warm-white' | 'light-gray' | 'deep-navy' | 'gradient' | 'brand-red';
  id?: string;
  'aria-label'?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id,
  'aria-label': ariaLabel
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    'warm-white': 'bg-warm-white',
    'light-gray': 'bg-light-gray',
    'deep-navy': 'bg-deep-navy text-white',
    'brand-red': 'bg-brand-red text-white',
    gradient: 'bg-gradient-to-br from-warm-white to-white'
  };

  const sectionClasses = `${backgroundClasses[background]} ${className}`;

  return (
    <section 
      className={sectionClasses} 
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
};

export default Section;
