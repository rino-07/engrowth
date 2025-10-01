import React from 'react';
import Typography from '@/components/ui/Typography';

interface MethodCardProps {
  title: string;
  source: string;
  description: string;
  applicationTitle: string;
  applicationContent: string;
}

const MethodCard: React.FC<MethodCardProps> = ({
  title,
  source,
  description,
  applicationTitle,
  applicationContent
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* 根拠セクション (カード上部) */}
      <div className="bg-white p-6 rounded-t-lg shadow-md flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2 border-b-2 border-brand-red pb-1">
          {title}
        </h3>
        <p className="text-sm font-semibold text-gray-600 mb-3">{source}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* 矢印 (間に挟む) */}
      <div className="relative h-6 flex justify-center items-center">
        <div className="w-0 h-0 border-t-[15px] border-x-[15px] border-solid border-t-gray-400 border-x-transparent" />
      </div>

      {/* 適用セクション (カード下部) */}
      <div className="bg-brand-red text-white p-6 rounded-b-lg shadow-md">
        <h4 className="text-lg font-bold mb-3">{applicationTitle}</h4>
        <p className="text-sm leading-relaxed">{applicationContent}</p>
      </div>
    </div>
  );
};

const MethodCards: React.FC = () => {
  const methods = [
    {
      title: "1. アクティブラーニング (Active Learning)",
      source: "研究根拠（ハーバード大学、ハーバード大の物理学者Eric Mazurら）",
      description: "アクティブラーニング（双方向の学習、ピアラーニング）は従来の講義に比べて理解度・定着率が大幅に高いことが示されています。（Freeman et al., PNAS, 2014; アクティブラーニングは講義型よりも成績が平均6%向上）",
      applicationTitle: "エングロースでの適用",
      applicationContent: "コンサルタントが一方的に指導するのではなく、学習者自身が「話す・考える・質問する」プロセスを通じて学ぶシャドーイングやディスカッション練習を重視。→ 知識の定着と実践力が高まる。"
    },
    {
      title: "2. フィードバック効果 (Feedback Effect)",
      source: "研究根拠（ハーバード大学教育大学院、John Hattieの教育効果メタ研究）",
      description: "教育効果のメタ研究によると、学習成果を大幅に向上させる最も重要な要因の一つは「即座で正確なフィードバック」です。",
      applicationTitle: "エングロースでの適用",
      applicationContent: "エングロースのコンサルタントは英語シャドーイングの録音に注釈を付け、改善点と強みを即座にフィードバック。学習者にとって「何を直せばいいか」が明確になり、効率的な上達が可能。"
    },
    {
      title: "3. パーソナライズ学習 (Personalized Learning)",
      source: "研究根拠（ハーバード大学教育大学院、Christensen Institute）",
      description: "ハーバード大学教育大学院とChristensen Instituteの研究では、学習内容と進度を個人に合わせた指導が、一律の講義よりも高い成果を上げることが複数の研究で示されています。",
      applicationTitle: "エングロースでの適用",
      applicationContent: "エングロースでは学習者の目標（英語試験対策、海外就職、面接対策など）に応じて教材と練習方法を最適化。→ 効果までの時間を最大化。"
    }
  ];

  return (
    <div className="w-full">
      {/* デスクトップ: 3カラムグリッド */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {methods.map((method, index) => (
          <MethodCard key={index} {...method} />
        ))}
      </div>

      {/* タブレット: 2カラムグリッド */}
      <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-8">
        {methods.map((method, index) => (
          <MethodCard key={index} {...method} />
        ))}
      </div>

      {/* モバイル: 横スクロール */}
      <div className="md:hidden">
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4" 
             style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {methods.map((method, index) => (
            <div key={index} className="flex-shrink-0 w-[85vw] snap-center">
              <MethodCard {...method} />
            </div>
          ))}
        </div>
        
        {/* スクロールヒント */}
        <div className="text-center mt-4">
          <Typography variant="body-sm" className="text-gray-500">
            ← スワイプして他のメソッドを見る →
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MethodCards;
