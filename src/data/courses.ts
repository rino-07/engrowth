// 静的データ管理（技術要件.md準拠）
import { Course, PricingPlan, SpotService } from '@/types/course';

// メインコース定義
export const courses: Course[] = [
  {
    id: 'business',
    name: 'ビジネスコース',
    type: 'business',
    pricing: {
      period3m: 50000,
      period6m: 90000,
      period12m: 150000,
    },
    features: [
      '1対1専属コンサルタント',
      '24時間サポート',
      '実践的ビジネス英語',
      '週次進捗レビュー',
      'オーダーメイドカリキュラム',
    ],
    description: '忙しい社会人向けの効率的な英語学習プログラム',
    detailDescription: '「毎日1〜2時間のまとまった時間」ではなく、1回5分〜10分の階段式学習の積み重ね。科学的な習慣化理論 × 第二言語習得理論（SLA）に基づく「本当に続けられる」プログラム',
    image: '/images/business-course.jpg',
    targetAudience: [
      '忙しい社会人',
      'キャリアアップを目指す方',
      '海外展開を考える経営者',
      'グローバルチームで働く方',
    ],
    curriculum: [
      'スマートフォンの隙間時間活用法',
      '科学的メソッドによる効率学習',
      'LINEでの個別サポート',
    ],
  },
  {
    id: 'student',
    name: '学生コース',
    type: 'student',
    pricing: {
      period3m: 35000,
      period6m: 65000,
      period12m: 110000,
    },
    features: [
      '学生特化カリキュラム',
      '留学準備サポート',
      '経済支援制度',
      '就活英語対策',
      'エッセイ添削',
    ],
    description: '留学を目指す学生向けの総合的な英語学習プログラム',
    image: '/images/student-course.jpg',
    targetAudience: [
      '留学を検討している学生',
      '就職活動で英語力をアピールしたい学生',
      '経済的制約がある学生',
    ],
  },
];

// 料金プラン定義
export const pricingPlans: PricingPlan[] = [
  {
    period: 3,
    label: '3ヶ月',
    business: 50000,
    student: 35000,
  },
  {
    period: 6,
    label: '6ヶ月',
    business: 90000,
    student: 65000,
    discount: 10,
  },
  {
    period: 12,
    label: '12ヶ月',
    business: 150000,
    student: 110000,
    discount: 20,
  },
];

// スポットサービス定義
export const spotServices: SpotService[] = [
  {
    id: 'business-interpretation',
    name: '会議通訳・同席',
    type: 'business-spot',
    basePrice: 15000,
    unit: '1時間',
    description: '重要な会議での通訳サポート',
    scenarios: [
      '海外から自社製品に関する問い合わせが来た',
      '英語が話せるメンバーが急遽会議に参加できなくなってしまった',
    ],
    features: [
      '専門用語対応',
      '事前資料確認',
      '当日サポート',
    ],
  },
  {
    id: 'business-translation',
    name: '資料作成・翻訳サポート',
    type: 'business-spot',
    basePrice: 3000,
    unit: 'A4 1ページ',
    description: 'プレゼン資料・契約書等の翻訳',
    scenarios: [
      '海外向けプレゼン資料の作成',
      '契約書の翻訳確認',
    ],
    features: [
      '専門分野対応',
      '校正・確認',
      '緊急対応可能',
    ],
  },
  {
    id: 'business-presentation',
    name: 'プレゼンテーション準備',
    type: 'business-spot',
    basePrice: 25000,
    unit: '半日',
    description: '発表準備・リハーサル支援',
    scenarios: [
      '来週、海外チームへのプレゼンをすることに...',
    ],
    features: [
      '準備サポート',
      '練習・リハーサル',
      '本番立会い',
    ],
  },
  {
    id: 'student-essay',
    name: 'エッセイ添削',
    type: 'student-spot',
    basePrice: 5000,
    unit: '1本',
    description: '留学申請・就活用エッセイの添削',
    scenarios: [
      '留学申請用エッセイの完成度を上げたい',
      '就活用の英語エッセイを確認してほしい',
    ],
    features: [
      '構成・内容チェック',
      '文法・表現修正',
      '複数回修正対応',
    ],
  },
  {
    id: 'student-interview',
    name: '面接練習・対策',
    type: 'student-spot',
    basePrice: 8000,
    unit: '1時間',
    description: '留学・就活面接の練習サポート',
    scenarios: [
      '英語面接の練習をしたい',
      '留学面接の対策をしたい',
    ],
    features: [
      '模擬面接',
      'フィードバック',
      '改善アドバイス',
    ],
  },
];

// コース取得関数
export const getCourseById = (id: string): Course | undefined => {
  return courses.find((course) => course.id === id);
};

export const getCoursesByType = (type: Course['type']): Course[] => {
  return courses.filter((course) => course.type === type);
};

export const getSpotServicesByType = (type: SpotService['type']): SpotService[] => {
  return spotServices.filter((service) => service.type === type);
};

// 料金計算関数
export const calculatePrice = (courseId: string, period: 3 | 6 | 12): number => {
  const course = getCourseById(courseId);
  if (!course) return 0;
  
  switch (period) {
    case 3:
      return course.pricing.period3m;
    case 6:
      return course.pricing.period6m;
    case 12:
      return course.pricing.period12m;
    default:
      return 0;
  }
};

export const calculateDiscount = (period: 3 | 6 | 12): number => {
  const plan = pricingPlans.find((p) => p.period === period);
  return plan?.discount || 0;
};

