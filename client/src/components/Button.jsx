import React from 'react';

const Button = ({ variant = 'primary', size = 'default', className = '', children, ...props }) => {
  const baseStyles = 'font-bold rounded-lg transition-colors flex items-center justify-center';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    lg: 'text-lg px-8 py-3',
    default: 'px-4 py-2'
  };

  const variantStyles = {
    outline: 'border border-primary-black bg-transparent text-primary-black hover:bg-neutral-100',
    primary: 'bg-primary-green text-white hover:bg-primary-green/90',
    secondary: 'bg-primary-red text-white hover:bg-primary-red/90'
  };

  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
