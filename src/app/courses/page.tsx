import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { PricingSection } from '@/components/sections/PricingSection';
import { CourseCards } from '@/components/sections/CourseCards';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function FullBleed1440({ children }: { children: React.ReactNode }) {
  // 親の max-w-* を抜けて100vwまで広げ、内側で1440px上限に戻す
  return (
    <section className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      <div className="mx-auto max-w-[1440px] px-6">
        {children}
      </div>
    </section>
  );
}

export const metadata = {
  title: 'コース・料金 - 目的に合わせて選べるコース・サービス | Engrowth',
  description: 'ビジネスコース、学生コース、スポットサービスなど、あなたの目的に合わせて選べる英語学習プログラム。透明性の高い料金設定で安心してご利用いただけます。',
  keywords: 'Engrowth, コース, 料金, ビジネス英語, 学生コース, スポットサービス',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ページヘッダー */}
      <Section background="warm-white" padding="lg" className="relative min-h-[60vh] flex items-center">
        {/* 背景画像 */}
        <Image
          src="/images/drive-download-20250908T014101Z-1-001/courses/courses-business-course.jpg"
          alt="背景画像"
          fill
          priority
          className="object-cover opacity-10"
          style={{ objectPosition: 'center 30%' }}
        />
        <Container className="relative z-10 w-full">
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-4 section-title-with-underbar" as="h1">
              コース・料金
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 2. コース選択（4カード） */}
      <Section background="light-gray" padding="xl" className="overflow-visible">
        <FullBleed1440>
          <div className="text-center mb-12">
            <Typography variant="heading-lg" className="text-dark-gray mb-4 section-title-with-underbar" as="h2">
              目的に合わせて選べるコース・サービス
            </Typography>
          </div>
          <CourseCards />

          {/* 無料カウンセリングバナー */}
          <div className="relative mb-16 pt-10">
            <div className="max-w-4xl mx-auto">
              <Link href="/contact">
                <Image
                  src="/images/main_banner.png"
                  alt="30分の無料カウンセリングでご相談ください"
                  width={1200}
                  height={400}
                  className="w-full h-auto shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </FullBleed1440>
      </Section>

      {/* 3. 入会金0円の強調表示 */}
      <Section background="brand-red" padding="md">
        <Container>
          <div className="text-center">
            <Typography variant="heading-md" className="text-white font-bold">
              Engrowthでは、入会金・登録料0円。初期費用は一切かかりません。
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 4. 料金表 */}
      <PricingSection 
        title="あなたの目標とペースに合わせて選べる、柔軟なプランをご用意しました。"
        background="warm-white"
      />

      {/* 4. スポットサービス */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8 section-title-with-underbar" as="h2">
              スポットサービス
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
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
                会議同席通訳（オンライン）
                <br />
                資料作成・翻訳サポート
                <br />
                プレゼンテーション準備
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
                エッセイ添削
                <br />
                面接練習・対策
                <br />
                オンラインコンシェルジュ
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
                  className="w-full h-auto  shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}