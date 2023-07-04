import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type TriangleProps = {
  className?: string;
  color?: string;
  variant?: 'left' | 'right' | 'up' | 'down';
};

const triangleVariants = {
  down: 'h-0 w-0 border-x-[14px] border-x-transparent border-t-[15px] border-t-white',
  up: 'h-0 w-0 border-x-[14px] border-x-transparent border-t-[15px] border-t-white',
  left: 'h-0 w-0 border-x-[14px] border-x-transparent border-t-[15px] border-t-white',
  right: 'h-0 w-0 border-x-[14px] border-x-transparent border-t-[15px] border-t-white',
};

const Triangle: FC<TriangleProps> = ({
  className,
  color = 'white',
  variant = 'down',
  ...rest
}) => {
  const triangleMergedClass = twMerge(triangleVariants[variant], className);
  return <div className={triangleMergedClass} {...rest} />;
};

export default Triangle;
