import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import Image from 'next/image';
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

export const metadata = {
  title: '支援者の方へ - 才能を、資金不足で開ざさない | Engrowth',
  description: 'グローバル人材育成への投資が、日本の未来への投資に。あなたの支援が明日の日本のグローバルリーダーを育てます。パートナーシップ相談・Engrowthの仕組み詳細。',
  keywords: 'Engrowth, 支援者, パートナーシップ, グローバル人材, 投資, 企業支援',
};

export default function SupportersPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Hero
        title="支援者の方へ"
        subtitle="日本の未来を、経済的な理由で閉ざさないために。〜グローバル人材育成への投資が、日本社会や企業の未来への投資に〜 あなたの支援が、明日の日本のグローバルリーダーを育てます"
        bgDesktopSrc="/images/supporters/supporters-hero-background.jpg"
        bgMobileSrc="/images/hero_sma/supporters_hero_sma.png"
        bgPosition="center 30%"
        className="flex items-center justify-center text-center"
      />

      {/* 2. Engrowth支援プログラムとは */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Support Program"
          title="Engrowth支援プログラムで、未来の人材育成に参加"
          desc="Engrowth独自の仕組みにより、効率的なグローバル人材への育成が可能になります。将来的に有能な人材（学習意欲の高い日本人留学生）への支援を通じて、学習時間の創出と優秀なビジネス人材の育成を目指します。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="text-center">
            <p className="text-gray-600 mb-6">支援プログラムの詳細については、お気軽にお問い合わせください。</p>
            <Link href="/contact#:~:text=info%40-,engrowth,-.jp">
              <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                お問い合わせ
              </Button>
            </Link>
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
                src="/images/supporters/cycle.png"
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
                  src="/images/supporters/discovery.png"
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
                  src="/images/supporters/branding.png"
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
                  src="/images/supporters/synergy.png"
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
                  src="/images/supporters/bronze.png"
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
                  src="/images/supporters/silver.png"
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
                  src="/images/supporters/gold.png"
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
                  src="/images/supporters/platinum.png"
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
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">Q</Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">支援の税務処理はどうなりますか？</Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">A</Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray">現在の英語力診断、目標設定、最適な学習プランの提案、プログラムの詳細説明など、英語学習に関するあらゆるご相談を承っております。</Typography>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">Q</Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">支援学生が卒業後、必ず学社に就職するのでしょうか？</Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">A</Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray">約30分程度を予定しております。お客様のご質問やご相談内容によって、多少前後する場合があります。</Typography>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">Q</Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">支援途中で学生がやめる場合事業で留学を断念する場合はどうなりますか？</Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">A</Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray">はい、ZoomやGoogle Meetを使用したオンラインカウンセリングも承っております。全国どこからでもご参加いただけます。</Typography>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">Q</Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">小規模企業、個人事業主でも参加できますか？</Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">A</Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray">いいえ、カウンセリング後の入会は任意です。まずはプログラムの内容をご理解いただき、ご納得いただいた上でのご入会をお待ちしております。</Typography>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">Q</Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">支援学生の選考基準を教えてください。</Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">A</Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray">ご相談、プラン提案は完全無料です。まずはお気軽にお声掛けください。</Typography>
                </div>
              </div>
            </Card>
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