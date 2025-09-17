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
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-red-700">脳科学：</strong>
                記憶の定着を促す反復間隔の最適化 — 適切な間隔で復習を繰り返すことで、短期記憶が長期記憶に変わり、効率的に英語を定着させられます。
              </li>
              <li>
                <strong className="text-red-700">第二言語習得論：</strong>
                インプットとアウトプットの最適な比率設計 — 英語を聞いたり読んだりするだけでは不十分です。実際に使う場面（会話・作文）を適切に組み合わせることで、自然に使える「生きた英語力」を養います。
              </li>
              <li>
                <strong className="text-red-700">行動科学：</strong>
                学習を習慣化するトリガーと環境デザイン — 「やる気」に頼るのではなく、毎日の生活に自然に学習を組み込む仕組みをつくることで、無理なく継続できます。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
