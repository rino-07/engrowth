import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '1440' | 'full';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg'
}) => {
  const sizeClasses: Record<NonNullable<ContainerProps['size']>, string> = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',               // 1280px
    '2xl': 'max-w-screen-2xl',     // 1536px
    '1440': 'max-w-[1440px]',      // きっちり1440pxにしたい時
    full: 'max-w-full'
  };
  
  const combinedClasses = `mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Container;
