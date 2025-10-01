import React from 'react';

interface CardProps {
  variant?: 'default' | 'premium' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className = '',
  padding = 'md'
}) => {
  // ホバーエフェクトを一時的に無効化してフリーズの原因を切り分け
  const baseClasses = 'rounded-lg'; // transition-all を削除
  
  const variantClasses = {
    default: 'bg-white shadow-md border border-gray-200',
    premium: 'bg-gradient-to-br from-white to-warm-white border border-soft-gold relative',
    outline: 'bg-transparent border-2 border-gray-200',
    ghost: 'bg-transparent'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  // hover prop を一旦無視して、ホバー関連クラスを適用しない
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {variant === 'premium' && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-soft-gold to-yellow-400 rounded-t-lg" />
      )}
      {children}
    </div>
  );
};

export default Card;
