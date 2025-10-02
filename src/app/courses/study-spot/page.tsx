import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';
import { FaEdit, FaUsers, FaHeadset, FaGraduationCap, FaBriefcase, FaQuestionCircle } from 'react-icons/fa';
import Hero from '@/components/sections/Hero';
// import { getSpotServicesByType } from '@/data/courses';

export const metadata = {
  title: '学生スポットサービス - 留学・就活の重要な場面でサポート | Engrowth',
  description: '留学申請エッセイ添削、面接練習、学習相談など、学生の重要な場面で必要なサポートを経験豊富な日本人コンサルタントが提供します。',
  keywords: 'Engrowth, 学生スポット, エッセイ添削, 面接練習, 留学準備, 就活対策',
};

export default function StudentSpotServicePage() {
  // const studentSpotServices = getSpotServicesByType('student-spot');

  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Hero
        title=""
        subtitle={null}
        bgDesktopSrc="/images/spot-student/spot-students_hero.png"
        bgMobileSrc="/images/hero_sma/spot-student_hero_sma.png"
        bgPosition="center 30%"
        className="flex items-center justify-center text-center"
        imageWidth={2021}
        imageHeight={748}
      />

      {/* 2. 3つのメインサービス */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32 pb-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* エッセイ添削 */}
            <Card className="text-center p-6 border-2 border-gray-200 hover:border-red-600 transition-all duration-300">
              <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEdit className="w-8 h-8" style={{color: '#d30306'}} />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                エッセイ添削
              </Typography>
              <Typography variant="body-sm" className="text-gray card-description">
                留学申請・就活用エッセイの
                <br />
                プロフェッショナル添削など
              </Typography>
            </Card>

            {/* 面接練習・対策 */}
            <Card className="text-center p-6 border-2 border-gray-200 hover:border-red-600 transition-all duration-300">
              <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8" style={{color: '#d30306'}} />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                面接練習・対策
              </Typography>
              <Typography variant="body-sm" className="text-gray card-description">
                留学・就活面接の
                <br />
                実践的な練習とフィードバック
              </Typography>
            </Card>

            {/* オンラインコンシェルジュ */}
            <Card className="text-center p-6 border-2 border-gray-200 hover:border-red-600 transition-all duration-300">
              <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="w-8 h-8" style={{color: '#d30306'}} />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray card-title">
                オンラインコンシェルジュ
              </Typography>
              <Typography variant="body-sm" className="text-gray card-description">
                学習相談・進路相談から
                <br />
                日常的な英語学習サポート
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. こんな時に、ご利用ください */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32 pt-0">
        <Container>
          <div className="text-center py-8">
            <Typography variant="heading-lg" className="text-dark-gray" as="h2">
              こんな時に、ご利用ください。
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaGraduationCap className="w-4 h-4" style={{color: '#d30306'}} />
              </div>
              <Typography variant="body-md" className="text-dark-gray" style={{fontSize: '20px'}}>
                留学申請用エッセイの完成度を上げたい
              </Typography>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaBriefcase className="w-4 h-4" style={{color: '#d30306'}} />
              </div>
              <Typography variant="body-md" className="text-dark-gray" style={{fontSize: '20px'}}>
              英語面接の練習をしたい
              </Typography>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaQuestionCircle className="w-4 h-4" style={{color: '#d30306'}} />
              </div>
              <Typography variant="body-md" className="text-dark-gray" style={{fontSize: '20px'}}>
              現地で銀行口座開設を1人でするのは不安だからオンラインでサポートしてほしい
              </Typography>
            </div>
          </div>

          {/* カウンセリングバナー */}
          <div className="relative">
            <div className="max-w-4xl mx-auto">
              <Image
                src="/images/main_banner.png"
                alt="30分の無料カウンセリングでご相談ください"
                width={1200}
                height={400}
                className="w-full h-auto shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. 料金例 */}
      <Section background="warm-white" className="py-16 sm:py-20 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              料金例
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-5xl mx-auto mb-8">
              学生向け特別価格で、質の高いサポートを提供いたします。
              <br />
              詳細なお見積もりは無料でご提供いたします。まずはお気軽にお問い合わせください。
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* エッセイ添削 */}
            <Card className="text-center p-6 border border-gray-200">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                エッセイ添削
                <br />
                （1本）
              </Typography>
              <div className="text-center mb-4">
                <Typography variant="heading-lg" className="text-brand-red">
                  ¥18,000〜
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  文字数・専門性により変動
                </Typography>
              </div>
              <div className="space-y-2 text-center">
                <Typography variant="body-xs" className="text-gray">
                  • 構成・内容チェック
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  • 文法・表現修正
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  • 複数回修正対応
                </Typography>
              </div>
            </Card>

            {/* 面接練習 */}
            <Card className="text-center p-6 border border-gray-200">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                面接練習・対策
                <br />
                （1時間）
              </Typography>
              <div className="text-center mb-4">
                <Typography variant="heading-lg" className="text-brand-red">
                  ¥8,000〜
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  面接種類により変動
                </Typography>
              </div>
              <div className="space-y-2 text-center">
                <Typography variant="body-xs" className="text-gray">
                  • 模擬面接実施
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  • 詳細フィードバック
                </Typography>
                <Typography variant="body-xs" className="text-gray">
                  • 改善アドバイス
                </Typography>
              </div>
            </Card>
          </div>

          {/* 料金に関するご注意 */}
          <div className="bg-light-gray rounded-2xl p-8 max-w-4xl mx-auto">
            <Typography variant="heading-sm" className="text-dark-gray mb-6 text-center">
              料金に関するご注意
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  学生証提示で学生価格適用
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  複数回利用で割引制度あり
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  事前のお見積もりは無料でご提供
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0"></div>
                <Typography variant="body-sm" className="text-dark-gray">
                  急ぎの場合は緊急対応も可能
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. 学生の夢を諦めさせない */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              英語を身につけて、世界中の人と出会おう
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-4xl mx-auto mb-8">
              「どこから手をつけていいかわからない」「完璧にできるか不安」といったお悩みも大歓迎です。
              <br />
              あなたの目標達成に向けて、最適なサポートプランをご提案いたします。
              <br />
              相談・お見積もりは無料ですので、お気軽にお問い合わせください。
            </Typography>
          </div>

          {/* サポート内容 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/supporters/supporters-income-opportunity.jpg"
                  alt="ライティング支援"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                ライティング支援
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                Personal Statement、
                <br />
                志望理由書、研究計画書
                <br />
                など、目的に応じた
                <br />
                ライティング指導
              </Typography>
            </Card>

            <Card className="text-center p-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/students/students-class-understanding.jpg"
                  alt="スピーキング支援"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                スピーキング支援
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                面接対策、プレゼンテーション
                <br />
                練習、発音指導など
                <br />
                実践的なスピーキング
                <br />
                スキル向上
              </Typography>
            </Card>

            <Card className="text-center p-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/method/method-practical-advice.jpg"
                  alt="総合的サポート"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-3">
                総合的サポート
              </Typography>
              <Typography variant="body-sm" className="text-gray">
                出願戦略、スケジュール管理、
                <br />
                優先順位付けなど
                <br />
                効率的な準備のための
                <br />
                総合的なアドバイス
              </Typography>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto mt-12">
            <Button variant="primary" size="lg" className="text-white flex-1" style={{ backgroundColor: "#0cc755" }} href="https://lin.ee/4h74yvj">
              LINEで相談
            </Button>
            <Button variant="secondary" size="lg" className="flex-1">
              メールで相談
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
