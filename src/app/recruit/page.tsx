'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { PageTitleSection } from '@/components/sections';

export default function RecruitPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="recruit-page">
      {/* ヒーローセクション */}
      <PageTitleSection
        label="Consultant"
        title="コンサルタント募集"
        description="あなたの経験を、同じ志を持つ次世代の力に。"
      />

      {/* セクション2: 私たちが目指す未来 */}
      <Section background="warm-white" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Typography variant="heading-lg" className="text-dark-gray mb-8 font-serif">
              私たちが目指す未来
            </Typography>
            
            <div className="space-y-6">
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                これを読んでいる皆さんは、きっと「自分はどんな未来を歩みたいか」を考えている最中ではないでしょうか。
                生まれた環境や経済的な制約によって、夢を諦めてしまうことが当たり前のように起こる現実があります。けれど
              </Typography>
              
              <div className="text-center my-6">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="inline-block px-4 py-2 bg-brand-red text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  {showMore ? '【閉じる】' : '【続きを読む】'}
                </button>
              </div>
              
              {showMore && (
                <div className="space-y-6">
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                    私たちは信じています。 努力によって獲得した力で、自分の人生を切り拓くことができる ということを。
                  </Typography>
                  
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                    Engrowthは、英語力を武器にしたコンサルティングを通じて、学費や生活費を自ら賄い、挑戦を続ける学生を支える仕組みです。
                    これは単なるアルバイトや学習サークルではなく、未来を共に創る実践の場。
                  </Typography>
                  
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                    あなたがここで得る経験は、就職活動の一行の履歴書以上に、これからの人生を大きく動かす力になります。
                    もちろん、経済的な困難を抱える学生以外にも英語指導やコンサルティングに興味がある方も大歓迎です。
                    さあ、一緒に「どんな環境に生まれても、自分が生きたい人生を。」を実現していきませんか。
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* セクション3: 応募に際しての重要事項 */}
      <Section background="light-gray" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Typography variant="heading-lg" className="text-dark-gray mb-8 font-serif">
              応募に際しての重要事項
            </Typography>
            
            <div className="space-y-6">
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                私たちは、「経済的制約から挑戦を奪われない社会」を共に創る、同じ境遇を経験した同志を求めています。
              </Typography>
              
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                この募集は、経済的に苦しみながらも高い学習意欲で留学を継続しているあなたの経験を、後輩の人生に役立てることを目的としています。あなたの卓越した専門知識や、学費を捻出するために培った<strong className="font-bold text-brand-red">「本質的な英語運用能力」</strong>は、学生の「経済的な自立」と「夢の継続」に直結します。
              </Typography>
              
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                場所を選ばない働き方で、あなたの留学生活を経済的に支えながら、学生が自身の力で資金を得て学びを継続し、より社会貢献できる人材に成長する機会を奪われないためのエコシステムに、あなたの力を提供してください。
              </Typography>
              
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                このミッションに強く共感し、自身の経験を最大の価値として還元したいという情熱を持った方を歓迎します。
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* セクション4: 応募条件 */}
      <Section background="warm-white" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Typography variant="heading-lg" className="text-dark-gray mb-6 sm:mb-16 font-serif">
                応募条件
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                私たちは、<strong className="font-bold text-brand-red">同じ困難に挑む「優秀な先輩」であり、未来を切り開く「真のコンサルタント」</strong>となれる方を求めています。
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 左側: 必須応募条件 */}
              <div className="space-y-8">
                <div>
                  <Typography variant="heading-md" className="text-brand-red mb-4 font-serif">
                    【必須応募条件】
                  </Typography>
                  
                  <div className="space-y-6">
                    <div>
                      <Typography variant="body-lg" className="text-gray-800 font-semibold mb-2">
                        Engrowthのエコシステムへの強い共感（最重要）
                      </Typography>
                      <Typography variant="body-md" className="text-gray-700 leading-relaxed">
                        経済的制約から挑戦を諦める学生を支えるというEngrowthのミッションに強く共感し、その実現に貢献したいという強い意志を持っていること。
                      </Typography>
                    </div>
                    
                    <div>
                      <Typography variant="body-lg" className="text-gray-800 font-semibold mb-2">
                        優れた留学経験と実績（在学中であること）
                      </Typography>
                      <Typography variant="body-md" className="text-gray-700 leading-relaxed mb-2">
                        以下のいずれかに該当し、学術的な環境で<strong className="font-bold">優秀な成績（GPA等）</strong>を収めている方。
                      </Typography>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>著名な海外4年制大学（大学院含む）に現在在籍している方。</li>
                        <li>コミュニティカレッジ等を経由し、著名な4年制大学への編入を成功させ、現在在籍している方。</li>
                        <li className="text-sm">（専門性の高い分野での学習経験を特に重視します）</li>
                      </ul>
                    </div>
                    
                    <div>
                      <Typography variant="body-lg" className="text-gray-800 font-semibold mb-2">
                        高度な英会話力と専門知識
                      </Typography>
                      <Typography variant="body-md" className="text-gray-700 leading-relaxed">
                        アカデミックまたはビジネスの専門分野において、高度な議論が可能なレベルの英語力を持つ方。
                      </Typography>
                    </div>
                    
                    <div>
                      <Typography variant="body-lg" className="text-gray-800 font-semibold mb-2">
                        日本人ならではの指導力
                      </Typography>
                      <Typography variant="body-md" className="text-gray-700 leading-relaxed">
                        自身の留学経験から、日本人が英語習得でつまずくポイントを深く理解し、科学的根拠に基づいた指導を徹底できる方。
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 右側: 歓迎する経験 */}
              <div className="space-y-8">
                <div>
                  <Typography variant="heading-md" className="text-brand-red mb-4 font-serif">
                    【歓迎する経験】
                  </Typography>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>経済的な困難を乗り越え、学業と両立して留学生活を成功させている経験。</li>
                    <li>STEM分野、経済学、法学など、専門性の高い分野での学習経験。</li>
                    <li>海外でのインターンシップや研究経験。</li>
                  </ul>
                </div>
                
                {/* 画像 */}
                <div className="mt-8">
                  <Image
                    src="/images/recruit/recruit02.png"
                    alt="歓迎する経験のイメージ"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* セクション5: 活動内容 */}
      <Section background="light-gray" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 sm:mb-16 lg:mb-16 text-center font-serif">
              活動内容
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 sm:mt-10 lg:mt-12">
              {/* 左側: コンサルタント活動内容 */}
              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="mb-6">
                  <Typography variant="heading-md" className="text-brand-red mb-2 font-serif">
                    コンサルタント活動内容
                  </Typography>
                  <div className="w-16 h-1 bg-brand-red rounded-full"></div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">・</span>
                    <Typography variant="body-md" className="text-gray-700">
                      目標設計と学習ロードマップの策定
                    </Typography>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">・</span>
                    <Typography variant="body-md" className="text-gray-700">
                      英語セッション（週次/スピーキング・ライティング・ビジネス英語など）
                    </Typography>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">・</span>
                    <Typography variant="body-md" className="text-gray-700">
                      進捗管理・フィードバック・改善提案
                    </Typography>
                  </li>
                </ul>
              </Card>
              
              {/* 右側: エコシステム内貢献活動 */}
              <Card className="p-8 bg-white rounded-xl shadow-lg">
                <div className="mb-6">
                  <Typography variant="heading-md" className="text-brand-red mb-2 font-serif">
                    エコシステム内貢献活動
                  </Typography>
                  <div className="w-16 h-1 bg-brand-red rounded-full"></div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">・</span>
                    <Typography variant="body-md" className="text-gray-700">
                      ナレッジ共有（社内ポータルへの記録、次世代への知見の蓄積）
                    </Typography>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">・</span>
                    <Typography variant="body-md" className="text-gray-700">
                      チームへの貢献（プログラム改善や後輩サポート）
                    </Typography>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* セクション6: よくあるご質問（FAQ） */}
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
                  <Typography variant="heading-sm" className="text-dark-gray">
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
                    <Typography variant="body-md" className="text-dark-gray">
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
                  <Typography variant="heading-sm" className="text-dark-gray">
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
                    <Typography variant="body-md" className="text-dark-gray">
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
                  <Typography variant="heading-sm" className="text-dark-gray">
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
                    <Typography variant="body-md" className="text-dark-gray">
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
                  <Typography variant="heading-sm" className="text-dark-gray">
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
                    <Typography variant="body-md" className="text-dark-gray">
                      本業務は、完全リモートでの業務委託契約に基づく活動であり、勤務地は問いません。報酬に対する税務処理は日本国内の規定に沿ってご自身で行っていただく形式となります。
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* セクション7: 応募をご検討の方へ */}
      <Section background="light-gray" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 sm:mb-16 font-serif">
              応募をご検討の方へ
            </Typography>
            
            <div className="space-y-6 mb-12 mt-6 sm:mt-12">
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                あなたの<strong className="font-bold text-brand-red">「経済的困難を乗り越えている経験」と「専門性」</strong>は、後輩の人生を変える最も強力な武器となります。留学を続けながら、場所を選ばず、価値の高い仕事を通じて経済的な自立を目指しませんか？
              </Typography>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700 w-full sm:w-auto">
                【応募する】
              </Button>
              <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700 w-full sm:w-auto">
                【選考プロセスへ進む】
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
