import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import FullBleed1440 from '@/components/layout/FullBleed1440';
import { CourseCards } from '@/components/sections/CourseCards';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Hero from '@/components/sections/Hero';

export const metadata = {
  title: 'コース・料金 - 目的に合わせて選べるコース・サービス | Engrowth',
  description: 'ビジネスコース、学生コース、スポットサービスなど、あなたの目的に合わせて選べる英語学習プログラム。透明性の高い料金設定で安心してご利用いただけます。',
  keywords: 'Engrowth, コース, 料金, ビジネス英語, 学生コース, スポットサービス',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ページヘッダー */}
      <Hero
        title=""
        bgDesktopSrc="/images/courses/courses_hero.png"
        bgMobileSrc="/images/hero_sma/courses_hero_sma.png"
        bgPosition="center 30%"
        className="flex items-center justify-center text-center"
      />

      {/* 2. コース選択（4カード） */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24 overflow-visible">
        <SectionHeaderLeft
          label="Courses & Services"
          title="目的に合わせて選べるコース・サービス"
          desc="ビジネス英語から留学準備、スポット利用まで。あなたのライフスタイルと目標に最適なプランをお選びいただけます。"
          className="mb-12 lg:mb-16"
        />
        
        <FullBleed1440>
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
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </FullBleed1440>
      </Section>

      <Section background="white" className="py-6 sm:py-8 lg:py-12">
  <Container>
    <div className="text-center">
    <h2 style={{ fontSize: '60px', fontFamily: '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "MS PMincho", "MS 明朝", serif' }}>
  Engrowthなら入会金無料
</h2>
    </div>
  </Container>
</Section>

      {/* 4. 料金表 */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Pricing"
          title="あなたの目標とペースに合わせて選べる料金プラン"
          desc="Engrowthなら入会金0円。長期プランほどお得に、継続的な学習をサポートします。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
            {/* 1ヶ月プラン */}
            <div className="flex justify-center">
              <Card className="p-6 text-center border-2 border-gray-200 hover:border-brand-red transition-all duration-300 w-full max-w-sm h-full flex flex-col">
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  1ヶ月
                </Typography>
                <Typography variant="heading-lg" className="text-brand-red mb-4">
                  $1,780
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  1ヶ月あたり $1,780
                </Typography>
                <div className="h-6 mb-4">
                  {/* 空のスペース（割引表示なし） */}
                </div>
                <Typography variant="body-sm" className="text-gray mb-6 flex-grow">
                  基本プラン
                  <br />
                  ※継続の方のみ1ヶ月単位でのお申し込み可
                </Typography>
              </Card>
            </div>

            {/* 3ヶ月プラン */}
            <div className="flex justify-center">
              <Card className="p-6 text-center border-2 border-gray-200 hover:border-brand-red transition-all duration-300 w-full max-w-sm h-full flex flex-col">
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  3ヶ月
                </Typography>
                <Typography variant="heading-lg" className="text-brand-red mb-4">
                  $4,490
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  1ヶ月あたり $1,493
                </Typography>
                <div className="h-6 mb-4">
                  {/* 空のスペース（割引表示なし） */}
                </div>
                <Typography variant="body-sm" className="text-gray mb-6 flex-grow">
                  3ヶ月集中プラン
                </Typography>
                <Button variant="primary" size="sm" className="w-full mt-auto">
                  このプランを選ぶ
                </Button>
              </Card>
            </div>

            {/* 6ヶ月プラン（人気） */}
            <div className="flex justify-center">
              <Card className="p-6 text-center border-2 border-brand-red bg-red-50 transition-all duration-300 w-full max-w-sm h-full flex flex-col relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold">
                    人気
                  </span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray mb-2 mt-2">
                  6ヶ月
                </Typography>
                <Typography variant="heading-lg" className="text-brand-red mb-4">
                  $7,490
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  1ヶ月あたり $1,246
                </Typography>
                <Typography variant="body-xs" className="text-action-green mb-4 h-6">
                  約16%OFF
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-6 flex-grow">
                  6ヶ月継続プラン
                </Typography>
                <Button variant="primary" size="sm" className="w-full mt-auto">
                  このプランを選ぶ
                </Button>
              </Card>
            </div>

            {/* 12ヶ月プラン */}
            <div className="flex justify-center">
              <Card className="p-6 text-center border-2 border-gray-200 hover:border-brand-red transition-all duration-300 w-full max-w-sm h-full flex flex-col">
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  12ヶ月
                </Typography>
                <Typography variant="heading-lg" className="text-brand-red mb-4">
                  $13,980
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  1ヶ月あたり $1,165
                </Typography>
                <Typography variant="body-xs" className="text-action-green mb-4 h-6">
                  約21%OFF
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-6 flex-grow">
                  12ヶ月完全サポートプラン
                </Typography>
                <Button variant="primary" size="sm" className="w-full mt-auto">
                  このプランを選ぶ
                </Button>
              </Card>
            </div>
          </div>

          {/* 注記 */}
          <div className="text-center mt-12">
            <Typography variant="body-sm" className="text-gray-500 max-w-2xl mx-auto">
              ※ 価格は税込み表示です。
              <br />
              ※ 長期プランほどお得になっており、継続的な学習をサポートします。
              <br />
              ※ 弊社では想定為替レート（3ヶ月ごとの平均値をとった額）を元に円での額を算出してます。
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 5. スポットサービス */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Spot Services"
          title="必要な時に、必要な分だけ利用できるスポットサービス"
          desc="定期コースに加えて、特定のニーズに対応したスポット利用も可能です。面接対策やプレゼン準備など、ピンポイントでサポートします。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
            {/* ビジネススポットサービス */}
            <Card className="p-6 text-center">
              <Image
                src="/images/spot-business/spot-business-observer.jpg"
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
                src="/images/students/essay-correction-before.jpg"
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
                  className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}