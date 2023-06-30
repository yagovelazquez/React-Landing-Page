import Carousel from '../../shared/components/Carousel/Carousel';
import Detailtext from '../../shared/components/DetailText/Detailtext';
import { cellphone, staringView } from '../../assets';
import DetailsSection from './components/DetailsSection';


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
    </div>
  );
}

export default Home;
