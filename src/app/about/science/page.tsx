import React from 'react';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import { PageTitleSection } from '@/components/sections';
import { FaDownload, FaUpload, FaFlask } from 'react-icons/fa';

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
              <div className="flex justify-center mb-4">
                <FaDownload className="text-4xl" style={{color: '#d30306'}} />
              </div>
              <Typography variant="heading-sm" className="mb-4 font-serif" style={{color: '#d30306'}}>
                インプット偏重
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                聞き流し中心の学習では、脳が英語を処理する回路が形成されません。
              </Typography>
            </Card>

            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <FaUpload className="text-4xl" style={{color: '#d30306'}} />
              </div>
              <Typography variant="heading-sm" className="mb-4 font-serif" style={{color: '#d30306'}}>
                アウトプット不足
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                実際に話す練習が圧倒的に不足している状態では、英語を使いこなす能力は身につきません。
              </Typography>
            </Card>

            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <FaFlask className="text-4xl" style={{color: '#d30306'}} />
              </div>
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
      <Section background="warm-white" className="pt-12 sm:pt-16 lg:pt-24 !pb-0">
        <Container>
          <div className="!mb-0">
            <Typography variant="heading-lg" className="text-dark-gray !mb-0 font-serif">
              本質を理解すれば誰でも「話せる」ようになる
            </Typography>
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

      {/* バナー */}
      <Section background="white" className="py-8">
        <Container>
          <div className="text-center">
            <Image
              src="/images/main_banner.png"
              alt="Engrowthメインバナー"
              width={1200}
              height={300}
              className="mx-auto rounded-lg"
            />
          </div>
        </Container>
      </Section>

     
    </div>
  );
}
