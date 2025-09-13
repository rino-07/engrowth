import React from 'react';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import { PageTitleSection } from '@/components/sections';

export const metadata = {
  title: '実践の仕組み - Engrowth',
  description: '習慣化×伴走サポートによる確実な成果創出。3ステップ習慣化プログラムと専門コンサルタントによる徹底サポート。',
  keywords: '実践の仕組み, 習慣化, 伴走サポート, 英語学習, モチベーション維持',
};

export default function PracticePage() {
  return (
    <div className="practice-page">
      {/* ヒーローセクション */}
      <PageTitleSection
        label="Practice System"
        title="習慣化 × 伴走サポートによる「圧倒的成果」の出し方"
        description="習慣化が成功の9割を決める"
      />

      {/* メインメッセージセクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        
        <Container>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Typography variant="body-lg" className="text-gray-800 font-semibold mb-4">
                <strong className="bg-red-100 px-2 rounded" style={{color: '#d30306'}}>習慣化が成功の9割を決める</strong>
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed mb-4">
                英語習得で最も重要なのは<strong className="font-bold" style={{color: '#d30306'}}>「習慣化」</strong>です。多くの成功例にも「意志による続けよう」という避けられない力に依存したものはありません。
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                成功率の高い人ほど、システムを作り、「やらざるを得ない環境」を構築することで、自分を習慣の系に統合します。
              </Typography>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-52 rounded-xl overflow-hidden">
                <Image
                  src="/images/top/reason-scientific.jpg"
                  alt="習慣化・行動科学イメージ"
                  width={320}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3ステップ習慣化プログラム */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 font-serif">
              Engrowthが実施する「3ステップ習慣化プログラム」
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <Typography variant="heading-sm" className="mb-4 font-serif" style={{color: '#d30306'}}>
                目標設定と行動計画の徹底設計
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                単なるモチベーション誘導ではなく、数値化された目標を設定します。その上で、日々の行動に落とし込みます。
              </Typography>
            </Card>

            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📱</div>
              <Typography variant="heading-sm" className="mb-4 font-serif" style={{color: '#d30306'}}>
                毎日連絡によるマイクロチェックイン
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                少しずつでも「ズレたら終わり」という行動結果の分岐点をなくします。不安や不明点も即時に直接相談、習慣化を助けます。
              </Typography>
            </Card>

            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <Typography variant="heading-sm" className="mb-4 font-serif" style={{color: '#d30306'}}>
                成功体験の積み上げとモチベーション維持
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 leading-relaxed">
                「やれた」「成果が出た」という小さな成功体験を積み上げます。非常に簡単な成功でも意識的に認識し、下がりがちなモチベーションを保ち続けます。
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 伴走型の必要性セクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="bg-gray-50 rounded-xl shadow-inner p-8">
            <Typography variant="heading-lg" className="text-dark-gray mb-4 font-serif">
              なぜ「伴走型」が絶対に必要なのか
            </Typography>
            <Typography variant="body-lg" className="text-gray-800 font-semibold mb-4">
              <strong className="font-bold" style={{color: '#d30306'}}>自走できないフェーズは必ず登場します</strong>。
            </Typography>
            <Typography variant="body-lg" className="text-gray-700 mb-4 leading-relaxed">
              他者と比較して落ち込んだり、第三者の言葉で自己否定しそうになったり、続ける意味が分からなくなったり…<br />
              それでも「大丈夫」と言い、最小単位でも成功体験を重ねる、この伴走は決定的です。
            </Typography>
            <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
              行動心理学にも基づいています。実際、励ましてくれる人の存在は、効果を数倍にし、失敗率を劇的に下げます。
            </Typography>
          </div>
        </Container>
      </Section>


      {/* 成果セクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Typography variant="heading-md" className="mb-4 font-serif" style={{color: '#d30306'}}>
                習慣化によって得られる成果
              </Typography>
              <div className="mb-4">
                <Typography variant="body-lg" className="text-gray-700 mb-2">
                  <strong className="font-bold" style={{color: '#d30306'}}>短期的効果</strong>：
                </Typography>
                <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                  学習の継続率が3倍に上昇、毎日の小さな成功体験による自己効力感の向上、学習内容の定着率が飛躍的に向上
                </Typography>
              </div>
              <div>
                <Typography variant="body-lg" className="text-gray-700 mb-2">
                  <strong className="font-bold" style={{color: '#d30306'}}>長期的効果</strong>：
                </Typography>
                <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                  自走できる英語学習者への成長、英語を使う場面での自信の獲得、海外でも通用する英語力の確立
                </Typography>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-52 rounded-lg overflow-hidden">
                <Image
                  src="/images/courses/courses-business-course.jpg"
                  alt="成果イメージ"
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
