import { FC } from 'react';
import Avatar, {
  AvatarSizesEnum,
} from '../../../../../shared/components/Avatar/Avatar';
import Headings from '../../../../../shared/components/Texts/Heading';
import Small from '../../../../../shared/components/Texts/Small';

interface AvatarDescriptionProps {
  src: string;
  name: string;
  company: string;
}

const AvatarDescription: FC<AvatarDescriptionProps> = ({
  name,
  company,
  src,
}) => {
  return (
    <div className="flex w-full gap-4 items-center mt-6 ml-[10px]">
      <Avatar size={AvatarSizesEnum.small} className="grayscale-[100%]" src={src} />
      <div className="flex flex-col gap-1">
        <Headings className="text-title" variant="h5">
          {name}
        </Headings>
        <Small className="text-darkerGray">{company}</Small>
      </div>
    </div>
  );
};

export default AvatarDescription;
