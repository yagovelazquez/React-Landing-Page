import { FC, ReactNode, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className,
}) => {
  const containerClass = useMemo(
    () =>
      twMerge('flex flex-col items-center justify-center py-[60px]', className),
    [className]
  );

  return <div className={containerClass}>{children}</div>;
};

export default SectionContainer;
