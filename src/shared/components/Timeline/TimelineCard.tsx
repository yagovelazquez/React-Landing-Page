import { FC } from 'react';
import Button from '../Buttons/Button';
import Headings from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import { DataItem } from './Timeline';

interface TimelineCardProps extends DataItem {
  index: number;
}

const TimelineCard: FC<TimelineCardProps> = ({ index, paragraph, title }) => {
  return (
    <div
      className={`w-[450px] flex flex-col justify-between p-[20px] gap-[10px] h-[200px] absolute ${
        index % 2 ? 'right-0' : 'left-0'
      } top-0 bg-white`}
    >
      <Headings className="text-title mt-[4px]" variant="h2">
        {title}
      </Headings>
      <Paragraph>{paragraph}</Paragraph>
      <div className={`${index % 2 && 'justify-end'} flex`}>
        <Button className="mt-[100%">More info</Button>
      </div>
    </div>
  );
};

export default TimelineCard;
