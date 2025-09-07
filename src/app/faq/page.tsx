import { Metadata } from 'next';

import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'よくある質問 - Engrowth',
  description: 'Engrowthに関するよくある質問をカテゴリ別にまとめています。',
};

// 仮のFAQデータ（将来的にはCMSから取得）
const faqs = [
  {
    id: '1',
    category: 'program',
    question: 'プログラムの特徴を教えてください',
    answer: '第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。実践経験豊富な日本人コンサルタントが、あなたの学習を90日間伴走サポートいたします。',
  },
  {
    id: '2',
    category: 'period',
    question: '学習期間はどのくらいですか？',
    answer: '標準的なプログラムは3ヶ月（90日間）ですが、目標や現在の英語力に応じて6ヶ月、12ヶ月プランも選択可能です。継続学習により、より確実な成果を実感していただけます。',
  },
  {
    id: '3',
    category: 'support',
    question: 'サポート体制について教えてください',
    answer: '専属の日本人コンサルタントが24時間体制でサポートします。LINEでの質問対応、週次の進捗レビュー、個別カウンセリングなど、きめ細かなサポートを提供しています。',
  },
  {
    id: '4',
    category: 'pricing',
    question: '料金体系について教えてください',
    answer: 'ビジネスコースは3ヶ月50,000円から、学生コースは3ヶ月35,000円からご利用いただけます。入会金は0円で、期間が長いほどお得な料金設定となっています。',
  },
];

const categories = {
  program: 'プログラムの特徴',
  period: '学習期間・方法',
  support: 'サポート体制',
  pricing: '料金・支払い',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center">
            <nav className="text-sm mb-8">
              <Typography variant="body-sm" className="text-gray">
                Home &gt; よくある質問
              </Typography>
            </nav>
            
            <Typography variant="heading-xl" className="text-dark-gray mb-4" as="h1">
              よくある質問
            </Typography>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="warm-white" padding="xl">
        <Container className="max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-light-gray">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Q</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Typography variant="heading-sm" className="text-dark-gray mb-4">
                        {faq.question}
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 mt-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Typography variant="body-md" className="text-dark-gray leading-relaxed">
                        {faq.answer}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-light-gray rounded-lg">
            <Typography variant="heading-md" className="text-dark-gray mb-4">
              解決しなかった場合は、下記よりお問い合わせください
            </Typography>
            <a 
              href="/contact"
              className="inline-block bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              お問い合わせページへ
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
