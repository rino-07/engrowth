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
  // discount,
  isPopular = false,
  features,
  buttonText,
  onButtonClick,
  isDisabled = false,
}) => {
  return (
    <div className={`relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg ${
      isPopular ? 'border-brand-red shadow-lg' : 'border-gray-200 shadow-sm'
    } ${isDisabled ? 'opacity-60' : ''}`}>
      {/* 人気プランバッジ */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-semibold">
            最人気
          </div>
        </div>
      )}

      <div className="p-6">
        {/* プラン名とバッジ */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              period === "GROUPS" ? "bg-purple-500" : 
              period === "PRIVATE+" ? "bg-yellow-500" : 
              "bg-black"
            }`}></div>
            <Typography variant="heading-sm" className="text-dark-gray font-semibold">
              {period}
            </Typography>
          </div>
        </div>

        {/* 通常価格（小さく） */}
        {originalPrice && (
          <div className="text-gray-400 text-sm mb-1">
            最低料金 {originalPrice}
          </div>
        )}

        {/* メイン価格 */}
        <div className="mb-4">
          <div className="text-dark-gray text-3xl font-bold">
            {currentPrice}
          </div>
          <div className="text-gray-600 text-sm">
            {monthlyPrice}
          </div>
        </div>

        {/* 説明文 */}
        <div className="text-gray-600 text-sm card-description">
          {features[0]}
        </div>

        {/* ボタン */}
        <div className="mb-6">
          <Button
            variant="primary"
            size="lg"
            onClick={onButtonClick}
            disabled={isDisabled}
            className={`w-full rounded-xl font-semibold ${
              isPopular ? 'bg-brand-red hover:bg-red-700' : 'bg-black hover:bg-gray-800'
            } text-white`}
          >
            {buttonText}
          </Button>
        </div>

        {/* 特徴リスト（チェックマーク付き） */}
        <div className="space-y-2">
          {features.slice(1).map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <Typography variant="body-sm" className="text-gray-600 leading-relaxed">
                {feature}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
