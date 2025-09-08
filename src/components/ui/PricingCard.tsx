'use client';

import React from 'react';
import Typography from './Typography';
import Button from './Button';

export interface PricingCardProps {
  /** 期間 */
  period: string;
  /** 通常価格 */
  originalPrice: string;
  /** 現在価格 */
  currentPrice: string;
  /** 月額価格 */
  monthlyPrice: string;
  /** 割引率 */
  discount?: string;
  /** 人気プラン表示 */
  isPopular?: boolean;
  /** 特徴リスト */
  features: string[];
  /** ボタンテキスト */
  buttonText: string;
  /** ボタンクリック時の処理 */
  onButtonClick?: () => void;
  /** カードが無効かどうか */
  isDisabled?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  period,
  originalPrice,
  currentPrice,
  monthlyPrice,
  discount,
  isPopular = false,
  features,
  buttonText,
  onButtonClick,
  isDisabled = false,
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
      isPopular ? 'border-brand-red scale-105' : 'border-gray-200'
    } ${isDisabled ? 'opacity-60' : ''}`}>
      {/* 人気プランバッジ */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold">
            最人気
          </div>
        </div>
      )}

      <div className="p-8">
        {/* 期間 */}
        <div className="text-center mb-4">
          <Typography variant="heading-sm" className="text-dark-gray font-bold">
            {period}
          </Typography>
        </div>

        {/* 価格セクション */}
        <div className="text-center mb-6">
          {/* 通常価格（取り消し線） */}
          {originalPrice && (
            <div className="text-gray-400 line-through text-lg mb-1">
              {originalPrice}
            </div>
          )}

          {/* 現在価格 */}
          <div className="text-brand-red text-4xl font-bold mb-2">
            {currentPrice}
          </div>

          {/* 月額価格 */}
          <div className="text-gray-600 text-lg">
            月額 {monthlyPrice}
          </div>

          {/* 割引率 */}
          {discount && (
            <div className="inline-block bg-action-green text-white px-3 py-1 rounded-full text-sm font-bold mt-2">
              {discount}
            </div>
          )}
        </div>

        {/* 特徴リスト */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-action-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <Typography variant="body-md" className="text-dark-gray leading-relaxed">
                {feature}
              </Typography>
            </div>
          ))}
        </div>

        {/* ボタン */}
        <div className="text-center">
          <Button
            variant={isPopular ? "primary" : "outline"}
            size="lg"
            onClick={onButtonClick}
            disabled={isDisabled}
            className="w-full"
          >
            {buttonText}
          </Button>
        </div>

        {/* 無料お試し期間の注記（1ヶ月プランの場合） */}
        {period === "1ヶ月" && (
          <div className="text-center mt-4">
            <Typography variant="body-sm" className="text-gray-500">
              ※ 3ヶ月以上のプラン<br />
              購了者のみ利用可能
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};
