import { FC, Fragment } from 'react';
import Button from '../../../../../shared/components/Buttons/Button';
import SocialMediaIcons from '../../../../../shared/components/Icons/SocialMediaIcons';
import Paragraph from '../../../../../shared/components/Texts/Paragraph';

interface CallToActionProps {
  // TODO: Add prop types
}

const CallToAction: FC<CallToActionProps> = () => {
  return (
    <Fragment>
      <Button>Send us mail</Button>
      <Paragraph className="mt-[13px] mb-[26px]">
        Or follow us on social platform
      </Paragraph>
      <SocialMediaIcons />
    </Fragment>
  );
};

export default CallToAction;
