import { motion } from 'framer-motion';
import {
  IconBrandWhatsapp,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeadphones,
  IconMail,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ContactCard } from '../components/ContactCard';

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Hablemos — te leo por aquí';
  const iconStyles = { width: '100%', height: '100%' };

  const contacts = [
    {
      id: 1,
      name: 'WhatsApp',
      image: <IconBrandWhatsapp style={iconStyles} />,
      description: '+56 9 3057 7935',
      // wa.me debe ir SIN signos ni espacios
      link: 'https://wa.me/56930577935',
    },
    {
      id: 2,
      name: 'Correo',
      image: <IconMail style={iconStyles} />,
      description: 'franciscolopmez599@gmail.com',
      // puedes agregar subject si quieres:
      link: 'mailto:franciscolopmez599@gmail.com?subject=Contacto%20desde%20portafolio',
    },
    {
      id: 3,
      name: 'GitHub',
      image: <IconBrandGithub style={iconStyles} />,
      description: 'FranciscoLopezKanto',
      link: 'https://github.com/FranciscoLopezKanto',
    },
    {
      id: 4,
      name: 'LinkedIn',
      image: <IconBrandLinkedin style={iconStyles} />,
      description: 'francisco-lopez-kanto',
      link: 'https://www.linkedin.com/in/francisco-lopez-kanto',
    },
  ];

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconHeadphones />}
        label="Contacto"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
