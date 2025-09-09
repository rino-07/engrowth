import Link from 'next/link';
import Button from '@/components/ui/Button';
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
                <div className="text-dark-gray font-bold mb-2" style={{ fontSize: '28px', lineHeight: '1.4' }}>
                  コンサルタントも受講者も英語が話せなかった日本人。
                </div>
                <div className="text-dark-gray" style={{ fontSize: '24px', lineHeight: '1.5' }}>
                  日本人だからこそわかる、つまずくポイントを克服しながら学習を進めます。
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">●</span>
              </div>
              <div>
                <div className="text-dark-gray font-bold mb-2" style={{ fontSize: '28px', lineHeight: '1.4' }}>
                  脳科学や神経言語学などの科学的根拠に基づいたプログラムで、
                </div>
                <div className="text-dark-gray" style={{ fontSize: '24px', lineHeight: '1.5' }}>
                  英語が苦手なあなたでも、着実な英語力の向上を実現します。
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">●</span>
              </div>
              <div>
                <div className="text-dark-gray font-bold mb-2" style={{ fontSize: '28px', lineHeight: '1.4' }}>
                  コンサルタントは全員、海外留学経験者。
                </div>
                <div className="text-dark-gray" style={{ fontSize: '24px', lineHeight: '1.5' }}>
                  日本の学校で習う、ネイティブが使わない英語は除外し、
                  <br />
                  現地で使える生きた英語を身に付けることができます。
                </div>
              </div>
            </div>
          </div>

          {/* 無料カウンセリングバナー */}
          <div className="relative mb-20">
            <Link href="/contact">
              <Image
                src="/images/main_banner.png"
                alt="30分の無料カウンセリング"
                width={1200}
                height={300}
                className="w-full h-auto rounded-2xl cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
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
              <div>
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/top/top08.png"
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
            <div className="text-dark-gray max-w-3xl mx-auto mb-8" style={{ fontSize: '24px', lineHeight: '1.5' }}>
              Engrowthは、留学生のコンサルタントが金銭的で自由の学習機会を失わないよう持続可能な支援体制を構築しています。
            </div>
            
            <div className="mb-12">
              <Link href="/supporters">
                <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
                  ご支援希望者の方へ
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Engrowthが選ばれる理由 */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* タイトル - 1カラム全幅 */}
            <div className="text-center mb-16">
              <Typography variant="heading-lg" className="text-dark-gray" as="h2">
                Engrowthが選ばれる理由
              </Typography>
            </div>

            {/* Point番号と本文を同じブロック内にflexレイアウト */}
            <div className="space-y-12">
              {/* Point 1 */}
              <div className="flex items-start gap-6">
                <div className="w-20 h-12 bg-soft-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">Point 1</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-dark-gray mb-2">
                    実在コンサルタントは全員、留学経験のある日本人
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

                  {/* 円形の接続線 */}
                  {/* 学習者から企業への円弧 */}
                  <path d="M 160 100 A 80 80 0 0 0 140 160" stroke="#d30306" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                  
                  {/* 企業からコンサルタントへの円弧 */}
                  <path d="M 160 180 A 100 100 0 0 0 240 180" stroke="#d30306" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                  
                  {/* コンサルタントから学習者への円弧 */}
                  <path d="M 260 160 A 80 80 0 0 0 240 100" stroke="#d30306" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                  
                  {/* 中央に循環を示す円 */}
                  <circle cx="200" cy="140" r="25" fill="none" stroke="#d30306" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
                  <text x="200" y="145" textAnchor="middle" className="text-xs fill-current text-brand-red font-bold">循環</text>

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
              <Link href="/contact" className="flex-1 max-w-xs">
                <Button variant="secondary" size="lg" className="w-full">
                  オブザーバー
                  <br />
                  <span className="text-sm font-normal">（支援者として参加）</span>
                </Button>
              </Link>
              <Link href="/contact" className="flex-1 max-w-xs">
                <Button variant="secondary" size="lg" className="w-full">
                  パートナー
                  <br />
                  <span className="text-sm font-normal">（継続支援のご相談）</span>
                </Button>
              </Link>
              <Link href="/contact" className="flex-1 max-w-xs">
                <Button variant="secondary" size="lg" className="w-full">
                  コンサルタント
                  <br />
                  <span className="text-sm font-normal">（指導者として参加）</span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}