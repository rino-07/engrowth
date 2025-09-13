import React from 'react';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import { PageTitleSection } from '@/components/sections';

export const metadata = {
  title: '科学的根拠 - Engrowth',
  description: '脳科学・言語学に基づく効果的な学習メソッド。第二言語習得メカニズムと科学的アプローチで確実な英語力向上を実現。',
  keywords: '科学的根拠, 第二言語習得, 脳科学, 言語学, 英語学習メソッド',
};

export default function SciencePage() {
  return (
    <div className="science-page">
      {/* ヒーローセクション */}
      <PageTitleSection
        label="Scientific Method"
        title="科学的に裏付けられた「効率的英語習得メカニズム」"
        description="「努力しても伸びない」を科学的に撃破する"
      />

      {/* メインメッセージセクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        
        <Container>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Typography variant="body-lg" className="text-gray-800 font-semibold mb-4">
                <strong className="font-bold" style={{color: '#d30306'}}>「努力しても伸びない」</strong>を科学的に撃破する
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed mb-4">
                科学的に正しい方法に基づけば、誰でも確実に英語を話せるようになります。
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                そのカギは<strong className="font-bold" style={{color: '#d30306'}}>「第二言語習得メカニズム」と「脳科学」</strong>への正しい理解です。
              </Typography>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-52 rounded-xl overflow-hidden">
                <Image
                  src="/images/top/method-sla-theory.jpg"
                  alt="脳科学・学習イメージ"
                  width={320}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 失敗理由の3カード */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 font-serif">
              なぜ多くの英会話教室では話せるようにならないのか
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📥</div>
              <Typography variant="heading-sm" className="mb-4 font-serif" style={{color: '#d30306'}}>
                インプット偏重
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                聞き流し中心の学習では、脳が英語を処理する回路が形成されません。
              </Typography>
            </Card>

            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📤</div>
              <Typography variant="heading-sm" className="mb-4 font-serif" style={{color: '#d30306'}}>
                アウトプット不足
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                実際に話す練習が圧倒的に不足している状態では、英語を使いこなす能力は身につきません。
              </Typography>
            </Card>

            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🧪</div>
              <Typography variant="heading-sm" className="mb-4 font-serif" style={{color: '#d30306'}}>
                科学的アプローチ不在
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                習慣化に対する科学的なアプローチなしでは、継続的な成長は見込めません。
              </Typography>
            </Card>
          </div>

        </Container>
      </Section>

      {/* 本質理解セクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div>
            <Typography variant="heading-lg" className="text-dark-gray mb-4 font-serif">
              本質を理解すれば誰でも「話せる」ようになる
            </Typography>
            <Typography variant="body-lg" className="text-gray-800 font-semibold mb-2">
              英語習得には必ず必要な<strong className="font-bold" style={{color: '#d30306'}}>"5つのステップ"</strong>があります。
            </Typography>
            <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
              これらを正しく実践することで、誰でも着実に英語力を伸ばすことが可能です。
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 5つのステップセクション */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="bg-gray-50 rounded-2xl shadow-inner p-8">
            <Typography variant="heading-lg" className="text-dark-gray mb-8 text-center font-serif">
              「5つのステップ」
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              <Card className="p-4 text-center bg-white rounded-xl shadow-md">
                <div className="text-3xl mb-2">📚</div>
                <Typography variant="body-sm" className="font-bold mb-2" style={{color: '#d30306'}}>
                  1. INPUT（インプット）の質と量
                </Typography>
                <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                  「意識的に」スピード＋リスニング力を高め、視聴できる言語範囲を広げます。
                </Typography>
              </Card>

              <Card className="p-4 text-center bg-white rounded-xl shadow-md">
                <div className="text-3xl mb-2">🗣️</div>
                <Typography variant="body-sm" className="font-bold mb-2" style={{color: '#d30306'}}>
                  2. OUTPUT（アウトプット）の実践
                </Typography>
                <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                  とにかく「言葉に出す」こと。語彙、表現をすぐに使う習慣をつけます。
                </Typography>
              </Card>

              <Card className="p-4 text-center bg-white rounded-xl shadow-md">
                <div className="text-3xl mb-2">📝</div>
                <Typography variant="body-sm" className="font-bold mb-2" style={{color: '#d30306'}}>
                  3. フィードバックを受ける
                </Typography>
                <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                  「作ったままで済ませない」。誤りを正し、正しいパターンを繰り返します。
                </Typography>
              </Card>

              <Card className="p-4 text-center bg-white rounded-xl shadow-md">
                <div className="text-3xl mb-2">🔄</div>
                <Typography variant="body-sm" className="font-bold mb-2" style={{color: '#d30306'}}>
                  4. 修正・改善を繰り返す
                </Typography>
                <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                  加速学習のスパイラルを続け、着実にレベルアップします。
                </Typography>
              </Card>

              <Card className="p-4 text-center bg-white rounded-xl shadow-md">
                <div className="text-3xl mb-2">⏱️</div>
                <Typography variant="body-sm" className="font-bold mb-2" style={{color: '#d30306'}}>
                  5. 習慣化で自動的に継続
                </Typography>
                <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                  日常的に、無理なく繰り返す環境を作り、英語学習を習慣化します。
                </Typography>
              </Card>
            </div>

          </div>
        </Container>
      </Section>

      {/* 理論的背景セクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <Typography variant="heading-md" className="mb-4 font-serif" style={{color: '#d30306'}}>
                言語学＋脳科学に基づくアプローチ
              </Typography>
              
              <div className="mb-6">
                <Typography variant="heading-sm" className="mb-2 font-serif" style={{color: '#d30306'}}>
                  第二言語習得論（SLA）とは
                </Typography>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>学習者は「インプット（入力）」の質、量を統制すると同時に</li>
                  <li>「アウトプット（出力）」で実際に使われる言語のスキルを高める</li>
                  <li>これを続けることで自動化（オートマティション）が起こる</li>
                </ul>
              </div>

              <div>
                <Typography variant="heading-sm" className="mb-2 font-serif" style={{color: '#d30306'}}>
                  認知負荷理論とは
                </Typography>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>最初は意識的な努力を注ぎ込む必要がある</li>
                  <li>繰り返しで「意識しなくても出来る」に変わる</li>
                  <li>これにより「言語スパンの自動化」が達成される</li>
                </ul>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-52 rounded-lg overflow-hidden">
                <Image
                  src="/images/method/method-sla-detailed.jpg"
                  alt="脳科学・理論イメージ"
                  width={320}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Engrowthの優位性セクション */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Typography variant="heading-md" className="mb-4 font-serif" style={{color: '#d30306'}}>
                Engrowthでは
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                研究結果に基づいたプログラムを完全にカリキュラム化。<br />
                <strong className="font-bold" style={{color: '#d30306'}}>「最短ルート」で成果を実現</strong>することを目指します。
              </Typography>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-52 rounded-lg overflow-hidden">
                <Image
                  src="/images/supporters/supporters-income-opportunity.jpg"
                  alt="Engrowthサポートイメージ"
                  width={320}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

     
    </div>
  );
}
