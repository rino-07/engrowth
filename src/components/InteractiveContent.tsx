'use client';

import React, { useState } from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';

export default function InteractiveContent() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
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
    </>
  );
}
