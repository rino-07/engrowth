'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { PageTitleSection } from '@/components/sections';

type TabType = '無料カウンセリング' | 'サービス内容' | '支援プログラム' | '受講生' | 'コンサルタント' | '料金';

interface FAQ {
  question: string;
  answer: string;
  category: TabType;
}

const faqData: FAQ[] = [
  // 無料カウンセリング
  {
    category: '無料カウンセリング',
    question: 'カウンセリングではどのようなことを相談できますか？',
    answer: '現在の英語力診断、目標設定、最適な学習プランの提案、プログラムの詳細説明など、英語学習に関するあらゆるご相談を承っております。'
  },
  {
    category: '無料カウンセリング',
    question: 'カウンセリング時間はどのくらいですか？',
    answer: '約30分程度を予定しております。お客様のご質問やご相談内容によって、多少前後する場合があります。'
  },
  {
    category: '無料カウンセリング',
    question: 'オンラインでのカウンセリングは可能ですか？',
    answer: 'はい、弊社はオンラインでのサービス提供となっており、ZoomやGoogle Meetを使用しておりますので、全国どこからでもご参加いただけます。'
  },
  {
    category: '無料カウンセリング',
    question: 'カウンセリング後に必ず入会しなければいけませんか？',
    answer: 'いいえ、カウンセリング後の入会は任意です。まずはプログラムの内容をご理解いただき、ご納得いただいた上でのご入会をお待ちしております。'
  },
  // サービス内容
  {
    category: 'サービス内容',
    question: 'プログラムの特徴を教えてください',
    answer: 'Engrowthのプログラムは、第二言語習得論や神経言語学、行動心理学などに基づいた科学的に再現性のある学習設計が特徴です。習慣化を仕組み化することで継続率を高め、短期間で成果を出しつつ、最終的には「自走できる英語学習者」へ成長できる仕組みを提供しています。'
  },
  {
    category: 'サービス内容',
    question: '学習期間はどのくらいですか？',
    answer: '標準的なプログラムは6ヶ月間ですが、目標や現在の英語力に応じて柔軟に設定可能です。'
  },
  {
    category: 'サービス内容',
    question: 'オンラインでの受講は可能ですか？',
    answer: 'はい、全てのプログラムをオンラインで受講いただけます。'
  },
  {
    category: 'サービス内容',
    question: '1日の学習時間は何分ほど必要ですか？',
    answer: '1日の学習時間は約3時間を目標に設定しています。'
  },
  {
    category: 'サービス内容',
    question: 'Duo 3.0+Kindleでの購入をしていいですか？',
    answer: 'ペーパーブックでの購入をお願いいたします。'
  },
  // 支援プログラム
  {
    category: '支援プログラム',
    question: '支援金の税務処理はどうなりますか？',
    answer: '支援金は「人材育成投資」として経費計上が可能です。詳細は税理士にご確認願いますが、一般的にはCSR費用または採用関連費用として処理されています。'
  },
  {
    category: '支援プログラム',
    question: '支援学生が卒業後、必ず弊社に就職するのですか？',
    answer: '支援学生に対し就職を強制することはありませんが、支援学生との接点や交流を通じて、多くの学生が好意的に各支援者様への関心を示す機会となっております。結果としてほぼ全ての留学生たちが卒業後の就職先として支援企業様を候補にしております。'
  },
  {
    category: '支援プログラム',
    question: '支援途中で学生が留学を中断した場合はどうなりますか？',
    answer: '他の学生への活動に活用させていただいております。'
  },
  {
    category: '支援プログラム',
    question: '小規模企業でも参加できますか？',
    answer: 'はい。月額50万円からのブロンズパートナーをご用意しており、複数企業での共同支援も可能です。また期間や回数を問わない柔軟なご支援も広く受け付けており、要望に応じた柔軟なプランをご提案させていただいております。'
  },
  {
    category: '支援プログラム',
    question: '支援学生の選考基準を教えてください。',
    answer: '学業成績、Engrowthでの指導実績、将来性、経済的必要度を総合的に評価しています。具体的な評価シートは面談時にご説明いたします。'
  },
  // 受講生
  {
    category: '受講生',
    question: '英語学習から長く離れていますが、初心者からのスタートでも問題ありませんか？',
    answer: 'はい、安心してスタートいただけます。基礎からしっかりと学べるカリキュラムを用意しています。'
  },
  // コンサルタント
  {
    category: 'コンサルタント',
    question: 'どのような経歴のコンサルタントが在籍していますか？',
    answer: '海外の名門大学出身のプロフェッショナルな英語力を持つ多彩な人材が在籍しています。'
  },
  {
    category: 'コンサルタント',
    question: 'コンサルタントとのマッチングはどのように行われますか？',
    answer: '受講開始時に、学習目的・現状の課題・理想の学習スタイルを丁寧にヒアリングし、それに基づいて最適なコンサルタントをマッチングします。'
  },
  // 料金
  {
    category: '料金',
    question: '教材費は別途必要ですか？',
    answer: 'はい、必要な教材は別途、個別で購入をお願いしております。'
  }
];

const tabs: TabType[] = ['無料カウンセリング', 'サービス内容', '支援プログラム', '受講生', 'コンサルタント', '料金'];

export default function FAQClient() {
  const [activeTab, setActiveTab] = useState<TabType>('無料カウンセリング');
  const filteredFAQs = faqData.filter(faq => faq.category === activeTab);

  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクションをPageTitleSectionに置き換える */}
      <PageTitleSection
        label="FAQ" // ラベルを追加（「よくある質問」の英語表記など）
        title="よくある質問"
        description="Engrowthに関する疑問を解決" // subtitleはdescriptionに置き換える
      />

      {/* 2. タブナビゲーション */}
      <Section background="white" className="py-8 sm:py-12 lg:py-16">
  <Container className="px-6 lg:px-8">
    
    {/* 修正: flex-wrapを維持しつつ、各ボタンをw-1/2のコンテナで囲む */}
    <div className="flex flex-wrap justify-center gap-y-2 mb-8"> {/* gap-x-2 はボタン側で */}
      {tabs.map((tab) => (
        // 🚨 重要な修正: ボタンを w-1/2 の div で囲み、左右にパディング（px-1）で隙間を作る
        <div key={tab} className="w-1/2 sm:w-auto px-1"> 
            <button
              onClick={() => setActiveTab(tab)}
              // ボタンの幅を flex-grow で w-1/2 内でいっぱいに広げる
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 w-full ${ // w-full を追加
                activeTab === tab
                  ? 'bg-brand-red text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
        </div>
      ))}
    </div>
  </Container>
</Section>

      {/* 3. FAQ一覧 */}
      <Section background="light-gray" className="py-16 sm:py-20 lg:py-32">
        <Container className="px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {filteredFAQs.map((faq, index) => (
              <Card key={`${activeTab}-${index}`} className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      Q
                    </Typography>
                  </div>
                  <Typography variant="heading-sm" className="text-dark-gray">
                    {faq.question}
                  </Typography>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Typography variant="body-sm" className="text-white font-bold">
                      A
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body-md" className="text-dark-gray">
                      {faq.answer}
                    </Typography>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* 解決しなかった場合のCTA */}
          <div className="text-center mb-16">
            <Typography variant="body-lg" className="text-gray mb-8">
              解決しなかった場合は、下記よりお問い合わせください
            </Typography>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="bg-brand-red hover:bg-red-700">
                お問い合わせページへ
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
