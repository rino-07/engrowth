import Link from 'next/link';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import Image from 'next/image';
import { CourseCards } from '@/components/sections/CourseCards';
import { FaGraduationCap, FaLanguage, FaFlask } from 'react-icons/fa';
import React from 'react';
import Hero from '@/components/sections/Hero';

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
      <Hero
  title={
    <>
      あなたも
      <span className="text-brand-red">Engrowth</span>
      の一員になりませんか？
    </>
  }
  subtitle={
    <>
      <span className="text-dark-gray">独自のエコシステムで留学生の経済問題を解決し、</span>
      <br />
      <span className="text-dark-gray">日本人だからこそ提供できる英会話コンサルティングサービス</span>
    </>
  }
  bgDesktopSrc="/images/top/top01.png"
  bgMobileSrc="/images/hero_sma/top_hero_sma.png"
  ctas={[
    { href: '/contact', label: '無料相談を予約する', variant: 'primary' },
    { href: '/courses', label: 'コース詳細を見る', variant: 'secondary' },
  ]}
  className="flex items-center justify-center text-center"
/>

      {/* 2. What is Engrowth Section - 2カラムレイアウト */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* 左側: タイトルと説明文 */}
            <div>
              <p className="text-sm sm:text-base tracking-wider font-medium font-serif mb-4" style={{ color: '#d30306' }}>
                What is Engrowth
              </p>
              <Typography variant="heading-lg" className="text-dark-gray mb-4 lg:mb-8 font-serif">
                本気で英語力を上げたい学習者に選ばれています。
              </Typography>
              <Typography variant="body-lg" className="text-gray max-w-[85ch] leading-relaxed">
                一人ひとりの目標や課題解決に最適化された科学的な学習カリキュラムで、専任のコンサルタントが毎日の学習に徹底伴走し、「学習生産性」と「継続間」を最大化して英語力の上達を実現します。
              </Typography>
            </div>

            {/* 右側: Point 1-3を縦並び */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/point1.png"
                  alt="コンサルタントは全員留学経験のある日本人"
                  width={48}
                  height={48}
                  className="w-12 h-12 flex-shrink-0"
                  priority
                  unoptimized
                />
                <Typography variant="heading-sm" className="text-dark-gray font-serif">
                  コンサルタントは全員留学経験のある日本人
                </Typography>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/images/point2.png"
                  alt="科学的根拠に基づく学習プログラム"
                  width={48}
                  height={48}
                  className="w-12 h-12 flex-shrink-0"
                  priority
                  unoptimized
                />
                <Typography variant="heading-sm" className="text-dark-gray font-serif">
                  科学的根拠に基づく学習プログラム
                </Typography>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/images/point3.png"
                  alt="1人ひとりに合わせたオーダーメイドの学習設計"
                  width={48}
                  height={48}
                  className="w-12 h-12 flex-shrink-0"
                  priority
                  unoptimized
                />
                <Typography variant="heading-sm" className="text-dark-gray font-serif">
                  1人ひとりに合わせたオーダーメイドの学習設計
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Course Section (4-column) */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24 overflow-visible">
        <SectionHeaderLeft
          label="Course"
          title="目的やレベルに合わせて選べるコース"
          desc="ビジネス英語から留学準備まで、あなたの目標に最適化されたプログラムをご用意しています。"
          className="mb-12 lg:mb-16"
        />
        
        <FullBleed1440>
          <CourseCards />

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
                コース・料金
              </Button>
            </Link>
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
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Difference"
          title="従来のスクールとは根本的に異なるアプローチ"
          desc="一般的な英語スクールの課題を解決する、科学的根拠に基づいた学習システムを提供しています。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
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
            <div className="col-span-12 lg:col-span-2 flex items-center justify-center lg:py-0">
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
            <div className="col-span-12 lg:col-span-5 bg-red-50 rounded-2xl p-8 border border-brand-red/20">
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