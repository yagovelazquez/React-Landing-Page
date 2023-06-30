import React, { FC, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant?: 'solid' | 'outline';
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  variant = 'solid',
  ...restProps
}) => {
  const classNames = twMerge(
    variant === 'solid' &&
      'py-[10px] hover:bg-darkPrimary rounded-[3px] px-[20px] bg-primary text-white font-[600] text-[14px]',
    className
  );
  return (
    <button className={classNames} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
