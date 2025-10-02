import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import FullBleed1440 from '@/components/layout/FullBleed1440';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Hero from '@/components/sections/Hero';
// import { getCourseById } from '@/data/courses';

export const metadata = {
  title: '学生コース - 留学の夢を諦めない、経済支援付き英語学習 | Engrowth',
  description: '留学を目指す学生向けの総合的な英語学習プログラム。経済支援制度、エッセイ添削、面接対策など、留学成功のための包括的サポート。',
  keywords: 'Engrowth, 学生コース, 留学準備, 経済支援, エッセイ添削, 面接対策',
};

export default function StudentCoursePage() {
  // const studentCourse = getCourseById('student');

  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Hero
        title=""
        subtitle={null}
        bgDesktopSrc="/images/students/students_hero.png"
        bgMobileSrc="/images/hero_sma/students_hero_sma.png"
        bgPosition="center 30%"
        className="flex items-center justify-center text-center"
        imageWidth={2021}
        imageHeight={748}
      />

      {/* 2. 3つの特徴カード */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24 pb-0">
        <SectionHeaderLeft
          label="Student Features"
          title="学生だからこそ活用できる3つの強み"
          desc="時間の自由度と学習意欲の高さを最大限に活かし、将来のキャリアに直結する英語力を身につけます。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <Card className="text-center p-6">
              <Image
                src="/images/students/student-short.png"
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
                通学時間や昼休みなど、
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
                パーソナルコーチング
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-6 sm:py-8 lg:py-12">
  <Container>
    <div className="text-center">
    <h2 style={{ fontSize: '60px', fontFamily: '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "MS PMincho", "MS 明朝", serif' }}>
  Engrowthならエッセイ添削し放題！
</h2>
    </div>
  </Container>
</Section>

      {/* 4. Engrowthが選ばれる理由 */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Why Choose Us"
          title="私たちが選ばれる理由"
          desc="従来の英語学習の課題を解決する、独自のメソッドと徹底したサポート体制で、あなたの目標達成を実現します。"
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

      {/* 3. 留学の勧めセクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Study Abroad"
          title="英語力と留学経験で、未来の選択肢を広げる"
          desc="Engrowthでは、留学前に必要な英語力をしっかりと伸ばし、現地で安心して挑戦できる自信を育てます。また、あなた専用の専属コンサルタントは海外留学経験者。留学前、留学中でもメンターとして経験を元にあなたのことを様々な角度からサポートします。
さらに提携パートナー「留学サポート（以下、留サポ）」と提携しており、短期留学体験〜留学準備まで一気通貫でサポート。パスポートや願書などの各種書類作成サポートは、Engrowthと留サポの両方での安心サポート。
学習から渡航準備、現地サポートまで一気通貫で支える体制が整っています。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          {/* 留サポ連携バナー */}
          <div className="max-w-[1100px] mx-auto mb-16">
            <div className="grid gap-6 md:grid-cols-2 items-center rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/students/ryusapo_image.png"
                  alt="留サポ連携による留学前サポートのイメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[12px] tracking-wide text-neutral-500 mb-2 uppercase">Partnership</p>
                <Typography variant="heading-md" className="text-dark-gray mb-3">
                  提携企業"留サポ"との連携で、留学前の不安をゼロに
                </Typography>
                <Typography variant="body-sm" className="text-neutral-700 leading-7 mb-4">
                  「いきなり留学は不安…」「志望校や地域を比較して決めたい」「現地で生活する人や留学生の生の声を聞きたい」——
                  Engrowthは提携企業"留サポ"との連携により、サマーキャンプ体験、志望校選び＆出願サポート、現地校見学などの機会を安心してご案内します。
                </Typography>
                <Typography variant="body-xs" className="text-neutral-500 mb-4">
                  ※上記サービスの提供主体は提携先"留サポ"です。Engrowth経由でご紹介します。
                </Typography>
                <a 
                  href="https://ryusapo.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 rounded-full bg-dark-gray hover:bg-black text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
                >
                  留サポのサービスを見る
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <Typography variant="body-xs" className="text-neutral-400 mt-2">
                  提携企業サイトへ
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>
  
      {/* 4. こんな不安はありませんか？セクション */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        {/* パララックス背景画像 */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/students/background01.png)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 0.15
          }}
        />
        
        {/* コンテンツ */}
        <div className="relative z-10">
          <SectionHeaderLeft
            label="Common Concerns"
            title="こんな不安はありませんか？"
            desc="多くの学生が抱える英語や留学への不安。Engrowthなら、これらの不安を一つずつ解決していきます。"
            className="mb-12 lg:mb-16"
          />
          
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* 不安の声 1 */}
              <div className="text-center p-6 bg-warm-white rounded-lg shadow-sm">
                <Typography variant="heading-md" className="text-dark-gray mb-4">
                  "英語に自信がない"
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  自分に留学なんて無理かも…
                </Typography>
              </div>
              {/* 不安の声 2 */}
              <div className="text-center p-6 bg-warm-white rounded-lg shadow-sm">
                <Typography variant="heading-md" className="text-dark-gray mb-4">
                  "何から始めればいいかわからない"
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  留学の準備って難しそう…
                </Typography>
              </div>
              {/* 不安の声 3 */}
              <div className="text-center p-6 bg-warm-white rounded-lg shadow-sm">
                <Typography variant="heading-md" className="text-dark-gray mb-4">
                  "海外生活が不安"
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  漠然とした恐怖心がある
                </Typography>
              </div>
              {/* 解決策 */}
              <div className="lg:col-span-3 text-center p-6 bg-brand-red rounded-lg shadow-sm">
                <Typography variant="heading-md" className="text-white mb-4">
                  Engrowthなら解決！
                </Typography>
                <Typography variant="body-lg" className="text-white leading-relaxed">
                  英語習得から留学成功まで、あなたの可能性を広げる第一歩を、私たちと一緒に踏み出しませんか？
                </Typography>
              </div>
            </div>

            {/* コンサルタントの強み */}
            <div className="text-center max-w-5xl mx-auto mt-12">
              <Typography variant="heading-md" className="text-black mb-4">
                全員留学経験者のコンサルタント
              </Typography>
              <Typography variant="body-lg" className="text-black mb-4">
                留学経験によって得られる貴重な価値観を知っているからこそ、あなたの不安を理解し、適切なサポートができます。
              </Typography>
            </div>
          </Container>
        </div>
      </Section>

      {/* 6. 料金 */}
      <Section background="white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Pricing"
          title="学生向け特別価格で始められる英語学習"
          desc="経済支援制度も充実。学生の皆さんが無理なく続けられる料金設定で、本格的な英語学習をサポートします。"
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
                  $1,980
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  月額 $1,980
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
                  $4,980
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  月額 $1,660
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
                  $9,480
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  月額 $1,580
                </Typography>
                <Typography variant="body-xs" className="text-action-green mb-4 h-6">
                  約5%OFF
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
                  $17,980
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  月額 $1,498
                </Typography>
                <Typography variant="body-xs" className="text-action-green mb-4 h-6">
                  約10%OFF
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

      {/* 4. あなたの英語力が、未来への扉を開く */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32 overflow-visible">
        <FullBleed1440>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              あなたの英語力が、未来への扉を開く
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto mb-12">
              グローバル社会で活躍する第一歩
              <br />
              留学・就職・キャリアアップ、すべての可能性が広がります
            </Typography>
          </div>

            <div className="cards-grid-responsive mb-16">
            {/* 留学成功 */}
            <article className="w-full min-w-0">
              <div className="relative w-full min-w-0 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:z-10 border-2 border-gray-200 hover:border-brand-red bg-white h-full flex flex-col text-center">
                <div className="flex-1">
              <Image
                src="/images/students/students-hero-background.jpg"
                alt="留学成功"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                海外留学
              </Typography>
              <Typography variant="body-sm" className="text-gray card-description">
                海外大学・大学院への
                <br />
                合格率向上。質の高い
                <br />
                教育環境で専門知識を
                <br />
                深める機会を獲得
              </Typography>
                </div>
              </div>
            </article>

            {/* 就職活動での差別化 */}
            <article className="w-full min-w-0">
              <div className="relative w-full min-w-0 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:z-10 border-2 border-gray-200 hover:border-brand-red bg-white h-full flex flex-col text-center">
                <div className="flex-1">
              <Image
                src="/images/students/job.jpg"
                alt="就職活動での差別化"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                就職活動での<br />差別化
              </Typography>
              <Typography variant="body-sm" className="text-gray card-description">
                グローバル企業への
                <br />
                就職機会拡大。英語力を
                <br />
                武器に希望する企業への
                <br />
                内定獲得
              </Typography>
                </div>
              </div>
            </article>

            {/* キャリアの選択肢拡大 */}
            <article className="w-full min-w-0">
              <div className="relative w-full min-w-0 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:z-10 border-2 border-gray-200 hover:border-brand-red bg-white h-full flex flex-col text-center">
                <div className="flex-1">
              <Image
                src="/images/about/unnamed.png"
                alt="キャリアの選択肢拡大"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                キャリアの<br />選択肢拡大
              </Typography>
              <Typography variant="body-sm" className="text-gray card-description">
                国内外問わず活躍できる
                <br />
                人材として、多様な
                <br />
                キャリアパスを選択可能
              </Typography>
                </div>
              </div>
            </article>

            {/* 国際的な人脈形成 */}
            <article className="w-full min-w-0">
              <div className="relative w-full min-w-0 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:z-10 border-2 border-gray-200 hover:border-brand-red bg-white h-full flex flex-col text-center">
                <div className="flex-1">
              <Image
                src="/images/students/students-communication.jpg"
                alt="国際的な人脈形成"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                国際的な<br />人脈形成
              </Typography>
              <Typography variant="body-sm" className="text-gray card-description">
                    世界中の人々との<br />ネットワーク
                <br />
                    構築により将来の<br />ビジネスチャンス創出
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
                  className="w-full h-auto shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </FullBleed1440>
      </Section>
    </div>
  );
}