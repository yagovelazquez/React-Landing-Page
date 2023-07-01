import { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface IconWithCircleBgProps {
  Icon: FC<IconBaseProps>;
  containerClassName?: string;
  iconClassName?: string;
}

const IconWithCircleBg: FC<IconWithCircleBgProps> = ({
  Icon,
  containerClassName,
  iconClassName,
}) => {
  const containerClasses = twMerge(
    'cursor-pointer rounded-[50%] bg-primary hover:bg-darkPrimary flex items-center justify-center',
    containerClassName
  );
  const iconClasses = twMerge(
    'bg-primary hover:bg-darkPrimary text-white',
    iconClassName
  );

  return (
    <div className={containerClasses}>
      <Icon className={iconClasses} />
    </div>
  );
};

export default IconWithCircleBg;
