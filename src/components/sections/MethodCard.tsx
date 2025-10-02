'use client';

import React, { useState } from 'react';

interface MethodCardProps {
  japaneseTitle: string;
  englishTitle: string;
  source: string;
  description: string;
  applicationTitle: string;
  applicationContent: string;
}

const MethodCard: React.FC<MethodCardProps> = ({
  japaneseTitle,
  englishTitle,
  source,
  description,
  applicationTitle,
  applicationContent
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* 根拠セクション - 固定高さで統一 */}
      <div className="bg-white p-6 rounded-t-lg shadow-md">
        <h3 className="text-xl font-bold text-brand-red mb-1 border-b-2 border-brand-red pb-1 font-serif">
          {japaneseTitle}
        </h3>
        <p className="text-base font-semibold text-brand-red mb-3">
          {englishTitle}
        </p>
        <p className="text-sm font-semibold text-gray-600 mb-3">{source}</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {isExpanded ? description : `${description.substring(0, 100)}...`}
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-brand-red text-sm font-medium hover:underline"
        >
          {isExpanded ? '閉じる' : '全て見る'}
        </button>
      </div>

      {/* 矢印 - 条件付き表示 */}
      {isExpanded && (
        <div className="relative h-8 flex justify-center items-center my-2">
          <div className="w-0 h-0 border-t-[30px] border-x-[30px] border-solid border-t-gray-400 border-x-transparent" />
        </div>
      )}

      {/* 適用セクション - 条件付き表示 */}
      {isExpanded && (
        <div className="bg-white p-6 rounded-b-lg shadow-md">
          <h4 className="text-lg font-bold text-brand-red mb-3 border-b-2 border-brand-red pb-1 font-serif">
            {applicationTitle}
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">{applicationContent}</p>
        </div>
      )}
    </div>
  );
};

export default MethodCard;
