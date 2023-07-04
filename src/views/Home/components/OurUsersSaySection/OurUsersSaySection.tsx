import { FC } from 'react';
import { BsFillChatFill } from 'react-icons/bs';
import { allAvatar } from '../../../../assets';
import SectionContainer from '../../../../shared/components/layout/SectionContainer';
import Headings from '../../../../shared/components/Texts/Heading';
import Paragraph from '../../../../shared/components/Texts/Paragraph';
import Small from '../../../../shared/components/Texts/Small';

interface OurUsersSaySectionProps {
  // TODO: Add prop types
}

const sectionContainerStyle = {
  backgroundImage: `url(${allAvatar})`,
};

const OurUsersSaySection: FC<OurUsersSaySectionProps> = () => {
  return (
    <SectionContainer
      className="h-[340px] gap-[12px] bg-primary flex justify-center flex-col items-center"
      style={sectionContainerStyle}
    >
      <BsFillChatFill color="white" size={'56px'} />
      <Headings className="font-[200] text-white" variant="h1">
        What our users say
      </Headings>
      <div className="w-[1100px] flex flex-col items-center gap-[4px]">
        <Paragraph className="w-[1100px] italic text-center text-white">
          "Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like)."
        </Paragraph>
        <Small className="text-white font-bold">
          17.01.2023 - Jonathas Doe
        </Small>
      </div>
    </SectionContainer>
  );
};

export default OurUsersSaySection;
