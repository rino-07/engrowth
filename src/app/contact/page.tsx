import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';

export const metadata = {
  title: 'お問い合わせ - まずはお気軽にご相談ください | Engrowth',
  description: '無料相談、LINE相談受付中。英語学習の悩み、目標設定、プラン相談など、どんなことでもお気軽にお声掛けください。強引な営業は一切いたしません。',
  keywords: 'Engrowth, お問い合わせ, 無料相談, LINE相談, 英語学習相談',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="xl" className="relative">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] absolute inset-0">
          {/* PC用背景画像 */}
          <Image
            src="/images/drive-download-20250908T014101Z-1-001/top/top03.png"
            alt="背景画像"
            fill
            priority
            className="object-cover opacity-15 hidden md:block"
            style={{ objectPosition: 'center 40%' }}
          />
          {/* スマホ用背景画像 */}
          <Image
            src="/images/drive-download-20250908T014101Z-1-001/hero_sma/contact_hero_sma.png"
            alt="背景画像"
            fill
            priority
            className="object-cover opacity-15 block md:hidden"
            style={{ objectPosition: 'center 40%' }}
          />
          {/* 軽いオーバーレイ */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
        <div className="relative z-10 flex items-center min-h-[60vh]">
        <Container className="relative z-10 w-full">
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-6" as="h1">
              お問い合わせ
            </Typography>
            <Typography variant="heading-md" className="text-brand-red mb-8">
              まずは<span className="text-brand-red">お気軽に</span>
              <br />
              ご相談ください
            </Typography>
            <Typography variant="body-lg" className="text-gray max-w-[60ch] mx-auto mb-8">
              無料相談、LINE相談受付中
            </Typography>
            <Typography variant="body-md" className="text-gray max-w-[65ch] mx-auto">
              英語学習の悩み、目標設定、プラン相談など、
              <br />
              どんなことでもお気軽にお声掛けください。強引な営業は一切いたしません。
            </Typography>
          </div>
        </Container>
        </div>
      </Section>

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
                    第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。実践経験豊富な日本人コンサルタントが、あなたの学習を90日間伴走サポートいたします。
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
                <Image
                  src="/images/line-icon.jpg"
                  alt="LINE"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
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

              <Button variant="primary" size="lg" className="bg-action-green hover:bg-green-700 text-white w-full">
                <Image
                  src="/images/line-icon-white.jpg"
                  alt="LINE"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                EngrowthのLINEに相談する
              </Button>
            </Card>

            {/* メール相談 */}
            <Card className="p-8 text-center border-2 border-blue-500">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/images/email-icon.jpg"
                  alt="メール"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
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
                <Image
                  src="/images/email-icon-white.jpg"
                  alt="メール"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                info@engrowth.jp
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. ご注意・お約束 */}
      <Section background="light-gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="heading-lg" className="text-dark-gray mb-8" as="h2">
              ご注意・お約束
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 回答時間について */}
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-warm-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/images/clock-icon.jpg"
                  alt="時計"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <Typography variant="heading-sm" className="text-dark-gray mb-4">
                回答時間について
              </Typography>
              <Typography variant="body-sm" className="text-gray leading-relaxed">
                ご返信に1〜2営業日ほどお時間をいただく場合があります。お急ぎの場合はLINEをご利用ください。
              </Typography>
            </Card>

            {/* 営業について */}
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-warm-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/images/open-icon.jpg"
                  alt="営業"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
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
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Typography variant="body-md" className="text-white font-bold">
                  無料
                </Typography>
              </div>
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