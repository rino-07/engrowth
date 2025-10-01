import React from 'react';
import { Metadata } from 'next';
import Section from './Section';
import Container from './Container';

interface PageTemplateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  className?: string;
  background?: 'white' | 'warm-white' | 'light-gray' | 'deep-navy' | 'gradient' | 'brand-red';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  title,
  description,
  keywords,
  className = '',
  background = 'white',
  padding = 'lg'
}) => {
  return (
    <div className={`min-h-screen ${className}`}>
      {children}
    </div>
  );
};

export default PageTemplate;



