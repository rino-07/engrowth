import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fadeInUp">
            {/* Left: Title and Text */}
            <div>
              <Typography variant="heading-xl" className="text-dark-gray mb-6" as="h1">
                あなたも
                <span className="text-brand-red">Engrowth</span>
                の一員になりませんか？
              </Typography>
              <Typography variant="body-lg" className="text-gray mb-8">
                独自のエコシステムで留学生の経済問題を解決し、
                <br />
                日本人だからこそ提供できる英会話コンサルティングサービス
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    無料相談を予約する
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button variant="secondary" size="lg">
                    コース詳細を見る
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right: Hero Image */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/top/top01.png"
                  alt="Engrowthで学ぶ多様な学生たち"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <Typography variant="body-md" className="text-white/90">
                      多様な背景を持つ学生が、Engrowthで夢を実現しています
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Engrowthは○○な人に選ばれてます Section */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Title */}
            <div>
              <Typography variant="heading-lg" className="text-dark-gray mb-8">
                Engrowthは○○な人に選ばれてます
              </Typography>
            </div>

            {/* Right: Points */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Typography variant="body-md" className="text-white font-bold">
                      Point1
                    </Typography>
                  </div>
                  <div className="mt-2 text-right">
                    <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l3-3 3 3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <Typography variant="heading-sm" className="text-dark-gray mb-2">
                    コンサルタントは全員留学経験のある日本人
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Typography variant="body-md" className="text-white font-bold">
                      Point2
                    </Typography>
                  </div>
                  <div className="mt-2 text-right">
                    <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l3-3 3 3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <Typography variant="heading-sm" className="text-dark-gray mb-2">
                    科学的根拠に基づく学習プログラム
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Typography variant="body-md" className="text-white font-bold">
                      Point3
                    </Typography>
                  </div>
                  <div className="mt-2 text-right">
                    <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l3-3 3 3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <Typography variant="heading-sm" className="text-dark-gray mb-2">
                    1人ひとりに合わせたオーダーメイドの学習設計
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Course Section (4-column) */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8">
              Course
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ビジネスコース */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 relative">
              {/* 今ならバッジ */}
              <div className="absolute -top-3 -right-3 bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold">
                今なら
              </div>
              <div className="mb-6">
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/courses/courses-business-course.jpg"
                  alt="ビジネスコース"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  ビジネスコース
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  忙しい社会人向けの効率的な英語学習
                  <br />
                  xxxxxxxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxx
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>

            {/* ビジネススポットサービス */}
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/top/top07.png"
                  alt="ビジネススポットサービス"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  ビジネススポット
                  <br />
                  サービス
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  会議同席・資料翻訳・プレゼン準備
                  <br />
                  xxxxxxxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxx
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>

            {/* 学生コース */}
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/students/students-communication.jpg"
                  alt="学生コース"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  学生コース
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  留学を目指す学生向けの総合プログラム
                  <br />
                  xxxxxxxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxx
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>

            {/* 学生スポットサービス */}
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <Image
                  src="/images/drive-download-20250908T014101Z-1-001/students/stu03.png"
                  alt="学生スポットサービス"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <Typography variant="heading-sm" className="text-dark-gray mb-2">
                  学生スポット
                  <br />
                  サービス
                </Typography>
                <Typography variant="body-sm" className="text-gray mb-4">
                  エッセイ添削指導
                  <br />
                  面接練習・対策
                </Typography>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                詳しく見る
              </Button>
            </Card>
          </div>

          {/* コース・料金ボタン */}
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
              コース・料金
            </Button>
          </div>
        </Container>
      </Section>

      {/* 4. 無料カウンセリングバナー（画像のみ） */}
      <Section background="warm-white" padding="lg">
        <Container>
          <div className="relative">
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

      {/* 5. 従来スクールとの違い（2カラム比較） */}
      <Section background="warm-white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8">
              従来のスクールとのちがい
            </Typography>
          </div>

          <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* 従来スクール - 40% */}
            <div className="col-span-12 lg:col-span-5 bg-gray-50 rounded-2xl p-8">
              <Typography variant="heading-md" className="text-gray mb-8 text-center">
                従来
              </Typography>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    講師が外国人で日本人のつまづくポイントが理解できない
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    講師が英語を話せない
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    個人の経験に基づいたカリキュラム
                  </Typography>
                </div>
              </div>
            </div>

            {/* 矢印 - 10% */}
            <div className="col-span-12 lg:col-span-2 flex items-center justify-center">
              <div className="text-brand-red">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </div>
            </div>

            {/* Engrowth - 40% */}
            <div className="col-span-12 lg:col-span-5 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-brand-red/20">
              <Typography variant="heading-md" className="text-brand-red mb-8 text-center">
                Engrowth
              </Typography>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    日本人のつまづくポイントを理解した日本人コンサルタント
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    全員が日本語を第一言語としたコンサルタント
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                  <Typography variant="body-md" className="text-dark-gray">
                    科学的根拠に基づいた英語習得プログラム
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}