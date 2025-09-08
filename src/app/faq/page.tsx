import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

export const metadata = {
  title: 'よくある質問 - プログラムの特徴、学習期間、サポート体制について | Engrowth',
  description: 'Engrowthの英語学習プログラムに関するよくある質問。第二言語習得理論に基づいた科学的アプローチ、実践経験豊富な日本人コンサルタント、90日間伴走サポートについて。',
  keywords: 'Engrowth, よくある質問, FAQ, 英語学習, プログラム特徴, 学習期間',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="lg">
        <Container>
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h1">
              よくある質問
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 2. FAQ一覧 */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {/* FAQ 1 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    Q
                  </Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  プログラムの特徴を教えてください
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    A
                  </Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray mb-4">
                    第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。
                  </Typography>
                  <Typography variant="body-md" className="text-dark-gray">
                    実践経験豊富な日本人コンサルタントが、あなたの学習を90日間伴走サポートいたします。
                  </Typography>
                </div>
              </div>
            </Card>

            {/* FAQ 2 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    Q
                  </Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  学習期間はどのくらいですか？
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    A
                  </Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray mb-4">
                    標準的なプログラムは3ヶ月（90日間）ですが、目標や現在の英語力に応じて6ヶ月、12ヶ月プランも選択可能です。
                  </Typography>
                  <Typography variant="body-md" className="text-dark-gray">
                    継続学習により、より確実な成果を実感していただけます。
                  </Typography>
                </div>
              </div>
            </Card>

            {/* FAQ 3 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    Q
                  </Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  プログラムの特徴を教えてください
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    A
                  </Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray mb-4">
                    第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。
                  </Typography>
                  <Typography variant="body-md" className="text-dark-gray">
                    実践経験豊富な日本人コンサルタントが、あなたの学習を90日間伴走サポートいたします。
                  </Typography>
                </div>
              </div>
            </Card>

            {/* FAQ 4 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    Q
                  </Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  プログラムの特徴を教えてください
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    A
                  </Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray mb-4">
                    第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。
                  </Typography>
                  <Typography variant="body-md" className="text-dark-gray">
                    実践経験豊富な日本人コンサルタントが、あなたの学習を90日間伴走サポートいたします。
                  </Typography>
                </div>
              </div>
            </Card>

            {/* FAQ 5 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    Q
                  </Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  プログラムの特徴を教えてください
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-action-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    A
                  </Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray mb-4">
                    第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。
                  </Typography>
                  <Typography variant="body-md" className="text-dark-gray">
                    実践経験豊富な日本人コンサルタントが、あなたの学習を90日間伴走サポートいたします。
                  </Typography>
                </div>
              </div>
            </Card>
          </div>

          {/* 解決しなかった場合のCTA */}
          <div className="text-center mb-16">
            <Typography variant="body-lg" className="text-gray mb-8">
              解決しなかった場合は、下記よりお問い合わせください
            </Typography>
            <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
              お問い合わせページへ
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}