import { FC } from 'react';
import { iphone } from '../../../../assets';
import SectionContainer from '../../../../shared/components/layout/SectionContainer';
import LearnMoreBlock, { LearnMoreBlockAlignEnum } from '../../../../shared/components/TextBlock/LearnMoreBlock';
import SectionHeader from '../../../../shared/components/Texts/SectionHeader';

interface MoreFeaturesSectionProps {
  // TODO: Add prop types
}

const headings = [
  {
    title: 'Even more great features',
    className: 'text-title',
  },
];

const MoreFeaturesSection: FC<MoreFeaturesSectionProps> = () => {
  return (
    <SectionContainer>
      <SectionHeader
        paragraph="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."
        headings={headings}
      />
      <div className="flex items-center mt-4">
        <LearnMoreBlock
          title="Perfectly designed"
          subtitle="INSPINIA"
          containerClassName="w-[255px]"
          description="INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins."
        />
        <img src={iphone} className="w-[540px] h-[448px]" alt="" />
        <LearnMoreBlock
          title="Perfectly designed"
          subtitle="INSPINIA"
          align={LearnMoreBlockAlignEnum.right}
          containerClassName="w-[255px]"
          description="INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins."
        />
      </div>
    </SectionContainer>
  );
};

export default MoreFeaturesSection;
