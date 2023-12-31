import { FC } from 'react';
import SectionContainer from '../../../shared/components/layout/SectionContainer';
import Detailtext from '../../../shared/components/TextBlock/Detailtext';

interface DetailsSectionProps {
  // TODO: Add prop types
}

const detailsTextInfo = [
  {
    title: 'FULL RESPONSIVE',
    description:
      'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.',
  },
  {
    title: 'LESS/SASS FILES',
    description:
      'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.',
  },
  {
    title: '6 CHARTS LIBRARY',
    description:
      'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.',
  },
  {
    title: 'ADVANCED FORMS',
    description:
      'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.',
  },
];

const DetailsSection: FC<DetailsSectionProps> = () => {
  return (
    <SectionContainer className="pb-0 pt-[80px] flex-row gap-8">
      {detailsTextInfo.map((item) => (
        <Detailtext title={item.title} description={item.description} />
      ))}
    </SectionContainer>
  );
};

export default DetailsSection;
