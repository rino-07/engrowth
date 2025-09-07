import { Metadata } from 'next';

import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: '受講の流れ - Engrowth',
  description: 'Engrowthの受講の流れを4つのステップで詳しく説明します。',
};

export default function FlowPage() {
  return (
    <div className="min-h-screen">
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <nav className="text-sm mb-8">
              <Typography variant="body-sm" className="text-gray">
                Home &gt; 受講の流れ
              </Typography>
            </nav>
            
            <Typography variant="heading-xl" className="text-dark-gray mb-4" as="h1">
              受講の流れ
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-2xl mx-auto">
              英語学習の悩み、手軽に聞きたい
              <br />
              〜正しいやり方を知れば誰でもできるようになる〜
            </Typography>
          </div>
        </Container>
      </Section>

      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-8">
              準備中
            </Typography>
            <Typography variant="body-lg" className="text-gray">
              このページは現在準備中です。
            </Typography>
          </div>
        </Container>
      </Section>
    </div>
  );
}
