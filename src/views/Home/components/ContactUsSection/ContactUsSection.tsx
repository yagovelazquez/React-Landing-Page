import { FC } from 'react';
import { worldMap } from '../../../../assets';
import SectionContainer from '../../../../shared/components/layout/SectionContainer';
import SectionHeader from '../../../../shared/components/Texts/SectionHeader';
import CallToAction from './components/CallToAction';
import CompanyFooter from './components/CompanyFooter';
import CompanyInformation from './components/CompanyInformation';

interface ContactUsSectionProps {
  // TODO: Add prop types
}

const sectionContainerStyle = {
  backgroundImage: `url(${worldMap})`,
};
const headings = [{ title: 'Contact Us', className: 'text-title' }];

const ContactUsSection: FC<ContactUsSectionProps> = () => {
  return (
    <SectionContainer
      className="bg-gray bg-no-repeat bg-center"
      style={sectionContainerStyle}
    >
      <SectionHeader
        headings={headings}
        paragraph="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."
      />
      <CompanyInformation />
      <CallToAction />
      <CompanyFooter />
    </SectionContainer>
  );
};

export default ContactUsSection;
