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

  /** 画像の表示位置（object-position） */
  bgPosition?: string; // e.g. 'center 20%'

  /** オーバーレイ不透明度（0〜1） */
  overlayOpacity?: number;

  /** CTA ボタン（最大2つくらい想定） */
  ctas?: CTA[];

  /** 追加クラス */
  className?: string;

  /** デフォルト：モバイルは 16:9固定/PC は 60vh。数値を変えたい場合はここを調整 */
  minHeightDesktopVH?: number; // 例: 60 -> min-h-[60vh]
  aspectMobile?: string;       // 例: '16/9' -> aspect-[16/9]
};

export default function Hero({
  title,
  subtitle,
  plain = false,
  bgDesktopSrc,
  bgMobileSrc,
  bgPosition = 'center 20%',
  overlayOpacity = 0.5,
  ctas = [],
  className = '',
  minHeightDesktopVH = 60,
  aspectMobile = '16/9',
}: Props) {
  return (
    <section
  className={[
    // 高さを常に確保し、全画面表示にする
    `relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[80vh] w-full`,
    className,
  ].join(' ')}
>
      {/* 背景レイヤー（画像ありの場合のみ） */}
      {!plain && (bgDesktopSrc || bgMobileSrc) && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* PC 用 */}
          {bgDesktopSrc && (
            <Image
              src={bgDesktopSrc}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hidden md:block object-cover"
              style={{ objectPosition: bgPosition }}
            />
          )}
          {/* SP 用 */}
          {bgMobileSrc && (
            <Image
              src={bgMobileSrc}
              alt=""
              fill
              priority
              sizes="100vw"
              className="block md:hidden object-cover"
              style={{ objectPosition: bgPosition }}
            />
          )}
          {/* オーバーレイ */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(255,255,255,${overlayOpacity})` }}
          />
        </div>
      )}

      {/* コンテンツ */}
      <div className="relative z-10 flex items-center">
        <Container className="py-12 sm:py-16 lg:py-20 w-full">
          <div className="text-center">
            <h1 className="text-dark-gray mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-gray mb-8 md:mb-10 max-w-[65ch] mx-auto text-base md:text-lg leading-relaxed">
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
                      ? 'border border-[#d30306] text-[#d30306] hover:bg-red-50'
                      : 'bg-[#d30306] text-white hover:bg-[#b70205]',
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
