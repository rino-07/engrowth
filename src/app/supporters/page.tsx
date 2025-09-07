import { Metadata } from 'next';

import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: '支援者の方へ - Engrowth',
  description: '才能を、資金不足で開ざさない。Engrowthの支援プログラムについて詳しく説明します。',
};

export default function SupportersPage() {
  return (
    <div className="min-h-screen">
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <nav className="text-sm mb-8">
              <Typography variant="body-sm" className="text-gray">
                Home &gt; 支援者の方へ
              </Typography>
            </nav>
            
            <Typography variant="heading-xl" className="text-dark-gray mb-4" as="h1">
              支援者の方へ
            </Typography>
            <Typography variant="heading-lg" className="text-brand-red mb-4">
              「才能を、資金不足で開ざさない」
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-2xl mx-auto">
              〜グローバル人材育成への投資が、日本の未来への投資に〜
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
