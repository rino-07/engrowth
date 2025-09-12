import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
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
      <Section background="warm-white" padding="xl" className="relative">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] absolute inset-0">
          {/* PC用背景画像 */}
          <Image
            src="/images/drive-download-20250908T014101Z-1-001/students/students-communication.jpg"
            alt="背景画像"
            fill
            priority
            className="object-cover opacity-15 hidden md:block"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* スマホ用背景画像 */}
          <Image
            src="/images/drive-download-20250908T014101Z-1-001/hero_sma/students_hero_sma.png"
            alt="背景画像"
            fill
            priority
            className="object-cover opacity-15 block md:hidden"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* 軽いオーバーレイ */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
        <div className="relative z-10 flex items-center min-h-[60vh]">
        <Container className="relative z-10 w-full">
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-6" as="h1">
              学生コース
            </Typography>
            <Typography variant="heading-md" className="text-dark-gray mb-8">
              留学の夢を諦めない、経済支援付き英語学習
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-[85ch] mx-auto leading-relaxed">
              経済的な理由で留学を諦める必要はありません。Engrowthの学生コースは、
              <br />
              英語学習と経済支援を組み合わせた独自プログラムで、あなたの留学の夢を全力でサポートします。
            </Typography>
          </div>
        </Container>
        </div>
      </Section>

      {/* 2. 3つの特徴カード */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24 pb-0">
        <SectionHeaderLeft
          label="Student Features"
          title="学生だからこそ活用できる3つの強み"
          desc="時間の自由度と学習意欲の高さを最大限に活かし、将来のキャリアに直結する英語力を身につけます。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
            <Card className="text-center p-6">
              <Image
                src="/images/drive-download-20250908T014101Z-1-001/business/business-short-study.jpg"
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
                src="/images/drive-download-20250908T014101Z-1-001/business/business-scientific-method.jpg"
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
                src="/images/drive-download-20250908T014101Z-1-001/business/business-line-support.jpg"
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

      {/* 2. エッセイ添削し放題セクション */}
      <Section background="white" padding="sm" className="pt-0">
        <Container>
          <div className="text-center">
            <Image
              src="/images/drive-download-20250908T014101Z-1-001/students/students_banner.png"
              alt="エッセイ添削し放題 - 留学前でも留学中でも最重要となるエッセイの添削及びアドバイスを頼み放題！！"
              width={1200}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </Container>
      </Section>

      {/* 3. 留学の勧めセクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Study Abroad"
          title="英語力と留学経験で、未来の選択肢を広げる"
          desc="Engrowthでは、留学前に必要な英語力をしっかりと伸ばし、現地で安心して挑戦できる自信を育てます。
さらに提携パートナー 留サポ
 と連携し、現地での生活アドバイスは留学経験者から直接ヒアリング可能。
パスポートや願書などの各種書類作成サポート も、Engrowthと留サポの両方でしっかり対応します。
学習から渡航準備、現地サポートまで一気通貫で支える体制が整っています。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>

          {/* ストーリーテリング型レイアウト */}
          <div className="max-w-5xl mx-auto mb-16">
            {/* Step 1: 不安の声 */}
            <div className="relative mb-12">
              <div className="bg-gray-50 rounded-2xl p-8 text-center relative">
                <div className="text-6xl mb-4">💭</div>
                <Typography variant="heading-md" className="text-dark-gray mb-4">
                  「英語に自信がないから留学は無理」
                </Typography>
                <Typography variant="body-lg" className="text-gray">
                  そう思っていませんか？
                </Typography>
              </div>
            </div>

            {/* 矢印 */}
            <div className="text-center mb-12">
              <div className="text-4xl text-brand-red">⬇️</div>
              <Typography variant="body-lg" className="text-brand-red font-bold mt-2">
                でも実は...
              </Typography>
            </div>

            {/* Step 2: 解決策 */}
            <div className="bg-red-50 rounded-2xl p-8 mb-12">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🌟</div>
                <Typography variant="heading-md" className="text-brand-red mb-6">
                  Engrowthなら完全サポート！
                </Typography>
              </div>
              
              {/* プロセスフロー */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3">📚</div>
                  <Typography variant="body-sm" className="font-bold text-dark-gray mb-1 md:mb-2 text-xs md:text-base">
                    サマーキャンプ
                  </Typography>
                  <Typography variant="body-xs" className="text-gray text-xs md:text-sm">
                    実践的な英語体験
                  </Typography>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3">🎯</div>
                  <Typography variant="body-sm" className="font-bold text-dark-gray mb-1 md:mb-2 text-xs md:text-base">
                    志望校選び&出願サポート
                  </Typography>
                  <Typography variant="body-xs" className="text-gray text-xs md:text-sm">
                    あなたに最適な進路
                  </Typography>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3">✈️</div>
                  <Typography variant="body-sm" className="font-bold text-dark-gray mb-1 md:mb-2 text-xs md:text-base">
                    現地校見学サポート
                  </Typography>
                  <Typography variant="body-xs" className="text-gray text-xs md:text-sm">
                    安心の現地サポート
                  </Typography>
                </div>
              </div>
            </div>

            {/* Step 3: コンサルタントの強み */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">👨‍🏫</div>
              <Typography variant="heading-md" className="text-dark-gray mb-4">
                全員留学経験者のコンサルタント
              </Typography>
              <Typography variant="body-lg" className="text-dark-gray mb-6">
                留学経験によって得られる貴重な価値観を知っているからこそ、<br />
                あなたの不安を理解し、適切なサポートができます。
              </Typography>
              <Typography variant="body-lg" className="text-brand-red font-bold">
                あなたの可能性を広げる第一歩を、私たちと一緒に踏み出しませんか？
              </Typography>
            </div>
          </div>

        </Container>
      </Section>

      {/* 4. こんな不安はありませんか？セクション */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Common Concerns"
          title="こんな不安はありませんか？"
          desc="多くの学生が抱える英語や留学への不安。Engrowthなら、これらの不安を一つずつ解決していきます。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          {/* インフォグラフィック風デザイン */}
          <div className="max-w-5xl mx-auto mb-16">

            {/* 不安の声 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 text-center">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">❌</div>
                <Typography variant="body-sm" className="text-dark-gray font-bold mb-1 md:mb-2 text-xs md:text-base">
                  "英語に自信がない"
                </Typography>
                <Typography variant="body-xs" className="text-gray text-xs md:text-sm">
                  留学に消極的になってしまう
                </Typography>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 text-center">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">❌</div>
                <Typography variant="body-sm" className="text-dark-gray font-bold mb-1 md:mb-2 text-xs md:text-base">
                  "何から始めればいいか..."
                </Typography>
                <Typography variant="body-xs" className="text-gray text-xs md:text-sm">
                  留学の準備がわからない
                </Typography>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 text-center col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">❌</div>
                <Typography variant="body-sm" className="text-dark-gray font-bold mb-1 md:mb-2 text-xs md:text-base">
                  "海外生活が不安"
                </Typography>
                <Typography variant="body-xs" className="text-gray text-xs md:text-sm">
                  漠然とした恐怖心がある
                </Typography>
              </div>
            </div>

            {/* 変化の矢印 */}
            <div className="text-center mb-12">
              <div className="text-5xl text-brand-red mb-4">⬇️</div>
              <Typography variant="heading-md" className="text-brand-red font-bold">
                Engrowthなら解決！
              </Typography>
            </div>

            {/* 成功への道筋 */}
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">✅</div>
                <Typography variant="heading-md" className="text-dark-gray mb-6">
                  成功への道筋
                </Typography>
              </div>
              
              {/* プロセスフロー */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 text-center mb-8">
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl mb-2 md:mb-3">🎯</div>
                  <Typography variant="body-sm" className="font-bold text-dark-gray mb-1 md:mb-2 text-xs md:text-base">
                    英語習得
                  </Typography>
                  <Typography variant="body-xs" className="text-gray text-xs md:text-sm">
                    基礎から実践まで
                  </Typography>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl mb-2 md:mb-3">🚀</div>
                  <Typography variant="body-sm" className="font-bold text-dark-gray mb-1 md:mb-2 text-xs md:text-base">
                    自信UP
                  </Typography>
                  <Typography variant="body-xs" className="text-gray text-xs md:text-sm">
                    留学への勇気が生まれる
                  </Typography>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl mb-2 md:mb-3">🌍</div>
                  <Typography variant="body-sm" className="font-bold text-dark-gray mb-1 md:mb-2 text-xs md:text-base">
                    留学成功
                  </Typography>
                  <Typography variant="body-xs" className="text-gray text-xs md:text-sm">
                    広い世界で価値観を獲得
                  </Typography>
                </div>
              </div>
              
              <div className="text-center">
                <Typography variant="body-lg" className="text-brand-red font-bold leading-relaxed">
                  魅力的な人間へと成長し、魅力的な人たちとの出会いと未来が得られます
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Engrowthが選ばれる理由 */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Why Choose Us"
          title="学生が将来に向けて選ぶ理由"
          desc="学生時代だからこそ身につけられる本物の英語力と、将来のキャリアに直結するサポート体制をご提供します。"
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
                  $1,480
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-2">
                  月額 $1,480
                </Typography>
                <div className="h-6 mb-4">
                  {/* 空のスペース（割引表示なし） */}
                </div>
                <Typography variant="body-sm" className="text-gray mb-6 flex-grow">
                  基本プラン
                </Typography>
                <Button variant="secondary" size="sm" className="w-full mt-auto" disabled>
                  無料お試し
                </Button>
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
      <Section background="light-gray" padding="xl" className="overflow-visible">
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
                src="/images/drive-download-20250908T014101Z-1-001/students/students-hero-background.jpg"
                alt="留学成功"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                海外留学
              </Typography>
              <Typography variant="body-sm" className="text-gray">
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
                src="/images/drive-download-20250908T014101Z-1-001/business/business-differentiation.jpg"
                alt="就職活動での差別化"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                就職活動での<br />差別化
              </Typography>
              <Typography variant="body-sm" className="text-gray">
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
                src="/images/drive-download-20250908T014101Z-1-001/about/unnamed.png"
                alt="キャリアの選択肢拡大"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                キャリアの<br />選択肢拡大
              </Typography>
              <Typography variant="body-sm" className="text-gray">
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
                src="/images/drive-download-20250908T014101Z-1-001/students/students-communication.jpg"
                alt="国際的な人脈形成"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                国際的な<br />人脈形成
              </Typography>
              <Typography variant="body-sm" className="text-gray">
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
