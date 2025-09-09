export interface PricingPlan {
  id: string;
  period: string;
  originalPrice: string;
  currentPrice: string;
  monthlyPrice: string;
  discount?: string;
  isPopular?: boolean;
  features: string[];
  buttonText: string;
  isDisabled?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "1month",
    period: "1ヶ月",
    originalPrice: "",
    currentPrice: "$1,480",
    monthlyPrice: "",
    isDisabled: true,
    features: [
      "専任コンサルタント",
      "科学的メソッド",
      "ビジネス実践英会話",
      "プロ講師陣"
    ],
    buttonText: "無料お試し"
  },
  {
    id: "3month",
    period: "3ヶ月",
    originalPrice: "$4,400",
    currentPrice: "$3,980",
    monthlyPrice: "$1,326",
    discount: "約10%OFF",
    features: [
      "専任コンサルタント",
      "科学的メソッド", 
      "ビジネス実践英会話",
      "プロ講師陣"
    ],
    buttonText: "このプランを選ぶ"
  },
  {
    id: "6month",
    period: "6ヶ月",
    originalPrice: "$8,880",
    currentPrice: "$7,480",
    monthlyPrice: "$1,246",
    discount: "約16%OFF",
    isPopular: true,
    features: [
      "専任コンサルタント",
      "科学的メソッド",
      "ビジネス実践英会話", 
      "プロ講師陣",
      "コミュニティアクセス"
    ],
    buttonText: "このプランを選ぶ"
  },
  {
    id: "12month",
    period: "12ヶ月",
    originalPrice: "$17,760",
    currentPrice: "$13,980",
    monthlyPrice: "$1,165",
    discount: "約21%OFF",
    features: [
      "専任コンサルタント",
      "科学的メソッド",
      "ビジネス実践英会話",
      "プロ講師陣",
      "コミュニティアクセス",
      "エコシステム参加資格"
    ],
    buttonText: "このプランを選ぶ"
  }
];

