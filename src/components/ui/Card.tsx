import React from 'react';

interface CardProps {
  variant?: 'default' | 'premium' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className = '',
  hover = true,
  padding = 'md'
}) => {
  const baseClasses = 'rounded-lg transition-all duration-300';
  
  const variantClasses = {
    default: hover ? 'card' : 'bg-white shadow-md border border-gray-200 hover:shadow-lg hover:border-brand-red/20',
    premium: hover ? 'card-premium' : 'bg-gradient-to-br from-white to-warm-white border border-soft-gold relative hover:shadow-lg',
    outline: 'bg-transparent border-2 border-gray-200 hover:border-brand-red hover:bg-brand-red/5',
    ghost: 'bg-transparent hover:bg-gray-50'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;
  
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
