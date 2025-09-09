import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { PricingSection } from '@/components/sections/PricingSection';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'コース・料金 - 目的に合わせて選べるコース・サービス | Engrowth',
  description: 'ビジネスコース、学生コース、スポットサービスなど、あなたの目的に合わせて選べる英語学習プログラム。透明性の高い料金設定で安心してご利用いただけます。',
  keywords: 'Engrowth, コース, 料金, ビジネス英語, 学生コース, スポットサービス',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ページヘッダー */}
      <Section background="warm-white" padding="lg">
        <Container>
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h1">
              コース・料金
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 2. コース選択（4カード） */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-12">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
              目的に合わせて選べるコース・サービス
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* ビジネスコース */}
            <Link href="/courses/business">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src="/images/drive-download-20250908T014101Z-1-001/top/service-consultant.jpg"
                    alt="ビジネスコース"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    ビジネスコース
                  </div>
                </div>
              </Card>
            </Link>

            {/* ビジネススポットサービス */}
            <Link href="/courses/business-spot">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src="/images/drive-download-20250908T014101Z-1-001/spot-business/spot-business-interpretation.jpg"
                    alt="ビジネススポットサービス"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    ビジネススポットサービス
                  </div>
                </div>
              </Card>
            </Link>

            {/* 学生コース */}
            <Link href="/courses/study">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src="/images/drive-download-20250908T014101Z-1-001/students/students-class-understanding.jpg"
                    alt="学生コース"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    学生コース
                  </div>
                </div>
              </Card>
            </Link>

            {/* 学生スポットサービス */}
            <Link href="/courses/study-spot">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src="/images/drive-download-20250908T014101Z-1-001/students/stu08.png"
                    alt="学生スポットサービス"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    学生スポットサービス
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          {/* 無料カウンセリングバナー */}
          <div className="relative mb-16">
            <div className="max-w-4xl mx-auto">
              <Link href="/contact">
                <Image
                  src="/images/main_banner.png"
                  alt="30分の無料カウンセリングでご相談ください"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. 料金表 */}
      <PricingSection 
        title="あなたの目標とペースに合わせて選べる、柔軟なプランをご用意しました。"
        description="入会金0円で始められます。長期プランほどお得になっており、継続的な学習をサポートします。"
        background="warm-white"
      />

      {/* 4. スポットサービス */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              スポットサービス
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* ビジネススポットサービス */}
            <Card className="p-6 text-center">
              <Image
                src="/images/drive-download-20250908T014101Z-1-001/spot-business/spot-business-observer.jpg"
                alt="ビジネススポットサービス"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                ビジネススポットサービス
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-4">
                会議同席通訳（オンライン）、xxなど
                <br />
                ¥xx,xxx
              </Typography>
              <Link href="/courses/business-spot">
                <Button variant="secondary" size="sm" className="w-full">
                  詳しく見る→
                </Button>
              </Link>
            </Card>

            {/* 学生スポットサービス */}
            <Card className="p-6 text-center">
              <Image
                src="/images/drive-download-20250908T014101Z-1-001/students/essay-correction-before.jpg"
                alt="学生スポットサービス"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                学生スポットサービス
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-4">
                エッセイ添削、面接練習など
                <br />
                ¥xx,xxx
              </Typography>
              <Link href="/courses/study-spot">
                <Button variant="secondary" size="sm" className="w-full">
                  詳しく見る→
                </Button>
              </Link>
            </Card>
          </div>

          {/* 最終カウンセリングバナー */}
          <div className="relative">
            <div className="max-w-4xl mx-auto">
              <Link href="/contact">
                <Image
                  src="/images/main_banner.png"
                  alt="30分の無料カウンセリングでご相談ください"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}