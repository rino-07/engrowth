// コース・料金関連の型定義（技術要件.md準拠）
export interface Course {
  id: string;
  name: string;
  type: 'business' | 'student' | 'business-spot' | 'student-spot';
  pricing: {
    period3m: number;
    period6m: number;
    period12m: number;
  };
  features: string[];
  description: string;
  image: string;
  detailDescription?: string;
  targetAudience?: string[];
  curriculum?: string[];
}

export interface PricingPlan {
  period: 3 | 6 | 12;
  label: string;
  business: number;
  student: number;
  discount?: number;
}

export interface SpotService {
  id: string;
  name: string;
  type: 'business-spot' | 'student-spot';
  basePrice: number;
  unit: string;
  description: string;
  scenarios: string[];
  features: string[];
}

// FAQ関連の型定義
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'program' | 'period' | 'support' | 'pricing';
  order: number;
}

// ナビゲーション関連の型定義
export interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  href: string;
  category?: 'main' | 'spot' | 'pricing';
}

