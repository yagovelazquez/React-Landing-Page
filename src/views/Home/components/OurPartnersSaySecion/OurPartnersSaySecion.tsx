import { andreaDoe, jhenifferDoe, johnDoe } from '../../../../assets';
import SectionContainer from '../../../../shared/components/layout/SectionContainer';
import SectionHeader from '../../../../shared/components/Texts/SectionHeader';
import AvatarDescription from './components/AvatarDescription';
import PartnerSpeechBubble from './components/PartnerSpeechBubble';


const headings = [{ title: 'What our partners say', className: 'text-title' }];

const partnersList = [
  {
    name: 'Andrea Doe',
    src: andreaDoe,
    company: 'Hostinger Oils Japan',
    speech:
      '"Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."',
  },
  {
    name: 'Jheniffer Doe',
    src: jhenifferDoe,
    company: 'Sharks Preservation Australia',
    speech:
      '"Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."',
  },
  {
    name: 'John Doe',
    src: johnDoe,
    company: "John Doe's Corporation Belgium",
    speech:
      '"Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."',
  },
];

const OurPartnersSaySecion = () => {
  return (
    <SectionContainer className="bg-gray">
      <SectionHeader
        containerClassname="mb-[56px]"
        paragraph="Donec sed odio dui. Etiam porta sem malesuada."
        headings={headings}
      />
      <div className="flex gap-8">
        {partnersList.map((partner) => (
          <div key={partner.name}>
            <PartnerSpeechBubble speech={partner.speech} />
            <AvatarDescription
              name={partner.name}
              src={partner.src}
              company={partner.company}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurPartnersSaySecion;
