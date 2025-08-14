import { motion } from 'framer-motion';
import { IconBallpen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Formación académica';

  const educations = [
    {
      id: 1,
      image: '/vite.svg', // reemplaza por /ucn-logo.png si lo agregas a /public
      name: 'Universidad Católica del Norte',
      position: 'Ingeniería Civil en Computación e Informática',
      startDate: '2020',     // ajusta si corresponde
      endDate: '2025',       // egresado 2025
      duration: '5 años',    // ajusta si corresponde
      location: 'Coquimbo, Chile',
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
        icon={<IconBallpen />}
        label="Educación"
        description={sectionDescription}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};
