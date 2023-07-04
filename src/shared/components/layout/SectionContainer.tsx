import { FC, HTMLProps, ReactNode, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  const containerClass = useMemo(
    () =>
      twMerge('flex flex-col items-center justify-center py-[60px]', className),
    [className]
  );

  return <div className={containerClass} {...rest}>{children}</div>;
};

export default SectionContainer;
