import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata = {
  title: "受講の流れ - 英語学習の悩み、目標設定、プラン相談など | Engrowth",
  description:
    "あなたのペースに合わせて、専任のコンサルタントが一対一で最適なプランをご提案します。LINE登録から始まる受講フロー。",
  keywords: "Engrowth, 受講の流れ, LINE登録, カウンセリング, 英語学習プラン",
};

const BRAND = "#d30306";
const MUTED = "#898989";

export default function FlowPage() {
  return (
    <div className="min-h-screen">
      {/* 1) ヒーロー（背景写真＋主CTA） */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/drive-download-20250908T014101Z-1-001/fliw/flow-hero-background.jpg"
            alt="オンラインで相談する様子"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <Container>
          <div className="relative py-16 sm:py-20 text-white text-center">
            <h1 className="text-3xl font-bold tracking-tight">受講の流れ</h1>
            <p className="mt-4 leading-relaxed">
              英語学習の失敗を、才能のせいにしない。<br />
              〜正しいやり方を知れば 誰でも話せるようになる〜
            </p>
            <div className="mt-8">
              <Button
                className="px-8 py-4 rounded-full text-lg font-semibold"
                style={{ backgroundColor: "#00B14F" }}
              >
                LINE登録はこちら
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2) 見出し */}
      <Section padding="xl" background="warm-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight">受講の流れ</h2>
            <p className="mt-3 text-[15px]" style={{ color: MUTED }}>
              あなたのペースに合わせて、専任のコンサルタントが一緒に
              最適なプランを考えていきます。
            </p>
          </div>
        </Container>
      </Section>

      <SectionDivider label="FLOW" variant="label" />

      {/* 3) 左右交互（zigzag） */}
      <section className="relative">
        {/* 中央ライン（md以上） */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
        <Container>
          <ol className="space-y-14">
            {/* STEP 1：画像左 / テキスト右 */}
            <ZigzagItem
              n={1}
              title="LINEに登録"
              body={
                <>
                  Engrowth公式LINEを友達追加。<br />
                  ビジネスコース・学生コースの
                  お申込みはページ下部の「お申込みフォーム」から。<br />
                  各種お問い合わせや、無料面談のご相談は
                  「LINEでお問い合わせ」からどうぞ。
                </>
              }
              img="/images/drive-download-20250908T014101Z-1-001/fliw/flow-hero-background.jpg"
              imgAlt="LINE登録"
              textOn="right"
            />

            {/* STEP 2：画像右 / テキスト左 */}
            <ZigzagItem
              n={2}
              title="オンライン面談でヒアリング"
              body={
                <>
                  Zoom などで面談を実施。初回面談までに英語での自己紹介音声をご提出いただき、
                  専任のコンサルタントがあなたの英語の癖や傾向を分析。<br />
                  英語力の現状、目標、ライフスタイルなどをヒアリングして、
                  実現可能な学習計画を一緒に作成します。
                </>
              }
              img="/images/drive-download-20250908T014101Z-1-001/supporters/top-flow-step1.jpg"
              imgAlt="オンライン面談"
              textOn="left"
            />
          </ol>
        </Container>
      </section>

      <SectionDivider variant="soft" />

      {/* 4) 24時間サポート説明 */}
      <section>
        <Container>
          <div className="grid md:grid-cols-2 items-start gap-10">
            <div>
              <p className="leading-relaxed text-[15px]">
                コース期間中は、英語に関することなら
                <strong>24時間いつでも</strong>専任コンサルタントに連絡可能。
                苦手な発音の発声法や、ネイティブが使う言い回しなど、
                なんでもお気軽にご相談ください。<br />
                担当のコンサルタントは
                <strong>お一人</strong>だけ。第三者への伝達が不要なため、
                行き違いのない高品質な伴走が可能です。<br />
                業務で英語が必要な方や、留学準備で不安がある方も、
                まずは実用的な課題から一緒に進めていきます。
              </p>
            </div>
            <figure className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100">
              <Image src="/images/drive-download-20250908T014101Z-1-001/top/service-support.jpg" alt="日々の伴走" fill className="object-cover" />
              <figcaption className="absolute bottom-2 right-3 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded">
                ※原則◯時間以内の返信
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <SectionDivider variant="soft" />

      {/* 5) シミュレーション英会話（1カラム） */}
      <Section padding="xl" background="light-gray">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span
                className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white text-sm font-bold mb-4"
                style={{ backgroundColor: BRAND }}
              >
                4
              </span>
              <h3 className="text-xl font-semibold mb-4">（ス）シミュレーション英会話</h3>
              <p className="leading-relaxed text-[15px]" style={{ color: MUTED }}>
                留学生が短期間で英語力を鍛える要因のひとつとして、
                「ある状況に英語で遭遇し、英語で対処する力がつく」というのが挙げられます。<br />
                このプロセスは、私たち日本人がビジネスの現場で英語を獲得するうえでも同様です。<br />
                Engrowth ではビジネスシーンや海外大学などのシチュエーションに応じて、
                現実の英会話の状況をシミュレーションしてトレーニングします。
              </p>
            </div>

            {/* ビジネスコース */}
            <div className="mb-16">
              <h4 className="text-center text-xl font-bold mb-8">ビジネスコース</h4>
              <div className="space-y-8">
                {/* 基礎シミュレーション */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-red-300 text-center py-3">
                    <h5 className="font-semibold">シミュレーションテーマ（場面トピック）</h5>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <SimulationRow week="week 1-2" theme="挨拶" />
                    <SimulationRow week="week 3-4" theme="自己紹介" />
                    <SimulationRow week="week 5-6" theme="道の聞き方/聞かれた際の答え方" />
                    <SimulationRow week="week 7-8" theme="飛行機（チェックイン、機内）" />
                    <SimulationRow week="week 9-10" theme="ホテル（チェックイン/アウト）" />
                    <SimulationRow week="week 11-12" theme="カフェ＆レストラン（予約、注文）" />
                  </div>
                </div>

                {/* 応用シミュレーション */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-red-300 text-center py-3">
                    <h5 className="font-semibold">シミュレーションテーマ（場面トピック）</h5>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <SimulationRow week="week 13-14" theme="ショッピング（試着、会計）" />
                    <SimulationRow week="week 15-16" theme="交通機関（電車、バス）" />
                    <SimulationRow week="week 17-18" theme="ビジネスメール" />
                    <SimulationRow week="week 19-20" theme="ビジネスプレゼンテーション①" />
                    <SimulationRow week="week 21-22" theme="ビジネスプレゼンテーション②" />
                    <SimulationRow week="week 23-24" theme="カスタム" />
                  </div>
                </div>
              </div>
            </div>

            {/* 学生コース */}
            <div>
              <h4 className="text-center text-xl font-bold mb-8">学生コース</h4>
              <div className="space-y-8">
                {/* 基礎シミュレーション */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-red-300 text-center py-3">
                    <h5 className="font-semibold">シミュレーションテーマ（場面トピック）</h5>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <SimulationRow week="week 1-2" theme="挨拶" />
                    <SimulationRow week="week 3-4" theme="自己紹介" />
                    <SimulationRow week="week 5-6" theme="道の聞き方/聞かれた際の答え方" />
                    <SimulationRow week="week 7-8" theme="飛行機（チェックイン、機内）" />
                    <SimulationRow week="week 9-10" theme="ホテル（チェックイン/アウト）" />
                    <SimulationRow week="week 11-12" theme="カフェ&レストラン（予約、注文）" />
                  </div>
                </div>

                {/* 応用シミュレーション */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-red-300 text-center py-3">
                    <h5 className="font-semibold">シミュレーションテーマ（場面トピック）</h5>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <SimulationRow week="week 13-14" theme="ショッピング（試着、会計）" />
                    <SimulationRow week="week 15-16" theme="交通機関（電車、バス）" />
                    <SimulationRow week="week 17-18" theme="国行き連絡" />
                    <SimulationRow week="week 19-20" theme="就職活動、宅急便" />
                    <SimulationRow week="week 21-22" theme="病院（予約、受付、診察）" />
                    <SimulationRow week="week 23-24" theme="カスタム、専任コンサルタントと相談し内容決定" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SectionDivider label="COURSES" variant="brand" />

      {/* 6) コース表（画像差し込み） */}
      <Section padding="xl" background="warm-white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            <CourseImage title="ビジネスコース" src="/images/flow/business-table.jpg" />
            <CourseImage title="学生コース" src="/images/flow/student-table.jpg" />
          </div>
        </Container>
      </Section>

      <SectionDivider variant="soft" />

      {/* 7) 最終CTA（ブランド赤） */}
      <section className="py-16">
        <Container>
          <div
            className="rounded-2xl px-6 py-12 text-center text-white relative overflow-hidden"
            style={{ background: `linear-gradient(90deg, ${BRAND}, #b00205)` }}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
            <p className="text-sm font-bold bg-white text-[color:var(--brand)] px-3 py-1 rounded-full inline-block mb-3"
               style={{ color: BRAND }}
            >
              カンタン 2 ステップ！
            </p>
            <h3 className="text-xl font-semibold">30分の無料カウンセリングでご相談ください</h3>
            <div className="mt-6">
              <Button className="px-8 py-4 text-white font-semibold rounded-full" style={{ backgroundColor: BRAND }}>
                カウンセリングを予約する
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

/* ---------- parts ---------- */

function ZigzagItem({
  n,
  title,
  body,
  img,
  imgAlt,
  textOn, // "left" | "right"
}: {
  n: number;
  title: string;
  body: React.ReactNode;
  img: string;
  imgAlt: string;
  textOn: "left" | "right";
}) {
  const leftText = textOn === "left";
  return (
    <li className="grid md:grid-cols-2 items-start gap-10">
      {/* 画像 */}
      <figure className={`relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 ${leftText ? "md:order-2" : ""}`}>
        <Image src={img} alt={imgAlt} fill className="object-cover" />
      </figure>

      {/* テキスト */}
      <div className={`${leftText ? "md:order-1 md:pr-12" : "md:pl-12"}`}>
        <span
          className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white text-sm font-bold mb-2"
          style={{ backgroundColor: BRAND }}
        >
          {n}
        </span>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-relaxed text-[15px]" style={{ color: MUTED }}>
          {body}
        </p>
      </div>
    </li>
  );
}

function CourseImage({ title, src }: { title: string; src: string }) {
  return (
    <div>
      <h4 className="text-center text-xl font-bold mb-6">{title}</h4>
      <div className="rounded-2xl overflow-hidden bg-white shadow ring-1 ring-black/5 max-w-3xl mx-auto">
        <Image src={src} alt={`${title}の内容`} width={1200} height={900} className="w-full h-auto" />
      </div>
    </div>
  );
}

function SimulationRow({ week, theme }: { week: string; theme: string }) {
  return (
    <div className="px-6 py-4 grid grid-cols-3 gap-4 items-center">
      <div className="text-sm font-semibold text-center bg-gray-100 py-2 rounded">
        {week}
      </div>
      <div className="col-span-2 text-sm leading-relaxed text-center">
        {theme}
      </div>
    </div>
  );
}