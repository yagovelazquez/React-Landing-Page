import { FC } from 'react';
import Triangle from '../../../../../shared/components/layout/Triangle';
import Headings from '../../../../../shared/components/Texts/Heading';

interface PartnerSpeechBubbleProps {
  speech: string;
}

const PartnerSpeechBubble: FC<PartnerSpeechBubbleProps> = ({ speech }) => {
  return (
    <div className="w-[350px] h-[120px] bg-white relative rounded-lg">
      <Headings
        className="italic text-title leading-[21px] p-[20px]"
        variant="h5"
      >
        {speech}
      </Headings>
      <Triangle className="absolute bottom-[-14px] left-[20px]" />
    </div>
  );
};

export default PartnerSpeechBubble;
