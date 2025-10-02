/**
 * 共通型定義
 * プロジェクト全体で使用する共通の型定義
 */

import { ReactNode } from 'react';

// 基本プロップス型
export interface BaseProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

// レイアウト関連の型
export type BackgroundVariant = 'white' | 'warm-white' | 'light-gray' | 'deep-navy' | 'gradient' | 'brand-red';
export type PaddingVariant = 'sm' | 'md' | 'lg' | 'xl';
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '1440' | 'full';

// カラー関連の型
export type ColorVariant = 'default' | 'muted' | 'brand' | 'success' | 'warning' | 'error';
export type WeightVariant = 'normal' | 'medium' | 'semibold' | 'bold';

// ボタン関連の型
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// カード関連の型
export type CardVariant = 'default' | 'premium' | 'outline' | 'ghost';

// タイポグラフィ関連の型
export type TypographyVariant = 
  | 'heading-xl' 
  | 'heading-lg' 
  | 'heading-md' 
  | 'heading-sm' 
  | 'body-lg' 
  | 'body-md' 
  | 'body-sm' 
  | 'body-xs' 
  | 'caption';

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

// グリッド関連の型
export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridGap = 'sm' | 'md' | 'lg' | 'xl';

// レスポンシブ設定の型
export interface ResponsiveConfig {
  sm?: GridCols;
  md?: GridCols;
  lg?: GridCols;
  xl?: GridCols;
}

// メタデータ関連の型
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}




