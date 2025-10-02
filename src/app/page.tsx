import Link from 'next/link';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import FullBleed1440 from '@/components/layout/FullBleed1440';
import Image from 'next/image';
import { CourseCards } from '@/components/sections/CourseCards';
import { FaGraduationCap, FaLanguage, FaFlask } from 'react-icons/fa';
import React from 'react';
import { EvidenceSection } from '@/components/sections/EvidenceSection';
import MethodCards from '@/components/sections/MethodCards';
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[50vh] md:min-h-[60vh] lg:min-h-[80vh]">
        <Image
          src="/images/top/top01.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover aspect-[16/9] w-full h-full"
          style={{ objectPosition: 'center 20%' }}
        />
          <div className="absolute inset-0 bg-white opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="p-6">
            <h1 className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-serif" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              あなたも<span className="text-brand-red" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.7)' }}>Engrowth</span>の一員になりませんか？
            </h1>
            <p className="text-white mb-8 md:mb-10 max-w-[65ch] mx-auto text-base md:text-lg leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              独自のエコシステムで留学生の経済問題を解決し、
              <br />
              日本人だからこそ提供できる英会話コンサルティングサービス
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors bg-brand-red text-white hover:bg-red-700"
              >
                無料相談を予約する
              </Link>
              <Link
                href="/courses"
                id="cta-course-detail"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-all duration-200 bg-white text-gray-800 border border-gray-200 hover:shadow-lg"
              >
                コース詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is Engrowth Section - 2カラムレイアウト */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* 左側: タイトルと説明文 */}
            <div>
              <p className="text-sm sm:text-base tracking-wider font-medium font-serif mb-4 text-brand-red">
                What is Engrowth
              </p>
              <Typography variant="heading-lg" className="text-dark-gray mb-4 lg:mb-8 font-serif">
                本気で英語力を上げたい人に選ばれています。
              </Typography>
              <Typography variant="body-lg" className="text-gray max-w-[85ch] leading-relaxed">
                一人ひとりの目標や課題解決に最適化された科学的な学習カリキュラムで、専属のコンサルタントが毎日の学習に徹底伴走し、「学習生産性」と「継続間」を最大化して英語力の上達を実現します。
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
                  src="/images/top/Point2.png"
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
                  src="/images/top/Point3.png"
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

      {/* 2. 科学的根拠セクション */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <Container className="px-4 sm:px-6 lg:px-8">
          <EvidenceSection
            label="Scientific Evidence"
            title="科学的根拠に基づいた学習法"
            desc="長年の研究によって実証された効果的な英語学習メソッドを採用しています。"
          />
        </Container>
      </Section>

      {/* 3. 学習メソッドセクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 font-serif">
              科学的根拠に基づく3つの学習メソッド
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-3xl mx-auto">
              ハーバード大学などの最新研究に基づいた効果的な学習方法を、Engrowth独自のアプローチで実践します。
            </Typography>
          </div>
          
          <MethodCards />
        </Container>
      </Section>

      {/* 4. Course Section (4-column) */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24 overflow-visible">
        <Container className="px-4 sm:px-6 lg:px-8">
          <SectionHeaderLeft
            label="Course"
            title="目的やレベルに合わせて選べるコース"
            desc="ビジネス英語から留学準備まで、あなたの目標に最適化されたプログラムをご用意しています。"
            className="mb-12 lg:mb-16"
          />
        </Container>
        
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
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container className="px-4 sm:px-6 lg:px-8">
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
        <Container className="px-4 sm:px-6 lg:px-8">
          <SectionHeaderLeft
            label="Difference"
            title="従来のスクールとは根本的に異なるアプローチ"
            desc="一般的な英語スクールの課題を解決する、科学的根拠に基づいた学習システムを提供しています。"
            className="mb-12 lg:mb-16"
          />
        </Container>
        
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* 従来スクール - 40% */}
            <div className="col-span-12 lg:col-span-5 bg-gray-50 rounded-2xl p-8">
              <Typography variant="heading-md" className="text-gray mb-8 text-left">
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
                <svg className="w-16 h-16 lg:hidden" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M1 13.025l2.828-2.847 6.176 6.176v-16.354h3.992v16.354l6.176-6.176 2.828 2.847-11 10.975z"/>
                </svg>
                {/* PC: 右向き矢印 */}
                <svg className="w-16 h-16 hidden lg:block" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </div>
            </div>

            {/* Engrowth - 40% */}
            <div className="col-span-12 lg:col-span-5 bg-red-50 rounded-2xl p-8 border border-brand-red/20">
              <Typography variant="heading-md" className="text-brand-red mb-8 text-left">
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