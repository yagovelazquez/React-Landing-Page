import { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import Headings from '../../../../../shared/components/Texts/Heading';
import Paragraph from '../../../../../shared/components/Texts/Paragraph';
import Small from '../../../../../shared/components/Texts/Small';

interface ExtraGreatFeaturesCardProps {
  description: string;
  title: string;
  smallText: string;
  Icon: FC<IconBaseProps>;
}

const ExtraGreatFeaturesCard: FC<ExtraGreatFeaturesCardProps> = ({
  description,
  title,
  smallText,
  Icon,
}) => {
  return (
    <div className="w-[450px] mt-[60px] flex flex-col gap-1">
      <Small>{smallText}</Small>
      <Headings className="text-title font-[100]" variant="h2">
        {title}
      </Headings>
      <div className="w-[full]">
        <Icon
          size={'50px'}
          className="ml-4 text-primary float-right mt-1"
        />
        <Paragraph className="text-justify">{description}</Paragraph>
      </div>
    </div>
  );
};

export default ExtraGreatFeaturesCard;
