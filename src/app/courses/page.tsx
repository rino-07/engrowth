import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'コース・料金 - 目的に合わせて選べるコース・サービス | Engrowth',
  description: 'ビジネスコース、学生コース、スポットサービスなど、あなたの目的に合わせて選べる英語学習プログラム。透明性の高い料金設定で安心してご利用いただけます。',
  keywords: 'Engrowth, コース, 料金, ビジネス英語, 学生コース, スポットサービス',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ページヘッダー */}
      <Section background="warm-white" padding="lg">
        <Container>
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h1">
              コース・料金
            </Typography>
            <Typography variant="body-lg" className="text-gray">
              目的に合わせて選べるコース・サービス
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 2. コース選択（4カード） */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* ビジネスコース */}
            <Link href="/courses/business">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src="/images/business-course-detail.jpg"
                    alt="ビジネスコース"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    ビジネスコース
                  </div>
                </div>
              </Card>
            </Link>

            {/* ビジネススポットサービス */}
            <Link href="/courses/business-spot">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src="/images/business-spot-detail.jpg"
                    alt="ビジネススポットサービス"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    ビジネススポットサービス
                  </div>
                </div>
              </Card>
            </Link>

            {/* 学生コース */}
            <Link href="/courses/study">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src="/images/student-course-detail.jpg"
                    alt="学生コース"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    学生コース
                  </div>
                </div>
              </Card>
            </Link>

            {/* 学生スポットサービス */}
            <Link href="/courses/study-spot">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative">
                  <Image
                    src="/images/student-spot-detail.jpg"
                    alt="学生スポットサービス"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    学生スポットサービス
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          {/* 無料カウンセリングバナー */}
          <div className="relative mb-16">
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

      {/* 3. 料金 */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              料金
            </Typography>
          </div>

          {/* 英会話コース料金表 */}
          <div className="mb-16">
            <Typography variant="heading-md" className="text-dark-gray mb-8 text-center">
              英会話コース
            </Typography>

            <div className="max-w-4xl mx-auto mb-8">
              <Image
                src="/images/pricing-table.jpg"
                alt="英会話コース料金表"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* 料金表（テキスト版） */}
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-light-gray">
                    <th className="px-6 py-4 text-left"></th>
                    <th className="px-6 py-4 text-center font-bold">3ヶ月</th>
                    <th className="px-6 py-4 text-center font-bold">6ヶ月</th>
                    <th className="px-6 py-4 text-center font-bold">12ヶ月</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-bold">ビジネスコース</td>
                    <td className="px-6 py-4 text-center">¥xx,xxx</td>
                    <td className="px-6 py-4 text-center">¥xx,xxx</td>
                    <td className="px-6 py-4 text-center">¥xx,xxx</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-bold">学生コース</td>
                    <td className="px-6 py-4 text-center">¥xx,xxx</td>
                    <td className="px-6 py-4 text-center">¥xx,xxx</td>
                    <td className="px-6 py-4 text-center">¥xx,xxx</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <div className="inline-block bg-dark-gray text-white px-8 py-3 rounded-lg">
                <Typography variant="heading-sm" className="text-white">
                  Engrowthなら入会金は0円
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. スポットサービス */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              スポットサービス
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* ビジネススポットサービス */}
            <Card className="p-6 text-center">
              <Image
                src="/images/business-spot-service.jpg"
                alt="ビジネススポットサービス"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                ビジネススポットサービス
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-4">
                会議同席通訳（オンライン）、xxなど
                <br />
                ¥xx,xxx
              </Typography>
              <Link href="/courses/business-spot">
                <Button variant="secondary" size="sm" className="w-full">
                  詳しく見る→
                </Button>
              </Link>
            </Card>

            {/* 学生スポットサービス */}
            <Card className="p-6 text-center">
              <Image
                src="/images/student-spot-service.jpg"
                alt="学生スポットサービス"
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                学生スポットサービス
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-4">
                エッセイ添削、面接練習など
                <br />
                ¥xx,xxx
              </Typography>
              <Link href="/courses/study-spot">
                <Button variant="secondary" size="sm" className="w-full">
                  詳しく見る→
                </Button>
              </Link>
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