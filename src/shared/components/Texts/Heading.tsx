import { FC, HTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingsProps extends HTMLProps<HTMLHeadingElement> {
  variant: 'h2' | 'h1' | 'h3';
  className?: string;
  children: string | ReactNode;
  }
  
  const Headings: FC<HeadingsProps> = ({ className, variant, children, ...rest }) => {
  const classNames = twMerge(
  variant === 'h2' && 'text-xl',
  variant === 'h1' && 'text-[30px] leading-[36px]',
  variant === 'h3' && 'text-[18px] leading-[21.6px]',
  className,
  );
  
  const HeadingComponent = variant;
  
  return (
  <HeadingComponent className={classNames} {...rest}>{children}</HeadingComponent>
  );
  };
  
  export default Headings;
