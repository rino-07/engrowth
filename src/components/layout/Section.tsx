import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'warm-white' | 'light-gray' | 'deep-navy' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerClassName = '',
  background = 'white',
  padding = 'lg',
  fullWidth = false
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    'warm-white': 'bg-warm-white',
    'light-gray': 'bg-light-gray',
    'deep-navy': 'bg-deep-navy text-white',
    gradient: 'bg-gradient-to-br from-warm-white to-white'
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-24'
  };

  const sectionClasses = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  if (fullWidth) {
    return (
      <section className={sectionClasses}>
        {children}
      </section>
    );
  }

  return (
    <section className={sectionClasses}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
