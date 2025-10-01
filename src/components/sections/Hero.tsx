'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Container from '@/components/layout/Container';

type CTA = { href: string; label: string; variant?: 'primary' | 'secondary' };

type Props = {
  /** 見出し（ReactNode OK。強調用の <span> など入れてOK） */
  title: React.ReactNode;
  /** サブテキスト */
  subtitle?: React.ReactNode;

  /** 画像を使わない（テキストのみのヒーロー） */
  plain?: boolean;

  /** 背景画像（PC/スマホで出し分け可能） */
  bgDesktopSrc?: string;
  bgMobileSrc?: string;
  imageWidth?: number;
  imageHeight?: number;

  /** 画像の表示位置（object-position） */
  bgPosition?: string; // e.g. 'center 20%'

  /** CTA ボタン（最大2つくらい想定） */
  ctas?: CTA[];

  /** 追加クラス */
  className?: string;

  /** デフォルト：モバイルは 16:9固定/PC は 60vh。数値を変えたい場合はここを調整 */
  aspectMobile?: string;       // 例: '16/9' -> aspect-[16/9]
};

export default function Hero({
  title,
  subtitle,
  plain = false,
  bgDesktopSrc,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  bgMobileSrc: _bgMobileSrc,
  bgPosition = 'center 20%',
  ctas = [],
  className = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  aspectMobile: _aspectMobile = '16/9',
  imageWidth = 2021,
  imageHeight = 748,
}: Props) {
  return (
    <section
    className={[
      `relative w-full aspect-[2021/748]`,
      className,
    ].join(' ')}
  >
      {/* 背景レイヤー（画像ありの場合のみ） */}
      {!plain && bgDesktopSrc && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* PC/スマホ共通画像 (2021:748比率厳守) */}
          <Image
            src={bgDesktopSrc}
            alt=""
            width={imageWidth}
            height={imageHeight}
            priority
            sizes="100vw"
            className="object-cover aspect-[2021/748] w-full h-full"
            style={{ objectPosition: bgPosition }}
          />
        </div>
      )}

      {/* コンテンツ */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <Container className="py-12 sm:py-16 lg:py-20 w-full">
          <div className="text-center">
            <h1 className="text-dark-gray mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-serif">
              {title}
            </h1>

            {subtitle && (
              <p className="text-dark-gray mb-8 md:mb-10 max-w-[65ch] mx-auto text-base md:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}

            {ctas.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctas.map((btn, i) => (
                <Link
                key={i}
                href={btn.href}
                className={[
                  'inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors',
                  btn.variant === 'secondary'
                    ? 'border border-brand-red text-brand-red hover:bg-red-50'
                    : 'bg-brand-red text-white hover:bg-red-700',
                ].join(' ')}
              >
                {btn.label}
              </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  </section>
  );
}
