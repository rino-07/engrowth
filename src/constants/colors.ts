/**
 * カラーパレット定数
 * Engrowth公式サイトで使用するカラーの統一管理
 */

export const COLORS = {
  // ブランドカラー
  brand: {
    red: '#d30306',
    redHover: '#b70205',
    redLight: 'rgba(211, 3, 6, 0.1)',
  },
  
  // 基本カラー
  gray: {
    light: '#f5f5f5',
    medium: '#898989',
    dark: '#333333',
    warm: '#fafafa',
  },
  
  // アクションカラー
  action: {
    green: '#0a8f42',
    success: '#0a8f42',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
  },
  
  // 背景・前景
  background: {
    white: '#ffffff',
    dark: '#0a0a0a',
  },
  
  foreground: {
    light: '#ededed',
    dark: '#333333',
  },
  
  // 特別なカラー
  special: {
    navy: '#1a1a2e',
    gold: '#c9a961',
  }
} as const;

export type ColorKey = keyof typeof COLORS;
export type BrandColorKey = keyof typeof COLORS.brand;
export type GrayColorKey = keyof typeof COLORS.gray;
export type ActionColorKey = keyof typeof COLORS.action;




