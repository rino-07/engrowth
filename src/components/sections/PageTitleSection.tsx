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
        <div className="mb-8">
          <p className="text-sm sm:text-base tracking-wider font-medium font-serif mb-4" style={{ color: '#d30306' }}>
            {label}
          </p>
          <Typography variant="heading-lg" className="text-dark-gray mb-4 font-serif">
            {title}
          </Typography>
          <Typography variant="body-lg" className="text-gray max-w-[65ch] mb-6">
            {description}
          </Typography>
          {/* 仕切り線を下に配置 */}
          <div className="w-24 h-px bg-gray-300"></div>
        </div>
      </Container>
    </Section>
  );
}
