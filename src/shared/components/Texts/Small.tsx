import { FC, HTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SmallProps extends HTMLProps<HTMLDivElement> {
  children: string | ReactNode;
}

const Small: FC<SmallProps> = ({ className, children, ...rest }) => {
  const classNames = twMerge('text-primary text-[10.4px] leading-[15.6px]', className);
  return (
    <small className={classNames} {...rest}>
      {children}
    </small>
  );
};

export default Small;
