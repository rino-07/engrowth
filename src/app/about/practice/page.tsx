import React from 'react';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import Card from '@/components/ui/Card';

export const metadata = {
  title: '実践の仕組み - Engrowth',
  description: '習慣化×伴走サポートによる確実な成果創出。3ステップ習慣化プログラムと専門コンサルタントによる徹底サポート。',
  keywords: '実践の仕組み, 習慣化, 伴走サポート, 英語学習, モチベーション維持',
};

export default function PracticePage() {
  return (
    <div className="practice-page">
      {/* ヒーローセクション */}
      <Section 
        background="gradient" 
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #d30306 0%, #8b0000 100%)'
        }}
      >
        <Container>
          <div className="text-center text-white">
            <Typography variant="heading-xl" className="font-bold mb-4 lg:mb-6 font-serif">
              実践の仕組み
            </Typography>
            <Typography variant="heading-sm" className="opacity-90 max-w-3xl mx-auto">
              習慣化×伴走サポートによる確実な成果創出
            </Typography>
          </div>
        </Container>
      </Section>

      {/* メインメッセージセクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="Practice System"
          title="習慣化 × 伴走サポートによる「圧倒的成果」の出し方"
          desc="習慣化が成功の9割を決める"
          className="mb-12 lg:mb-16"
        />
        
        <Container>
          <div className="relative bg-gradient-to-r from-red-50 via-gray-50 to-white rounded-2xl shadow-lg p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8">
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
              <div className="w-72 h-48 bg-gray-100 rounded-xl flex items-center justify-center">
                <Typography variant="body-sm" className="text-gray-500">
                  習慣化・行動科学イメージ
                </Typography>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
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

          <div className="flex justify-center">
            <div className="w-64 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
              <Typography variant="body-sm" className="text-gray-500">
                プログラム実践イメージ
              </Typography>
            </div>
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

      {/* サポート体制セクション */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="bg-gray-50 rounded-2xl shadow-inner p-8">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 font-serif">
              Engrowth独自のサポート体制
            </Typography>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <span className="mr-3" style={{color: '#d30306'}}>✔️</span>
                <Typography variant="body-lg" className="text-gray-700">コンサルタントとの毎日のやりとり</Typography>
              </li>
              <li className="flex items-center">
                <span className="mr-3" style={{color: '#d30306'}}>✔️</span>
                <Typography variant="body-lg" className="text-gray-700">行動ログを反映した実行課題のフィードバック</Typography>
              </li>
              <li className="flex items-center">
                <span className="mr-3" style={{color: '#d30306'}}>✔️</span>
                <Typography variant="body-lg" className="text-gray-700">行動の緊急レビューとリプラン修正</Typography>
              </li>
              <li className="flex items-center">
                <span className="mr-3" style={{color: '#d30306'}}>✔️</span>
                <Typography variant="body-lg" className="text-gray-700">成功体験の分解と気づきの振り返り</Typography>
              </li>
            </ul>
            <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
              ここまでセットで、<strong className="font-bold" style={{color: '#d30306'}}>「成果が出るのが当たり前」</strong>のステージへ導きます。
            </Typography>
            
            <div className="flex justify-center mt-6">
              <div className="w-64 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                <Typography variant="body-sm" className="text-gray-500">
                  サポート体制イメージ
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 成果セクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="bg-gradient-to-r from-yellow-100 via-orange-50 to-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
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
              <div className="w-64 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                <Typography variant="body-sm" className="text-gray-500">
                  成果イメージ
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTAバナー */}
      <Section background="gradient" className="py-12 sm:py-16">
        <Container>
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-lg p-8 text-center shadow-lg">
            <div className="text-center text-white">
              <Typography variant="heading-lg" className="text-gray-900 font-bold mb-4 font-serif">
                英会話で広がる無限の可能性を
              </Typography>
            </div>
            <Typography variant="body-lg" className="mt-4 text-white mb-6">
              Engrowthの科学的根拠に基づくプログラムで、英会話習得を目指しましょう
            </Typography>
            <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              お問い合わせはこちら
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
