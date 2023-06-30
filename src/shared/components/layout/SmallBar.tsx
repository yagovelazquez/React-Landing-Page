import { FC } from 'react';

interface SmallBarProps {
  // TODO: Add prop types
}

const SmallBar: FC<SmallBarProps> = () => {
  return (
    <div className="w-[60px] text-primary border-primary border-bottom border-b-2 " />
  );
};

export default SmallBar;
