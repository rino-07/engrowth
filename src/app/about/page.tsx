import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';

export const metadata = {
  title: 'Engrowthの特徴 - オーダーメイド英語学習で留学生の経済問題を解決',
  description: 'Engrowthは科学的メソッドとオーダーメイド設計で、留学生・企業・コンサルタントが相互に支援し合う独自のエコシステムを提供。日本人だからこそ分かる課題に対応します。',
  keywords: 'Engrowth, 留学生支援, オーダーメイド学習, 科学的メソッド, エコシステム',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 1. Engrowthの特徴 - メインセクション */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h1">
              Engrowthの特徴
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-2xl mx-auto">
              学ぶことが支援になる、循環型エコシステムの仕組み
            </Typography>
          </div>

          {/* 3つの特徴 */}
          <div className="space-y-8 max-w-4xl mx-auto mb-16">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">●</span>
              </div>
              <div>
                <Typography variant="body-md" className="text-dark-gray">
                  <strong>コンサルタントも受講者も英語が話せなかった日本人。</strong>
                  <br />
                  日本人だからこそわかる、つまずくポイントを克服しながら学習を進めます。
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">●</span>
              </div>
              <div>
                <Typography variant="body-md" className="text-dark-gray">
                  <strong>脳科学や神経言語学などの科学的根拠に基づいたプログラムで、</strong>
                  <br />
                  英語が苦手なあなたでも、着実な英語力の向上を実現します。
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">●</span>
              </div>
              <div>
                <Typography variant="body-md" className="text-dark-gray">
                  <strong>コンサルタントは全員、海外留学経験者。</strong>
                  <br />
                  日本の学校で習う、ネイティブが使わない英語は除外し、
                  <br />
                  現地で使える生きた英語を身に付けることができます。
                </Typography>
              </div>
            </div>
          </div>

          {/* 無料カウンセリングバナー */}
          <div className="relative mb-20">
            <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-2xl p-8 text-center text-white relative overflow-hidden">
              {/* 吹き出し */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                <div className="bg-white rounded-full px-6 py-3 relative">
                  <Typography variant="body-md" className="text-dark-gray font-bold">
                    カンタン
                    <br />
                    2ステップ！
                  </Typography>
                  {/* 吹き出しの矢印 */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent border-l-white"></div>
                </div>
              </div>

              <Typography variant="heading-md" className="text-white mb-6">
                30分の無料カウンセリングでご相談ください
              </Typography>

              <div className="flex justify-center">
                <Button variant="primary" size="lg" className="bg-action-green hover:bg-green-700 text-white relative">
                  <span className="absolute -top-2 -left-2 bg-white text-action-green px-2 py-1 rounded-full text-xs font-bold">
                    無料
                  </span>
                  カウンセリングを予約する
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Engrowthの仕組み */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              Engrowthの仕組み
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Typography variant="body-md" className="text-dark-gray mb-8 leading-relaxed">
                Engrowthでは受講者をパートナーと呼んでいます。
                <br />
                それは受講者の英語力向上と向上することは、Engrowthの目指す世界に一歩近づくことであり、コンサルタント自身の夢をかなえる一助になるからです。
              </Typography>

              <Typography variant="body-md" className="text-dark-gray mb-8 leading-relaxed">
                私たちは、すべてのステークホルダーがWin-Winの関係で結ばれることを信念とし、
                <br />
                共に日本の未来を切り開いていく存在でありたいと考えています。
              </Typography>
            </div>

            {/* エコシステム図 */}
            <div className="text-center mb-16">
              <Typography variant="body-sm" className="text-gray mb-4">
                まずは図（※）
              </Typography>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Image
                  src="/images/ecosystem-diagram.jpg"
                  alt="Engrowthエコシステム図"
                  width={600}
                  height={400}
                  className="w-full max-w-lg mx-auto h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Engrowthエコシステムへの支援について */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              Engrowthエコシステムへの支援について
            </Typography>
            <Typography variant="body-md" className="text-dark-gray max-w-3xl mx-auto mb-8">
              Engrowthは、留学生のコンサルタントが金銭的で自由の学習機会を失わないよう持続可能な支援体制を構築しています。
            </Typography>
            
            <div className="mb-12">
              <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
                ご支援希望者の方へ
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Engrowthが選ばれる理由 */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              Engrowthが選ばれる理由
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
            {/* Point 1 */}
            <Card className="text-center p-8">
              <div className="w-12 h-12 bg-soft-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Typography variant="body-md" className="text-white font-bold">
                  Point 1
                </Typography>
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                実績あるコンサルタントは全員、留学経験のある日本人
              </Typography>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                日本人だからこそ「つまずくポイント」を熟知して理解できる唯一の存在
                <br /><br />
                外国人講師には理解して理解できない、日本人特有の英語学習の悩み。
                <br />
                なぜ「This」と言えるのに、なぜ「It」と「Is」を含む文章できないのか、
                <br />
                なぜ過去形を忘れてしまうのか——————。
              </Typography>
            </Card>

            {/* Point 2 */}
            <Card className="text-center p-8">
              <div className="w-12 h-12 bg-soft-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Typography variant="body-md" className="text-white font-bold">
                  Point 2
                </Typography>
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                科学的根拠に基づく学習プログラム
              </Typography>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                感覚や経験論に頼らない、データドリブンな学習設計
                <br /><br />
                各人の理解度に合わせてプログラムではなく、第二言語習得理論、認知言語学、脳科学などの最新研究に基づいた学習方法を採用。
                <br />
                脳のメカニズムに沿った効果的で効率的な英語学習を実現します。
                <br /><br />
                忙しい毎日でも、社会人でも着実な成果が期待できるように設計されています。
              </Typography>
            </Card>

            {/* Point 3 */}
            <Card className="text-center p-8">
              <div className="w-12 h-12 bg-soft-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Typography variant="body-md" className="text-white font-bold">
                  Point 3
                </Typography>
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                1人ひとりに合わせたオーダーメイド学習設計
              </Typography>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                あなたの目標・レベル・ライフスタイルに合わせた最適なスケジュール
                <br /><br />
                「TOEFL100点を目指します」と「内定先企業で活躍したい」では、必要なキャップが異なります。
                <br /><br />
                Engrowthでは初回カウンセリングで詳細分析を行い、目標達成までの最適なルートを設計。
                <br />
                日々の学習進捗度、運営度での中間調整により、常に最適な学習を維持できます。
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. あなたもEngrowthの一員になりませんか？ */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-12" as="h2">
              あなたもEngrowthの一員になりませんか？
            </Typography>

            {/* エコシステム図 - 三角形配置 */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {/* 三角形の頂点: 学習者 */}
                  <g>
                    <circle cx="200" cy="50" r="60" fill="#f5f5f5" stroke="#d30306" strokeWidth="2"/>
                    <text x="200" y="45" textAnchor="middle" className="text-sm font-bold fill-current text-dark-gray">学習者</text>
                    <text x="200" y="60" textAnchor="middle" className="text-xs fill-current text-gray">(留学生・社会人)</text>
                  </g>

                  {/* 左下: 企業・支援者 */}
                  <g>
                    <circle cx="100" cy="200" r="60" fill="#f5f5f5" stroke="#d30306" strokeWidth="2"/>
                    <text x="100" y="195" textAnchor="middle" className="text-sm font-bold fill-current text-dark-gray">企業</text>
                    <text x="100" y="210" textAnchor="middle" className="text-xs fill-current text-gray">(支援者)</text>
                  </g>

                  {/* 右下: コンサルタント */}
                  <g>
                    <circle cx="300" cy="200" r="60" fill="#f5f5f5" stroke="#d30306" strokeWidth="2"/>
                    <text x="300" y="195" textAnchor="middle" className="text-sm font-bold fill-current text-dark-gray">コンサルタント</text>
                    <text x="300" y="210" textAnchor="middle" className="text-xs fill-current text-gray">(指導者)</text>
                  </g>

                  {/* 曲線での接続 */}
                  <path d="M 160 90 Q 150 150 140 160" stroke="#d30306" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M 240 90 Q 250 150 260 160" stroke="#d30306" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                  <path d="M 160 200 Q 200 230 240 200" stroke="#d30306" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

                  {/* 矢印マーカー定義 */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#d30306"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            {/* 3択CTA */}
            <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
              <Button variant="secondary" size="lg" className="flex-1 max-w-xs">
                オブザーバー
                <br />
                <span className="text-sm font-normal">（支援者として参加）</span>
              </Button>
              <Button variant="secondary" size="lg" className="flex-1 max-w-xs">
                パートナー
                <br />
                <span className="text-sm font-normal">（継続支援のご相談）</span>
              </Button>
              <Button variant="secondary" size="lg" className="flex-1 max-w-xs">
                コンサルタント
                <br />
                <span className="text-sm font-normal">（指導者として参加）</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}