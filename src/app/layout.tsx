import type { Metadata } from 'next';
import { Noto_Serif_JP, Noto_Sans_JP, Playfair_Display } from 'next/font/google';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import './globals.css';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Engrowth - 留学生の経済問題を解決する英会話コンサル',
  description:
    '独自のエコシステムで留学生の経済問題を解決。日本人だからこそ提供できる英会話コンサルティングサービス。無料相談受付中。',
  keywords: [
    '留学',
    '英会話',
    'コンサル',
    '経済支援',
    '日本人',
    'エコシステム',
  ],
  authors: [{ name: 'Engrowth' }],
  openGraph: {
    title: 'Engrowth - 留学生の経済問題を解決する英会話コンサル',
    description:
      '独自のエコシステムで留学生の経済問題を解決。日本人だからこそ提供できる英会話コンサルティングサービス。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engrowth - 留学生の経済問題を解決する英会話コンサル',
    description:
      '独自のエコシステムで留学生の経済問題を解決。日本人だからこそ提供できる英会話コンサルティングサービス。',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} ${notoSansJP.variable} ${playfairDisplay.variable} min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
