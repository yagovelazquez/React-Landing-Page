import { FC } from 'react';
import Button from '../Buttons/Button';
import Headings from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import Small from '../Texts/Small';

interface LearnMoreBlockProps {
  subtitle: string;
  title: string;
  description: string;
  buttonLabel?: string;
  containerClassName?: string;
}

const LearnMoreBlock: FC<LearnMoreBlockProps> = ({
  buttonLabel = 'Learn more',
  title,
  description,
  subtitle,
  containerClassName,
}) => {
  return (
    <div className={containerClassName}>
      <Small>{subtitle}</Small>
      <Headings
        variant="h3"
        className="font-[100] mt-[3px] text-title mb-[10px]"
      >
        {title}
      </Headings>
      <Paragraph className="mb-[16px]">{description}</Paragraph>
      <Button variant="solid" className="">
        {buttonLabel}
      </Button>
    </div>
  );
};

export default LearnMoreBlock;
