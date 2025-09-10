import React from 'react';
import { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'よくある質問 - プログラムの特徴、学習期間、サポート体制について | Engrowth',
  description: 'Engrowthの英語学習プログラムに関するよくある質問。第二言語習得理論に基づいた科学的アプローチ、実践経験豊富な日本人コンサルタント、90日間伴走サポートについて。',
  keywords: 'Engrowth, よくある質問, FAQ, 英語学習, プログラム特徴, 学習期間',
};

export default function FAQPage() {
  return <FAQClient />;
}