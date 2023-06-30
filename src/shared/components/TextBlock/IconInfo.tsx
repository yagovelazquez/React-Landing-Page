import { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import Headings from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';

interface IconInfoProps {
  title: string;
  description: string;
  Icon: FC<IconBaseProps>;
}

const IconInfo: FC<IconInfoProps> = ({Icon, description, title}) => {
  return (
    <div className='flex justify-center items-center flex-col w-[255px]'>
      <Icon size={'27px'} className='text-primary'></Icon>
      <Headings className='text-title font-[100] my-[10px]' variant="h3">{title}</Headings>
      <Paragraph className='text-center'>
       {description}
      </Paragraph>
    </div>
  );
};

export default IconInfo;
