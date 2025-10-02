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
            Engrowthでは、「ただ暗記する」「聞き流す」といった非効率な方法ではなく、言語習得のメカニズムに沿った学習を徹底。
            </p>
            <p>具体的には、質の高いインプットを大量に行いつつ、それを「使える知識」へと変えるためのアウトプットの自動化トレーニングを重視しています。
ハーバード大学の研究知見も応用
特に、ハーバード大学などのトップレベルの研究機関で必須とされている実践的で集中的な語学教育の知見をカリキュラム設計に応用。少人数での演習や、母国語を使わず目標言語のみで授業を行うといった環境を取り入れ、知識を「生きたコミュニケーション能力」に昇華させるプロセスを構築しています。
長年の研究と、世界最高峰の教育メソッドから導き出された「最短で結果を出すための最適解」を、あなたの学習に落とし込みます。無駄なく、着実に、英語を武器にしたい方は、ぜひEngrowthで本物の学習法を体験してください。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
