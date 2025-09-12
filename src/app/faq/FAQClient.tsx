'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

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
    answer: 'はい、ZoomやGoogle Meetを使用したオンラインカウンセリングも承っております。全国どこからでもご参加いただけます。'
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
    answer: '第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。'
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
    question: '支援の税務処理はどうなりますか？',
    answer: '支援金は寄付金控除の対象となる場合があります。詳細は税理士にご相談いただくか、弊社までお問い合わせください。'
  },
  {
    category: '支援プログラム',
    question: '支援学生が卒業後、必ず御社に就職するのでしょうか？',
    answer: '就職を強制するものではありません。ただし、優秀な学生との出会いの機会として、採用面接の機会を優先的にご提供いたします。'
  },
  {
    category: '支援プログラム',
    question: '支援途中で学生がやめる場合や留学を断念する場合はどうなりますか？',
    answer: '契約時に定めた条件に基づき、個別に対応させていただきます。詳細は支援契約書をご確認ください。'
  },
  {
    category: '支援プログラム',
    question: '小規模企業、個人事業主でも参加できますか？',
    answer: 'はい、企業規模に関係なくご参加いただけます。ご予算に応じた柔軟な支援プランをご提案いたします。'
  },
  {
    category: '支援プログラム',
    question: '支援学生の選考基準を教えてください。',
    answer: '学習意欲、将来性、人柄などを総合的に判断し、厳正な選考を行っております。詳細な基準については個別にご説明いたします。'
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
    answer: '以下の要素を総合的に考慮して、最適なコンサルタントを選定いたします。'
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
      {/* 1. ヒーローセクション */}
      <Section background="warm-white" padding="lg" className="relative">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] absolute inset-0">
          {/* PC用背景画像 */}
          <Image
            src="/images/drive-download-20250908T014101Z-1-001/top/top06.png"
            alt="背景画像"
            fill
            priority
            className="object-cover opacity-15 hidden md:block"
            style={{ objectPosition: 'center 35%' }}
          />
          {/* スマホ用背景画像 */}
          <Image
            src="/images/drive-download-20250908T014101Z-1-001/hero_sma/faq_hero_sma.png"
            alt="背景画像"
            fill
            priority
            className="object-cover opacity-15 block md:hidden"
            style={{ objectPosition: 'center 35%' }}
          />
          {/* 軽いオーバーレイ */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
        <div className="relative z-10 flex items-center min-h-[60vh]">
        <Container className="relative z-10 w-full">
          <div className="text-center">
            <Typography variant="heading-lg" className="text-dark-gray mb-4" as="h1">
              よくある質問
            </Typography>
          </div>
        </Container>
        </div>
      </Section>

      {/* 2. タブナビゲーション */}
      <Section background="white" padding="md">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-brand-red text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. FAQ一覧 */}
      <Section background="light-gray" padding="xl">
        <Container>
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
