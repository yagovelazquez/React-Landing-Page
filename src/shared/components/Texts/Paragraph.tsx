import { FC, HTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
  children: string | ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ className, children, ...rest }) => {
  const classNames = twMerge('text-paragraph text-[13px] leading-[19px]', className);
  return (
    <p className={classNames} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
