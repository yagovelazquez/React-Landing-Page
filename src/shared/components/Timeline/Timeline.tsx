import { FC } from 'react';
import { BiSolidBriefcase } from 'react-icons/bi';

interface TimelineProps {
  // TODO: Add prop types
}

const Timeline: FC<TimelineProps> = () => {
  return (
    <div className="h-[250px]">
      <BiSolidBriefcase />
      <div />
      <div className="w-64 h-full bg-gray-200 relative">
        <div className="h-full w-[3px] bg-gray"></div>
      </div>
    </div>
  );
};

export default Timeline;
