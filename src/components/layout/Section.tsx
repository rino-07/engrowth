import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'warm-white' | 'light-gray' | 'deep-navy' | 'gradient' | 'brand-red';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  style?: React.CSSProperties;
  id?: string;
  'aria-label'?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerClassName = '',
  background = 'white',
  padding = 'lg',
  fullWidth = false,
  style,
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

  const paddingClasses = {
    sm: 'section-spacing-sm', // Mobile 24-32px → PC 48-64px
    md: 'section-spacing-sm', // Mobile 24-32px → PC 48-64px
    lg: 'section-spacing',    // Mobile 32-48px → PC 64-96px
    xl: 'section-spacing'     // Mobile 32-48px → PC 64-96px
  };

  const sectionClasses = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  if (fullWidth) {
    return (
      <section 
        className={sectionClasses} 
        style={style}
        id={id}
        aria-label={ariaLabel}
      >
        {children}
      </section>
    );
  }

  return (
    <section 
      className={sectionClasses} 
      style={style}
      id={id}
      aria-label={ariaLabel}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
