import Carousel from '../../shared/components/Carousel/Carousel';
import { cellphone, headerOne, headerTwo, staringView } from '../../assets';
import DetailsSection from './components/DetailsSection';
import UniqueViewSection from './components/UniqueViewSection';
import GreatFeaturesSection from './components/GreatFeaturesSection';
import OurTeamSection from './components/OurTeamSection/OurTeamSection';
import MoreFeaturesSection from './components/MoreFeaturesSection/MoreFeaturesSection';
import OurWorkFlow from './components/OurWorkFlow/OurWorkFlow';
import OurUsersSaySection from './components/OurUsersSaySection/OurUsersSaySection';
import OurPartnersSaySecion from './components/OurPartnersSaySecion/OurPartnersSaySecion';
import ExtraGreatFeaturesSection from './components/ExtraGreatFeaturesSection/ExtraGreatFeaturesSection';
import AppPricingSection from './components/AppPricingSection/AppPricingSection';
import ContactUsSection from './components/ContactUsSection/ContactUsSection';

function Home() {
  const carouselItems = [
    <img alt="" className="w-full h-full" src={headerOne} />,
    <img alt="" className="w-full h-full" src={headerTwo} />,
  ];

  return (
    <div className="h-[100vh]">
      <div className="w-full h-[470px]">
        <Carousel carouselItems={carouselItems} />
      </div>
      <DetailsSection />
      <UniqueViewSection />
      <GreatFeaturesSection />
      <OurTeamSection />
      <MoreFeaturesSection />
      <OurWorkFlow />
      <OurUsersSaySection />
      <OurPartnersSaySecion />
      <ExtraGreatFeaturesSection />
      <AppPricingSection />
      <ContactUsSection />
    </div>
  );
}

export default Home;
