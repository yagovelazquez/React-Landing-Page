import { FC } from 'react';
import { andreaDoe, jhenifferDoe, johnDoe } from '../../../../assets';
import { AvatarSizesEnum } from '../../../../shared/components/Avatar/Avatar';
import Paragraph from '../../../../shared/components/Texts/Paragraph';
import SectionHeader from '../../../../shared/components/Texts/SectionHeader';
import AvatarIconDescription from './components/AvatarIconDescription';

interface OurTeamSectionProps {
  // TODO: Add prop types
}

const headings = [{ title: 'Our Team', className: 'my-[10px] text-title' }];

const avatarDescriptionList = [
  {
    imgSrc: johnDoe,
    description:
      'Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.',
    firstName: 'John',
    lastName: 'Doe',
    size: AvatarSizesEnum.medium,
  },
  {
    imgSrc: andreaDoe,
    description:
      'Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.',
    firstName: 'Andrea',
    lastName: 'Doe',
    size: AvatarSizesEnum.big,
  },
  {
    imgSrc: jhenifferDoe,
    description:
      'Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.',
    firstName: 'Jheniffer',
    lastName: 'Doe',
    size: AvatarSizesEnum.medium,
  },
];

const OurTeamSection: FC<OurTeamSectionProps> = () => {
  return (
    <div className="bg-gray pb-[30px] pt-[60px] flex-col flex items-center justify-center">
      <SectionHeader
        paragraph="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."
        headings={headings}
      />
      <div className="flex mt-[46px] gap-6">
        {avatarDescriptionList.map((avatar) => (
          <AvatarIconDescription
            imgSrc={avatar.imgSrc}
            description={avatar.description}
            firstName={avatar.firstName}
            lastName={avatar.lastName}
            size={avatar.size}
          />
        ))}
      </div>
      <Paragraph className='mt-[45px]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
        laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea,
        alias ut unde.
      </Paragraph>
    </div>
  );
};

export default OurTeamSection;