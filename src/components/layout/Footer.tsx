import React from 'react';
import Link from 'next/link';

import Container from './Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Engrowthとは', href: '/about' },
      { name: 'コース・料金', href: '/courses' },
      { name: '受講の流れ', href: '/flow' },
      { name: '支援者の方へ', href: '/supporters' },
      { name: 'よくある質問', href: '/faq' },
    ],
    company: [
      { name: '会社概要', href: '/about#company' },
      { name: 'プライバシーポリシー', href: '/privacy' },
      { name: '利用規約', href: '/terms' },
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="xl:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-bold text-white font-serif">
                  Engrowth
                </span>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                留学生の経済問題を解決する
                <br />
                独自のエコシステム
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                サービス
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">会社情報</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                お問い合わせ
              </h3>
              <ul className="space-y-2">
                {footerLinks.contact.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-action-green transition-colors duration-200 text-sm"
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
              <p className="text-gray-300 text-sm">
                © {currentYear} Engrowth. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <p className="text-gray-400 text-xs">
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
