import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDivider from "@/components/ui/SectionDivider";
import Hero from "@/components/sections/Hero";

export const metadata = {
  title: "受講の流れ - 英語学習の悩み、目標設定、プラン相談など | Engrowth",
  description:
    "あなたのペースに合わせて、専属のコンサルタントが一対一で最適なプランをご提案します。LINE登録から始まる受講フロー。",
  keywords: "Engrowth, 受講の流れ, LINE登録, カウンセリング, 英語学習プラン",
};

const BRAND = "var(--brand-red)";
const MUTED = "#898989";

export default function FlowPage() {
  return (
    <div className="min-h-screen">
      {/* 1) ヒーロー（背景写真＋主CTA） */}
      <Hero
        title=""
        subtitle={null}
        bgDesktopSrc="/images/fliw/flow.hero.png"
        bgMobileSrc="/images/hero_sma/flow_hero_sma.png"
        bgPosition="center 25%"
        className="flex items-center justify-center text-center"
        ctas={[]}
        imageWidth={2021}
        imageHeight={748}
      />

      {/* 2) 見出し */}
      <Section className="py-16 sm:py-20 lg:py-32" background="warm-white">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight font-serif">受講の流れ</h2>
            <p className="mt-3 text-[15px]" style={{ color: MUTED }}>
              あなたのペースに合わせて、専属のコンサルタントが一緒に
              最適なプランを考えていきます。
            </p>
          </div>
        </Container>
      </Section>

      <SectionDivider variant="soft" />

      {/* 3) 左右交互（zigzag） */}
      <section className="relative pt-16 lg:pt-24">
        {/* 中央ライン（md以上） */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
        <Container>
          <ol className="space-y-0">
            {/* STEP 1：画像左 / テキスト右 */}
            <ZigzagItem
              n={1}
              title="LINEに登録"
              body={
                <>
                  Engrowth公式LINEを友達追加。<br />
                  ビジネスコース・学生コースの
                  お申込みは「お申込みフォーム」から。<br />
                  各種お問い合わせや、無料面談のご相談は
                  「LINEでお問い合わせ」からどうぞ。
                </>
              }
              img="/images/fliw/flow-hero-background.jpg"
              imgAlt="LINE登録"
              textOn="right"
              buttons={
                <>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLScaQttdkLCkQiEzCjJA6dLRtRqBZIJrpHWJ6EYFkCP7bqgHcw/viewform" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="sm">
                        お申し込みフォーム
                      </Button>
                    </Link>
                  <Button variant="primary" size="sm" className="text-white border-0" style={{ backgroundColor: "#0cc755" }} href="https://lin.ee/4h74yvj">
                    LINEでお問い合わせ
                  </Button>
                </>
              }
            />
            
            {/* 仕切り線 */}
            <div className="w-full h-px bg-gray-200 my-14" />

            {/* STEP 2：画像右 / テキスト左 */}
            <ZigzagItem
              n={2}
              title="オンライン面談"
              body={
                <>
                  Zoom などで面談を実施。初回面談までに英語での自己紹介音声をご提出いただき、
                  専属のコンサルタントがあなたの英語の癖や傾向を分析。<br />
                  英語力の現状、目標、ライフスタイルなどをヒアリングして、
                  実現可能な学習計画を一緒に作成します。
                </>
              }
              img="/images/supporters/top-flow-step1.jpg"
              imgAlt="オンライン面談"
              textOn="left"
              buttons={
                <>
                  <Button variant="primary" size="sm" className="text-white border-0" style={{ backgroundColor: "#0cc755" }} href="https://lin.ee/4h74yvj">
                    LINEに登録
                  </Button>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScaQttdkLCkQiEzCjJA6dLRtRqBZIJrpHWJ6EYFkCP7bqgHcw/viewform" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm">
                      お申し込フォーム
                    </Button>
                  </Link>
                </>
              }
            />
            
            {/* 仕切り線 */}
            <div className="w-full h-px bg-gray-200 my-14" />

            {/* STEP 3：画像左 / テキスト右 */}
            <ZigzagItem
              n={3}
              title="24時間サポート"
              body={
                <>
                  コース期間中は、英語に関することなら
                  <strong>24時間いつでも</strong>専属コンサルタントに連絡可能。
                  苦手な発音の克服法や、ネイティブが使う言い回しなど、
                  お気軽になんでもご質問ください。<br />
                  また、弊社のコンサルタントは一人ひとりが学術的に高度な専門分野を持ち、第一線で研究しているメンバーも多く在籍しています。
                  <br /><br />専属コンサルタントの専門分野に関する相談なども、お気軽に個別にご相談ください。
                </>
              }
              img="/images/top/service-support.jpg"
              imgAlt="24時間サポート"
              textOn="right"
              buttons={
                <>
                  <Button variant="primary" size="sm" className="text-sm px-4 py-2 text-white border-0" style={{ backgroundColor: "#0cc755" }} href="https://lin.ee/4h74yvj">
                    LINEでお問い合わせ
                  </Button>
                  <Link href="/contact#:~:text=info%40-,engrowth,-.jp">
                    <Button variant="primary" size="sm" className="bg-brand-red hover:bg-red-700 text-sm px-4 py-2">
                      メールでお問い合わせ
                    </Button>
                  </Link>
                </>
              }
            />
            
            {/* 仕切り線 */}
            <div className="w-full h-px bg-gray-200 my-14" />
          </ol>
        </Container>
      </section>

      <SectionDivider variant="soft" />

      {/* 5) シミュレーション英会話（1カラム） */}
      <Section className="py-16 sm:py-20 lg:py-32" background="light-gray">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span
                className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white text-sm font-bold mb-4"
                style={{ backgroundColor: BRAND }}
              >
                4
              </span>
              <h3 className="text-xl font-semibold mb-4 font-serif">シミュレーション英会話</h3>
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
  <h4 className="text-xl font-bold mb-8 font-serif mt-8 px-4">ビジネスコース</h4>
  <div className="space-y-8">
    {/* 基礎シミュレーション */}
    <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200">
      <div className="bg-brand-red py-3 md:py-4">
        <div className="grid grid-cols-[140px_1fr] gap-0">
          <div className="px-4 md:px-6 text-white text-sm font-semibold tracking-wide font-serif">
            Week
          </div>
          <div className="px-4 md:px-6 text-white text-sm font-semibold tracking-wide font-serif">
            テーマ
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        <SimulationRow week="week 1-2" theme="挨拶" />
        <SimulationRow week="week 3-4" theme="自己紹介" />
        <SimulationRow week="week 5-6" theme="道の聞き方、聞かれた際の答え方" />
        <SimulationRow week="week 7-8" theme="飛行機（チェックイン、機内）" />
        <SimulationRow week="week 9-10" theme="ホテル（チェックイン、アウト）" />
        <SimulationRow week="week 11-12" theme="カフェ＆レストラン（予約、注文）" />
      </div>
    </div>

    {/* 応用シミュレーション */}
    <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100">
      <div className="bg-red-600 py-4">
        <h5 className="font-bold text-white text-lg font-serif px-4">シミュレーションテーマ</h5>
      </div>
      <div className="divide-y divide-gray-100">
        <SimulationRow week="week 13-14" theme="ショッピング（試着、会計）" />
        <SimulationRow week="week 15-16" theme="交通機関（電車、バス）" />
        <SimulationRow week="week 17-18" theme="ビジネスメール" />
        <SimulationRow week="week 19-20" theme="ビジネスプレゼンテーション①" />
        <SimulationRow week="week 21-22" theme="ビジネスプレゼンテーション②" />
        <SimulationRow week="week 23-24" theme="カスタム（専属コンサルタントと相談し内容決定）" />
      </div>
    </div>
  </div>
</div>

            {/* 学生コース */}
            <div className="py-0">
              <div className="border-t border-gray-200 pt-8"></div>
              <h4 className="text-center text-xl font-bold mb-8 font-serif">学生コース</h4>
              <div className="space-y-8">
               {/* 基礎シミュレーション */}
               <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200">
                  <div className="bg-brand-red py-3 md:py-4">
                    <div className="grid grid-cols-[140px_1fr] gap-0">
                      <div className="px-4 md:px-6 text-white text-sm font-semibold tracking-wide font-serif">
                        Week
                      </div>
                      <div className="px-4 md:px-6 text-white text-sm font-semibold tracking-wide font-serif">
                        テーマ
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <SimulationRow week="week 1-2" theme="挨拶" />
                    <SimulationRow week="week 3-4" theme="自己紹介" />
                    <SimulationRow week="week 5-6" theme="道の聞き方、聞かれた際の答え方" />
                    <SimulationRow week="week 7-8" theme="飛行機（チェックイン、機内）" />
                    <SimulationRow week="week 9-10" theme="ホテル（チェックイン、アウト）" />
                    <SimulationRow week="week 11-12" theme="カフェ&レストラン（予約、注文）" />
                  </div>
                </div>

                {/* 応用シミュレーション */}
                <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100">
                  <div className="bg-red-600 py-4">
                    <h5 className="font-bold text-white text-lg font-serif px-4">シミュレーションテーマ</h5>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <SimulationRow week="week 13-14" theme="ショッピング（試着、会計）" />
                    <SimulationRow week="week 15-16" theme="交通機関（電車、バス）" />
                    <SimulationRow week="week 17-18" theme="銀行口座開設" />
                    <SimulationRow week="week 19-20" theme="郵便局、宅急便" />
                    <SimulationRow week="week 21-22" theme="病院（予約、受付、診察）" />
                    <SimulationRow week="week 23-24" theme="カスタム（専属コンサルタントと相談し内容決定）" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SectionDivider variant="soft" />

      <SectionDivider variant="soft" />

      {/* 7) 最終CTA（main_banner.png画像） */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link href="/contact">
              <Image
                src="/images/main_banner.png"
                alt="30分の無料カウンセリングでご相談ください"
                width={1200}
                height={400}
                className="w-full h-auto  shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
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
  buttons,
}: {
  n: number;
  title: string;
  body: React.ReactNode;
  img: string;
  imgAlt: string;
  textOn: "left" | "right";
  buttons?: React.ReactNode;
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
        <div className="flex items-center gap-3 mb-2">
          <span
            className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: BRAND }}
          >
            {n}
          </span>
          <h3 className="text-lg font-semibold font-serif">{title}</h3>
        </div>
        <p className="leading-relaxed text-[15px] mb-4" style={{ color: MUTED }}>
          {body}
        </p>
        {buttons && (
          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3 mt-4">
            {buttons}
          </div>
        )}
      </div>
    </li>
  );
}


function SimulationRow({ week, theme }: { week: string; theme: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-0 border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-200 even:bg-gray-50/30">
      <div className="px-4 md:px-6 py-3 md:py-4 text-sm text-gray-500 font-mono tracking-wide border-r border-gray-100">
        {week}
      </div>
      <div className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base leading-relaxed text-gray-800 font-serif">
        {theme}
      </div>
    </div>
  );
}