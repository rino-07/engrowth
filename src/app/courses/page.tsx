import { Metadata } from 'next';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { courses, pricingPlans, spotServices } from '@/data/courses';

export const metadata: Metadata = {
  title: 'コース・料金 - Engrowth',
  description: '目的に合わせて選べるコース・サービス。ビジネスコース、学生コース、スポットサービスをご用意しています。',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* 1. Page Header */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <nav className="text-sm mb-8">
              <Typography variant="body-sm" className="text-gray">
                Home &gt; コース・料金
              </Typography>
            </nav>
            
            <Typography variant="heading-xl" className="text-dark-gray mb-4" as="h1">
              コース・料金
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-2xl mx-auto">
              目的に合わせて選べるコース・サービス
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 2. 4コース紹介セクション */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ビジネスコース */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  ビジネスコース
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  忙しい社会人向けの効率的な英語学習
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>

            {/* ビジネススポットサービス */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-16 h-16 bg-action-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">BS</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  ビジネススポット
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  会議同席・資料翻訳・プレゼン準備
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>

            {/* 学生コース */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-16 h-16 bg-deep-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  学生コース
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  留学を目指す学生向けの総合プログラム
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>

            {/* 学生スポットサービス */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-16 h-16 bg-soft-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">SS</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  学生スポット
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  エッセイ添削・面接練習など
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. 無料カウンセリングバナー */}
      <Section background="brand-red" padding="lg">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute -top-2 -right-2 bg-white text-brand-red px-2 py-1 rounded-full text-xs font-bold">
                  カンタン2ステップ！
                </div>
                <Typography variant="heading-md" className="text-white mr-8">
                  30分の無料カウンセリングでご相談ください
                </Typography>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white text-action-green px-3 py-1 rounded-full text-sm font-bold mr-4">
                無料
              </div>
              <Button variant="primary" size="lg" className="bg-action-green hover:bg-green-700">
                カウンセリングを予約する
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. 料金表セクション */}
      <Section background="warm-white" padding="xl" id="pricing">
        <Container>
          <div className="text-center mb-12">
            <Typography variant="heading-lg" className="text-dark-gray mb-4">
              英会話コース
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-light-gray">
                    <th className="px-6 py-4 text-left font-semibold text-dark-gray">コース</th>
                    <th className="px-6 py-4 text-center font-semibold text-dark-gray">3ヶ月</th>
                    <th className="px-6 py-4 text-center font-semibold text-dark-gray">6ヶ月</th>
                    <th className="px-6 py-4 text-center font-semibold text-dark-gray">12ヶ月</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-light-gray">
                    <td className="px-6 py-4 font-medium text-dark-gray">ビジネスコース</td>
                    <td className="px-6 py-4 text-center">¥50,000</td>
                    <td className="px-6 py-4 text-center">¥90,000</td>
                    <td className="px-6 py-4 text-center">¥150,000</td>
                  </tr>
                  <tr className="border-b border-light-gray">
                    <td className="px-6 py-4 font-medium text-dark-gray">学生コース</td>
                    <td className="px-6 py-4 text-center">¥35,000</td>
                    <td className="px-6 py-4 text-center">¥65,000</td>
                    <td className="px-6 py-4 text-center">¥110,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <Typography variant="heading-md" className="text-brand-red font-bold">
                Engrowthなら入会金は0円
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. スポットサービス */}
      <Section background="light-gray" padding="xl" id="spot-services">
        <Container>
          <div className="text-center mb-12">
            <Typography variant="heading-lg" className="text-dark-gray mb-4">
              スポットサービス
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ビジネススポットサービス */}
            <Card className="p-6">
              <div className="mb-4">
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  ビジネススポットサービス
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  会議同席通訳（オンライン）、文書・資料翻訳など
                </Typography>
                <Typography variant="body-lg" className="text-brand-red font-bold">
                  ¥15,000〜
                </Typography>
              </div>
              <Button variant="outline" size="sm">
                詳しく見る→
              </Button>
            </Card>

            {/* 学生スポットサービス */}
            <Card className="p-6">
              <div className="mb-4">
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  学生スポットサービス
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  エッセイ添削、面接練習など
                </Typography>
                <Typography variant="body-lg" className="text-brand-red font-bold">
                  ¥5,000〜
                </Typography>
              </div>
              <Button variant="outline" size="sm">
                詳しく見る→
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
