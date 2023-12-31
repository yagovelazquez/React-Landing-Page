import { FC } from 'react';
import { dashboard } from '../../../assets';
import SectionContainer from '../../../shared/components/layout/SectionContainer';
import LearnMoreBlock from '../../../shared/components/TextBlock/LearnMoreBlock';
import SectionHeader from '../../../shared/components/Texts/SectionHeader';

interface GreatFeaturesSectionProps {
  // TODO: Add prop types
}

const headings = [
  { title: 'Discover great feautres', className: 'text-title' },
];

const GreatFeaturesSection: FC<GreatFeaturesSectionProps> = () => {
  return (
    <SectionContainer>
      <SectionHeader
        containerClassname="mb-[60px]"
        headings={headings}
        paragraph="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."
      />
      <div className='flex gap-20'>
      <LearnMoreBlock
        title="Perfectly designed"
        subtitle="INSPINIA"
        containerClassName="w-[540px]"
        description="INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins."
      />
      <img className='w-[457px] h-[288px]' src={dashboard} alt="" />
      </div>
      </SectionContainer>
  );
};

export default GreatFeaturesSection;
