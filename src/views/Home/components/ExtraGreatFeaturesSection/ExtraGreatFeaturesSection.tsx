import { FC } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { BsGraphUpArrow } from 'react-icons/bs';
import { ImClock } from 'react-icons/im';
import { MdGroups2 } from 'react-icons/md';
import SectionContainer from '../../../../shared/components/layout/SectionContainer';
import SectionHeader from '../../../../shared/components/Texts/SectionHeader';
import ExtraGreatFeaturesCard from './components/ExtraGreatFeaturesCard';

interface ExtraGreatFeaturesSectionProps {
  // TODO: Add prop types
}

const headings = [
  { title: 'More and more extra great feautres', className: 'text-title' },
];

const extraFeaturesCardList = [
  {
    title: 'Perfectly designed',
    description:
      'INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.',
    smallText: 'INSPINIA',
    Icon: BsGraphUpArrow,
  },
  {
    title: 'Perfectly designed',
    description:
      'INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.',
    smallText: 'INSPINIA',
    Icon: AiFillThunderbolt,
  },
  {
    title: 'Perfectly designed',
    description:
      'INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.',
    smallText: 'INSPINIA',
    Icon: ImClock,
  },
  {
    title: 'Perfectly designed',
    description:
      'INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.',
    smallText: 'INSPINIA',
    Icon: MdGroups2,
  },
];

const ExtraGreatFeaturesSection: FC<ExtraGreatFeaturesSectionProps> = () => {
  return (
    <SectionContainer>
      <SectionHeader
        headings={headings}
        paragraph="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."
      />
      <div className='flex flex-wrap w-[930px] justify-between'>
      {extraFeaturesCardList.map((card) => (
        <ExtraGreatFeaturesCard
          Icon={card.Icon}
          smallText={card.smallText}
          description={card.description}
          title={card.title}
        />
      ))}
      </div>
    </SectionContainer>
  );
};

export default ExtraGreatFeaturesSection;
