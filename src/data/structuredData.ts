/**
 * 構造化データ
 * SEO最適化のためのJSON-LD構造化データ
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Engrowth",
  "description": "科学的根拠に基づいた英語学習プログラムを提供する教育サービス",
  "url": "https://engrowth.com",
  "logo": "https://engrowth.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+81-3-1234-5678",
    "contactType": "customer service",
    "availableLanguage": ["Japanese", "English"]
  },
  "sameAs": [
    "https://twitter.com/engrowth",
    "https://www.facebook.com/engrowth",
    "https://www.linkedin.com/company/engrowth"
  ]
};

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Engrowth英語学習プログラム",
  "description": "科学的根拠に基づいた英語学習プログラム",
  "provider": {
    "@type": "Organization",
    "name": "Engrowth"
  },
  "courseMode": "online",
  "inLanguage": "ja",
  "audience": {
    "@type": "Audience",
    "audienceType": "学生・ビジネスパーソン"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Engrowth公式サイト",
  "url": "https://engrowth.com",
  "description": "科学的根拠に基づいた英語学習プログラム",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://engrowth.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});




