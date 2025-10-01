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
  title: 'ビジネスコース - 忙しい社会人でも、英語は習得できる時代へ | Engrowth',
  description: '1回5分〜10分の隙間式学習で、科学的な習慣化理論と第二言語習得理論に基づく本当に続けられるプログラム。忙しい社会人向けの効率的な英語学習コース。',
  keywords: 'Engrowth, ビジネスコース, 社会人英語, 隙間学習, 科学的メソッド',
};

export default function BusinessCoursePage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Hero
        title=""
        subtitle=''
        bgDesktopSrc="/images/business/business_hero.png"
        bgMobileSrc="/images/hero_sma/business_hero_sma.png"
        bgPosition="center 40%"
        className="flex items-center justify-center text-center"
        imageWidth={2021}
        imageHeight={748}
      />

      {/* 2. 3つの特徴カード */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24 lg:pb-16 pb-0">
        <SectionHeaderLeft
          label="Business Features"
          title="忙しい社会人でも続けられる3つの理由"
          desc="限られた時間を最大限に活用し、確実に英語力を向上させるための科学的アプローチをご提供します。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
            <Card className="text-center p-6">
              <Image
                src="/images/business/business-short-study.jpg"
                alt="５分から１０分の短時間学習"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <Typography variant="body-sm" className="text-dark-gray font-bold mb-2 font-serif">
                ５分から１０分の短時間学習
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                通勤時間や昼休みなど、
                <br />
                忙しいスケジュールの中でも
                <br />
                効率的な学習が可能
              </Typography>
            </Card>

            <Card className="text-center p-6">
              <Image
                src="/images/business/business-scientific-method.jpg"
                alt="科学的メソッド"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <Typography variant="body-sm" className="text-dark-gray font-bold mb-2 font-serif">
                科学的メソッド
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                脳科学に基づいた学習方法で、
                <br />
                効率的な記憶定着を実現
              </Typography>
            </Card>

            <Card className="text-center p-6">
              <Image
                src="/images/business/business-line-support.jpg"
                alt="LINEでの伴走支援"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <Typography variant="body-sm" className="text-dark-gray font-bold mb-2 font-serif">
                LINEでの伴走支援
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                24時間いつでも質問可能、
                <br />
                継続をサポートする
                <br />
                コミュニケーション
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. Engrowthが選ばれる理由 */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24 lg:pt-20 pt-8">
        <SectionHeaderLeft
          label="Why Choose Us"
          title="私たちが選ばれる理由"
          desc="従来の英語学習では解決できなかった社会人特有の課題を、科学的根拠に基づいた独自のメソッドで解決します。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="max-w-6xl mx-auto">

            {/* Point番号と本文を同じブロック内にflexレイアウト */}
            <div className="space-y-12">
              {/* Point 1 */}
              <div className="flex items-start gap-6">
                <div className="w-20 h-12 bg-soft-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">Point 1</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-dark-gray mb-2">
                    専属コンサルタントは全員、留学経験のある日本人
                  </h3>
                  <p className="text-dark-gray leading-relaxed mb-2">
                    日本人ならではの「つまずくポイント」を熟知して理解できる唯一の存在
                  </p>
                  <p className="text-dark-gray leading-relaxed">
                    外国人講師では理解して理解できない、日本人特有の英語学習の悩み。
                    <br />
                    なぜ「This」と言えるのに、なぜ「It」と「Is」を含む文章できないのか、
                    <br />
                    なぜ過去形を忘れてしまうのか——————。
                    <br /><br />
                    あなたと同じ道を歩んだ日本人コンサルタントだからこそ、的確に把握し、効果的な解決策を提示できます。
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-6">
                <div className="w-20 h-12 bg-soft-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">Point 2</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-dark-gray mb-2">科学的根拠に基づく学習プログラム</h3>
                  <p className="text-dark-gray leading-relaxed mb-2">
                    感覚や経験論に頼らない、データドリブンな学習設計
                  </p>
                  <p className="text-dark-gray leading-relaxed">
                    各人の理解度に合わせてプログラムではなく、第二言語習得理論、認知言語学、脳科学などの最新研究に基づいた学習方法を採用。
                    <br />
                    脳のメカニズムに沿った効果的で効率的な英語学習を実現します。
                    <br /><br />
                    忙しい毎日でも、社会人でも着実な成果が期待できるように設計されています。
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-6">
                <div className="w-20 h-12 bg-soft-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">Point 3</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-dark-gray mb-2">1人ひとりに合わせたオーダーメイド学習設計</h3>
                  <p className="text-dark-gray leading-relaxed mb-2">
                    あなたの目標・レベル・ライフスタイルに合わせた最適なスケジュール
                  </p>
                  <p className="text-dark-gray leading-relaxed">
                    「TOEFL100点を目指します」と「内定先企業で活躍したい」では、必要なギャップが異なります。
                    <br /><br />
                    Engrowthでは初回カウンセリングで詳細分析を行い、目標達成までの最適なルートを設計。
                    <br />
                    日々の学習進捗度、運営度での中間調整により、常に最適な学習を維持できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. 料金 */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Pricing"
          title="ビジネス向け料金プラン"
          desc="入会金0円で始められます。長期プランほどお得になっており、継続的な学習をサポートします。"
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
                  $1,7800
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  月額 $1,780
                </Typography>
                <div className="h-6 mb-4">
                  {/* 空のスペース（割引表示なし） */}
                </div>
                <Typography variant="body-sm" className="text-gray mb-6 flex-grow">
                  基本プラン
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
                  月額 $1,493
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
                  月額 $1,246
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
                  月額 $1,165
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

      {/* 4. あなたの英語力が、会社の未来を創る */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24 overflow-visible">
        <SectionHeaderLeft
          label="Business Impact"
          title="あなたの英語力が、会社の未来を創る"
          desc="一人ひとりの英語力が直接事業売り上げに跳ね返る時代。忙しさを理由に後回しにしてきた人でも、今が変わるチャンスです。"
          className="mb-12 lg:mb-16"
        />
        
        <FullBleed1440>

            <div className="cards-grid-responsive mb-16">
            {/* 事業成長 */}
            <article className="w-full min-w-0">
              <div className="relative w-full min-w-0 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:z-10 border-2 border-gray-200 hover:border-brand-red bg-white h-full flex flex-col text-center">
                <div className="flex-1">
                  <Image
                src="/images/business/business-growth-impact.jpg"
                alt="事業成長"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                事業成長
              </Typography>
              <Typography variant="body-xs" className="text-gray card-description">
                海外展開・採用・資金
                <br />
                調達・文献アクセスなど、
                <br />
                あらゆる成長機会を
                <br />
                英語力が直結事業
                <br />
                成長に繋がる
              </Typography>
                </div>
              </div>
            </article>

            {/* 組織のグローバル化 */}
            <article className="w-full min-w-0">
              <div className="relative w-full min-w-0 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:z-10 border-2 border-gray-200 hover:border-brand-red bg-white h-full flex flex-col text-center">
                <div className="flex-1">
                  <Image
                src="/images/courses/courses-business-course.jpg"
                alt="組織のグローバル化"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                組織のグローバル化
              </Typography>
              <Typography variant="body-xs" className="text-gray card-description">
                経営トップが英語で話
                <br />
                せる組織と、組織内の
                <br />
                グローバル化が一気に
                <br />
                進む
              </Typography>
                </div>
              </div>
            </article>

            {/* 関係性での主導権 */}
            <article className="w-full min-w-0">
              <div className="relative w-full min-w-0 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:z-10 border-2 border-gray-200 hover:border-brand-red bg-white h-full flex flex-col text-center">
                <div className="flex-1">
                  <Image
                src="/images/business/business-reason-practical-english.jpg"
                alt="関係性での主導権"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                関係性での主導権
              </Typography>
              <Typography variant="body-xs" className="text-gray card-description">
                取引先・投資家・パー
                <br />
                トナーとの関係で主導
                <br />
                権を取り、スピードも
                <br />
                信頼も向上
              </Typography>
                </div>
              </div>
            </article>

            {/* 競合との差別化 */}
            <article className="w-full min-w-0">
              <div className="relative w-full min-w-0 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:z-10 border-2 border-gray-200 hover:border-brand-red bg-white h-full flex flex-col text-center">
                <div className="flex-1">
                  <Image
                src="/images/business/business-differentiation.jpg"
                alt="競合との差別化"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                競合との差別化
              </Typography>
              <Typography variant="body-xs" className="text-gray card-description">
                翻訳に頼らず「自分の
                <br />
                言葉で話せる」ことで、
                <br />
                信頼・差別化に直結
              </Typography>
                </div>
              </div>
            </article>
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
        </FullBleed1440>
      </Section>
    </div>
  );
}
