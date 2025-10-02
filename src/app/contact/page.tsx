import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import { PageTitleSection } from '@/components/sections';

export const metadata = {
  title: 'お問い合わせ - まずはお気軽にご相談ください | Engrowth',
  description: '無料相談、LINE相談受付中。英語学習の悩み、目標設定、プラン相談など、どんなことでもお気軽にお声掛けください。強引な営業は一切いたしません。',
  keywords: 'Engrowth, お問い合わせ, 無料相談, LINE相談, 英語学習相談',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <PageTitleSection
        label="CONTACT"
        title="お問い合わせ"
        description={`
            まずはお気軽にご相談ください。無料相談、LINE相談受付中。|英語学習の悩み、目標設定、プラン相談など、どんなことでもお気軽にお声掛けください。強引な営業は一切いたしません。
        `}
      />

      {/* 2. お問い合わせ前に、こちらもご確認ください */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="FAQ"
          title="お問い合わせ前に、こちらもご確認ください"
          desc="よくいただくご質問をまとめました。お問い合わせの前に、まずはこちらをご確認いただけますと幸いです。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {/* FAQ 1 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    Q
                  </Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  プログラムの特徴を教えてください
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    A
                  </Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray">
                    第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。実践経験豊富な日本人コンサルタントが、あなたの学習を90日間伴走サポートいたします。
                  </Typography>
                </div>
              </div>
            </Card>

            {/* FAQ 2 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    Q
                  </Typography>
                </div>
                <Typography variant="heading-sm" className="text-dark-gray">
                  学習期間はどのくらいですか？
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="body-sm" className="text-white font-bold">
                    A
                  </Typography>
                </div>
                <div>
                  <Typography variant="body-md" className="text-dark-gray">
                    標準的なプログラムは3ヶ月（90日間）ですが、目標や現在の英語力に応じて6ヶ月、12ヶ月プランも選択可能です。継続学習により、より確実な成果を実感していただけます。
                  </Typography>
                </div>
              </div>
            </Card>
          </div>

          {/* よくある質問ページへのボタン */}
          <div className="text-center">
            <Link href="/faq">
              <Button variant="secondary" size="lg">
                よくある質問ページはこちら
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 3. お問い合わせの方法をお選びください */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Contact Methods"
          title="お問い合わせの方法をお選びください"
          desc="ご質問や内容の緊急度に応じて、最適な連絡方法をお選びいただけます。LINEなら即座に、メールなら詳細なご相談が可能です。"
          className="mb-12 lg:mb-16"
        />
        
        <Container>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            {/* LINE相談 */}
            <Card className="p-8 text-center border-2 border-action-green">
              <div className="w-16 h-16 bg-action-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">💬</span>
              </div>
              <Typography variant="heading-md" className="text-dark-gray mb-4">
                LINEでのご相談
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-6">
                すぐにちょっと聞きてみたい、という方におすすめです。
              </Typography>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-action-green rounded-full mt-2 flex-shrink-0"></div>
                  <Typography variant="body-sm" className="text-dark-gray text-left">
                    即座に質問可能<br />登録時すぐにチャットでご相談いただけます。
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-action-green rounded-full mt-2 flex-shrink-0"></div>
                  <Typography variant="body-sm" className="text-dark-gray text-left">
                    気軽な相談に最適<br />簡単な質問や学習相談におすすめ
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-action-green rounded-full mt-2 flex-shrink-0"></div>
                  <Typography variant="body-sm" className="text-dark-gray text-left">
                    面倒な手続き無し<br />友だち追加するだけで、簡単気軽に相談
                  </Typography>
                </div>
              </div>

              <Button variant="primary" size="lg" className="bg-action-green hover:bg-green-700 text-white w-full" href="https://lin.ee/4h74yvj">
                <span className="mr-2">💬</span>
                EngrowthのLINEに相談する
              </Button>
            </Card>

            {/* メール相談 */}
            <Card className="p-8 text-center border-2 border-blue-500">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">✉️</span>
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                メールでのお問い合わせ
              </Typography>
              <Typography variant="body-sm" className="text-gray mb-6">
                詳細な相談内容や資料のやり取りが必要な場合に最適です
              </Typography>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <Typography variant="body-sm" className="text-dark-gray text-left">
                    詳細な相談<br />具体的なプラン相談・調整をご希望の方はこちら
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <Typography variant="body-sm" className="text-dark-gray text-left">
                    正式な問い合わせ<br />法人企業様や正式な導入相談に最適
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <Typography variant="body-sm" className="text-dark-gray text-left">
                    丁寧な回答<br />詳細まで丁寧に、高い透明度を心がけます
                  </Typography>
                </div>
              </div>

              <Button variant="primary" size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                <span className="mr-2">✉️</span>
                info@engrowth.jp
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. ご注意・お約束 */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              ご注意・お約束
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 回答時間について */}
            <Card className="p-8 text-center">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                回答時間について
              </Typography>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                ご返信に1〜2営業日ほどお時間をいただく場合があります。お急ぎの場合はLINEをご利用ください。
              </Typography>
            </Card>

            {/* 営業について */}
            <Card className="p-8 text-center">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                営業について
              </Typography>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                適切な営業は一切いたしません。安心してご相談ください。
                <br />
                あなたのペースに合わせてご案内いたします。
              </Typography>
            </Card>

            {/* 相談は完全無料 */}
            <Card className="p-8 text-center">
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                相談は完全無料
              </Typography>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                ご相談、プラン提案は完全無料です。
                <br />
                まずはお気軽にお声掛けください。
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}