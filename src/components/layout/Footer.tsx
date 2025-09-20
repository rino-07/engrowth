import React from 'react';
import Link from 'next/link';

import Container from './Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: 'ホーム', href: '/' },
      { name: '受講の流れ', href: '/flow' },
      { name: '支援者の方へ', href: '/supporters' },
      { name: 'よくある質問', href: '/faq' },
    ],
    about: [
      { name: 'Engrowthの特徴', href: '/about' },
      { name: 'Engrowthエコシステム', href: '/about/ecosystem' },
      { name: '専門コンサルタント', href: '/about/consultant' },
      { name: '科学的根拠', href: '/about/science' },
      { name: '実践の仕組み', href: '/about/practice' },
    ],
    courses: [
      { name: 'コース・料金', href: '/courses' },
      { name: 'ビジネスコース', href: '/courses/business' },
      { name: 'ビジネススポットサービス', href: '/courses/business-spot' },
      { name: '学生コース', href: '/courses/study' },
      { name: '学生スポットサービス', href: '/courses/study-spot' },
    ],
    contact: [
      { name: 'お問い合わせ', href: '/contact' },
      { name: 'LINE公式アカウント', href: '/contact#line' },
    ],
  };

  return (
    <footer className="bg-deep-navy text-white">
      <Container>
        <div className="py-12">
          {/* モバイル: 3段構成（1/2/2カラム）、デスクトップ: 5カラム */}
          <div className="md:hidden">
            <div className="grid gap-6">
              {/* 1段目：タイトル（サイト名・ロゴ等）- 1カラム */}
              <div>
                <Link href="/" className="inline-block mb-4">
                  <span className="text-2xl font-bold text-white font-serif">
                    Engrowth
                  </span>
                </Link>
                <p className="text-gray-300 text-sm leading-relaxed font-serif">
                  留学生の経済問題を解決する
                  <br />
                  独自のエコシステム
                </p>
              </div>

              {/* 2段目：2カラム（メインメニュー / Engrowthの特徴） */}
              <div className="grid grid-cols-2 gap-6">
                <nav>
                  <h3 className="text-lg font-semibold mb-4 text-white font-serif">
                    メインメニュー
                  </h3>
                  <ul className="space-y-2">
                    {footerLinks.main.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm font-serif"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <nav>
                  <h3 className="text-lg font-semibold mb-4 text-white font-serif">
                    Engrowthの特徴
                  </h3>
                  <ul className="space-y-2">
                    {footerLinks.about.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm font-serif"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* 3段目：2カラム（コース・料金 / お問い合わせ） */}
              <div className="grid grid-cols-2 gap-6">
                <nav>
                  <h3 className="text-lg font-semibold mb-4 text-white font-serif">
                    コース・料金
                  </h3>
                  <ul className="space-y-2">
                    {footerLinks.courses.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm font-serif"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <nav>
                  <h3 className="text-lg font-semibold mb-4 text-white font-serif">
                    お問い合わせ
                  </h3>
                  <ul className="space-y-2">
                    {footerLinks.contact.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm font-serif"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <p className="text-gray-300 text-sm">
                      <span className="block">📞 03-XXXX-XXXX</span>
                      <span className="block">📧 info@engrowth.com</span>
                    </p>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* デスクトップ: 従来の5カラムレイアウト */}
          <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="xl:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-bold text-white font-serif">
                  Engrowth
                </span>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed font-serif">
                留学生の経済問題を解決する
                <br />
                独自のエコシステム
              </p>
            </div>

            {/* Main */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-serif">
                メインメニュー
              </h3>
              <ul className="space-y-2">
                {footerLinks.main.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm font-serif"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-serif">Engrowthの特徴</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm font-serif"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-serif">コース・料金</h3>
              <ul className="space-y-2">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm font-serif"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-serif">
                お問い合わせ
              </h3>
              <ul className="space-y-2">
                {footerLinks.contact.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm font-serif"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-gray-300 text-sm">
                  <span className="block">📞 03-XXXX-XXXX</span>
                  <span className="block">📧 info@engrowth.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-600">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm font-serif">
                © {currentYear} Engrowth. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <p className="text-gray-400 text-xs font-serif">
                  留学生の夢を支える英会話コンサルティング
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
