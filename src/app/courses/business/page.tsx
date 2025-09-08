import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';

export const metadata = {
  title: 'ビジネスコース - 忙しい社会人でも、英語は習得できる時代へ | Engrowth',
  description: '1回5分〜10分の隙間式学習で、科学的な習慣化理論と第二言語習得理論に基づく本当に続けられるプログラム。忙しい社会人向けの効率的な英語学習コース。',
  keywords: 'Engrowth, ビジネスコース, 社会人英語, 隙間学習, 科学的メソッド',
};

export default function BusinessCoursePage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-6" as="h1">
              ビジネスコース
            </Typography>
            <Typography variant="heading-md" className="text-dark-gray mb-8">
              忙しい社会人でも、英語は習得できる時代へ
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto leading-relaxed">
              "毎日1〜2時間のまとまった時間"ではなく、1回5分〜10分の隙間式学習の積み重ね。
              <br />
              科学的な習慣化理論 × 第二言語習得理論（SLA）に基づく"本当に続けられる"プログラム
            </Typography>
          </div>

          {/* 3つの特徴カード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="text-center p-6">
              <Image
                src="/images/business-feature-1.jpg"
                alt="スマートフォンでの英語学習"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <Typography variant="body-sm" className="text-dark-gray font-bold mb-2">
                ５分から１０分の短時間学習
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                通勤時間や昼休みなど、
                <br />
                忙しいスケジュールの中でも
                <br />
                効率的な学習が可能
              </Typography>
            </Card>

            <Card className="text-center p-6">
              <Image
                src="/images/business-feature-2.jpg"
                alt="科学的メソッド"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <Typography variant="body-sm" className="text-dark-gray font-bold mb-2">
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
                src="/images/business-feature-3.jpg"
                alt="LINEでの支援"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <Typography variant="body-sm" className="text-dark-gray font-bold mb-2">
                LINEでの伴走支援
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                24時間いつでも質問可能、
                <br />
                継続をサポートする
                <br />
                コミュニケーション
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 2. Engrowthが社会人に選ばれる理由 */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              Engrowthが社会人に選ばれる理由
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* 理由1 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">●</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  忙しい人のための設計
                </Typography>
              </div>
              <Image
                src="/images/busy-professional.jpg"
                alt="忙しい社会人"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                朝の通勤・帰宅時間・昼休み・
                <br />
                寝る前の5分など、隙間時間を
                <br />
                有効活用した学習スタイル。
                <br />
                忙しい社会人でも無理なく
                <br />
                継続できるプログラム設計。
                <br />
                1日たった5分からでも
                <br />
                着実な成長を実感できます。
              </Typography>
            </Card>

            {/* 理由2 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">●</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  短期間で使える英語力
                </Typography>
              </div>
              <Image
                src="/images/consistency.jpg"
                alt="継続性"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                習慣化科学に基づいた「続く」
                <br />
                仕組み作り。三日坊主になりがち
                <br />
                な英語学習を、生活の一部として
                <br />
                定着させます。
                <br />
                <br />
                専属コンサルタントが毎日の
                <br />
                学習をサポートし、モチベーション
                <br />
                維持をお手伝いします。
              </Typography>
            </Card>

            {/* 理由3 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">●</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  特別カリキュラムの一般公開
                </Typography>
              </div>
              <Image
                src="/images/custom-curriculum.jpg"
                alt="特別カリキュラム"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                あなたの業界・職種・目標に
                <br />
                合わせたオーダーメイド
                <br />
                カリキュラム。
                <br />
                <br />
                IT業界、金融業界、製造業など、
                <br />
                各分野で実際に使われる
                <br />
                ビジネス英語を重点的に学習。
                <br />
                即戦力となる英語力を育成します。
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. 料金 */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              料金
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Image
              src="/images/business-pricing-table.jpg"
              alt="ビジネスコース料金表"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </Container>
      </Section>

      {/* 4. あなたの英語力が、会社の未来を創る */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              あなたの英語力が、会社の未来を創る
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto mb-12">
              一人ひとりの英語力が直接事業売り上げに跳ね返る時代
              <br />
              忙しさを理由に後回しにしてきた人でも、今が変わるチャンス
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {/* 事業成長 */}
            <Card className="text-center p-6">
              <Image
                src="/images/business-growth.jpg"
                alt="事業成長"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                事業成長
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                海外展開・採用・資金
                <br />
                調達・文献アクセスなど、
                <br />
                あらゆる成長機会を
                <br />
                英語力が直結事業
                <br />
                成長に繋がる
              </Typography>
            </Card>

            {/* 組織のグローバル化 */}
            <Card className="text-center p-6">
              <Image
                src="/images/global-organization.jpg"
                alt="組織のグローバル化"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                組織のグローバル化
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                経営トップが英語で話
                <br />
                せる組織と、組織内の
                <br />
                グローバル化が一気に
                <br />
                進む
              </Typography>
            </Card>

            {/* 関係性での主導権 */}
            <Card className="text-center p-6">
              <Image
                src="/images/leadership.jpg"
                alt="関係性での主導権"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                関係性での主導権
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                取引先・投資家・パー
                <br />
                トナーとの関係で主導
                <br />
                権を取り、スピードも
                <br />
                信頼も向上
              </Typography>
            </Card>

            {/* 競合との差別化 */}
            <Card className="text-center p-6">
              <Image
                src="/images/differentiation.jpg"
                alt="競合との差別化"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                競合との差別化
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                翻訳に頼らず「自分の
                <br />
                言葉で話せる」ことで、
                <br />
                信頼・差別化に直結
              </Typography>
            </Card>
          </div>

          {/* 最終カウンセリングバナー */}
          <div className="relative">
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
    </div>
  );
}
