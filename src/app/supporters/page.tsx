import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import FullBleed1440 from '@/components/layout/FullBleed1440';
import Image from 'next/image';
import React from 'react';
import Hero from '@/components/sections/Hero';

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
        title=""
        subtitle={null}
        bgDesktopSrc="/images/supporters/supporters_hero.png"
        bgMobileSrc="/images/hero_sma/supporters_hero_sma.png"
        bgPosition="center 30%"
        className="flex items-center justify-center text-center"
        imageWidth={2021}
        imageHeight={748}
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
<Section background="warm-white" className="pt-24 pb-8">
  <Container>
    {/* 1. タイトル・説明文コンテナ: 下マージン mb-16 を mb-0 に削減 */}
    <div className="text-center mb-0"> 
      <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
        日本が失いつつある、優秀なグローバル人材
      </Typography>
      
      {/* 2. 説明文: 下マージン mb-8 を mb-4 に削減 */}
      <Typography variant="body-lg" className="text-gray mb-4"> 
        経済的理由により意欲ある人材の学習機会が失われることで起こっている負のサイクル。<br />
        潜在的な負のリスクが円安によって露見し、留学断念者が続出、その影響は一層未来へ影響していきます。
      </Typography>
    </div>

    {/* 3. 画像コンテナ: 下マージン mb-16 を mb-0 に削減 */}
    <div className="max-w-4xl mx-auto mb-0">
      <div className="rounded-2xl p-8">
        <Image
          src="/images/supporters/cycle.png"
          alt="グローバル人材エコシステム図"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg mb-8"
        />
        <Typography variant="body-lg" className="text-black text-center">
          エコシステム図：グローバル人材の流出問題と支援の重要性
        </Typography>
      </div>
    </div>
  </Container>
</Section>

      {/* 4. 企業メリット */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32">
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

      {/* 5. 支援に応じた支援プラン */}
      <Section background="warm-white" className="py-16 sm:py-20 lg:py-32 overflow-visible">
        <FullBleed1440>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
              支援に応じた優待特典をご用意しております
            </Typography>
            <Typography variant="body-lg" className="text-gray mb-8">
              個人、法人問わず、留学生コンサルタントへのご支援を随時受け付けております。<br />
              日本の未来を担う意欲の高い人材へのご支援を、ぜひご検討ください。<br /><br />
              なお、ご支援いただいた方に対し、下記を含む特典を提供いたします。<br />
            </Typography>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full mb-16 px-4">
            <Image
              src="/images/supporters/bronze.png"
              alt="ブロンズパートナー"
              width={200}
              height={200}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
            <Image
              src="/images/supporters/silver.png"
              alt="シルバーパートナー"
              width={200}
              height={200}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
            <Image
              src="/images/supporters/gold.png"
              alt="ゴールドパートナー"
              width={200}
              height={200}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
            <Image
              src="/images/supporters/platinum.png"
              alt="プラチナパートナー"
              width={200}
              height={200}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
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
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32">
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