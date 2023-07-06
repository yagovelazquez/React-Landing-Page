import { FC, ReactNode } from 'react';
import Button from '../../../../../shared/components/Buttons/Button';
import Paragraph from '../../../../../shared/components/Texts/Paragraph';

interface PricingPlanProps {
  variant?: 'principal' | 'normal';
  planDetails: ReactNode[] | string[];
  title: string;
}

const PricingPlan: FC<PricingPlanProps> = ({
  variant = 'normal',
  planDetails,
  title,
}) => {
  const bgClass = variant === 'normal' ? 'mt-[20px]' : 'bg-gray w-[319px]';
  const buttonClass = variant === 'normal' ? '' : 'text-[16px]';
  const paragraphClass = variant === 'normal' ? '' : 'text-[15px]';

  return (
    <div className={`w-[290px] ${bgClass}`}>
      <Paragraph className="h-[54px] flex justify-center items-center text-white text-[22px] font-[600] rounded bg-primary">
        {title}
      </Paragraph>
      {planDetails.map((detail, index) => (
        <Paragraph
          className={`${
            index === 0 ? 'py-[20px]' : 'py-[10px]'
          } text-center px-[20px] flex justify-center items-center ${paragraphClass} border-b-lightGray border-b`}
        >
          {detail}
        </Paragraph>
      ))}
      <div className="flex rounded justify-center items-center py-3">
        <Button className={`${buttonClass}`}>Signup</Button>
      </div>
    </div>
  );
};

export default PricingPlan;
