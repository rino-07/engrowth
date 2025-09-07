import { Metadata } from 'next';

import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'お問い合わせ - Engrowth',
  description: 'Engrowthへのお問い合わせはLINE相談またはメール相談からお選びいただけます。お気軽にご相談ください。',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <nav className="text-sm mb-8">
              <Typography variant="body-sm" className="text-gray">
                Home &gt; お問い合わせ
              </Typography>
            </nav>
            
            <Typography variant="heading-xl" className="text-dark-gray mb-4" as="h1">
              お問い合わせ
            </Typography>
            <Typography variant="heading-md" className="text-brand-red mb-2">
              まずはお気軽に
            </Typography>
            <Typography variant="heading-md" className="text-dark-gray mb-4">
              ご相談ください
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-2xl mx-auto mb-6">
              無料相談、LINE相談受付中
            </Typography>
            <Typography variant="body-md" className="text-gray max-w-3xl mx-auto">
              英語学習の悩み、目標設定、プラン相談など、
              <br />
              どんなことでもお気軽にお声掛けください。強引な営業は一切いたしません。
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Pre-Contact FAQ */}
      <Section background="warm-white" padding="lg">
        <Container className="max-w-4xl">
          <div className="text-center mb-8">
            <Typography variant="heading-md" className="text-dark-gray">
              お問い合わせ前に、こちらもご確認ください。
            </Typography>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <div>
                <Typography variant="body-md" className="font-semibold text-dark-gray mb-2">
                  プログラムの特徴を教えてください
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。
                </Typography>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <div>
                <Typography variant="body-md" className="font-semibold text-dark-gray mb-2">
                  学習期間はどのくらいですか？
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  標準的なプログラムは3ヶ月（90日間）ですが、目標や現在の英語力に応じて6ヶ月、12ヶ月プランも選択可能です。
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section background="light-gray" padding="xl">
        <Container className="max-w-5xl">
          <div className="text-center mb-12">
            <Typography variant="heading-lg" className="text-dark-gray mb-4">
              お問い合わせの方法をお選びください
            </Typography>
            <Typography variant="body-md" className="text-gray">
              ご質問や内容の緊急度に応じて、最適な連絡方法をお選びいただけます。
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LINE相談 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-action-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <Typography variant="heading-md" className="text-dark-gray mb-4">
                LINEでのご相談
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-6">
                すぐにちょっと聞きたい、といううちに
              </Typography>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <span className="text-action-green mr-2">✓</span>
                  <Typography variant="body-sm" className="text-gray">即時に相談可能</Typography>
                </div>
                <div className="flex items-center">
                  <span className="text-action-green mr-2">✓</span>
                  <Typography variant="body-sm" className="text-gray">気軽な相談に最適</Typography>
                </div>
                <div className="flex items-center">
                  <span className="text-action-green mr-2">✓</span>
                  <Typography variant="body-sm" className="text-gray">レスポンス重視</Typography>
                </div>
                <div className="flex items-center">
                  <span className="text-action-green mr-2">✓</span>
                  <Typography variant="body-sm" className="text-gray">レッスン予約</Typography>
                </div>
              </div>
              
              <Button variant="primary" size="lg" className="w-full bg-action-green hover:bg-green-700">
                Engrowthの公式LINEを友達追加
              </Button>
            </div>

            {/* メール相談 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <Typography variant="heading-md" className="text-dark-gray mb-4">
                メールでのお問い合わせ
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-6">
                詳細な相談内容や具体的な質問をしたい
              </Typography>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <Typography variant="body-sm" className="text-gray">詳細な相談内容</Typography>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <Typography variant="body-sm" className="text-gray">正式な問い合わせに最適</Typography>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <Typography variant="body-sm" className="text-gray">エビデンスが欲しい方へ</Typography>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  <Typography variant="body-sm" className="text-gray">予約の相談</Typography>
                </div>
              </div>
              
              <Button variant="primary" size="lg" className="w-full bg-blue-500 hover:bg-blue-700">
                info@engrowth.jp
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Notice Section */}
      <Section background="warm-white" padding="lg">
        <Container className="max-w-4xl">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <Typography variant="heading-md" className="text-dark-gray text-center mb-8">
              ご注意・お約束
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Typography variant="body-md" className="font-semibold text-dark-gray mb-2">
                  回答時間について
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  ご返信に1〜2営業日ほどお時間をいただく場合があります。お急ぎの場合はLINEをご利用ください。
                </Typography>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Typography variant="body-lg" className="text-white font-bold">
                    OPEN
                  </Typography>
                </div>
                <Typography variant="body-md" className="font-semibold text-dark-gray mb-2">
                  営業について
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  適切な営業は一切いたしません。安心してお気軽にご相談ください。あなたのペースに合わせてご案内いたします。
                </Typography>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Typography variant="body-lg" className="text-white font-bold">
                    無料
                  </Typography>
                </div>
                <Typography variant="body-md" className="font-semibold text-dark-gray mb-2">
                  相談は完全無料
                </Typography>
                <Typography variant="body-sm" className="text-gray">
                  ご相談、プラン提案は完全無料です。まずはお気軽にお声掛けください。
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
