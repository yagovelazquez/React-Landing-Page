import { FC } from 'react';
import Headings from './Heading';
import Paragraph from './Paragraph';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

interface DetailtextProps {
  onClick?: () => void;
  title: string;
  description: string;
}

const Detailtext: FC<DetailtextProps> = ({
  title,
  description,
  onClick = () => {},
}) => {
  return (
    <div className="w-[255px]">
      <Headings
        className="text-title tracking-[-1px] font-semibold"
        variant="h2"
      >
        {title}
      </Headings>
      <Paragraph className="mt-[10px] mb-[16px]">{description}</Paragraph>
      <div onClick={onClick} className="flex items-center text-primary gap-1">
        <Paragraph className="text-primary">Details</Paragraph>
        <MdKeyboardDoubleArrowRight size={'10px'} />
      </div>
    </div>
  );
};

export default Detailtext;
