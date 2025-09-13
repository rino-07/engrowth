'use client';

import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';

type Props = {
  label: string;
  title: string;
  description: string;
};

export default function PageTitleSection({ label, title, description }: Props) {
  return (
    <Section background="warm-white" className="py-12 sm:py-16">
      <Container>
        <div className="text-center mb-8">
          <div className="inline-block">
            {/* 仕切り線を上に配置 */}
            <div className="w-full h-px bg-gray-300 mb-6"></div>
            <p className="text-sm sm:text-base tracking-wider font-medium font-serif mb-4" style={{ color: '#d30306' }}>
              {label}
            </p>
            <Typography variant="heading-lg" className="text-dark-gray mb-4 font-serif">
              {title}
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-[65ch] mx-auto">
              {description}
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}
