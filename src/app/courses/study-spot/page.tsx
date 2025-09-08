import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';
import { getSpotServicesByType } from '@/data/courses';

export const metadata = {
  title: '学生スポットサービス - 留学・就活の重要な場面でサポート | Engrowth',
  description: '留学申請エッセイ添削、面接練習、学習相談など、学生の重要な場面で必要なサポートを経験豊富な日本人コンサルタントが提供します。',
  keywords: 'Engrowth, 学生スポット, エッセイ添削, 面接練習, 留学準備, 就活対策',
};

export default function StudentSpotServicePage() {
  const studentSpotServices = getSpotServicesByType('student-spot');

  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-6" as="h1">
              学生スポットサービス
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-3xl mx-auto mb-8">
              留学・就活の重要な場面で必要なサポートを、経験豊富な日本人コンサルタントが提供します。
            </Typography>
          </div>

          {/* 2つのメインサービス */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* エッセイ添削 */}
            <Card className="text-center p-6 border-2 border-gray-200 hover:border-blue-600 transition-all duration-300">
              <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/essay-editing-icon.jpg"
                  alt="エッセイ添削"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                エッセイ添削
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-4">
                留学申請・就活用エッセイの
                <br />
                プロフェッショナル添削
              </Typography>
            </Card>

            {/* 面接練習・対策 */}
            <Card className="text-center p-6 border-2 border-gray-200 hover:border-blue-600 transition-all duration-300">
              <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/interview-practice-icon.jpg"
                  alt="面接練習・対策"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                面接練習・対策
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-4">
                留学・就活面接の
                <br />
                実践的な練習とフィードバック
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
                留学申請用エッセイの完成度を上げたい
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
                就活用の英語エッセイを確認してほしい
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
                英語面接の練習をしたい
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
                留学面接の対策をしたい
              </Typography>
            </div>
          </div>

          {/* カウンセリングバナー */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
              <Image
                src="/images/student-counseling-banner.jpg"
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
              学生向け特別価格で、質の高いサポートを提供いたします。
              <br />
              詳細なお見積もりは無料でご提供いたします。まずはお気軽にお問い合わせください。
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* エッセイ添削 */}
            <Card className="text-center p-6 border border-gray-200">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                エッセイ添削
                <br />
                （1本）
              </Typography>
              <div className="text-center mb-4">
                <Typography variant="heading-lg" className="text-blue-600">
                  ¥5,000〜
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  文字数・専門性により変動
                </Typography>
              </div>
              <div className="space-y-2 text-left">
                <Typography variant="body-xs" className="text-gray">
                  • 構成・内容チェック
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  • 文法・表現修正
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  • 複数回修正対応
                </Typography>
              </div>
            </Card>

            {/* 面接練習 */}
            <Card className="text-center p-6 border border-gray-200">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                面接練習・対策
                <br />
                （1時間）
              </Typography>
              <div className="text-center mb-4">
                <Typography variant="heading-lg" className="text-blue-600">
                  ¥8,000〜
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  面接種類により変動
                </Typography>
              </div>
              <div className="space-y-2 text-left">
                <Typography variant="body-xs" className="text-gray">
                  • 模擬面接実施
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  • 詳細フィードバック
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  • 改善アドバイス
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
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  学生証提示で学生価格適用
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  複数回利用で割引制度あり
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  事前のお見積もりは無料でご提供
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  急ぎの場合は緊急対応も可能
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. 学生の夢を諦めさせない */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              学生の夢を諦めさせない
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto mb-8">
              「どこから手をつけていいかわからない」「完璧にできるか不安」といったお悩みも大歓迎です。
              <br />
              あなたの目標達成に向けて、最適なサポートプランをご提案いたします。
              <br />
              相談・お見積もりは無料ですので、お気軽にお問い合わせください。
            </Typography>
          </div>

          {/* サポート内容 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/writing-support.jpg"
                  alt="ライティング支援"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                ライティング支援
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                Personal Statement、
                <br />
                志望理由書、研究計画書
                <br />
                など、目的に応じた
                <br />
                ライティング指導
              </Typography>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/speaking-support.jpg"
                  alt="スピーキング支援"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                スピーキング支援
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                面接対策、プレゼンテーション
                <br />
                練習、発音指導など
                <br />
                実践的なスピーキング
                <br />
                スキル向上
              </Typography>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/strategy-support.jpg"
                  alt="戦略的サポート"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                戦略的サポート
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                出願戦略、スケジュール管理、
                <br />
                優先順位付けなど
                <br />
                効率的な準備のための
                <br />
                総合的なアドバイス
              </Typography>
            </Card>
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
