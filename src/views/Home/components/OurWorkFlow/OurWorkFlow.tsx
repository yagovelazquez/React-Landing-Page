import { FC } from 'react';
import { BiSolidBriefcase } from 'react-icons/bi';
import { BsFillGearFill } from 'react-icons/bs';
import { LuFileSpreadsheet } from 'react-icons/lu';
import SectionContainer from '../../../../shared/components/layout/SectionContainer';
import SectionHeader from '../../../../shared/components/Texts/SectionHeader';
import Timeline from '../../../../shared/components/Timeline/Timeline';

interface OurWorkFlowProps {
  // TODO: Add prop types
}
const headings = [{ title: 'Our workflow', className: 'text-title' }];

const dataList = [
  {
    Icon: BiSolidBriefcase,
    weekDate: 'Today',
    monthDate: '24 Jan',
    title: 'Meeting',
    paragraph:
      'Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.',
  },
  {
    Icon: LuFileSpreadsheet,
    weekDate: 'Tomorrow',
    monthDate: '25 Jan',
    title: 'Decision',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since.',
  },
  {
    Icon: BsFillGearFill,
    weekDate: 'Wednesday',
    monthDate: '02 Fev',
    title: 'Implementation',
    paragraph:
      'Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  },
];

const OurWorkFlow: FC<OurWorkFlowProps> = () => {
  return (
    <SectionContainer className="bg-gray">
      <SectionHeader
        containerClassname="mb-[80px]"
        paragraph="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."
        headings={headings}
      />
      <Timeline dataList={dataList} />
    </SectionContainer>
  );
};

export default OurWorkFlow;
