import { motion } from 'framer-motion';
import { IconClockPlay, IconX } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';
import { useState } from 'react';

type ExperienceItem = {
  id: number;
  image: string;
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  details: string[];   // 👈 para el modal
  stack: string[];     // 👈 para el modal
  links?: { label: string; href: string }[];
};

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Trayectoria y experiencia';

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      image: '/vite.svg',
      name: 'Práctica profesional — Plataforma Veterinaria',
      position: 'Desarrollador Frontend',
      startDate: '2024',
      endDate: '2024',
      duration: '3 meses',
      location: 'Chile (remoto)',
      details: [
        'Implementé vistas y componentes reutilizables en React + TypeScript.',
        'Mejoré UX y estados vacíos, y apliqué validaciones de formularios.',
        'Integré estado global y utilidades de testing básico.',
      ],
      stack: ['React', 'TypeScript', 'Redux', 'CSS', 'React Router', 'Vitest'],
      links: [], // agrega más tarde si tienes demo/repo
    },
    {
      id: 2,
      image: '/vite.svg',
      name: 'Proyecto de Título — ERP Clínico (IC La Serena Research)',
      position: 'Full-Stack / Arquitectura',
      startDate: '2025',
      endDate: '2025',
      duration: '4 meses',
      location: 'La Serena, Chile',
      details: [
        'Módulos: factibilidades, estudios, visitas, pacientes y documentos.',
        'Backend con microservicios (NestJS, MongoDB/Mongoose, Docker).',
        'Frontend con React + TypeScript, MUI v7 y Framer Motion.',
        'Reportabilidad y KPIs operativos conectados a Power BI.',
      ],
      stack: ['React', 'DigitalOcean', 'TypeScript', 'NestJS', 'MongoDB', 'Docker', 'Power BI', 'Jest','TCP','Microservicios'],
      links: [], // agrega enlaces si corresponde
    },
  ];

  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experiencia"
        description={sectionDescription}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            onClick={() => setSelected(exp)}
            className="cursor-pointer"
          >
            <CommonCard {...exp} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelected(null)}
          />

          {/* content */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 40, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 22, stiffness: 250 }}
            className="relative mx-4 mt-24 w-full max-w-2xl rounded-2xl border border-teal-500/40 bg-gray-950 p-6 shadow-2xl"
          >
            <button
              aria-label="Cerrar"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 rounded-lg p-1 hover:bg-white/10"
            >
              <IconX />
            </button>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-teal-400">{selected.name}</h3>
              <div className="text-white/80">
                <span className="font-semibold">{selected.position}</span> ·{' '}
                {selected.location}
              </div>
              <div className="text-sm text-white/60">
                {selected.startDate} — {selected.endDate} · {selected.duration}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <h4 className="font-semibold">Qué hice</h4>
              <ul className="list-disc space-y-1 pl-5 text-white/90">
                {selected.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 space-y-2">
              <h4 className="font-semibold">Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selected.stack.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {!!selected.links?.length && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.links!.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-teal-500/40 px-3 py-1 text-sm text-teal-400 hover:bg-teal-500 hover:text-black"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};
