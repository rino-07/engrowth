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
      "基本プラン"
    ],
    buttonText: "無料お試し"
  },
  {
    id: "3month",
    period: "3ヶ月",
    originalPrice: "",
    currentPrice: "$4,480",
    monthlyPrice: "$1,493",
    discount: "",
    features: [
      "3ヶ月集中プラン"
    ],
    buttonText: "このプランを選ぶ"
  },
  {
    id: "6month",
    period: "6ヶ月",
    originalPrice: "",
    currentPrice: "$7,480",
    monthlyPrice: "$1,246",
    discount: "約16%OFF",
    isPopular: true,
    features: [
      "6ヶ月継続プラン"
    ],
    buttonText: "このプランを選ぶ"
  },
  {
    id: "12month",
    period: "12ヶ月",
    originalPrice: "",
    currentPrice: "$13,980",
    monthlyPrice: "$1,165",
    discount: "約21%OFF",
    features: [
      "12ヶ月完全サポートプラン"
    ],
    buttonText: "このプランを選ぶ"
  }
];

