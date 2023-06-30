import { FC, Fragment, HtmlHTMLAttributes, HTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingsProps extends HTMLProps<HTMLHeadingElement> {
  variant: 'h2';
  className?: string;
  children: string | ReactNode;
  }
  
  const Headings: FC<HeadingsProps> = ({ className, variant, children, ...rest }) => {
  const classNames = twMerge(
  variant === 'h2' && 'text-xl',
  className,
  );
  
  const HeadingComponent = variant;
  
  return (
  <HeadingComponent className={classNames} {...rest}>{children}</HeadingComponent>
  );
  };
  
  export default Headings;
