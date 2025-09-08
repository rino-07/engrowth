import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center animate-fadeInUp">
            <Typography variant="heading-xl" className="text-dark-gray mb-6" as="h1">
              あなたも
              <span className="text-brand-red">Engrowth</span>
              の一員になりませんか？
            </Typography>
            <Typography variant="body-lg" className="text-gray mb-8 max-w-3xl mx-auto">
              独自のエコシステムで留学生の経済問題を解決し、
              <br />
              日本人だからこそ提供できる英会話コンサルティングサービス
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="primary" size="lg">
                無料相談を予約する
              </Button>
              <Button variant="secondary" size="lg">
                コース詳細を見る
              </Button>
            </div>
            
            {/* Hero Image */}
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero-students.jpg"
                  alt="Engrowthで学ぶ多様な学生たち"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <Typography variant="body-md" className="text-white/90">
                      多様な背景を持つ学生が、Engrowthで夢を実現しています
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Why Engrowth Section */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8">
              Why Engrowth
            </Typography>
            <Typography variant="heading-md" className="text-gray mb-12">
              Engrowthは○○な人に選ばれてます
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Points */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Typography variant="body-md" className="text-white font-bold">
                      Point1
                    </Typography>
                  </div>
                  <div className="mt-2 text-right">
                    <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l3-3 3 3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <Typography variant="heading-sm" className="text-dark-gray mb-2">
                    コンサルタントは全員留学経験のある日本人
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Typography variant="body-md" className="text-white font-bold">
                      Point2
                    </Typography>
                  </div>
                  <div className="mt-2 text-right">
                    <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l3-3 3 3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <Typography variant="heading-sm" className="text-dark-gray mb-2">
                    科学的根拠に基づく学習プログラム
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Typography variant="body-md" className="text-white font-bold">
                      Point3
                    </Typography>
                  </div>
                  <div className="mt-2 text-right">
                    <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l3-3 3 3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <Typography variant="heading-sm" className="text-dark-gray mb-2">
                    1人ひとりに合わせたオーダーメイドの学習設計
                  </Typography>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-warm-white to-light-gray rounded-2xl p-8 text-center">
                <Image
                  src="/images/hero-students.jpg"
                  alt="Engrowthで学ぶ学生たち"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Course Section (4-column) */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8">
              Course
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ビジネスコース */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 relative">
              {/* 今ならバッジ */}
              <div className="absolute -top-3 -right-3 bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold">
                今なら
              </div>
              <div className="mb-6">
                <Image
                  src="/images/business-course.jpg"
                  alt="ビジネスコース"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  ビジネスコース
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  忙しい社会人向けの効率的な英語学習
                  <br />
                  xxxxxxxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxx
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>

            {/* ビジネススポットサービス */}
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <Image
                  src="/images/business-spot.jpg"
                  alt="ビジネススポットサービス"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  ビジネススポット
                  <br />
                  サービス
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  会議同席・資料翻訳・プレゼン準備
                  <br />
                  xxxxxxxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxx
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>

            {/* 学生コース */}
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <Image
                  src="/images/student-course.jpg"
                  alt="学生コース"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  学生コース
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  留学を目指す学生向けの総合プログラム
                  <br />
                  xxxxxxxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxx
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>

            {/* 学生スポットサービス */}
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <Image
                  src="/images/student-spot.jpg"
                  alt="学生スポットサービス"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  学生スポット
                  <br />
                  サービス
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  エッセイ添削指導
                  <br />
                  面接練習・対策
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>
          </div>

          {/* コース・料金ボタン */}
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
              コース・料金
            </Button>
          </div>
        </Container>
      </Section>

      {/* 4. 無料カウンセリングバナー（main_bn.png使用） */}
      <Section background="brand-red" padding="lg">
        <Container>
          <div className="relative">
            {/* メイン画像背景 */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-brand-red to-red-600">
              <Image
                src="/images/main_bn.png"
                alt="30分の無料カウンセリング"
                width={1200}
                height={300}
                className="w-full h-auto opacity-90"
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

      {/* 5. 従来スクールとの違い（2カラム比較） */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8">
              従来のスクールとのちがい
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* 従来スクール */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <Typography variant="heading-md" className="text-gray mb-8 text-center">
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

            {/* 矢印 */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="text-brand-red">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </div>
            </div>

            {/* Engrowth */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-brand-red/20">
              <Typography variant="heading-md" className="text-brand-red mb-8 text-center">
                Engrowth
              </Typography>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    講師が外国人で日本人のつまづくポイントが理解できない
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    全員が日本語を第一言語としたコンサルタント
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
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