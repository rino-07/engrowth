'use client';

import React from 'react';
import MethodCard from './MethodCard';

interface MethodCardData {
  japaneseTitle: string;
  englishTitle: string;
  source: string;
  description: string;
  applicationTitle: string;
  applicationContent: string;
}

interface MethodCardListProps {
  methods: MethodCardData[];
  wrap?: boolean; // 横スクロール用の特殊呼び出し用
}

const MethodCardList: React.FC<MethodCardListProps> = ({ methods, wrap = true }) => {
  if (wrap) {
    // 通常のグリッド表示用
    return (
      <>
        {methods.map((method, index) => (
          <MethodCard key={index} {...method} />
        ))}
      </>
    );
  } else {
    // 横スクロール表示用（各カードをdivでラップ）
    return (
      <>
        {methods.map((method, index) => (
          <div key={index} className="flex-shrink-0 w-[85vw] snap-center">
            <MethodCard {...method} />
          </div>
        ))}
      </>
    );
  }
};

export default MethodCardList;
