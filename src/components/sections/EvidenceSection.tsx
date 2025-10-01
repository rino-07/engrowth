"use client";
import Image from "next/image";

type Props = {
  label: string;
  title: string;
  desc?: string;
};

export function EvidenceSection({ label, title, desc }: Props) {
  return (
    <div className="mx-auto max-w-[1100px] px-4">
      {/* レイアウト：左＝画像のみ／右＝見出し＋本文 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* 左カラム：画像のみ（正方形） */}
        <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl shadow-sm">
          <Image
            src="/images/top/evidence.png"
            alt="海外大学の研究室の様子（科学的根拠を表すイメージ）"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 520px"
            priority
          />
        </div>

        {/* 右カラム：ラベル／タイトル／説明＋本文 */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {/* セクション見出し（右側に集約） */}
          <div>
            <p className="text-[13px] tracking-wide text-red-700 mb-2">
              {label}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
              {title}
            </h2>
            {desc && (
              <p className="mt-3 text-sm sm:text-base text-neutral-600">
                {desc}
              </p>
            )}
          </div>

          {/* 本文（既存の箇条書き） */}
          <div className="text-[15px] leading-7 text-neutral-800">
            <p className="mb-3">
              Engrowthでは、研究に裏付けられた理論を実践に落とし込みます。
            </p>
            <p>ハーバード大学ショーン・エイカー教授が提唱した
              <span className="font-bold text-red-500">『20秒ルール』</span></p>
            <p>25分間集中して作業を行い、その後5分間の休憩を取るサイクルを繰り返す時間管理法
              <span className="font-bold text-red-500">『ポモドーロテクニック』</span></p>
            <p>アメリカ心理学会の研究より、実践することで脳の神経回路が活性化し、実際の行動においても効果を発揮することが分かっているシミュレーション
            <span className="font-bold text-red-500">『メンタルリハーサル』</span></p>
            <p className="mb-3">
              脳科学、神経言語学、第二言語習得理論、心理学、社会学、行動経済学など、様々な学問分野の研究成果を統合し、科学的に裏付けられた学習メソッドを提供。
            </p>
            <p><span className="font-bold text-red-500">努力の無駄を徹底的に無くし</span>学習効率を最大化するプログラム設計で英会話習得を強力にサポートします。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
