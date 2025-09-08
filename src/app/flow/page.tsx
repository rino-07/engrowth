import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';

export const metadata = {
  title: '受講の流れ - 英語学習の悩み、目標設定、プラン相談など | Engrowth',
  description: 'あなたのペースに合わせて、専任のコンサルタントが一対一で最適なプランをご提案いたします。LINE登録から始まる4ステップの受講フロー。',
  keywords: 'Engrowth, 受講の流れ, LINE登録, カウンセリング, 英語学習プラン',
};

export default function FlowPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-6" as="h1">
              受講の流れ
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-3xl mx-auto mb-8">
              英語学習の悩み、目標設定、プラン相談など、
              <br />
              〜正しいやり方を知れば
              <br />
              誰でも話せるようになる〜
            </Typography>
          </div>

          {/* LINE登録バナー */}
          <div className="relative bg-action-green rounded-2xl p-8 text-center text-white mb-16 max-w-2xl mx-auto">
            <Typography variant="heading-md" className="text-white mb-6">
              LINE登録はこちら
            </Typography>
            <Button variant="primary" size="lg" className="bg-white text-action-green hover:bg-gray-100">
              LINE登録はこちら
            </Button>
          </div>
        </Container>
      </Section>

      {/* 2. 受講の流れ */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              受講の流れ
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-3xl mx-auto">
              あなたのペースに合わせて、専任のコンサルタントが一対一で
              <br />
              最適なプランをご提案いたします。
            </Typography>
          </div>

          {/* フロー図 */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 左側：LINE登録 */}
              <div className="space-y-8">
                <Card className="p-8 bg-blue-50 border-2 border-blue-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Typography variant="heading-md" className="text-white font-bold">
                        1
                      </Typography>
                    </div>
                    <Typography variant="heading-sm" className="text-dark-gray mb-2">
                      LINE登録
                    </Typography>
                    <Typography variant="body-sm" className="text-gray">
                      EngrowthのLINEを友達追加
                    </Typography>
                  </div>
                  <div className="space-y-4">
                    <Typography variant="body-sm" className="text-dark-gray">
                      ビジネスコース・学生コースの
                      <br />
                      お申込みはページ下部の「全作
                      <br />
                      りフォーム」から。
                    </Typography>
                    <Typography variant="body-sm" className="text-dark-gray">
                      各種お問い合わせは、まずは
                      <br />
                      LINEでお問い合わせ
                      <br />
                      ください。
                    </Typography>
                  </div>
                </Card>

                <Card className="p-8 bg-green-50 border-2 border-green-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Typography variant="heading-md" className="text-white font-bold">
                        3
                      </Typography>
                    </div>
                    <Typography variant="heading-sm" className="text-dark-gray mb-2">
                      オンライン面談でヒアリング
                    </Typography>
                  </div>
                  <div className="space-y-4">
                    <Typography variant="body-sm" className="text-dark-gray">
                      Zoomなどで面談を実施。
                      <br />
                      初回面談ではまず現在の学習
                      <br />
                      状況をお伺いします。
                    </Typography>
                    <Typography variant="body-sm" className="text-dark-gray">
                      学習の悩みや目標、ライフス
                      <br />
                      タイル等についてお聞かせく
                      <br />
                      ださい。
                    </Typography>
                  </div>
                </Card>
              </div>

              {/* 右側：コース開始とシミュレーション */}
              <div className="space-y-8">
                <Card className="p-8 bg-yellow-50 border-2 border-yellow-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Typography variant="heading-md" className="text-white font-bold">
                        2
                      </Typography>
                    </div>
                    <Typography variant="heading-sm" className="text-dark-gray mb-2">
                      コース開始は、英語に関する24
                      <br />
                      時間いつでもご相談ください
                    </Typography>
                  </div>
                  <div className="space-y-4">
                    <Typography variant="body-sm" className="text-dark-gray">
                      コース開始中は、英語に関する
                      <br />
                      ことは24時間いつでもご相談
                      <br />
                      いただけます。お気軽にお声
                      <br />
                      かけください。
                    </Typography>
                    <Typography variant="body-sm" className="text-dark-gray">
                      また、学習のコンサルタントは
                      <br />
                      お一人のみとなり、最後まで
                      <br />
                      かかわらせて頂きます。第三
                      <br />
                      者に伝達する必要が無いため、
                      <br />
                      高品質な学習指導が期待でき
                      <br />
                      ます。
                    </Typography>
                    <Typography variant="body-sm" className="text-dark-gray">
                      もし再度コンサルタントにご相談
                      <br />
                      したい内容があれば、いつでも
                      <br />
                      お気軽にお声かけください。
                    </Typography>
                  </div>
                </Card>

                <Card className="p-8 bg-purple-50 border-2 border-purple-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Typography variant="heading-md" className="text-white font-bold">
                        4
                      </Typography>
                    </div>
                    <Typography variant="heading-sm" className="text-dark-gray mb-2">
                      （スケジュール）シミュレーション英会話
                    </Typography>
                  </div>
                  <div className="space-y-4">
                    <Typography variant="body-sm" className="text-dark-gray">
                      留学生の体験談に基づき英語力を身につけられる環境の一つとして、「多様な状況に対応できるコミュニケーション能力」の育成を目的としたシミュレーション英会話を実施。
                    </Typography>
                    <Typography variant="body-sm" className="text-dark-gray">
                      Engrowthではビジネスシーンでのシミュレーション、海外大学でのシミュレーション等と幅広いシチュエーションでトレーニングします。
                    </Typography>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* 中央の図表 */}
          <div className="text-center mb-16">
            <Typography variant="body-sm" className="text-gray mb-4">
              中程の人間関係の変化
            </Typography>
            <div className="max-w-2xl mx-auto">
              <Image
                src="/images/flow-diagram.jpg"
                alt="受講の流れ図"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. ビジネスコース・学生コース詳細 */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-16">
            {/* ビジネスコース */}
            <div>
              <Typography variant="heading-md" className="text-dark-gray mb-8 text-center">
                ビジネスコース
              </Typography>
              <div className="bg-red-50 rounded-2xl p-6 mb-8">
                <Image
                  src="/images/business-course-flow.jpg"
                  alt="ビジネスコース詳細"
                  width={400}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* 学生コース */}
            <div>
              <Typography variant="heading-md" className="text-dark-gray mb-8 text-center">
                学生コース
              </Typography>
              <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <Image
                  src="/images/student-course-flow.jpg"
                  alt="学生コース詳細"
                  width={400}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
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