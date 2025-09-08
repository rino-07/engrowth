import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';

export const metadata = {
  title: 'ビジネススポットサービス - 必要な時に必要なサポートを | Engrowth',
  description: 'ビジネスシーンで必要な英語サポートを、経験豊富なプロフェッショナルが提供します。通訳・会議同席、資料作成・翻訳サポート、プレゼンテーション準備など。',
  keywords: 'Engrowth, ビジネススポット, 通訳, 翻訳, プレゼンテーション, 会議同席',
};

export default function BusinessSpotServicePage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-6" as="h1">
              ビジネススポットサービス
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-3xl mx-auto mb-8">
              ビジネスシーンで必要な英語サポートを、経験豊富なプロフェッショナルが提供します。
            </Typography>
          </div>

          {/* 3つのサービス */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* 通訳・会議同席 */}
            <Card className="text-center p-6 border-2 border-gray-200 hover:border-brand-red transition-all duration-300">
              <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/interpretation-icon.jpg"
                  alt="通訳・会議同席"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                通訳・会議同席
              </Typography>
            </Card>

            {/* 資料作成・翻訳サポート */}
            <Card className="text-center p-6 border-2 border-gray-200 hover:border-brand-red transition-all duration-300">
              <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/translation-icon.jpg"
                  alt="資料作成・翻訳サポート"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                資料作成・翻訳サポート
              </Typography>
            </Card>

            {/* プレゼンテーション準備 */}
            <Card className="text-center p-6 border-2 border-gray-200 hover:border-brand-red transition-all duration-300">
              <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/presentation-icon.jpg"
                  alt="プレゼンテーション準備"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                プレゼンテーション準備
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 2. こんな時に、ご利用ください */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              こんな時に、ご利用ください。
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-gray rounded-full flex-shrink-0 mt-1">
                <Image
                  src="/images/speech-bubble.jpg"
                  alt="吹き出し"
                  width={24}
                  height={24}
                  className="w-full h-full rounded-full"
                />
              </div>
              <Typography variant="body-md" className="text-dark-gray">
                海外から自社製品に関する問い合わせが来た
              </Typography>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-gray rounded-full flex-shrink-0 mt-1">
                <Image
                  src="/images/speech-bubble.jpg"
                  alt="吹き出し"
                  width={24}
                  height={24}
                  className="w-full h-full rounded-full"
                />
              </div>
              <Typography variant="body-md" className="text-dark-gray">
                英語が話せるメンバーが急遽会議に参加できなくなってしまった
              </Typography>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-gray rounded-full flex-shrink-0 mt-1">
                <Image
                  src="/images/speech-bubble.jpg"
                  alt="吹き出し"
                  width={24}
                  height={24}
                  className="w-full h-full rounded-full"
                />
              </div>
              <Typography variant="body-md" className="text-dark-gray">
                来週、海外チームへのプレゼンをすることに・・・
              </Typography>
            </div>
          </div>

          {/* カウンセリングバナー */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-2xl overflow-hidden">
              <Image
                src="/images/counseling-banner.jpg"
                alt="30分の無料カウンセリング"
                width={800}
                height={300}
                className="w-full h-auto"
              />
              
              {/* オーバーレイコンテンツ */}
              <div className="absolute inset-0 flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-16">
                  {/* 左側：カンタン2ステップ吹き出し */}
                  <div className="relative mb-6 md:mb-0">
                    <div className="bg-white rounded-full px-6 py-3 relative">
                      <Typography variant="body-md" className="text-dark-gray font-bold">
                        カンタン2ステップ！
                      </Typography>
                      {/* 吹き出しの矢印 */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                    </div>
                  </div>

                  {/* 中央：メインテキスト */}
                  <div className="text-center text-white mb-6 md:mb-0">
                    <Typography variant="heading-md" className="text-white mb-2">
                      30分の無料カウンセリングでご相談ください
                    </Typography>
                  </div>

                  {/* 右側：無料バッジ + CTAボタン */}
                  <div className="flex items-center gap-4">
                    <div className="bg-white text-action-green px-4 py-2 rounded-full">
                      <Typography variant="body-md" className="font-bold">
                        無料
                      </Typography>
                    </div>
                    <Button variant="primary" size="lg" className="bg-action-green hover:bg-green-700 text-white">
                      カウンセリングを予約する
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. 料金例 */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              料金例
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-3xl mx-auto mb-8">
              透明性の高い料金設定で、安心してご利用いただけます。
              <br />
              詳細なお見積もりは無料でご提供いたします。まずはお気軽にお問い合わせください。
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* 会議通訳 */}
            <Card className="text-center p-6 border border-gray-200">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                会議通訳（1時間）
              </Typography>
              <div className="text-center mb-4">
                <Typography variant="heading-lg" className="text-brand-red">
                  ¥15,000〜
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  参加者数・専門性により変動
                </Typography>
              </div>
            </Card>

            {/* 資料翻訳 */}
            <Card className="text-center p-6 border border-gray-200">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                資料翻訳
                <br />
                （A4 1ページ）
              </Typography>
              <div className="text-center mb-4">
                <Typography variant="heading-lg" className="text-brand-red">
                  ¥3,000〜
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  専門性・納期により変動
                </Typography>
              </div>
            </Card>

            {/* プレゼン支援 */}
            <Card className="text-center p-6 border border-gray-200">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                プレゼン支援
                <br />
                （半日）
              </Typography>
              <div className="text-center mb-4">
                <Typography variant="heading-lg" className="text-brand-red">
                  ¥25,000〜
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  準備・練習・本番
                  <br />
                  サポート込み
                </Typography>
              </div>
            </Card>
          </div>

          {/* 料金に関するご注意 */}
          <div className="bg-light-gray rounded-2xl p-8 max-w-4xl mx-auto mb-16">
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
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
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
            <Button variant="primary" size="lg" className="bg-action-green hover:bg-green-700 text-white flex-1">
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
