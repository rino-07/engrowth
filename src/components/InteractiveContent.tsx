'use client';

import React, { useState } from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';

export default function InteractiveContent() {
  const [showMore, setShowMore] = useState(false);
  const [showMoreReasons, setShowMoreReasons] = useState(false);

  return (
    <>
      {/* セクション2: 理念採用で仲間を広げる */}
      <Section background="warm-white" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Typography variant="heading-lg" className="text-dark-gray font-serif inline-block border-b-2 border-brand-red pb-2">
              理念採用で仲間を広げる
              </Typography>
            </div>
            
            <div className="space-y-6">
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
              はじめまして。Engrowth創業者の眞坂莉乃です。
              世の中の多くの採用は「条件採用」です。
              給与や待遇、キャリアの条件をもとに選ばれる採用。
              けれども、私たちEngrowthが行っているのは「理念採用」です。

              私たちは、「どんな環境に生まれても、自分が生きたい人生を。」を理念（ビジョン）に、
              </Typography>
              
              <div className="text-center my-6">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-dark-gray hover:text-brand-red transition-colors duration-200 cursor-pointer"
                >
                  {showMore ? '' : '+ 続きを読む'}
                </button>
              </div>
              
              {showMore && (
                <div className="space-y-6">
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                  「一人ひとりが、自分の人生を自分の手で切り拓き、成長する場をつくる」ことを使命としています。
                  だからこそ、条件ではなく「在り方」や「価値観」に共感してくださる仲間と共に歩みたい。
                  </Typography>
                  
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                  Engrowthでは、スティーブン・R・コヴィー博士の『7つの習慣』を土台とした関わり方を大切にしています。
                  たとえば、「主体性を発揮する」「終わりを思い描く」「Win-Winを考える」といった習慣を、
                  クライアントとの関係づくりや、チームでのプロジェクト推進の中で日々実践しています。
                  </Typography>
                  
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                  私たちが目指すのは、個人の成長、クライアントの成功、そして社会の発展が調和する「三方よし」の組織。
                  それは一部のメンバーだけでは実現できません。
                  自ら考え、動き、周囲に良い影響を与えられる"リーダー"としての一歩を踏み出すあなたの力が必要です。

                  海外の大学・大学院に在学しながら、世界を舞台に挑戦したい方。
                  自分の成長を社会の成長につなげたい方。
                  そんなあなたを、私たちは心から歓迎します。

                  これからのEngrowthを、一緒に創っていきませんか。
                  </Typography>
                  
                  {/* 閉じるボタンをテキストの最後に移動 */}
                  <div className="text-center my-6">
                    <button
                      onClick={() => setShowMore(false)}
                      className="text-dark-gray hover:text-brand-red transition-colors duration-200 cursor-pointer"
                    >
                      − 閉じる
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* セクション3: 少数精鋭である理由 */}
      <Section background="light-gray" className="py-6 sm:py-12 lg:py-16">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Typography variant="heading-lg" className="text-dark-gray font-serif inline-block border-b-2 border-brand-red pb-2">
              少数精鋭である理由
              </Typography>
            </div>
            
            <div className="space-y-6">
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                Engrowthは一人ひとりが深く関わり合い、互いに成長を支え合う、少数精鋭のチームです。
              </Typography>
              
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                メンバー全員が海外大学・大学院で学びながら活動しており、時差も国籍も異なる環境の中で、「信頼」と「自律」を軸にクライアントワークを推進しています。
              </Typography>
              
              <div className="text-center my-6">
                <button
                  onClick={() => setShowMoreReasons(!showMoreReasons)}
                  className="text-dark-gray hover:text-brand-red transition-colors duration-200"
                >
                  {showMoreReasons ? '' : '+ 続きを読む'}
                </button>
              </div>
              
              {showMoreReasons && (
                <div className="space-y-6">
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                    だからこそ、一人の影響力が大きい。
                  </Typography>
                  
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                    自分の発言が議論を動かし、挑戦する心が実際にクライアントへの提案を変えていく。
                    そんな"実践の場"が、ここにはあります。
                  </Typography>
                  
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                    私たちは、肩書きや年次ではなく、「どう在るか」で評価します。
                    互いを尊重し、率直にフィードバックを交わし合い、
                    『7つの習慣』に基づくリーダーシップを日々の対話と行動で磨いていく。
                  </Typography>
                  
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                    大きな組織の一員としてではなく、一人ひとりのパートナー（クライアント）と向き合う経験をしたい人にとって、Engrowthはきっと特別な環境になるはずです。
                  </Typography>
                  
                  {/* 閉じるボタンをテキストの最後に移動 */}
                  <div className="text-center my-6">
                    <button
                      onClick={() => setShowMoreReasons(false)}
                      className="text-dark-gray hover:text-brand-red transition-colors duration-200 cursor-pointer"
                    >
                      − 閉じる
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
