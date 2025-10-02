import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  className?: string;
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  };
}

const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  className = '',
  responsive
}) => {

  const getGridCols = (cols: number) => {
    const colMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12'
    };
    return colMap[cols] || 'grid-cols-1';
  };

  const getResponsiveClasses = () => {
    if (!responsive) return '';
    
    let classes = '';
    if (responsive.sm) classes += ` sm:${getGridCols(responsive.sm)}`;
    if (responsive.md) classes += ` md:${getGridCols(responsive.md)}`;
    if (responsive.lg) classes += ` lg:${getGridCols(responsive.lg)}`;
    if (responsive.xl) classes += ` xl:${getGridCols(responsive.xl)}`;
    
    return classes;
  };

  const gridClasses = `grid ${getGridCols(cols)}${getResponsiveClasses()} ${className}`;

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};

export default Grid;



