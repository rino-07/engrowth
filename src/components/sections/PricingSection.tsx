'use client';

import React from 'react';
import { PricingCard } from '../ui/PricingCard';
import { Typography } from '../ui/Typography';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { pricingPlans } from '@/types/pricing';

interface PricingSectionProps {
  /** セクションタイトル */
  title?: string;
  /** セクション説明文 */
  description?: string;
  /** 背景色 */
  background?: 'white' | 'light-gray' | 'warm-white';
  /** 表示する料金プランのID配列（指定しない場合は全て表示） */
  planIds?: string[];
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  title = "あなたの目標とペースに合わせて選べる、柔軟なプランをご用意しました。",
  description,
  background = 'white',
  planIds
}) => {
  // 表示する料金プランをフィルタリング
  const displayPlans = planIds 
    ? pricingPlans.filter(plan => planIds.includes(plan.id))
    : pricingPlans;

  const handlePlanSelect = (planId: string) => {
    console.log(`Selected plan: ${planId}`);
    // ここに料金プラン選択時の処理を実装
    // 例：お申し込みページへの遷移、モーダル表示など
  };

  return (
    <Section background={background} padding="xl">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="heading-lg" className="text-dark-gray mb-6" as="h2">
            {title}
          </Typography>
          {description && (
            <Typography variant="body-lg" className="text-gray-600 max-w-3xl mx-auto">
              {description}
            </Typography>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {displayPlans.map((plan) => (
            <div key={plan.id} className="flex justify-center">
              <PricingCard
                period={plan.period}
                originalPrice={plan.originalPrice}
                currentPrice={plan.currentPrice}
                monthlyPrice={plan.monthlyPrice}
                discount={plan.discount}
                isPopular={plan.isPopular}
                features={plan.features}
                buttonText={plan.buttonText}
                isDisabled={plan.isDisabled}
                onButtonClick={() => handlePlanSelect(plan.id)}
              />
            </div>
          ))}
        </div>

        {/* 注記 */}
        <div className="text-center mt-12">
          <Typography variant="body-sm" className="text-gray-500 max-w-2xl mx-auto">
            ※ 価格は税込み表示です。プラン変更・キャンセルはいつでも可能です。
            <br />
            ※ 長期プランほどお得になっており、継続的な学習をサポートします。
          </Typography>
        </div>
      </Container>
    </Section>
  );
};
