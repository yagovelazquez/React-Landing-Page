import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
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
  align?: LearnMoreBlockAlignEnum;
}

export enum LearnMoreBlockAlignEnum {
  left = 'left',
  right = 'right',
}

const alignDirectionObject = {
  [LearnMoreBlockAlignEnum.left]: 'text-left',
  [LearnMoreBlockAlignEnum.right]: 'text-right',
};

const flexItemsPosition = {
  [LearnMoreBlockAlignEnum.left]: 'items-start',
  [LearnMoreBlockAlignEnum.right]: 'items-end',
};

const LearnMoreBlock: FC<LearnMoreBlockProps> = ({
  buttonLabel = 'Learn more',
  title,
  description,
  subtitle,
  containerClassName,
  align = LearnMoreBlockAlignEnum.left,
}) => {
  const containerMergedClass = twMerge(
    `flex flex-col ${flexItemsPosition[align]}`,
    containerClassName
  );
  return (
    <div className={containerMergedClass}>
      <Small>{subtitle}</Small>
      <Headings
        variant="h3"
        className={`font-[100] mt-[3px] text-title mb-[10px]`}
      >
        {title}
      </Headings>
      <Paragraph className={`mb-[16px] ${alignDirectionObject[align]}`}>
        {description}
      </Paragraph>
      <Button className="text-right" variant="solid">
        {buttonLabel}
      </Button>
    </div>
  );
};

export default LearnMoreBlock;
