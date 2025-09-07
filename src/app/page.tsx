import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Section background="gradient" padding="xl">
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
          
          {/* Hero Visual */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-left">
                    <Typography variant="heading-md" className="text-dark-gray mb-4">
                      留学の夢を諦めない
                    </Typography>
                    <Typography variant="body-md" className="text-gray mb-6">
                      経済的な不安から留学を諦める必要はありません。Engrowthの独自エコシステムが、あなたの夢の実現をサポートします。
                    </Typography>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-action-green rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <Typography variant="body-sm" className="text-dark-gray">
                        100+ 学生の夢を実現
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-action-green to-soft-gold rounded-full flex items-center justify-center">
                      <Typography variant="heading-lg" className="text-white text-center">
                        Engrowth
                        <br />
                        Ecosystem
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Why Engrowth Section */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
            Engrowthが選ばれる理由
          </Typography>
          <Typography variant="body-md" className="text-gray max-w-2xl mx-auto">
            私たちは留学生の夢を実現するため、3つの独自の強みでサポートします
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center animate-scaleIn">
            <div className="w-16 h-16 bg-gradient-to-br from-action-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <Typography variant="heading-sm" className="text-dark-gray mb-4" as="h3">
              コンサルタントとしての実績
            </Typography>
            <Typography variant="body-sm" className="text-gray">
              豊富な実績と経験を持つ講師陣が、個別カスタマイズされた学習プログラムで実践的なビジネス英語を指導します。
            </Typography>
          </Card>

          <Card className="text-center animate-scaleIn" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <Typography variant="heading-sm" className="text-dark-gray mb-4" as="h3">
              日本人だからこそ分かる学習プログラム
            </Typography>
            <Typography variant="body-sm" className="text-gray">
              日本人特有の英語学習課題を理解し、文化的背景を考慮したきめ細かなサポート体制を提供します。
            </Typography>
          </Card>

          <Card className="text-center animate-scaleIn" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-soft-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <Typography variant="heading-sm" className="text-dark-gray mb-4" as="h3">
              経済的支援を含む総合サポート体制
            </Typography>
            <Typography variant="body-sm" className="text-gray">
              学習と経済支援の両立、企業とのマッチング支援、継続的なキャリアサポートを提供します。
            </Typography>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="secondary" size="md">
            詳細を見る
          </Button>
        </div>
      </Section>

      {/* 3. Course Introduction Section (4 Column Layout) */}
      <Section background="light-gray" padding="xl">
        <div className="text-center mb-16">
          <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
            コース・料金
          </Typography>
          <Typography variant="body-md" className="text-gray max-w-2xl mx-auto">
            あなたの目標に合わせた最適なプランをお選びください
          </Typography>
        </div>

        {/* 4 Column Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Business Course */}
          <Card variant="premium" className="text-center">
            <div className="bg-brand-red text-white text-xs py-1 px-3 rounded-full inline-block mb-4">
              今なら
            </div>
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-bold">💼</span>
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-2 text-sm" as="h3">
                ビジネスコース
              </Typography>
            </div>
            <div className="mb-4">
              <Typography variant="caption" className="text-action-green block mb-2">
                初回見学
              </Typography>
            </div>
            <Button variant="primary" size="sm" className="w-full text-xs">
              詳細を見る
            </Button>
          </Card>

          {/* Business Spot Service */}
          <Card className="text-center">
            <div className="mb-4 mt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-soft-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-bold">⚡</span>
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-2 text-sm" as="h3">
                ビジネススポットサービス
              </Typography>
            </div>
            <div className="mb-4">
              <Typography variant="caption" className="text-action-green block mb-2">
                初回見学
              </Typography>
            </div>
            <Button variant="secondary" size="sm" className="w-full text-xs">
              詳細を見る
            </Button>
          </Card>

          {/* Study Course */}
          <Card className="text-center">
            <div className="mb-4 mt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-action-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-bold">📚</span>
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-2 text-sm" as="h3">
                学習コース
              </Typography>
            </div>
            <div className="mb-4">
              <Typography variant="caption" className="text-action-green block mb-2">
                初回見学
              </Typography>
            </div>
            <Button variant="secondary" size="sm" className="w-full text-xs">
              詳細を見る
            </Button>
          </Card>

          {/* Study Spot Service */}
          <Card className="text-center">
            <div className="mb-4 mt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-bold">🎯</span>
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-2 text-sm" as="h3">
                学習スポットサービス
              </Typography>
            </div>
            <div className="mb-4">
              <Typography variant="caption" className="text-action-green block mb-2">
                初回見学
              </Typography>
            </div>
            <Button variant="secondary" size="sm" className="w-full text-xs">
              詳細を見る
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <Typography variant="heading-md" className="text-dark-gray">
            コース・料金
          </Typography>
        </div>
      </Section>

      {/* 4. Free Counseling Banner Section (main_bn.png style) */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-2xl p-8 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left side - Speech bubble and text */}
                <div className="flex-1">
                  <div className="relative mb-6">
                    {/* Speech bubble */}
                    <div className="bg-white text-dark-gray rounded-full px-6 py-3 inline-block relative">
                      <Typography variant="heading-sm" className="text-dark-gray font-bold">
                        カンタン
                        <br />
                        2ステップ!
                      </Typography>
                      {/* Arrow */}
                      <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                        <div className="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[30px] border-t-transparent border-b-transparent border-l-white"></div>
                      </div>
                    </div>
                  </div>
                  
                  <Typography variant="heading-lg" className="text-white mb-4">
                    30分の無料カウンセリングでご相談ください
                  </Typography>
                  
                  <Typography variant="body-md" className="text-red-100 mb-6">
                    あなたの学習目標や悩みをお聞かせください。
                    <br />
                    最適な学習プランを無料でご提案いたします。
                  </Typography>
                </div>

                {/* Right side - CTA Button */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* "無料" badge */}
                    <div className="absolute -top-4 -left-4 bg-white text-action-green rounded-full px-3 py-1 text-sm font-bold shadow-lg z-20">
                      無料
                    </div>
                    
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="bg-gradient-to-r from-action-green to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      カウンセリングを予約する
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Comparison Section - Traditional Schools vs Engrowth */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
            従来のスクールとちがい
          </Typography>
          <Typography variant="body-md" className="text-gray max-w-2xl mx-auto">
            Engrowthは従来の英会話スクールとは異なるアプローチで、より効果的な学習をサポートします
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Traditional Schools - Left Column */}
          <div className="text-center">
            <Typography variant="heading-md" className="text-gray mb-8" as="h3">
              従来
            </Typography>
            <Card className="p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">×</span>
                  </div>
                  <div className="text-left">
                    <Typography variant="body-md" className="text-dark-gray font-medium mb-2">
                      講師が外国人だと
                    </Typography>
                    <Typography variant="body-sm" className="text-gray">
                      日本人のつまづきが分からない...
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">×</span>
                  </div>
                  <div className="text-left">
                    <Typography variant="body-md" className="text-dark-gray font-medium mb-2">
                      講師が来ないと
                    </Typography>
                    <Typography variant="body-sm" className="text-gray">
                      学習できない...
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">×</span>
                  </div>
                  <div className="text-left">
                    <Typography variant="body-md" className="text-dark-gray font-medium mb-2">
                      個人の経験に基づいた
                    </Typography>
                    <Typography variant="body-sm" className="text-gray">
                      カリキュラム
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Engrowth - Right Column */}
          <div className="text-center">
            <Typography variant="heading-md" className="text-brand-red mb-8" as="h3">
              Engrowth
            </Typography>
            <Card variant="premium" className="p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <Typography variant="body-md" className="text-dark-gray font-medium mb-2">
                      日本人講師だからこそ
                    </Typography>
                    <Typography variant="body-sm" className="text-gray">
                      日本人のつまづきポイントを熟知し、効果的な指導が可能
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <Typography variant="body-md" className="text-dark-gray font-medium mb-2">
                      自主学習もサポート
                    </Typography>
                    <Typography variant="body-sm" className="text-gray">
                      レッスン外でも継続的に学習できる環境を提供
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <Typography variant="body-md" className="text-dark-gray font-medium mb-2">
                      データに基づいた
                    </Typography>
                    <Typography variant="body-sm" className="text-gray">
                      科学的根拠のある学習メソッドとカリキュラム
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            Engrowthの特徴をもっと見る
          </Button>
        </div>
      </Section>
    </div>
  );
}