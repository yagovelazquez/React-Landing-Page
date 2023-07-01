import { FC } from 'react';
import { andreaDoe, jhenifferDoe, johnDoe } from '../../../../assets';
import { AvatarSizesEnum } from '../../../../shared/components/Avatar/Avatar';
import SectionContainer from '../../../../shared/components/layout/SectionContainer';
import Paragraph from '../../../../shared/components/Texts/Paragraph';
import SectionHeader from '../../../../shared/components/Texts/SectionHeader';
import AvatarIconDescription from './components/AvatarIconDescription';

interface OurTeamSectionProps {
  // TODO: Add prop types
}

const headings = [{ title: 'Our Team', className: 'text-title' }];

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
    <SectionContainer className='bg-gray'>
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
    </SectionContainer>
  );
};

export default OurTeamSection;
