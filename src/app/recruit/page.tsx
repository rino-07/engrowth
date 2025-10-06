import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { PageTitleSection } from '@/components/sections';
import InteractiveContent from '@/components/InteractiveContent';

export const metadata = {
  title: '採用情報 - Engrowth',
  description: 'Engrowth専属コンサルタント募集。あなたの経験を、同じ志を持つ次世代の力に。経済的困難を乗り越えた留学経験を持つ優秀な人材を募集しています。',
  keywords: 'コンサルタント募集, 英語指導, 留学経験, エコシステム, 同志募集',
};


export default function RecruitPage() {
  return (
    <div className="recruit-page">
      {/* ヒーローセクション */}
      <PageTitleSection
        label="Recruit"
        title="コンサルタント採用情報"
        description="あなたの経験を、同じ志を持つ次世代の力に。"
      />

      {/* インタラクティブ部分 */}
      <InteractiveContent />

      {/* セクション4: 応募資格 */}
      <Section background="warm-white" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 sm:mb-16 text-center font-serif pb-8">
              応募資格
            </Typography>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">・</span>
                  <Typography variant="body-lg" className="text-gray-700">
                    Engrowthのエコシステム・想いへ強く共感する方
                  </Typography>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">・</span>
                  <Typography variant="body-lg" className="text-gray-700">
                    日本語が母語の方（国籍は問いません）
                  </Typography>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">・</span>
                  <Typography variant="body-lg" className="text-gray-700">
                    海外の学士課程・修士課程・博士課程在籍中または卒業生の方（編入可。準学士課程の方は要相談。学業成績・語学力から総合的に評価）
                  </Typography>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">・</span>
                  <Typography variant="body-lg" className="text-gray-700">
                    業務を遂行する上で問題のない英語力がある方
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* セクション5: 選考プロセス */}
      <Section background="light-gray" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 sm:mb-16 text-center font-serif pb-8">
              選考プロセス
            </Typography>
            
            {/* PC表示: フローチャート - プログレスバー型 */}
            <div className="hidden md:block mb-8">
              <div className="progress-flow">
                {/* エントリー */}
                <div className="step step-entry">
                  <Typography variant="heading-lg" className="text-white font-semibold">
                    エントリー
                  </Typography>
                </div>
                
                {/* 書類審査 */}
                <div className="step step-review">
                  <Typography variant="heading-lg" className="text-white font-semibold">
                    書類審査
                  </Typography>
                </div>
                
                {/* 面接 */}
                <div className="step step-interview">
                  <Typography variant="heading-lg" className="text-white font-semibold">
                    面接
                  </Typography>
                </div>
                
                {/* 採用 */}
                <div className="step step-final">
                  <Typography variant="heading-lg" className="text-white font-semibold">
                    採用
                  </Typography>
                </div>
              </div>
            </div>

            {/* スマホ表示: 縦フローチャート */}
            <div className="md:hidden mb-8">
              <div className="flex flex-col items-center space-y-6">
                {/* エントリー */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-48 h-12 bg-gray-300 rounded-lg flex items-center justify-center relative">
                    <Typography variant="body-md" className="text-white font-semibold">
                      1. エントリー
                    </Typography>
                    {/* 下向き矢印 */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-300"></div>
                  </div>
                  <Typography variant="body-sm" className="text-gray-700 text-center px-4">
                    下記フォームからの応募と履歴書送付の両方をもって、エントリー完了となります。
                  </Typography>
                </div>

                {/* 書類審査 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-48 h-12 bg-gray-500 rounded-lg flex items-center justify-center relative">
                    <Typography variant="body-md" className="text-white font-semibold">
                      2. 書類審査
                    </Typography>
                    {/* 下向き矢印 */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500"></div>
                  </div>
                  <Typography variant="body-sm" className="text-gray-700 text-center px-4">
                    提出いただいた履歴書を基に、基本的な応募資格を満たしているかを確認いたします。
                  </Typography>
                </div>

                {/* 面接 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-48 h-12 bg-gray-700 rounded-lg flex items-center justify-center relative">
                    <Typography variant="body-md" className="text-white font-semibold">
                      3. 面接
                    </Typography>
                    {/* 下向き矢印 */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700"></div>
                  </div>
                  <Typography variant="body-sm" className="text-gray-700 text-center px-4">
                    30分程度、Zoomを使って面接を実施いたします。勤務時間などについてご希望があればお伝えください。
                  </Typography>
                </div>

                {/* 採用 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-48 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                    <Typography variant="body-md" className="text-white font-semibold">
                      4. 採用
                    </Typography>
                  </div>
                  <Typography variant="body-sm" className="text-gray-700 text-center px-4">
                    採用・不採用に関わらずご連絡いたします。
                  </Typography>
                </div>
              </div>
            </div>
            
            {/* 注意書き */}
            <div className="space-y-3">
              <Typography variant="body-md" className="text-gray-700">
                ※面接は複数回実施されます。
              </Typography>
              <Typography variant="body-md" className="text-gray-700">
                ※過去に「学生コース」を受講いただいた方は、担当コンサルタントからの推薦となり、一部面接が免除されます。
              </Typography>
              <Typography variant="body-md" className="text-gray-700">
                ※面接はオンラインで実施されます。
              </Typography>
              <Typography variant="body-md" className="text-gray-700">
                ※採用後は当社で規定されたプロフェッショナルマインド研修プログラムを修了した方から本業務に従事となります。
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* セクション6: 応募方法 */}
      <Section background="warm-white" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 sm:mb-16 text-center font-serif pb-8">
              応募方法
            </Typography>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                  選考参加をご検討いただいている方は、レジュメ（日本語・英語 どちらでも可）を添付し、recruit@engrowth.jp宛にエントリー希望の旨をご連絡ください。
                </Typography>
                
                <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                  なお、質問・相談などございましたら公式LINEでお気軽にご質問ください
                </Typography>
                
                <div className="text-center">
                  <a
                    href="https://lin.ee/4h74yvj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    公式LINEはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* セクション7: よくあるご質問（FAQ） */}
      <Section background="warm-white" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 sm:mb-16 text-center font-serif">
              よくあるご質問 (Q&A)
            </Typography>
            
            <div className="space-y-8  pt-4 sm:pt-6 lg:pt-12">
              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      Q
                    </Typography>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-serif">
                    留学中にEngrowthの学生コースを受講していました。エントリーはこちらから可能でしょうか？
                  </Typography>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      A
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body-md" className="text-dark-gray font-serif">
                      はい、可能です。Engrowthの学習メソッドを熟知していることは大きな強みになります。ぜひご応募ください。
                    </Typography>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      Q
                    </Typography>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-serif">
                    社会人を経て現在大学院に留学中なのですが、年齢制限などはありますか？
                  </Typography>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      A
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body-md" className="text-dark-gray font-serif">
                      いいえ、年齢による制限はありません。あなたの社会人経験と高度な専門知識は、ビジネスコースなどのクライアント指導において特に歓迎されます。
                    </Typography>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      Q
                    </Typography>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-serif">
                    これまでアルバイトや指導経験がないのですが、エントリー可能でしょうか？
                  </Typography>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      A
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body-md" className="text-dark-gray font-serif">
                      はい、可能です。ただし、本業務はプロフェッショナルとしての活動となるため、全員オンボーディングの際に社内で規定された「プロフェッショナルマインド育成プログラム」の受講が必須となります。本プログラムを修了し、プロ意識を身につけた方のみがコンサルタントとしての活動を認められます。
                    </Typography>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      Q
                    </Typography>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-serif">
                    留学先のVISAではアルバイトが認められていないのですが、エントリーは可能でしょうか？
                  </Typography>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      A
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body-md" className="text-dark-gray font-serif">
                      本業務は、完全リモートでの業務委託契約に基づく活動であり、勤務地は問いません。報酬に対する税務処理は日本国内の規定に沿ってご自身で行っていただく形式となります。
                    </Typography>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      Q
                    </Typography>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-serif">
                    幼少期に海外に住んでおり、家では日本語を話していましたが母語が複数あります。応募資格に日本語が第一言語とありましたがエントリーはできますか？
                  </Typography>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      A
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body-md" className="text-gray-700 font-serif">
                      エントリー可能です。日本語が母語であることはマストですが、母語が複数ある方も大歓迎です。
                    </Typography>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      Q
                    </Typography>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-serif">
                  経済的に困難な状況ではないのですが、御社の想いに共感し、是非コンサルタントとして活動したいです。エントリーは可能でしょうか？

                  </Typography>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      A
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body-md" className="text-gray-700 font-serif">
                    経済的な困難を抱えていない方も大歓迎です。※奨学金制度対象外となります

                    </Typography>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      Q
                    </Typography>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-serif">
                    学士課程を卒業し現在OPTで働いているのですが、エントリーは可能ですか？
                  </Typography>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      A
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body-md" className="text-gray-700 font-serif">
                      エントリー可能です。※勤め先の就業規定をご確認ください。
                    </Typography>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      Q
                    </Typography>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray font-serif">
                    税務処理はどうすればよいですか？
                  </Typography>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      A
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body-md" className="text-gray-700 font-serif">
                      当社では海外在住のコンサルタントの方により多くの報酬をお渡しするため、業務委託での契約となります。そのため、年度末にご自身で確定申告を行なっていただく必要があります。その他ご質問等ございましたら、LINEにて個別にご連絡ください。
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
