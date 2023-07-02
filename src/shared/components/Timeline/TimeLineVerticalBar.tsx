import { FC } from 'react';
import IconWithCircleBg from '../Icons/IconWithCircleBg';

interface TimeLineVerticalBarProps {
  Icon: FC<any>;
  dataLength: number;
  index: number;
}

const TimeLineVerticalBar: FC<TimeLineVerticalBarProps> = ({ Icon, dataLength, index }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <IconWithCircleBg
        containerClassName="min-w-[50px] min-h-[50px] hover:bg-primary"
        iconClassName="w-[24px] hover:bg-primary h-[24px]"
        Icon={Icon}
      />
      <div className="h-full w-[4px] bg-[#e9ecef]" />
    </div>
  );
};

export default TimeLineVerticalBar;
