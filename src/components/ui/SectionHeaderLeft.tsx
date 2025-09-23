import React from 'react';

interface SectionHeaderLeftProps {
  label: string;
  title: string;
  desc?: string;
  className?: string;
}

export default function SectionHeaderLeft({ 
  label, 
  title, 
  desc, 
  className = "" 
}: SectionHeaderLeftProps) {
  return (
    <header className={className}>
      {/* ブロックを中央に配置（幅は適度に絞る） */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* 中身は左揃えのまま */}
        <p className="text-sm sm:text-base tracking-wider font-medium font-serif text-brand-red">
          {label}
        </p>
        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-gray-900 font-serif">
          {title}
        </h2>
        {desc && (
          <p className="mt-4 sm:mt-6 max-w-[85ch] text-base text-gray-700 leading-relaxed">
            {desc}
          </p>
        )}
      </div>
    </header>
  );
}
