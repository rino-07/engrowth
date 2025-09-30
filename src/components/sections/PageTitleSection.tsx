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
  // 文字列の改行を、Reactの要素に変換
  const formattedDescription = description.split('|').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {/* 最後の行以外に<br />タグを挿入 */}
      {index < description.split('|').length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <Section background="warm-white" className="pt-12 sm:pt-16 !pb-0">
      <Container>
        <div className="!mb-0">
          <p className="text-sm sm:text-base tracking-wider font-medium font-serif mb-4 text-brand-red">
            {label}
          </p>
          <Typography variant="heading-lg" className="text-dark-gray font-serif !mb-0">
            {title}
          </Typography>
          <Typography variant="body-lg" className="text-gray mb-6 !mt-0">
            {formattedDescription} {/* 変換した要素をここに渡す */}
          </Typography>
          {/* 仕切り線を下に配置 */}
          <div className="w-24 h-px bg-gray-300"></div>
        </div>
      </Container>
    </Section>
  );
}