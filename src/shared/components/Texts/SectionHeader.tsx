import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import SmallBar from '../layout/SmallBar';
import Headings from './Heading';
import Paragraph from './Paragraph';

interface SectionHeaderProps {
  headings: {
    title?: string;
    className?: string;
  }[];
  paragraph?: string;
  containerClassname?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ headings, paragraph, containerClassname }) => {
  const mergedContainerClassname = twMerge('flex flex-col items-center', containerClassname)
  return (
    <div className={mergedContainerClassname}>
      <SmallBar />
      {headings.map((heading) => (
        <Headings
          variant="h1"
          className={`font-[200] ${heading.className}`}
          key={heading.title}
        >
          {heading.title}
        </Headings>
      ))}
      <Paragraph className="mb-2">{paragraph}</Paragraph>
    </div>
  );
};

export default SectionHeader;
