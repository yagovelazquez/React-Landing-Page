import { FC } from 'react';
import Headings from '../Texts/Heading';
import Small from '../Texts/Small';
import { DataItem } from './Timeline';

interface TimelineCardProps extends DataItem {
  index: number;
}

const TimelineDate: FC<TimelineCardProps> = ({
  index,
  weekDate,
  monthDate,
}) => {
  return (
    <div
      className={`absolute flex flex-col ${
        index % 2 ? 'ml-[35%]' : 'ml-[58%]'
      } top-0 gap-1`}
    >
      <Headings
        className={`text-title text-${index % 2 ? 'right' : 'left'}`}
        variant="h5"
      >
        {weekDate}
      </Headings>
      <Small className={`text-${index % 2 ? 'right' : 'left'}`}>
        {monthDate}
      </Small>
    </div>
  );
};

export default TimelineDate;
