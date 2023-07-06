import { FC } from 'react';
import Paragraph from '../../../../../shared/components/Texts/Paragraph';

interface CompanyAddressProps {
  // TODO: Add prop types
}

const CompanyAddress: FC<CompanyAddressProps> = () => {
  return (
    <address className='w-[255px] bg-no-repeat bg-center'>
      <Paragraph className="text-primary font-[700]">
        Company name, Inc.
      </Paragraph>
      <Paragraph className="text-title">
        795 Folsom Ave, Suite 600
        <br />
        San Francisco, CA 94107
        <br />
        P: (123) 456-7890
      </Paragraph>
    </address>
  );
};

export default CompanyAddress;
