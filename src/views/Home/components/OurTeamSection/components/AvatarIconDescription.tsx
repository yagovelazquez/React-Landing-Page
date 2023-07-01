import { FC } from 'react';
import Avatar, { AvatarSizesEnum } from '../../../../../shared/components/Avatar/Avatar';
import Headings from '../../../../../shared/components/Texts/Heading';
import Paragraph from '../../../../../shared/components/Texts/Paragraph';
import { BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';

interface AvatarIconDescriptionProps {
  description: string;
  firstName: string;
  lastName: string;
  imgSrc: string;
  size: AvatarSizesEnum,
}

const mediaIcons = [BiLogoLinkedin, BiLogoFacebook, AiOutlineTwitter];

const AvatarIconDescription: FC<AvatarIconDescriptionProps> = ({
  imgSrc,
  description,
  firstName,
  size,
  lastName,
}) => {
  return (
    <div className="flex flex-col w-[350px] items-center">
      <Avatar src={imgSrc} className="grayscale-[100%]" size={size} />
      <div className="flex gap-1 mt-[5px] mb-[8px]">
        <Headings className="text-primary font-[600]" variant="h5">
          {firstName}
        </Headings>
        <Headings className="text-title font-[600]" variant="h5">
          {lastName}
        </Headings>
      </div>
      <Paragraph className="mb-[16px] text-center">{description}</Paragraph>
      <div className="flex gap-3">
        {mediaIcons.map((Icon) => (
          <div className="h-[27px] cursor-pointer w-[27px] rounded-[50%] bg-primary hover:bg-darkPrimary flex items-center justify-center">
            <Icon
              color="white"
              size={'13px'}
              className={'bg-primary hover:bg-darkPrimary'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarIconDescription;
