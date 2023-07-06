import { FC, Fragment } from 'react';
import Paragraph from '../../../../../shared/components/Texts/Paragraph';

interface CompanyFooterProps {
  // TODO: Add prop types
}

const CompanyFooter: FC<CompanyFooterProps> = () => {
  return (
    <Fragment>
      <Paragraph className="font-bold mt-[60px]">© 2015 Company Name</Paragraph>
      <Paragraph>
        consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non
        quis ad perspiciatis, totam corporis ea, alias ut unde.
      </Paragraph>
    </Fragment>
  );
};

export default CompanyFooter;
