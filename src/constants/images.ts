/**
 * 画像パス定数
 * 画像のパス管理を統一
 */

export const IMAGE_PATHS = {
  // ヒーロー画像
  hero: {
    top: '/images/top/top01.png',
    about: '/images/about/about_hero.png',
    business: '/images/business/business_hero.png',
    courses: '/images/courses/courses_hero.png',
    flow: '/images/flow/flow_hero.png',
    supporters: '/images/supporters/supporters_hero.png',
    faq: '/images/faq/faq_hero.png',
  },
  
  // モバイル用ヒーロー画像
  heroMobile: {
    top: '/images/hero_sma/top_hero_sma.png',
    about: '/images/hero_sma/about_hero_sma.png',
    business: '/images/hero_sma/business_hero_sma.png',
    courses: '/images/hero_sma/courses_hero_sma.png',
    flow: '/images/hero_sma/flow_hero_sma.png',
    supporters: '/images/hero_sma/supporters_hero_sma.png',
    faq: '/images/hero_sma/faq_hero_sma.png',
  },
  
  // アイコン画像
  icons: {
    point1: '/images/point1.png',
    point2: '/images/top/Point2.png',
    point3: '/images/top/Point3.png',
    clock: '/images/clock-icon.png',
  },
  
  // バナー画像
  banners: {
    main: '/images/main_banner.png',
    welcome: '/images/courses/welcome_banner.png',
  }
} as const;

export type HeroImageKey = keyof typeof IMAGE_PATHS.hero;
export type HeroMobileImageKey = keyof typeof IMAGE_PATHS.heroMobile;
export type IconImageKey = keyof typeof IMAGE_PATHS.icons;
export type BannerImageKey = keyof typeof IMAGE_PATHS.banners;




