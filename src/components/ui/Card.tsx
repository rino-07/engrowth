import React from 'react';

interface CardProps {
  variant?: 'default' | 'premium';
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className = '',
  hover = true
}) => {
  const baseClasses = 'rounded-lg transition-all duration-300';
  
  const variantClasses = {
    default: hover ? 'card' : 'bg-white shadow-md border border-gray-200 p-6',
    premium: hover ? 'card-premium' : 'bg-gradient-to-br from-white to-warm-white border border-soft-gold p-6 relative'
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {variant === 'premium' && !hover && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-soft-gold to-yellow-400 rounded-t-lg" />
      )}
      {children}
    </div>
  );
};

export default Card;
