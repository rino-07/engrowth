import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

export const metadata = {
  title: 'Engrowthの特徴 - オーダーメイド英語学習で留学生の経済問題を解決',
  description: 'Engrowthは科学的メソッドとオーダーメイド設計で、留学生・企業・コンサルタントが相互に支援し合う独自のエコシステムを提供。日本人だからこそ分かる課題に対応します。',
  keywords: 'Engrowth, 留学生支援, オーダーメイド学習, 科学的メソッド, エコシステム',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 1. Page Header + Free Counseling Banner */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8">
              <Typography variant="body-sm" className="text-gray">
                Home &gt; Engrowthの特徴
              </Typography>
            </nav>
            
            <Typography variant="heading-xl" className="text-dark-gray mb-4" as="h1">
              Engrowthの特徴
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-2xl mx-auto mb-8">
              留学生の経済問題を解決する
              <br />
              独自のエコシステム
            </Typography>

            {/* Free Counseling Banner - 主CTA化 */}
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-gradient-to-r from-brand-red via-red-500 to-red-600 rounded-2xl p-6 md:p-8 text-white overflow-hidden">
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="relative mb-4">
                        <div className="bg-white text-brand-red rounded-full px-4 py-2 inline-block relative">
                          <Typography variant="body-sm" className="text-brand-red font-bold">
                            カンタン2ステップ!
                          </Typography>
                        </div>
                      </div>
                      <Typography variant="heading-md" className="text-white mb-2">
                        30分の無料カウンセリング
                      </Typography>
                      <Typography variant="body-md" className="text-red-100">
                        あなたの学習目標や悩みをお聞かせください
                      </Typography>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="primary" size="lg" className="bg-white text-brand-red hover:bg-gray-100 px-8">
                        カウンセリングを予約する
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Three Points Section (画像1枚目準拠) */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
              Engrowthが選ばれる3つの理由
            </Typography>
            <Typography variant="body-md" className="text-gray max-w-2xl mx-auto">
              私たちは独自のアプローチで、留学生の夢を実現するための最適な環境を提供します
            </Typography>
          </div>

          <div className="space-y-12">
            {/* Point 1: コンサルタントの実績 */}
            <Card variant="premium" className="p-8 animate-fadeInUp">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-action-green to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <Typography variant="heading-md" className="text-dark-gray mb-4" as="h3">
                    コンサルタントの実績
                  </Typography>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-action-green text-lg">✓</span>
                      <Typography variant="body-md" className="text-dark-gray">
                        留学・実務の両面で成果を出してきた日本人コンサルが伴走
                      </Typography>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-action-green text-lg">✓</span>
                      <Typography variant="body-md" className="text-dark-gray">
                        文化的背景を踏まえた指導で"詰まる所"を解消
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Point 2: 科学的メソッド */}
            <Card variant="premium" className="p-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <Typography variant="heading-md" className="text-dark-gray mb-4" as="h3">
                    科学的メソッド
                  </Typography>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-action-green text-lg">✓</span>
                      <Typography variant="body-md" className="text-dark-gray">
                        学習ログと週次レビューで改善ループを回す
                      </Typography>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-action-green text-lg">✓</span>
                      <Typography variant="body-md" className="text-dark-gray">
                        目標指標：週達成率&gt;80%など学習KPIを可視化
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Point 3: オーダーメイド設計 */}
            <Card variant="premium" className="p-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-soft-gold to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <Typography variant="heading-md" className="text-dark-gray mb-4" as="h3">
                    1人ひとりに合わせた"オーダーメイド"
                  </Typography>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-action-green text-lg">✓</span>
                      <Typography variant="body-md" className="text-dark-gray">
                        目的・レベル・生活リズムに合わせて日次タスクを最適化
                      </Typography>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-action-green text-lg">✓</span>
                      <Typography variant="body-md" className="text-dark-gray">
                        日本人だからこそ分かる課題にも細かく対応
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. Ecosystem Section (画像2枚目準拠 - 三角形配置) */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
              Engrowthのエコシステム
            </Typography>
            <Typography variant="body-md" className="text-gray max-w-3xl mx-auto">
              学習者、企業・支援者、コンサルタントが相互に支援し合う持続可能なエコシステムで、
              全ての関係者にメリットを提供します
            </Typography>
          </div>

          {/* Triangle Ecosystem Diagram */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="relative h-96 md:h-[500px]">
                {/* SVG Triangle Ecosystem */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <marker id="arrowhead-red" markerWidth="10" markerHeight="7" 
                     refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#d30306" />
                    </marker>
                    <marker id="arrowhead-green" markerWidth="10" markerHeight="7" 
                     refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#0cc755" />
                    </marker>
                  </defs>
                  
                  {/* Curved connection lines (arcs) */}
                  {/* 学習者 → 企業・支援者 */}
                  <path d="M 200 80 Q 100 180 80 280" 
                        stroke="#d30306" strokeWidth="3" fill="none" 
                        markerEnd="url(#arrowhead-red)" />
                  
                  {/* 企業・支援者 → コンサルタント */}
                  <path d="M 80 300 Q 200 360 320 300" 
                        stroke="#0cc755" strokeWidth="3" fill="none" 
                        markerEnd="url(#arrowhead-green)" />
                  
                  {/* コンサルタント → 学習者 */}
                  <path d="M 320 280 Q 300 180 200 80" 
                        stroke="#d30306" strokeWidth="3" fill="none" 
                        markerEnd="url(#arrowhead-red)" />
                </svg>

                {/* Position elements */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-action-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-bold">
                    学習者
                  </Typography>
                  <Typography variant="body-sm" className="text-gray">
                    （留学生）
                  </Typography>
                </div>

                <div className="absolute bottom-4 left-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-soft-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">🏢</span>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-bold">
                    企業・支援者
                  </Typography>
                  <Typography variant="body-sm" className="text-gray">
                    （支援者）
                  </Typography>
                </div>

                <div className="absolute bottom-4 right-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">👨‍🏫</span>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-bold">
                    コンサルタント
                  </Typography>
                  <Typography variant="body-sm" className="text-gray">
                    （指導者）
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Ecosystem Flow */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="p-8">
              <Typography variant="heading-md" className="text-center text-dark-gray mb-8">
                エコシステムの流れ
              </Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <Typography variant="body-md" className="text-dark-gray">
                    学習者がEngrowthに参加し、個別カウンセリングを受ける
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <Typography variant="body-md" className="text-dark-gray">
                    科学的根拠に基づく学習プログラムを提供
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <Typography variant="body-md" className="text-dark-gray">
                    企業・支援者とのマッチングを行い、経済的支援を実現
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <Typography variant="body-md" className="text-dark-gray">
                    経済的支援と学習機会を同時に提供し、安心して学習に集中
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <Typography variant="body-md" className="text-dark-gray">
                    継続的な成長とキャリア発展をサポートし、社会に貢献
                  </Typography>
                </div>
              </div>
            </Card>
          </div>

          {/* Supporter CTA Button */}
          <div className="text-center">
            <Link href="/supporters">
              <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700 px-8">
                ご支援を希望する方へ
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 4. Triple Choice CTA (画像3枚目準拠) */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              あなたも
              <span className="text-brand-red">Engrowth</span>
              の一員になりませんか？
            </Typography>

            {/* Triangle Ecosystem Diagram (smaller version) */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative bg-gradient-to-br from-warm-white to-light-gray rounded-xl p-6">
                <div className="relative h-64">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                    <defs>
                      <marker id="small-arrow" markerWidth="8" markerHeight="6" 
                       refX="0" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#d30306" />
                      </marker>
                    </defs>
                    
                    {/* Curved arrows */}
                    <path d="M 150 30 Q 80 90 60 140" 
                          stroke="#d30306" strokeWidth="2" fill="none" 
                          markerEnd="url(#small-arrow)" />
                    <path d="M 60 150 Q 150 180 240 150" 
                          stroke="#0cc755" strokeWidth="2" fill="none" 
                          markerEnd="url(#small-arrow)" />
                    <path d="M 240 140 Q 200 90 150 30" 
                          stroke="#d30306" strokeWidth="2" fill="none" 
                          markerEnd="url(#small-arrow)" />
                  </svg>

                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="w-12 h-12 bg-action-green rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-sm">🎓</span>
                    </div>
                    <Typography variant="body-sm" className="text-dark-gray font-medium">
                      学習者
                    </Typography>
                  </div>

                  <div className="absolute bottom-2 left-4 text-center">
                    <div className="w-12 h-12 bg-soft-gold rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-sm">🏢</span>
                    </div>
                    <Typography variant="body-sm" className="text-dark-gray font-medium">
                      企業・支援者
                    </Typography>
                  </div>

                  <div className="absolute bottom-2 right-4 text-center">
                    <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-sm">👨‍🏫</span>
                    </div>
                    <Typography variant="body-sm" className="text-dark-gray font-medium">
                      コンサルタント
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Triple Choice Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/supporter">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-soft-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👁️</span>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray mb-3">
                    オブザーバー
                  </Typography>
                  <Typography variant="body-sm" className="text-gray mb-4">
                    支援者として参加
                  </Typography>
                  <Button variant="secondary" size="sm" className="w-full">
                    詳細を見る
                  </Button>
                </Card>
              </Link>

              <Link href="/partner">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-action-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray mb-3">
                    パートナー
                  </Typography>
                  <Typography variant="body-sm" className="text-gray mb-4">
                    継続支援のご相談
                  </Typography>
                  <Button variant="primary" size="sm" className="w-full bg-brand-red hover:bg-red-700">
                    詳細を見る
                  </Button>
                </Card>
              </Link>

              <Link href="/consultant">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👨‍🏫</span>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray mb-3">
                    コンサルタント
                  </Typography>
                  <Typography variant="body-sm" className="text-gray mb-4">
                    コンサルタントとして参加
                  </Typography>
                  <Button variant="secondary" size="sm" className="w-full">
                    詳細を見る
                  </Button>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. CEO Message (Optional - 下部配置) */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
              代表からのメッセージ
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">代表者写真</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <Typography variant="heading-md" className="text-dark-gray mb-2">
                      [代表者名]
                    </Typography>
                    <Typography variant="body-md" className="text-gray">
                      Engrowth 代表取締役
                    </Typography>
                  </div>
                  <Typography variant="body-lg" className="text-dark-gray leading-relaxed mb-6">
                    私たちEngrowthは、留学生が経済的な理由で夢を諦めることのない世界を目指しています。
                  </Typography>
                  <Typography variant="body-md" className="text-gray leading-relaxed">
                    科学的根拠に基づく学習プログラムと、オーダーメイド設計で、一人ひとりの成長を
                    サポートします。学習者、企業、コンサルタントが相互に支援し合うエコシステムを通じて、
                    持続可能な価値創造を実現していきます。
                  </Typography>
                  <div className="mt-8">
                    <Typography variant="body-md" className="text-dark-gray italic">
                      [署名]
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6. Company Info (Optional - 下部配置) */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h2">
              会社概要
            </Typography>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="space-y-4">
                    <tr className="border-b border-gray-200">
                      <td className="py-4 pr-8 font-medium text-dark-gray whitespace-nowrap">会社名</td>
                      <td className="py-4 text-gray">株式会社Engrowth</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 pr-8 font-medium text-dark-gray whitespace-nowrap">設立</td>
                      <td className="py-4 text-gray">20XX年X月</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 pr-8 font-medium text-dark-gray whitespace-nowrap">代表者</td>
                      <td className="py-4 text-gray">[代表者名]</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 pr-8 font-medium text-dark-gray whitespace-nowrap">所在地</td>
                      <td className="py-4 text-gray">[住所]</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 pr-8 font-medium text-dark-gray whitespace-nowrap">事業内容</td>
                      <td className="py-4 text-gray">
                        英会話コンサルティング<br />
                        留学生支援事業<br />
                        企業研修事業
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 pr-8 font-medium text-dark-gray whitespace-nowrap">従業員数</td>
                      <td className="py-4 text-gray">XX名</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-8 font-medium text-dark-gray whitespace-nowrap">資本金</td>
                      <td className="py-4 text-gray">XXXX万円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}