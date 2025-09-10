import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';
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
  title: '支援者の方へ - 才能を、資金不足で開ざさない | Engrowth',
  description: 'グローバル人材育成への投資が、日本の未来への投資に。あなたの支援が明日の日本のグローバルリーダーを育てます。パートナーシップ相談・Engrowthの仕組み詳細。',
  keywords: 'Engrowth, 支援者, パートナーシップ, グローバル人材, 投資, 企業支援',
};

export default function SupportersPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="xl" className="relative min-h-[60vh] flex items-center">
        {/* 背景画像 */}
        <Image
          src="/images/drive-download-20250908T014101Z-1-001/supporters/supporters-hero-background.jpg"
          alt="背景画像"
          fill
          priority
          className="object-cover opacity-10"
          style={{ objectPosition: 'center 35%' }}
        />
        <Container className="relative z-10 w-full">
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 section-title-with-underbar" as="h1">
              支援者の方へ
            </Typography>
            <Typography variant="heading-md" className="text-gray mb-8">
              日本の未来を、経済的な理由で閉ざさないために
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-3xl mx-auto mb-12">
              〜グローバル人材育成への投資が、日本社会や企業の未来への投資に〜
              <br /><br />
              あなたの支援が、明日の日本のグローバルリーダーを育てます
            </Typography>

            <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Link href="/contact" className="flex-1">
                <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700 w-full">
                  パートナーシップ相談
                </Button>
              </Link>
              <Link href="/about" className="flex-1">
                <Button variant="secondary" size="lg" className="w-full">
                  Engrowthの仕組み詳細
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Engrowth支援プログラムとは */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              Engrowth支援プログラムとは
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto leading-relaxed">
              Engrowth独自の仕組みにより、効率的なグローバル人材への育成が可能になります。
              <br />
              弊社内での独自システムを通じて、将来的に有能な人材（学習意欲の高い日本人留学生）と支援が可能です。
              <br /><br />
              留学生活での、高度な学びの環境を維持するための英語コンサルティング活動を支えることで、学習時間の創出と優秀なビジネス人材の育成を目指します。
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 3. 日本が失いつつある、優秀なグローバル人材 */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              日本が失いつつある、優秀なグローバル人材
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Image
                src="/images/drive-download-20250908T014101Z-1-001/supporters/cycle.png"
                alt="グローバル人材エコシステム図"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg mb-8"
              />
              <Typography variant="body-md" className="text-gray text-center">
                エコシステム図：グローバル人材の流出問題と支援の重要性
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. 企業メリット */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              企業様メリット
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
            {/* 人材発掘・採用機会 */}
            <Card className="p-8 text-center h-full">
              <Typography variant="heading-sm" className="text-dark-gray mb-6 font-serif">
                人材発掘・採用機会
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-32 flex items-center justify-center mb-6">
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/supporters/discovery.png"
                  alt="人材発掘"
                  width={100}
                  height={80}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <Typography variant="body-md" className="text-dark-gray mb-4 font-semibold">
                支援学生との交流
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                有能な学生との交流機会は、未来を担う社内人材との貴重な機会を先行して得られる
              </Typography>
            </Card>

            {/* CSR・企業ブランディング */}
            <Card className="p-8 text-center h-full">
              <Typography variant="heading-sm" className="text-dark-gray mb-6 font-serif">
                CSR・企業ブランディング
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-32 flex items-center justify-center mb-6">
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/supporters/branding.png"
                  alt="CSR・ブランディング"
                  width={100}
                  height={80}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <Typography variant="body-md" className="text-dark-gray mb-4 font-semibold">
                教育支援・人材流出防止
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                教育投資による社会貢献で企業イメージ向上と優秀な国内人材の海外流出を防ぐ
              </Typography>
            </Card>

            {/* 事業シナジー */}
            <Card className="p-8 text-center h-full">
              <Typography variant="heading-sm" className="text-dark-gray mb-6 font-serif">
                事業シナジー
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-32 flex items-center justify-center mb-6">
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/supporters/synergy.png"
                  alt="事業シナジー"
                  width={100}
                  height={80}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <Typography variant="body-md" className="text-dark-gray mb-4 font-semibold">
                多様な人材とのシナジー
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                異なる専門分野の学生との協業で新たなビジネス機会と革新的アイデアを創出
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. 企業規模・ご予算に応じた柔軟な支援プラン */}
      <Section background="warm-white" padding="xl" className="overflow-visible">
        <FullBleed1440>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              企業規模・ご予算に応じた柔軟な支援プラン
            </Typography>
          </div>

            <div className="cards-grid-responsive w-full mb-16">
            {/* ブロンズパートナー */}
            <Card className="p-6 text-center border-2 border-amber-200 bg-amber-50">
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                ブロンズパートナー
              </Typography>
              <Typography variant="body-md" className="text-brand-red font-bold mb-4">
                月額：50万円〜
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 flex items-center justify-center mb-4" style={{ minHeight: '120px' }}>
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/supporters/bronze.png"
                  alt="ブロンズパートナー"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain rounded"
                />
              </div>
            </Card>

            {/* シルバーパートナー */}
            <Card className="p-6 text-center border-2 border-gray-300 bg-gray-50">
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                シルバーパートナー
              </Typography>
              <Typography variant="body-md" className="text-brand-red font-bold mb-4">
                月額：100万円〜
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 flex items-center justify-center mb-4" style={{ minHeight: '120px' }}>
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/supporters/silver.png"
                  alt="シルバーパートナー"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain rounded"
                />
              </div>
            </Card>

            {/* ゴールドパートナー */}
            <Card className="p-6 text-center border-2 border-yellow-300 bg-yellow-50">
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                ゴールドパートナー
              </Typography>
              <Typography variant="body-md" className="text-brand-red font-bold mb-4">
                月額：200万円〜
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 flex items-center justify-center mb-4" style={{ minHeight: '120px' }}>
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/supporters/gold.png"
                  alt="ゴールドパートナー"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain rounded"
                />
              </div>
            </Card>

            {/* プラチナパートナー */}
            <Card className="p-6 text-center border-2 border-purple-300 bg-purple-50">
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                プラチナパートナー
              </Typography>
              <Typography variant="body-md" className="text-brand-red font-bold mb-4">
                月額：500万円〜
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 flex items-center justify-center mb-4" style={{ minHeight: '120px' }}>
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/supporters/platinum.png"
                  alt="プラチナパートナー"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain rounded"
                />
              </div>
            </Card>
          </div>

          {/* お気軽にご相談ください */}
          <div className="text-center mb-16">
            <Typography variant="body-lg" className="text-gray mb-8">
              お気軽にご相談ください
            </Typography>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
                パートナーシップ相談
              </Button>
            </Link>
          </div>
        </FullBleed1440>
      </Section>

      {/* 6. よくある質問 */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              よくある質問
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 支援の税務処理はどうなりますか？
              </Typography>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 支援学生が卒業後、必ず学社に就職するのでしょうか？
              </Typography>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 支援途中で学生がやめる場合事業で留学を断念する場合はどうなりますか？
              </Typography>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 小規模企業、個人事業主でも参加できますか？
              </Typography>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 支援学生の選考基準を教えてください。
              </Typography>
            </div>
          </div>

          {/* main_banner.png */}
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
    </div>
  );
}