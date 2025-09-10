import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata = {
  title: "受講の流れ - 英語学習の悩み、目標設定、プラン相談など | Engrowth",
  description:
    "あなたのペースに合わせて、専属のコンサルタントが一対一で最適なプランをご提案します。LINE登録から始まる受講フロー。",
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
            <h1 className="text-5xl font-bold tracking-tight font-serif">専属コンサルタントだから続けられる、３日坊主にならない英語学習</h1>
            <p className="mt-6 leading-relaxed text-xl font-serif">
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
                  お申込みは「お申込みフォーム」から。<br />
                  各種お問い合わせや、無料面談のご相談は
                  「LINEでお問い合わせ」からどうぞ。
                </>
              }
              img="/images/drive-download-20250908T014101Z-1-001/fliw/flow-hero-background.jpg"
              imgAlt="LINE登録"
              textOn="right"
              buttons={
                <>
                  <Link href="/contact">
                    <Button variant="primary" size="sm">
                      お申し込みフォーム
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="secondary" size="sm">
                      LINEでお問い合わせ
                    </Button>
                  </Link>
                </>
              }
            />

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
              img="/images/drive-download-20250908T014101Z-1-001/supporters/top-flow-step1.jpg"
              imgAlt="オンライン面談"
              textOn="left"
              buttons={
                <>
                  <Link href="/contact">
                    <Button variant="secondary" size="sm">
                      LINEに登録
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="primary" size="sm">
                      申込フォーム
                    </Button>
                  </Link>
                </>
              }
            />

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
                  <br /><br />もし担当コンサルタントが、ご自身の興味ある分野を専攻していたら、ぜひ専門分野に関する相談なども、お気軽にどうぞ。
                </>
              }
              img="/images/drive-download-20250908T014101Z-1-001/top/service-support.jpg"
              imgAlt="24時間サポート"
              textOn="right"
            />
          </ol>
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
              <h4 className="text-center text-xl font-bold mb-8 font-serif">ビジネスコース</h4>
              <div className="space-y-8">
                {/* 基礎シミュレーション */}
                <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-center py-4">
                    <h5 className="font-bold text-white text-lg font-serif">シミュレーションテーマ（場面トピック）</h5>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <SimulationRow week="week 1-2" theme="挨拶" />
                    <SimulationRow week="week 3-4" theme="自己紹介" />
                    <SimulationRow week="week 5-6" theme="道の聞き方/聞かれた際の答え方" />
                    <SimulationRow week="week 7-8" theme="飛行機（チェックイン、機内）" />
                    <SimulationRow week="week 9-10" theme="ホテル（チェックイン、アウト）" />
                    <SimulationRow week="week 11-12" theme="カフェ＆レストラン（予約、注文）" />
                  </div>
                </div>

                {/* 応用シミュレーション */}
                <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-center py-4">
                    <h5 className="font-bold text-white text-lg font-serif">シミュレーションテーマ（場面トピック）</h5>
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
              <h4 className="text-center text-xl font-bold mb-8 font-serif">学生コース</h4>
              <div className="space-y-8">
                {/* 基礎シミュレーション */}
                <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-center py-4">
                    <h5 className="font-bold text-white text-lg font-serif">シミュレーションテーマ（場面トピック）</h5>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <SimulationRow week="week 1-2" theme="挨拶" />
                    <SimulationRow week="week 3-4" theme="自己紹介" />
                    <SimulationRow week="week 5-6" theme="道の聞き方/聞かれた際の答え方" />
                    <SimulationRow week="week 7-8" theme="飛行機（チェックイン、機内）" />
                    <SimulationRow week="week 9-10" theme="ホテル（チェックイン、アウト）" />
                    <SimulationRow week="week 11-12" theme="カフェ&レストラン（予約、注文）" />
                  </div>
                </div>

                {/* 応用シミュレーション */}
                <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-center py-4">
                    <h5 className="font-bold text-white text-lg font-serif">シミュレーションテーマ（場面トピック）</h5>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <SimulationRow week="week 13-14" theme="ショッピング（試着、会計）" />
                    <SimulationRow week="week 15-16" theme="交通機関（電車、バス）" />
                    <SimulationRow week="week 17-18" theme="銀行口座開設" />
                    <SimulationRow week="week 19-20" theme="就職活動、宅急便" />
                    <SimulationRow week="week 21-22" theme="病院（予約、受付、診察）" />
                    <SimulationRow week="week 23-24" theme="カスタム、専属コンサルタントと相談し内容決定" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SectionDivider variant="soft" />

      {/* 7) 最終CTA（main_banner.png画像） */}
      <section className="py-16">
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
        <span
          className="inline-flex items-center justify-center h-8 w-8 rounded-full text-white text-sm font-bold mb-2"
          style={{ backgroundColor: BRAND }}
        >
          {n}
        </span>
        <h3 className="text-lg font-semibold mb-2 font-serif">{title}</h3>
        <p className="leading-relaxed text-[15px] mb-4" style={{ color: MUTED }}>
          {body}
        </p>
        {buttons && (
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            {buttons}
          </div>
        )}
      </div>
    </li>
  );
}


function SimulationRow({ week, theme }: { week: string; theme: string }) {
  return (
    <div className="px-8 py-5 grid grid-cols-3 gap-6 items-center hover:bg-gray-50 transition-colors duration-200">
      <div className="text-sm font-bold text-center bg-gradient-to-r from-gray-100 to-gray-200 py-3 rounded-lg shadow-sm border font-serif">
        {week}
      </div>
      <div className="col-span-2 text-sm leading-relaxed text-center text-gray-700 font-medium">
        {theme}
      </div>
    </div>
  );
}