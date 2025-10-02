import React from 'react';
import MethodCardList from './MethodCardList';

interface MethodCardData {
  japaneseTitle: string;
  englishTitle: string;
  source: string;
  description: string;
  applicationTitle: string;
  applicationContent: string;
}

const MethodCardsLayout: React.FC = () => {
  const methods: MethodCardData[] = [
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
      {/* デスクトップ: 3カラム (責任: 配置) */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-stretch">
        <MethodCardList methods={methods} />
      </div>

      {/* タブレット: 2カラム (責任: 配置) */}
      <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-8 items-stretch">
        <MethodCardList methods={methods} />
      </div>

      {/* モバイル: 横スクロール (責任: 配置とスクロールヒント) */}
      <div className="md:hidden">
        <div
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          <MethodCardList methods={methods} wrap={false} />
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

export default MethodCardsLayout;
