import { FC } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import IconWithCircleBg from './IconWithCircleBg';

interface SocialMediaIconsProps {
  // TODO: Add prop types
}

const mediaIcons = [BiLogoLinkedin, BiLogoFacebook, AiOutlineTwitter];

const SocialMediaIcons: FC<SocialMediaIconsProps> = () => {
  return (
    <div className="flex gap-3">
      {mediaIcons.map((Icon) => (
        <IconWithCircleBg
          Icon={Icon}
          containerClassName="w-[28px] h-[28px]"
          iconClassName="w-[13px] h-[13px] "
        />
      ))}
    </div>
  );
};

export default SocialMediaIcons;
