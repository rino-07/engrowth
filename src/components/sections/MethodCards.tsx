'use client';

import React, { useState } from 'react';

// **********************************************
// 1. MethodCard コンポーネント
// **********************************************

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

// **********************************************
// 2. MethodCards コンポーネント
// **********************************************

const MethodCards: React.FC = () => {
  const methods = [
    {
      japaneseTitle: "1. アクティブラーニング",
      englishTitle: "(Active Learning)",
      source: "研究根拠（ハーバード大学）",
      description:
        "ハーバード大の物理学者 Eric Mazur らの研究では、アクティブラーニング（双方向の学習、ピアラーニング）は従来型の講義に比べて理解度・定着率が大幅に高いことが示されている",
      applicationTitle: "エングロースでの適用",
      applicationContent:
        "コンサルタントが一方的に指導するのではなく、学習者自身が「話す・考える・質問する」プロセスを通じて学ぶシャドーイングやディスカッション練習を重視。→ 知識の定着と実践力が高まる。"
    },
    {
      japaneseTitle: "2. フィードバック効果",
      englishTitle: "(Feedback Effect)",
      source: "研究根拠（ハーバード教育大学院）",
      description:
        "ハティ（John Hattie, Harvard GSEでも紹介されている教育効果のメタ研究）によると、学習成果を最も大きく伸ばす要因のひとつが「即時かつ的確なフィードバック」であるとされている。",
      applicationTitle: "エングロースでの適用",
      applicationContent:
        "→ 英語シャドーイングの録音をコンサルタントが添削し、即時に改善点と強みを提示。→ 学習者は「何を直すか」が明確になり、効率的に上達できる。"
    },
    {
      japaneseTitle: "3. パーソナライズ学習",
      englishTitle: "(Personalized Learning)",
      source: "研究根拠（ハーバード大学教育大学院, Christensen Institute）",
      description:
        "学習内容や進度を個別化した指導は、画一的な授業よりも高い成果を上げることが複数の研究で示されている。",
      applicationTitle: "エングロースでの適用",
      applicationContent:
        "→ 学習者の目的（例: 英語試験対策、海外就職、面接準備）に応じて教材・練習方法を最適化。→ 時間対効果を最大化。"
    }
  ];

  return (
    <div className="w-full">
      {/* デスクトップ: 3カラム */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-stretch">
        {methods.map((method, index) => (
          <MethodCard key={index} {...method} />
        ))}
      </div>

      {/* タブレット: 2カラム */}
      <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-8 items-stretch">
        {methods.map((method, index) => (
          <MethodCard key={index} {...method} />
        ))}
      </div>

      {/* モバイル: 横スクロール */}
      <div className="md:hidden">
        <div
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {methods.map((method, index) => (
            <div key={index} className="flex-shrink-0 w-[85vw] snap-center">
              <MethodCard {...method} />
            </div>
          ))}
        </div>

        {/* スクロールヒント */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            ← スワイプして他のメソッドを見る →
          </p>
        </div>
      </div>
    </div>
  );
};

export default MethodCards;
