import Carousel from '../../shared/components/Carousel/Carousel';
import { cellphone, staringView } from '../../assets';
import DetailsSection from './components/DetailsSection';
import UniqueViewSection from './components/UniqueViewSection';
import GreatFeaturesSection from './components/GreatFeaturesSection';
import OurTeamSection from './components/OurTeamSection/OurTeamSection';
import MoreFeaturesSection from './components/MoreFeaturesSection/MoreFeaturesSection';
import OurWorkFlow from './components/OurWorkFlow/OurWorkFlow';
import OurUsersSaySection from './components/OurUsersSaySection/OurUsersSaySection';
import OurPartnersSaySecion from './components/OurPartnersSaySecion/OurPartnersSaySecion';


function Home() {
  const carouselItems = [
    <div className="w-full">
      {' '}
      <img alt="" className="w-full grayscale-[80%]" src={staringView} />
    </div>,
    <img alt="" className="w-full grayscale-[80%]" src={cellphone} />,
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
    </div>
  );
}

export default Home;
