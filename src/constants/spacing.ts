/**
 * スペーシング定数
 * 8pxベースのスペーシングシステム
 */

export const SPACING = {
  // 基本スペーシング（8pxベース）
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
  
  // レスポンシブスペーシング
  responsive: {
    section: 'clamp(2rem, 4vw, 6rem)',      // 32px → 96px
    sectionSm: 'clamp(1.5rem, 3vw, 4rem)',   // 24px → 64px
    hero: 'clamp(3rem, 5vw, 6rem)',          // 48px → 96px
  }
} as const;

export type SpacingKey = keyof typeof SPACING;
export type ResponsiveSpacingKey = keyof typeof SPACING.responsive;




