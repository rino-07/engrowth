import Link from 'next/link';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import Image from 'next/image';
import { FaUserTie, FaFlask, FaUsers } from 'react-icons/fa';
import { Hero } from '@/components/sections';

export const metadata = {
  title: 'Engrowthエコシステム - オーダーメイド英語学習で留学生の経済問題を解決',
  description: 'Engrowthは科学的メソッドとオーダーメイド設計で、留学生・企業・コンサルタントが相互に支援し合う独自のエコシステムを提供。日本人だからこそ分かる課題に対応します。',
  keywords: 'Engrowthエコシステム, 留学生支援, オーダーメイド学習, 科学的メソッド, エコシステム',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Hero
        title=""
        subtitle=""
        bgDesktopSrc="/images/about/about_hero.png"
        bgMobileSrc="/images/hero_sma/about_hero_sma.png"
        bgPosition="center 25%"
        className="flex items-center justify-center text-center"
      />

      {/* 2. 3つの特徴 */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Features"
          title="Engrowthが選ばれる3つの理由"
          desc="従来の英語学習にはない、科学的根拠と実践経験に基づいた独自のアプローチで確実な成果を実現します。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="space-y-8 max-w-4xl mx-auto mb-16">
            <div className="flex items-start gap-6">
              <FaUserTie className="w-8 h-8 text-brand-red flex-shrink-0 mt-2" />
              <div>
                <Typography variant="heading-md" className="text-dark-gray font-bold mb-2 font-serif">
                  コンサルタントも以前は英語が話せなかった日本人
                </Typography>
                <Typography variant="body-lg" className="text-dark-gray">
                  日本人だからこそわかる、つまずくポイントを克服しながら学習を進めます。
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <FaFlask className="w-8 h-8 text-brand-red flex-shrink-0 mt-2" />
              <div>
                <Typography variant="heading-md" className="text-dark-gray font-bold mb-2 font-serif">
                  脳科学や神経言語学などの科学的根拠に基づいたプログラム
                </Typography>
                <Typography variant="body-lg" className="text-dark-gray">
                  英語が苦手なあなたでも、着実な英語力の向上を実現します。
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <FaUsers className="w-8 h-8 text-brand-red flex-shrink-0 mt-2" />
              <div>
                <Typography variant="heading-md" className="text-dark-gray font-bold mb-2 font-serif">
                  コンサルタントは全員、海外留学経験者
                </Typography>
                <Typography variant="body-lg" className="text-dark-gray">
                  日本の学校で習う、ネイティブが使わない英語は除外し、
                  現地で使える生きた英語を身に付けることができます。
                </Typography>
              </div>
            </div>
          </div>

          {/* 無料カウンセリングバナー */}
          <div className="relative">
            <Link href="/contact">
              <Image
                src="/images/main_banner.png"
                alt="30分の無料カウンセリング"
                width={1200}
                height={300}
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 2. Engrowthの仕組み */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="System"
          title="受講者をパートナーと呼ぶ独自のエコシステム"
          desc="英語力向上を通じて、受講者・コンサルタント・企業が相互に支援し合う持続可能な学習環境を提供しています。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 左側: 説明テキスト */}
              <div>
                <Typography variant="body-md" className="text-dark-gray mb-8 leading-relaxed">
                  Engrowthでは「受講者」という言葉をあえて使わず、「パートナー」と呼んでいます。それは、皆さまの英語力の向上が、単なるスキル習得にとどまらず、私たちの掲げるビジョン――「日本人が英語を通じて可能性を広げ、世界で活躍する未来」――へとつながる大切な一歩だと考えているからです。
                </Typography>

                <Typography variant="body-md" className="text-dark-gray mb-8 leading-relaxed">
                  パートナーの挑戦や努力は、Engrowthのコンサルタントにとっても大きな原動力であり、共に夢を実現していく道のりそのものです。私たちは英語学習の指導者であると同時に、あなたと同じ方向を見つめ、歩みを重ねる伴走者。成果を共に喜び、壁を共に乗り越える「ビジョンを共有する仲間」として、ともに成長していきたいと願っています。
                </Typography>

                <Typography variant="body-md" className="text-dark-gray leading-relaxed">
                  さらに、EngrowthはすべてのステークホルダーがWin-Winの関係で結ばれることを信念とし、共に日本の未来を切り拓いていく存在でありたいと考えています。
                </Typography>
              </div>

              {/* 右側: エコシステム図 */}
              <div className="flex justify-center">
                <Image
                  src="/images/about/eco01.png"
                  alt="Engrowthエコシステム図"
                  width={600}
                  height={400}
                  className="w-full max-w-lg h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Engrowthエコシステムへの支援について */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Support"
          title="学びを経済的理由で止めない、持続的な支援体制"
          desc="Engrowthは留学中のコンサルタントが機会を失わないよう、透明性の高い支援スキームを提供します。あなたからのご支援が、世界で活躍する日本人を生み出します。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="text-center mb-16">
            <div className="mb-12">
              <Link href="/supporters">
                <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
                  ぜひご支援ください
                </Button>
              </Link>
            </div>
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

      {/* 5. あなたもEngrowthの一員になりませんか？ */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Join Us"
          title="あなたもEngrowthエコシステムの一員になりませんか？"
          desc="受講者として、コンサルタントとして、または支援者として。あなたに最適な参加方法で、共に英語学習の未来を創りましょう。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="text-center">

            {/* エコシステム図とボタン */}
            <div className="max-w-5xl mx-auto lg:mb-16 px-4">
              <div className="relative">
                <Image
                  src="/images/about/eco02.png"
                  alt="Engrowthエコシステム参加図"
                  width={800}
                  height={600}
                  className="w-full h-auto mx-auto"
                />
                
                {/* ボタンを画像上に絶対配置 - レスポンシブ対応 */}
                <div className="absolute inset-0">
                  {/* パートナー（受講者）として参加ボタン */}
                  <a 
                    href="/supporters"
                    className="absolute"
                    style={{
                      top: '40%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <button
                      className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base"
                      style={{ backgroundColor: '#d30306', minWidth: '60px', maxWidth: '80px' }}
                    >
                      参加
                    </button>
                  </a>

                  {/* サポーター（支援者）として参加ボタン */}
                  <a 
                    href="/flow"
                    className="absolute"
                    style={{
                      top: '85%',
                      left: '21%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <button
                      className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base"
                      style={{ backgroundColor: '#d30306', minWidth: '60px', maxWidth: '80px' }}
                    >
                      参加
                    </button>
                  </a>

                  {/* コンサルタントとして参加ボタン */}
                  <a 
                    href="/contact"
                    className="absolute"
                    style={{
                      top: '85%',
                      left: '79%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <button
                      className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base"
                      style={{ backgroundColor: '#d30306', minWidth: '60px', maxWidth: '80px' }}
                    >
                      参加
                    </button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </div>
  );
}