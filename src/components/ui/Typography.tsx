import React from 'react';

interface TypographyProps {
  variant?: 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'body-xs' | 'caption';
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  style?: React.CSSProperties;
  color?: 'default' | 'muted' | 'brand' | 'success' | 'warning' | 'error';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body-md',
  children,
  className = '',
  as,
  style,
  color = 'default',
  weight
}) => {
  // デフォルトの要素を決定
  const getDefaultElement = (variant: string) => {
    switch (variant) {
      case 'heading-xl': return 'h1';
      case 'heading-lg': return 'h2';
      case 'heading-md': return 'h3';
      case 'heading-sm': return 'h4';
      case 'caption': return 'span';
      default: return 'p';
    }
  };

  const Component = as || getDefaultElement(variant);
  
  // カラークラス
  const colorClasses = {
    default: 'text-dark-gray',
    muted: 'text-gray',
    brand: 'text-brand-red',
    success: 'text-action-green',
    warning: 'text-warning',
    error: 'text-error'
  };

  // ウェイトクラス
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const combinedClasses = `${variant} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${className}`;

  return (
    <Component className={combinedClasses} style={style}>
      {children}
    </Component>
  );
};

export default Typography;
