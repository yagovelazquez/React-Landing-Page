import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarProps {
  src: string;
  alt?: string;
  size: AvatarSizesEnum;
  className?: string;
}

export enum AvatarSizesEnum {
  small = 'small',
  medium = 'medium',
  big = 'big',
}

const avatarSizes = {
  [AvatarSizesEnum.small]: 'w-[42px] h-[42px]',
  [AvatarSizesEnum.medium]: 'w-[89px] h-[89px]',
  [AvatarSizesEnum.big]: 'w-[128px] h-[128px]',
};

const Avatar: FC<AvatarProps> = ({ src, alt, size, className }) => {
  const classes = twMerge(
    `${avatarSizes[size]} rounded-full object-cover`,
    className
  );
  return <img className={classes} src={src} alt={alt} />;
};

export default Avatar;
