import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';
// import { getCourseById } from '@/data/courses';

export const metadata = {
  title: '学生コース - 留学の夢を諦めない、経済支援付き英語学習 | Engrowth',
  description: '留学を目指す学生向けの総合的な英語学習プログラム。経済支援制度、エッセイ添削、面接対策など、留学成功のための包括的サポート。',
  keywords: 'Engrowth, 学生コース, 留学準備, 経済支援, エッセイ添削, 面接対策',
};

export default function StudentCoursePage() {
  // const studentCourse = getCourseById('student');

  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-6" as="h1">
              学生コース
            </Typography>
            <Typography variant="heading-md" className="text-dark-gray mb-8">
              留学の夢を諦めない、経済支援付き英語学習
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto leading-relaxed">
              経済的な理由で留学を諦める必要はありません。Engrowthの学生コースは、
              <br />
              英語学習と経済支援を組み合わせた独自プログラムで、あなたの留学の夢を全力でサポートします。
            </Typography>
          </div>

          {/* 3つの特徴カード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="text-center p-6">
              <Image
                src="/images/student-feature-1.jpg"
                alt="学生特化カリキュラム"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <Typography variant="body-sm" className="text-dark-gray font-bold mb-2">
                学生特化カリキュラム
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                留学準備・就活対策に
                <br />
                特化した学習内容で
                <br />
                確実なスキルアップ
              </Typography>
            </Card>

            <Card className="text-center p-6">
              <Image
                src="/images/student-feature-2.jpg"
                alt="経済支援制度"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <Typography variant="body-sm" className="text-dark-gray font-bold mb-2">
                経済支援制度
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                学費負担を軽減する
                <br />
                独自の支援プログラムで
                <br />
                安心して学習継続
              </Typography>
            </Card>

            <Card className="text-center p-6">
              <Image
                src="/images/student-feature-3.jpg"
                alt="留学・就活サポート"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <Typography variant="body-sm" className="text-dark-gray font-bold mb-2">
                留学・就活サポート
              </Typography>
              <Typography variant="body-xs" className="text-gray">
                エッセイ添削・面接対策
                <br />
                など実践的な支援で
                <br />
                目標達成をサポート
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 2. Engrowthが学生に選ばれる理由 */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              Engrowthが学生に選ばれる理由
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* 理由1 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">●</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  経済的負担を軽減
                </Typography>
              </div>
              <Image
                src="/images/student-support-1.jpg"
                alt="経済支援"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                学費・生活費の心配で留学を
                <br />
                諦める必要はありません。
                <br />
                Engrowthの独自支援制度により、
                <br />
                経済的負担を大幅に軽減。
                <br />
                <br />
                学習に集中できる環境を
                <br />
                提供し、あなたの夢の実現を
                <br />
                全力でサポートします。
              </Typography>
            </Card>

            {/* 理由2 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">●</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  留学・就活に特化
                </Typography>
              </div>
              <Image
                src="/images/student-support-2.jpg"
                alt="留学・就活対策"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                TOEFL・IELTS対策から
                <br />
                エッセイ添削、面接練習まで
                <br />
                留学・就活に必要な全てを
                <br />
                カバーします。
                <br />
                <br />
                実際に留学を経験した
                <br />
                日本人コンサルタントが、
                <br />
                実体験に基づくアドバイスを
                <br />
                提供します。
              </Typography>
            </Card>

            {/* 理由3 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">●</span>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  継続しやすい学習設計
                </Typography>
              </div>
              <Image
                src="/images/student-support-3.jpg"
                alt="継続学習"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                学業・アルバイトとの両立が
                <br />
                可能な柔軟なスケジュール。
                <br />
                <br />
                短時間集中学習と定期的な
                <br />
                進捗確認により、無理なく
                <br />
                継続できる学習リズムを
                <br />
                確立します。
                <br />
                <br />
                同じ目標を持つ仲間との
                <br />
                交流機会も提供します。
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
            <Typography variant="body-lg" className="text-gray mb-8">
              学生向け特別価格 + 経済支援制度
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Image
              src="/images/student-pricing-table.jpg"
              alt="学生コース料金表"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* 料金表（テキスト版） */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-6 py-4 text-left"></th>
                  <th className="px-6 py-4 text-center font-bold">3ヶ月</th>
                  <th className="px-6 py-4 text-center font-bold">6ヶ月</th>
                  <th className="px-6 py-4 text-center font-bold">12ヶ月</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-bold">学生コース</td>
                  <td className="px-6 py-4 text-center">¥35,000</td>
                  <td className="px-6 py-4 text-center">
                    ¥65,000
                    <div className="text-xs text-green-600">10%割引適用</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    ¥110,000
                    <div className="text-xs text-green-600">20%割引適用</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mb-8">
            <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg">
              <Typography variant="heading-sm" className="text-white">
                学生なら入会金0円 + 経済支援制度あり
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. あなたの英語力が、未来への扉を開く */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              あなたの英語力が、未来への扉を開く
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto mb-12">
              グローバル社会で活躍する第一歩
              <br />
              留学・就職・キャリアアップ、すべての可能性が広がります
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {/* 留学成功 */}
            <Card className="text-center p-6">
              <Image
                src="/images/study-abroad-success.jpg"
                alt="留学成功"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                留学成功
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                海外大学・大学院への
                <br />
                合格率向上。質の高い
                <br />
                教育環境で専門知識を
                <br />
                深める機会を獲得
              </Typography>
            </Card>

            {/* 就職活動での差別化 */}
            <Card className="text-center p-6">
              <Image
                src="/images/job-hunting-advantage.jpg"
                alt="就職活動での差別化"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                就職活動での差別化
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                グローバル企業への
                <br />
                就職機会拡大。英語力を
                <br />
                武器に希望する企業への
                <br />
                内定獲得
              </Typography>
            </Card>

            {/* キャリアの選択肢拡大 */}
            <Card className="text-center p-6">
              <Image
                src="/images/career-expansion.jpg"
                alt="キャリアの選択肢拡大"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                キャリアの選択肢拡大
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                国内外問わず活躍できる
                <br />
                人材として、多様な
                <br />
                キャリアパスを選択可能
              </Typography>
            </Card>

            {/* 国際的な人脈形成 */}
            <Card className="text-center p-6">
              <Image
                src="/images/global-network.jpg"
                alt="国際的な人脈形成"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                国際的な人脈形成
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                世界中の人々とのネットワーク
                <br />
                構築により、将来のビジネス
                <br />
                チャンス創出
              </Typography>
            </Card>
          </div>

          {/* 最終カウンセリングバナー */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
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
