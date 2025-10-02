import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';
import { FaMicrophone, FaLanguage, FaGlobe, FaUsers, FaChartLine, FaDesktop } from 'react-icons/fa';
import Hero from '@/components/sections/Hero';

export const metadata = {
  title: 'ビジネススポットサービス - 必要な時に必要なサポートを | Engrowth',
  description: 'ビジネスシーンで必要な英語サポートを、経験豊富なプロフェッショナルが提供します。通訳・会議同席、資料作成・翻訳サポート、プレゼンテーション準備など。',
  keywords: 'Engrowth, ビジネススポット, 通訳, 翻訳, プレゼンテーション, 会議同席',
};

function BusinessSpotServicePage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Hero
        title=""
        subtitle={null}
        bgDesktopSrc="/images/spot-business/spot-business_hero.png"
        bgMobileSrc="/images/hero_sma/spot-business_hero_sma.png"
        bgPosition="center 30%"
        className="flex items-center justify-center text-center"
        imageWidth={2021}
        imageHeight={748}
      />

      {/* 2. 3つのサービス */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32 pb-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 通訳・会議同席 */}
            <Card className="p-6 border-2 border-gray-200 hover:border-brand-red transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMicrophone className="w-8 h-8 text-brand-red" />
                </div>
                <div className="flex-1">
                  <Typography variant="heading-sm" className="text-dark-gray">
                    通訳 <br />会議同席
                  </Typography>
                </div>
              </div>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                重要な会議やプレゼンテーションで、
                <br />
                リアルタイムでの通訳サポートを提供いたします。
                
              </Typography>
            </Card>

            {/* 資料作成・翻訳サポート */}
            <Card className="p-6 border-2 border-gray-200 hover:border-brand-red transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center flex-shrink-0">
                  <FaLanguage className="w-8 h-8 text-brand-red" />
                </div>
                <div className="flex-1">
                  <Typography variant="heading-sm" className="text-dark-gray">
                    資料作成 <br />翻訳サポート
                  </Typography>
                </div>
              </div>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                英語資料の作成や既存資料の翻訳を、
                <br />
                専門知識を持つプロフェッショナルが担当します。
               
              </Typography>
            </Card>

            {/* プレゼンテーション準備 */}
            <Card className="p-6 border-2 border-gray-200 hover:border-brand-red transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center flex-shrink-0">
                  <FaDesktop className="w-8 h-8 text-brand-red" />
                </div>
                <div className="flex-1">
                  <Typography variant="heading-sm" className="text-dark-gray">
                    プレゼン資料 <br />作成サポート
                  </Typography>
                </div>
              </div>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
              事前に日本語のプレゼン資料をご用意いただき、英語翻訳から英語でのプレゼンリハーサルまで
              トータルでサポートいたします。
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. こんな時に、ご利用ください */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32 pt-0">
        <Container>
          <div className="text-center py-8">
            <Typography variant="heading-lg" className="text-dark-gray" as="h2">
              こんな時に、ご利用ください。
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaGlobe className="w-4 h-4 text-brand-red" />
              </div>
              <Typography variant="body-md" className="text-dark-gray" style={{fontSize: '20px'}}>
                海外から自社製品に関する問い合わせが来た
              </Typography>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaUsers className="w-4 h-4 text-brand-red" />
              </div>
              <Typography variant="body-md" className="text-dark-gray" style={{fontSize: '20px'}}>
                英語が話せるメンバーが急遽会議に参加できなくなってしまった
              </Typography>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaChartLine className="w-4 h-4 text-brand-red" />
              </div>
              <Typography variant="body-md" className="text-dark-gray" style={{fontSize: '20px'}}>
                来週、海外チームへのプレゼンをすることに・・・
              </Typography>
            </div>
          </div>

          {/* カウンセリングバナー */}
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
        </Container>
      </Section>

      {/* 3. 料金例 */}
      <Section background="warm-white" className="py-16 sm:py-20 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              料金例
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-5xl mx-auto mb-8">
              透明性の高い料金設定で、安心してご利用いただけます。
              <br />
              詳細なお見積もりは無料でご提供いたします。まずはお気軽にお問い合わせください。
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* 会議通訳 */}
            <Card className="text-center p-6 border border-gray-200 h-full flex flex-col">
              <div className="mb-4 flex-shrink-0" style={{minHeight: '3rem'}}>
                <Typography variant="heading-sm" className="text-dark-gray">
                  会議通訳
                  <br />
                  （1時間）
                </Typography>
              </div>
              <div className="text-center mb-4 flex-shrink-0" style={{minHeight: '4rem'}}>
                <Typography variant="heading-lg" className="text-brand-red">
                  ¥15,000〜
                </Typography>
              </div>
              <div className="mt-auto">
                <Typography variant="body-sm" className="text-gray">
                  参加者数・専門性により変動
                </Typography>
              </div>
            </Card>

            {/* 資料翻訳 */}
            <Card className="text-center p-6 border border-gray-200 h-full flex flex-col">
              <div className="mb-4 flex-shrink-0" style={{minHeight: '3rem'}}>
                <Typography variant="heading-sm" className="text-dark-gray">
                  資料作成・翻訳
                  <br />
                  （A4 1ページ）
                </Typography>
              </div>
              <div className="text-center mb-4 flex-shrink-0" style={{minHeight: '4rem'}}>
                <Typography variant="heading-lg" className="text-brand-red">
                  ¥3,000〜
                </Typography>
              </div>
              <div className="mt-auto">
                <Typography variant="body-sm" className="text-gray">
                  専門性・納期により変動
                </Typography>
              </div>
            </Card>

            {/* プレゼン支援 */}
            <Card className="text-center p-6 border border-gray-200 h-full flex flex-col">
              <div className="mb-4 flex-shrink-0" style={{minHeight: '3rem'}}>
                <Typography variant="heading-sm" className="text-dark-gray">
                  プレゼンテーション
                  <br />
                  準備
                </Typography>
              </div>
              <div className="text-center mb-4 flex-shrink-0" style={{minHeight: '4rem'}}>
                <Typography variant="heading-lg" className="text-brand-red">
                  ¥25,000〜
                </Typography>
              </div>
              <div className="mt-auto">
                <Typography variant="body-sm" className="text-gray">
                  準備・練習・本番
                  <br />
                  サポート込み
                </Typography>
              </div>
            </Card>
          </div>

          {/* 料金に関するご注意 */}
          <div className="bg-light-gray  p-8 max-w-4xl mx-auto">
            <Typography variant="heading-sm" className="text-dark-gray mb-6 text-center">
              料金に関するご注意
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  専門性の高い分野は追加料金が発生する場合があります
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  急ぎの案件は緊急料金（+50%）を頂戴いたします
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  事前のお見積もりは無料でご提供いたします
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  継続利用の場合は割引制度もございます
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. ビジネスチャンスを逃さないために */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32">
        <Container>
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              ビジネスチャンスを逃さないために
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto mb-8">
              「こんなこともできるのだろうか？」といったご質問も大歓迎です。
              <br />
              あなたのビジネスニーズに合わせて最適なサポートをご提供いたします。
              <br />
              相談・お見積もりは無料ですので、お気軽にお問い合わせください。
            </Typography>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button variant="primary" size="lg" className="text-white flex-1" style={{backgroundColor: '#0cc755'}} href="https://lin.ee/4h74yvj">
              LINEで相談
            </Button>
            <Button variant="secondary" size="lg" className="flex-1">
              メールで相談
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default BusinessSpotServicePage;
