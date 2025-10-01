import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-pressed'?: boolean;
  'aria-controls'?: string;
  role?: string;
  tabIndex?: number;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  disabled,
  href,
  target,
  rel,
  onClick,
  style,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-expanded': ariaExpanded,
  'aria-pressed': ariaPressed,
  'aria-controls': ariaControls,
  role,
  tabIndex,
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'btn-primary focus:ring-brand-red',
    secondary: 'btn-secondary focus:ring-brand-red',
    outline: 'border-2 border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white focus:ring-brand-red',
    ghost: 'text-brand-red bg-transparent hover:bg-red-50 focus:ring-brand-red'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // hrefが指定されている場合は<a>タグ、そうでなければ<button>タグをレンダリング
  if (href) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={combinedClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        style={style}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-expanded={ariaExpanded}
        aria-pressed={ariaPressed}
        aria-controls={ariaControls}
        role={role}
        tabIndex={tabIndex}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || isLoading}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      style={style}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-expanded={ariaExpanded}
      aria-pressed={ariaPressed}
      aria-controls={ariaControls}
      role={role}
      tabIndex={tabIndex}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
