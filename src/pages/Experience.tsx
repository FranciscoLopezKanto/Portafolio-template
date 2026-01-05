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
      name: 'Proyecto Catálogo Vial — Cliente Contratista Vial',
      position: 'Desarrollador Full Stack',
      startDate: 'Oct 2025',
      endDate: 'Dic 2025',
      duration: '3 meses',
      location: 'La Serena, Chile',
      details: [
        'Desarrollo de sistema integral para gestión de inventario vial con app móvil y panel web administrativo.',
        'Implementación de API REST con FastAPI y PostgreSQL, sincronización offline/online con cache local.',
        'Frontend en React + TypeScript y app Android (Expo) con lectura de códigos de barras.',
        'Despliegue y monitoreo con Docker, Nginx, Cloudflare y DigitalOcean.',
      ],
      stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Expo', 'Docker', 'Nginx', 'Cloudflare', 'DigitalOcean'],
      links: [],
    },
    {
      id: 2,
      image: '/vite.svg',
      name: 'Sistema de Gestión y Valorización de Relaves Mineros (Backend - En Curso)',
      position: 'Desarrollador Backend / Data',
      startDate: 'Nov 2025',
      endDate: 'En Curso',
      duration: '2 meses',
      location: 'Proyecto Personal',
      details: [
        'Diseño y desarrollo de API backend en Python con FastAPI para estimación de valor económico de relaves mineros.',
        'Modelado de dominios geológico, metalúrgico y económico con trazabilidad técnica y extensibilidad.',
        'Implementación de simulación Monte Carlo para análisis de riesgo y escenarios (P10, P50, P90).',
        'Integración de Machine Learning (Random Forest) para predicción de leyes residuales con feature engineering.',
        'Arquitectura modular preparada para integración futura de visión artificial y LLMs.',
        'Nota: Actualmente solo incluye desarrollo backend. Frontend en desarrollo futuro.',
      ],
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'Machine Learning', 'Random Forest', 'Monte Carlo', 'Data Analysis'],
      links: [],
    },
    {
      id: 3,
      image: '/vite.svg',
      name: 'Proyecto de Título — ERP Clínico (IC La Serena Research)',
      position: 'Desarrollador Full Stack',
      startDate: 'Mar 2025',
      endDate: 'Jul 2025',
      duration: '5 meses',
      location: 'La Serena, Chile',
      details: [
        'Desarrollo de sistema ERP modular para gestión integral de estudios clínicos.',
        'Creación de dashboards en Power BI para visualización y análisis de datos operativos.',
        'Implementación de módulos: gestión de pacientes, estudios, visitas y documentos.',
        'Optimización del proceso de recolección de información, reduciendo tiempos en un 90%.',
        'Trabajo bajo metodología ágil Scrumban con cliente real.',
        'Backend con microservicios (NestJS, MongoDB/Mongoose, Docker) en DigitalOcean.',
      ],
      stack: ['React', 'TypeScript', 'Material UI', 'NestJS', 'MongoDB', 'Mongoose', 'Docker', 'Power BI', 'DigitalOcean', 'Jest', 'GitHub Actions'],
      links: [],
    },
    {
      id: 4,
      image: '/vite.svg',
      name: 'Práctica profesional — Plataforma Veterinaria (Hostyweb SPA)',
      position: 'Practicante de Desarrollo de Software',
      startDate: 'Jul 2024',
      endDate: 'Sep 2024',
      duration: '3 meses',
      location: 'La Serena, Chile (remoto)',
      details: [
        'Desarrollo de funcionalidades para plataforma web de gestión veterinaria.',
        'Implementación de componentes reutilizables en React y TypeScript.',
        'Integración de Redux para gestión global del estado.',
        'Colaboración en el diseño estructural de módulos clave: registro de usuarios, alarmas y gestión de datos.',
      ],
      stack: ['React', 'TypeScript', 'Redux Toolkit', 'CSS', 'React Router', 'Vitest'],
      links: [],
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

      <div className="flex flex-col gap-6">
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
