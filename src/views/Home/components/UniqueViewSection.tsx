import { FC } from 'react';
import IconInfo from '../../../shared/components/IconInfo/IconInfo';
import SectionHeader from '../../../shared/components/Texts/SectionHeader';
import { ImMobile } from 'react-icons/im';
import { dashboardAng40 } from '../../../assets';

interface UniqueViewSectionProps {
  // TODO: Add prop types
}

const headings = [
  { title: 'Over 40+ unique view', className: 'text-title mt-[10px]' },
  { title: 'with many custom components', className: 'text-primary mb-[10px]' },
];

const UniqueViewSection: FC<UniqueViewSectionProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[70px] border-primary">
      <SectionHeader
        paragraph="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."
        headings={headings}
      />
      <div className="flex gap-6 mt-4">
        <div className="flex flex-col gap-8">
          <IconInfo
            title="Full responsive"
            description="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus."
            Icon={ImMobile}
          />
          <IconInfo
            title="Full responsive"
            description="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus."
            Icon={ImMobile}
          />
        </div>
        <img className="h-[402px] w-[540px]" src={dashboardAng40} alt="" />
        <div className="flex flex-col gap-8">
          <IconInfo
            title="Full responsive"
            description="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus."
            Icon={ImMobile}
          />
          <IconInfo
            title="Full responsive"
            description="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus."
            Icon={ImMobile}
          />
        </div>
      </div>
    </div>
  );
};

export default UniqueViewSection;
