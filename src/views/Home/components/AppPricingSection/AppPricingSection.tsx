import { Fragment } from 'react';
import SectionContainer from '../../../../shared/components/layout/SectionContainer';
import Paragraph from '../../../../shared/components/Texts/Paragraph';
import SectionHeader from '../../../../shared/components/Texts/SectionHeader';
import PricingPlan from './components/PricingPlan';

const headings = [
  {
    title: 'App Pricing',
    className: 'text-title',
  },
];

const planDetails = [
  'Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.',
  <Fragment>
    <span className="text-primary font-bold mr-[3px]">$16</span>/ month
  </Fragment>,
  'Dashboards',
  'Projects view',
  'Contacts',
  'Calendar',
  'AngularJs',
];

const AppPricingSection = () => {
  return (
    <SectionContainer>
      <SectionHeader
        paragraph="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."
        headings={headings}
      />
      <div className="flex items-start gap-20 mt-[35px]">
        <PricingPlan title="Basic" planDetails={planDetails} />
        <PricingPlan
          title="Standard"
          planDetails={planDetails}
          variant="principal"
        />
        <PricingPlan title="Premium" planDetails={planDetails} />
      </div>
      <Paragraph className="w-[1100px] mt-10 text-center">
        *Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy.{' '}
        <span className="text-primary">Various versions</span> have evolved over
        the years, sometimes by accident, sometimes on purpose (injected humour
        and the like).
      </Paragraph>
    </SectionContainer>
  );
};

export default AppPricingSection;
