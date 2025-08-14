import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="Sobre mí"
        description="Quién soy fuera del código"
      />

      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hola, soy Francisco “Kanto” López</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>

      <p>
        Ingeniero en Computación e Informática y desarrollador por vocación.
        Me gusta mantener las cosas simples, comunicar directo y trabajar en
        equipo. Disfruto colaborar, dar y recibir feedback con respeto, y
        dejar todo más ordenado de lo que lo encontré.
      </p>

      <p>
        Valoro un buen clima laboral: confianza, responsabilidad y humor.
        Aprendo rápido, comparto lo que sé y me adapto cuando las prioridades cambian.
        Me motivan los desafíos que aportan valor real a las personas.
      </p>

      <div className="space-y-2">
        <h3 className="font-semibold">Fuera de la pantalla</h3>
        <p>
          Cuando no estoy programando, probablemente estoy <strong>pescando</strong>,
          jugando <strong>soulslike</strong> o <strong>Pokémon</strong>, o
          recargando energía con música y café. Me gusta salir a caminar y
          desconectarme un rato para volver con ideas frescas.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="inline-flex items-center rounded-full border border-teal-500/50 bg-teal-500/10 px-3 py-1 text-sm">🎣 Pesca</span>
          <span className="inline-flex items-center rounded-full border border-teal-500/50 bg-teal-500/10 px-3 py-1 text-sm">🎮 Soulslike</span>
          <span className="inline-flex items-center rounded-full border border-teal-500/50 bg-teal-500/10 px-3 py-1 text-sm">🧢 Pokémon</span>
          <span className="inline-flex items-center rounded-full border border-teal-500/50 bg-teal-500/10 px-3 py-1 text-sm">☕ Café & música</span>
        </div>
      </div>

      <p>
        Hoy busco un lugar donde pueda aportar con actitud, crecer como persona
        y profesional, y construir productos útiles junto a un equipo bacán.
      </p>
    </motion.section>
  );
};
