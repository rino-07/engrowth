import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';

export const metadata = {
  title: '支援者の方へ - 才能を、資金不足で開ざさない | Engrowth',
  description: 'グローバル人材育成への投資が、日本の未来への投資に。あなたの支援が明日の日本のグローバルリーダーを育てます。パートナーシップ相談・Engrowthの仕組み詳細。',
  keywords: 'Engrowth, 支援者, パートナーシップ, グローバル人材, 投資, 企業支援',
};

export default function SupportersPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-6" as="h1">
              支援者の方へ
            </Typography>
            <Typography variant="heading-md" className="text-gray mb-8">
              「才能を、資金不足で開ざさない」
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-3xl mx-auto mb-12">
              〜グローバル人材育成への投資が、日本の未来への投資に〜
              <br /><br />
              あなたの支援が、明日の日本のグローバルリーダーを育てます
            </Typography>

            <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700 flex-1">
                パートナーシップ相談
              </Button>
              <Button variant="secondary" size="lg" className="flex-1">
                Engrowthの仕組み詳細
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Engrowth支援プログラムとは */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              Engrowth支援プログラムとは
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto leading-relaxed">
              Engrowth独自の仕組みにより、経済的な理由でグローバル人材になりたくても成長機会になります。
              <br />
              弊社内での独自システムを通して、有志的に有能な人材（学習能者の高い日本人留学生）と支援可能です。
              <br /><br />
              留学生活での、高度な学び方の環境を維持するための英語コンサルティング活動を支えることで、学習時間の創出と経済的なバックアップが目標となります。
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 3. 日本が失いつつある、優秀なグローバル人材 */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              日本が失いつつある、優秀なグローバル人材
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Image
                src="/images/global-talent-ecosystem.jpg"
                alt="グローバル人材エコシステム図"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg mb-8"
              />
              <Typography variant="body-md" className="text-gray text-center">
                エコシステム図：グローバル人材の流出問題と支援の重要性
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. 企業メリット */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              企業メリット
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* 人材発掘・採用機会 */}
            <Card className="p-8 text-center h-full">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                人材発掘・採用機会
              </Typography>
              <Typography variant="body-md" className="text-gray mb-6">
                支援学生との交流
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-32 flex items-center justify-center">
                <Image
                  src="/images/talent-discovery.jpg"
                  alt="人材発掘"
                  width={100}
                  height={80}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </Card>

            {/* CSR・企業ブランディング */}
            <Card className="p-8 text-center h-full">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                CSR・企業ブランディング
              </Typography>
              <Typography variant="body-md" className="text-gray mb-6">
                教育支援、人材流出防止
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-32 flex items-center justify-center">
                <Image
                  src="/images/csr-branding.jpg"
                  alt="CSR・ブランディング"
                  width={100}
                  height={80}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </Card>

            {/* 事業シナジー */}
            <Card className="p-8 text-center h-full">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                事業シナジー
              </Typography>
              <Typography variant="body-md" className="text-gray mb-6">
                ダイバーシティのある人材とのシナジー
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-32 flex items-center justify-center">
                <Image
                  src="/images/business-synergy.jpg"
                  alt="事業シナジー"
                  width={100}
                  height={80}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </Card>
          </div>

          {/* お気軽にご相談ください */}
          <div className="text-center mb-16">
            <Typography variant="body-lg" className="text-gray mb-8">
              お気軽にご相談ください
            </Typography>
            <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
              パートナーシップ相談
            </Button>
          </div>
        </Container>
      </Section>

      {/* 5. 企業規模・ご予算に応じた柔軟な支援プラン */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              企業規模・ご予算に応じた柔軟な支援プラン
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {/* ブロンズパートナー */}
            <Card className="p-6 text-center border-2 border-amber-200 bg-amber-50">
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                ブロンズパートナー
              </Typography>
              <Typography variant="body-md" className="text-brand-red font-bold mb-4">
                月額：50万円〜
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-24 flex items-center justify-center mb-4">
                <Image
                  src="/images/bronze-partner.jpg"
                  alt="ブロンズパートナー"
                  width={80}
                  height={60}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </Card>

            {/* シルバーパートナー */}
            <Card className="p-6 text-center border-2 border-gray-300 bg-gray-50">
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                シルバーパートナー
              </Typography>
              <Typography variant="body-md" className="text-brand-red font-bold mb-4">
                月額：100万円〜
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-24 flex items-center justify-center mb-4">
                <Image
                  src="/images/silver-partner.jpg"
                  alt="シルバーパートナー"
                  width={80}
                  height={60}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </Card>

            {/* ゴールドパートナー */}
            <Card className="p-6 text-center border-2 border-yellow-300 bg-yellow-50">
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                ゴールドパートナー
              </Typography>
              <Typography variant="body-md" className="text-brand-red font-bold mb-4">
                月額：200万円〜
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-24 flex items-center justify-center mb-4">
                <Image
                  src="/images/gold-partner.jpg"
                  alt="ゴールドパートナー"
                  width={80}
                  height={60}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </Card>

            {/* プラチナパートナー */}
            <Card className="p-6 text-center border-2 border-purple-300 bg-purple-50">
              <Typography variant="heading-sm" className="text-dark-gray mb-2">
                プラチナパートナー
              </Typography>
              <Typography variant="body-md" className="text-brand-red font-bold mb-4">
                月額：500万円〜
              </Typography>
              <div className="bg-light-gray rounded-lg p-4 h-24 flex items-center justify-center mb-4">
                <Image
                  src="/images/platinum-partner.jpg"
                  alt="プラチナパートナー"
                  width={80}
                  height={60}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6. よくある質問 */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              よくある質問
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 支援の税務処理はどうなりますか？
              </Typography>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 支援学生が卒業後、必ず学社に就職するのでしょうか？
              </Typography>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 支援途中で学生がやめる場合事業で留学を断念する場合はどうなりますか？
              </Typography>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 小規模企業、個人事業主でも参加できますか？
              </Typography>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Typography variant="body-md" className="text-dark-gray font-bold mb-2">
                Q. 支援学生の選考基準を教えてください。
              </Typography>
            </div>
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