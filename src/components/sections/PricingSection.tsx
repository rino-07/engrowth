'use client';

import React, { useCallback } from 'react';
import { PricingCard } from '../ui/PricingCard';
import Typography from '../ui/Typography';
import Container from '../layout/Container';
import Section from '../layout/Section';
import { pricingPlans } from '@/types/pricing';

function FullBleed1440({ children }: { children: React.ReactNode }) {
  // 親の max-w-* を抜けて100vwまで広げ、内側で1440px上限に戻す
  return (
    <section className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      <div className="mx-auto max-w-[1440px] px-6">
        {children}
      </div>
    </section>
  );
}

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

  const handlePlanSelect = useCallback(() => {
    // お問い合わせページにリダイレクト
    window.location.href = '/contact';
  }, []);

  return (
    <Section background={background} padding="xl" className="overflow-visible">
      <FullBleed1440>
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

                <div className="pricing-cards-responsive lg:grid lg:grid-cols-4 lg:gap-8">
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
                onButtonClick={handlePlanSelect}
              />
            </div>
          ))}
        </div>

        {/* 注記 */}
        <div className="text-center mt-12">
          <Typography variant="body-sm" className="text-gray-500 max-w-2xl mx-auto">
            ※ 価格は税込み表示です。
            <br />
            ※ 長期プランほどお得になっており、継続的な学習をサポートします。
          </Typography>
        </div>
      </FullBleed1440>
    </Section>
  );
};
