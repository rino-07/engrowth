import React from 'react';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Typography from '@/components/ui/Typography';
import SectionHeaderLeft from '@/components/ui/SectionHeaderLeft';
import Card from '@/components/ui/Card';
import Hero from '@/components/sections/Hero';

export const metadata = {
  title: 'Engrowthの特徴 - Engrowth',
  description: 'Engrowthが選ばれる4つの特徴：エコシステム、専属コンサルタント、科学的根拠、実践の仕組み。詳細をご確認ください。',
  keywords: 'Engrowthの特徴, エコシステム, コンサルタント, 科学的根拠, 実践の仕組み, 英語学習',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ヒーローセクション */}
      <Hero
        title="Engrowthの特徴"
        subtitle="なぜEngrowthが選ばれるのか？4つの特徴をご紹介"
        bgDesktopSrc="/images/about/about-features.jpg"
        bgMobileSrc="/images/hero_sma/about_hero_sma.png"
        bgPosition="center 30%"
        className="flex items-center justify-center text-center"
      />

      {/* メインメッセージセクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <Typography variant="heading-lg" className="text-dark-gray mb-6 font-serif">
              Engrowthが選ばれる4つの特徴
            </Typography>
            <Typography variant="body-lg" className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
              科学的根拠に基づいた学習メソッドと、専属コンサルタントによる伴走サポート、そして独自のエコシステムで、確実な英語力向上を実現します。
            </Typography>
          </div>
        </Container>
      </Section>

      {/* 4つの特徴カード */}
      <Section background="light-gray" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* エコシステム */}
            <Card className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🌐</span>
                </div>
                <Typography variant="heading-md" className="text-purple-700 font-serif mb-4">
                  Engrowthエコシステム
                </Typography>
                <Typography variant="body-sm" className="text-gray-600 mb-6 leading-relaxed">
                  留学生・企業・コンサルタントが相互に支援し合う独自のエコシステム。Win-Win-Winの関係で持続可能な成長を実現。
                </Typography>
              </div>
              <div className="text-center">
                <Link 
                  href="/about/ecosystem"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </Card>

            {/* コンサルタント */}
            <Card className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <Typography variant="heading-md" className="text-blue-700 font-serif mb-4">
                  専属コンサルタント
                </Typography>
                <Typography variant="body-sm" className="text-gray-600 mb-6 leading-relaxed">
                  第二言語習得を成功させた経験者による伴走サポート。日本人だからこそ提供できる心理的安全性。
                </Typography>
              </div>
              <div className="text-center">
                <Link 
                  href="/about/consultant"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </Card>

            {/* 科学的根拠 */}
            <Card className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🧬</span>
                </div>
                <Typography variant="heading-md" className="text-green-700 font-serif mb-4">
                  科学的根拠
                </Typography>
                <Typography variant="body-sm" className="text-gray-600 mb-6 leading-relaxed">
                  脳科学・言語学に基づく効果的な学習メソッド。第二言語習得メカニズムの科学的アプローチ。
                </Typography>
              </div>
              <div className="text-center">
                <Link 
                  href="/about/science"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </Card>

            {/* 実践の仕組み */}
            <Card className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">⚙️</span>
                </div>
                <Typography variant="heading-md" className="text-orange-700 font-serif mb-4">
                  実践の仕組み
                </Typography>
                <Typography variant="body-sm" className="text-gray-600 mb-6 leading-relaxed">
                  習慣化×伴走サポートによる確実な成果創出。3ステップ習慣化プログラムで継続をサポート。
                </Typography>
              </div>
              <div className="text-center">
                <Link 
                  href="/about/practice"
                  className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 概要セクション */}
      <Section background="warm-white" className="py-12 sm:py-16 lg:py-24">
        <SectionHeaderLeft
          label="About Engrowth"
          title="なぜEngrowthが選ばれるのか"
          desc="Engrowthは、科学的根拠に基づいた学習メソッドと専属コンサルタントによる伴走サポート、そして独自のエコシステムで、従来の英会話スクールとは一線を画すサービスを提供しています。"
          className="mb-12 lg:mb-16"
        />

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed mb-6">
                多くの英語学習者が挫折してしまう理由は、科学的根拠に基づかない学習方法と、継続をサポートする仕組みの不足にあります。
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed mb-6">
                Engrowthは、第二言語習得論と脳科学に基づいた学習メソッドにより、効率的で確実な英語力向上を実現します。
              </Typography>
              <Typography variant="body-lg" className="text-gray-700 leading-relaxed">
                さらに、留学生・企業・コンサルタントが相互に支援し合う独自のエコシステムにより、持続可能な成長をサポートします。
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                <Typography variant="body-sm" className="text-gray-500">
                  Engrowthの特徴イメージ
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}