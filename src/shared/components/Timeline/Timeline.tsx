import { FC, Fragment } from 'react';
import TimelineCard from './TimelineCard';
import TimelineDate from './TimelineDate';
import TimeLineVerticalBar from './TimeLineVerticalBar';

export type DataItem = {
  Icon: FC<any>; // Assuming the icon component type
  weekDate: string;
  monthDate: string;
  paragraph: string;
  title: string;
};
interface TimelineProps {
  dataList: DataItem[];
}

const Timeline: FC<TimelineProps> = ({ dataList }) => {
  return (
    <Fragment>
      {dataList.map((data, index) => (
        <div className={`relative w-[1000px] ${index === dataList.length - 1 ? 'h-[200px]' : 'h-[250px]'}`}>
          <TimelineCard index={index} {...data} />
          <TimelineDate {...data} index={index} />
          <TimeLineVerticalBar dataLength={dataList.length} index={index} Icon={data.Icon} />
        </div>
      ))}
    </Fragment>
  );
};

export default Timeline;
