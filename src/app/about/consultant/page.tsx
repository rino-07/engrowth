import React from 'react';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import { PageTitleSection } from '@/components/sections';
import { FaShieldAlt, FaBrain, FaTrophy } from 'react-icons/fa';

export const metadata = {
  title: '専属コンサルタント - Engrowth',
  description: '第二言語習得を成功させた経験者による伴走サポート。日本人コンサルタントだからこそ提供できる心理的安全性と専門的指導。',
  keywords: 'コンサルタント, 第二言語習得, 心理的安全性, 英語学習, 留学経験',
};

export default function ConsultantPage() {
  return (
    <div className="consultant-page">
      {/* ヒーローセクション */}
      <PageTitleSection
        label="Consultant"
        title="「英語を第二言語として習得したコンサルタント」の圧倒的な価値"
        description="なぜEngrowthでは「日本人コンサルタント」にこだわるのか"
      />

      {/* メインメッセージセクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        
        <Container>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                英語学習は、単に知識を溜めるだけでは成功しません。「体験」と「慣れ」を経て、言語を自然に使えるようになるためのプロセスが必要です。
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed mt-4">
                この過程では、無視できない<strong className="font-bold" style={{color: '#d30306'}}>「心理的安全性」</strong>が重要です。
              </Typography>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-52 rounded-xl overflow-hidden">
                <Image
                  src="/images/method/method-practical-advice.jpg"
                  alt="コンサルタントイメージ"
                  width={320}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3つの特徴カード */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 font-serif">
              伴走する側の成功体験が、学習者を確実に導く
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <FaShieldAlt className="text-4xl" style={{color: '#d30306'}} />
              </div>
              <Typography variant="heading-sm" className="card-title font-serif" style={{color: '#d30306'}}>
                心理的安全性の確保
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 card-description leading-relaxed">
                同じ母国語を持ち、第二言語習得の難しさを知るコンサルタントが、学習者の不安を取り除き、確実な成長を促します。
              </Typography>
            </Card>

            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <FaBrain className="text-4xl" style={{color: '#d30306'}} />
              </div>
              <Typography variant="heading-sm" className="card-title font-serif" style={{color: '#d30306'}}>
                第二言語習得メカニズムの理解
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 card-description leading-relaxed">
                英語を第二言語として習得した経験を持つコンサルタントが、効果的な学習方法を提供します。
              </Typography>
            </Card>

            <Card className="p-6 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <FaTrophy className="text-4xl" style={{color: '#d30306'}} />
              </div>
              <Typography variant="heading-sm" className="card-title font-serif" style={{color: '#d30306'}}>
                成功体験の共有
              </Typography>
              <Typography variant="body-sm" className="text-gray-700 card-description leading-relaxed">
                自らも第二言語習得の成功体験を持つコンサルタントだからこそ、学習者を確実に成長ルートへ導くことができます。
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ネイティブとの違いセクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="bg-gray-50 rounded-xl shadow-inner p-8">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 font-serif">
              なぜネイティブスピーカーでは不十分なのか
            </Typography>
            <Typography variant="body-lg" className="text-gray-800 font-semibold mb-4">
              <strong className="font-bold" style={{color: '#d30306'}}>第一言語と第二言語の習得メカニズムの違い</strong>を理解していないと、学習者は成功が難しくなります。
            </Typography>
            <Typography variant="body-lg" className="text-gray-700 mb-4 leading-relaxed">
              第一言語は、幼少期の記憶システムを通じて無意識的に習得されます。一方、第二言語習得は、意識的な対話や**意図的な記憶（学習）**を用いる全く異なるプロセスを要します。
            </Typography>
            <Typography variant="body-lg" className="text-gray-700 mb-2 leading-relaxed">
              <strong className="font-bold" style={{color: '#d30306'}}>日本人に必要なのは「第二言語習得の成功者」</strong>です。
            </Typography>
            <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
              同じ母国語をもつ成功者だからこそ、第二言語習得に必要なマインドセットとプロセスを確実にサポートできます。
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 脳科学的根拠セクション */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="bg-gray-50 rounded-xl shadow-inner p-8">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 font-serif">
              脳科学的に証明された「第二言語習得の最適ルート」
            </Typography>
            
            <div className="mb-6">
              <Typography variant="heading-md" className="mb-4 font-serif" style={{color: '#d30306'}}>
              独学・聞くだけ学習では伸びない理由
              </Typography>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* 左側: テキストコンテンツ (6/10) */}
                <div className="flex-1 md:w-3/5">
                  <Typography variant="body-lg" className="text-gray-700 mb-4 leading-relaxed">
                    オーディオを聞く、ドラマを見る、単語を覚える。これらはインプットに偏った活動でしかありません。
                  </Typography>
                  <Typography variant="body-lg" className="text-gray-700 mb-4 leading-relaxed">
                    実際に言語を話せるようになるためには、以下が欠かせない活動です。
                  </Typography>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="mr-2" style={{color: '#d30306'}}>✔️</span>
                      <Typography variant="body-lg" className="text-gray-700">自分で出力する</Typography>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2" style={{color: '#d30306'}}>✔️</span>
                      <Typography variant="body-lg" className="text-gray-700">直してもらう</Typography>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2" style={{color: '#d30306'}}>✔️</span>
                      <Typography variant="body-lg" className="text-gray-700">精緻なフィードバックを受ける</Typography>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2" style={{color: '#d30306'}}>✔️</span>
                      <Typography variant="body-lg" className="text-gray-700">体系的な介入による現在地の分析</Typography>
                    </li>
                  </ul>
                  
                  <Typography variant="heading-md" className="mb-4 font-serif" style={{color: '#d30306'}}>
                    体系的な介入とフィードバックの重要性
                  </Typography>
                  <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                    成長は「体系的な介入」による現在地の分析と、適切なフィードバックを繰り返すことで成立します。
                  </Typography>
                </div>
                
                {/* 右側: 画像 (4/10) */}
                <div className="flex-1 md:w-2/5 flex justify-center">
                  <Image
                    src="/images/about/linetalk.png"
                    alt="LINEトークのイメージ"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 留学経験の価値セクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Typography variant="heading-md" className="mb-4 font-serif" style={{color: '#d30306'}}>
                留学経験･英語での学位取得が証明する本物の英語力
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 mb-4 leading-relaxed">
                海外の大学を卒業するということは、「単に英語を話せる」だけではありません。「英語で思考し、講義を理解し、論文を書き、議論する」ことが求められます。
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 mb-4 leading-relaxed">
                そしてこれは、第一言語として英語を習得した人と同等の能力を求められるのです。
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 mb-2 leading-relaxed">
                <strong className="font-bold" style={{color: '#d30306'}}>英語で専門分野を学べる者だけが持つ「教える力」</strong>があります。
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                実際に英語で学問を継続し、自分のものとした者だからこそ、「どこで迷いやすいか、どのプロセスが区切りになるか」を的確に把握し、学習者を確実にサポートできます。
              </Typography>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-52 rounded-lg overflow-hidden">
                <Image
                  src="/images/students/students-class-understanding.jpg"
                  alt="留学経験イメージ"
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
