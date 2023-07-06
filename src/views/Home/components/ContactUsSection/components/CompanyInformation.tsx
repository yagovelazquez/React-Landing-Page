import { FC } from 'react';
import Paragraph from '../../../../../shared/components/Texts/Paragraph';
import CompanyAddress from './CompanyAddress';

interface CompanyInformationProps {
  // TODO: Add prop types
}

const CompanyInformation: FC<CompanyInformationProps> = () => {
  return (
    <div className="flex my-[40px]">
      <CompanyAddress />
      <Paragraph className="w-[380px] text-title">
        Consectetur adipisicing elit. Aut eaque, totam corporis laboriosam
        veritatis quis ad perspiciatis, totam corporis laboriosam veritatis,
        consectetur adipisicing elit quos non quis ad perspiciatis, totam
        corporis ea,
      </Paragraph>
    </div>
  );
};

export default CompanyInformation;
