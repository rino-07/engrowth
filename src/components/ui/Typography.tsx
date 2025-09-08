import React from 'react';

interface TypographyProps {
  variant?: 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'body-xs' | 'caption';
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body-md',
  children,
  className = '',
  as,
  style
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
  const combinedClasses = `${variant} ${className}`;

  return (
    <Component className={combinedClasses} style={style}>
      {children}
    </Component>
  );
};

export default Typography;
