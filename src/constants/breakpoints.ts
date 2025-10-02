/**
 * ブレークポイント定数
 * レスポンシブデザインで使用するブレークポイント
 */

export const BREAKPOINTS = {
  sm: '768px',   // タブレット
  md: '1200px',  // デスクトップ
  lg: '1400px',  // 大型デスクトップ
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

// Tailwind CSSのブレークポイントと連携
export const TAILWIND_BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;




