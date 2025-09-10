import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';
import { CourseCards } from '@/components/sections/CourseCards';
import { FaUserTie, FaChartLine, FaCog, FaGraduationCap, FaLanguage, FaFlask } from 'react-icons/fa';
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
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Section background="gradient" padding="xl" className="relative min-h-[60vh] flex items-center">
        {/* 背景画像 */}
        <Image
          src="/images/drive-download-20250908T014101Z-1-001/top/top01.png"
          alt="背景画像"
          fill
          priority
          className="object-cover opacity-10"
          style={{ objectPosition: 'center 20%' }}
        />
        <Container className="relative z-10 w-full">
          <div className="text-center animate-fadeInUp">
            <Typography variant="heading-xl" className="text-dark-gray mb-6" as="h1">
              あなたも
              <span className="text-brand-red">Engrowth</span>
              の一員になりませんか？
            </Typography>
            <Typography variant="body-lg" className="text-gray mb-8 max-w-3xl mx-auto">
              独自のエコシステムで留学生の経済問題を解決し、
              <br />
              日本人だからこそ提供できる英会話コンサルティングサービス
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  無料相談を予約する
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="secondary" size="lg">
                  コース詳細を見る
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Engrowthは○○な人に選ばれてます Section */}
      <Section background="warm-white" padding="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Title */}
            <div>
              <Typography variant="heading-lg" className="text-dark-gray mb-4 lg:mb-8">
                Engrowthは○○な人に選ばれてます
              </Typography>
            </div>

            {/* Right: Points */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/point1.png"
                  alt="コンサルタントは全員留学経験のある日本人"
                  width={48}
                  height={48}
                  className="w-12 h-12 flex-shrink-0"
                />
                <Typography variant="heading-sm" className="text-dark-gray">
                  コンサルタントは全員留学経験のある日本人
                </Typography>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/images/Point2.png"
                  alt="科学的根拠に基づく学習プログラム"
                  width={48}
                  height={48}
                  className="w-12 h-12 flex-shrink-0"
                />
                <Typography variant="heading-sm" className="text-dark-gray">
                  科学的根拠に基づく学習プログラム
                </Typography>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/images/Point3.png"
                  alt="1人ひとりに合わせたオーダーメイドの学習設計"
                  width={48}
                  height={48}
                  className="w-12 h-12 flex-shrink-0"
                />
                <Typography variant="heading-sm" className="text-dark-gray">
                  1人ひとりに合わせたオーダーメイドの学習設計
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Course Section (4-column) */}
<Section background="light-gray" padding="lg" className="overflow-visible">
  <FullBleed1440>
    <div className="text-center mb-8 lg:mb-16">
      <Typography variant="heading-lg" className="text-dark-gray mb-4 lg:mb-8 section-title-with-underbar">
        Course
      </Typography>
    </div>

    <CourseCards />

    <div className="text-center mt-12">
      <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
        コース・料金
      </Button>
    </div>
  </FullBleed1440>
</Section>

      {/* 4. 無料カウンセリングバナー（画像のみ） */}
      <Section background="warm-white" padding="lg">
        <Container>
          <div className="relative">
            <Link href="/contact">
              <Image
                src="/images/main_banner.png"
                alt="30分の無料カウンセリング"
                width={1200}
                height={300}
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 5. 従来スクールとの違い（2カラム比較） */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8 section-title-with-underbar">
              従来のスクールとのちがい
            </Typography>
          </div>

          <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* 従来スクール - 40% */}
            <div className="col-span-12 lg:col-span-5 bg-gray-50 rounded-2xl p-8">
              <Typography variant="heading-md" className="text-gray mb-8 text-center">
                従来
              </Typography>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    講師が外国人で日本人のつまづくポイントが理解できない
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    講師が英語を話せない
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    個人の経験に基づいたカリキュラム
                  </Typography>
                </div>
              </div>
            </div>

            {/* 矢印 - 10% */}
            <div className="col-span-12 lg:col-span-2 flex items-center justify-center py-4 lg:py-0">
              <div className="text-brand-red">
                {/* スマホ: 下向き矢印 */}
                <svg className="w-16 h-16 lg:hidden" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 13.025l2.828-2.847 6.176 6.176v-16.354h3.992v16.354l6.176-6.176 2.828 2.847-11 10.975z"/>
                </svg>
                {/* PC: 右向き矢印 */}
                <svg className="w-16 h-16 hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </div>
            </div>

            {/* Engrowth - 40% */}
            <div className="col-span-12 lg:col-span-5 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-brand-red/20">
              <Typography variant="heading-md" className="text-brand-red mb-8 text-center">
                Engrowth
              </Typography>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaGraduationCap className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                  <Typography variant="body-md" className="text-dark-gray">
                    日本人のつまづくポイントを理解した日本人コンサルタント
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <FaLanguage className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                  <Typography variant="body-md" className="text-dark-gray">
                    全員が日本語を第一言語としたコンサルタント
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <FaFlask className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                  <Typography variant="body-md" className="text-dark-gray">
                    科学的根拠に基づいた英語習得プログラム
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}