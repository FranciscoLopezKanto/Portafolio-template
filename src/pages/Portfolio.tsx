import { motion } from 'framer-motion';
import { IconBrandCodepen, IconX } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { useState } from 'react';
import erpClinico from '../../public/FotosPR/erpClinico.png';
import vetlife from '../../public/FotosPR/vetlife.png';
import duende from '../../public/FotosPR/Duende.png';


type Project = {
  id: number;
  name: string;
  image: string;          // en /public
  description: string;    // resumen corto que se ve en la tarjeta
  details: string[];      // bullets para el modal
  tech: string[];         // chips para el modal
  links?: { label: string; href: string }[]; // opcional (repo/demo)
};

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Proyectos y trabajos recientes';

  const projects: Project[] = [
    {
      id: 1,
      name: 'ERP Clínico (IC La Serena Research)',
      image: erpClinico,  
      description:
        'Sistema modular para factibilidades, estudios, visitas, pacientes y documentos; KPIs en Power BI.',
      details: [
        'Frontend: React + TypeScript, MUI, Vite.',
        'Backend: NestJS (microservicios), MongoDB/Mongoose, Docker.',
        'Toma de requerimientos y reuniones con usuarios clave.',
        'Tests básicos con Jest y utilidades.',
      ],
      tech: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Docker', 'Power BI', 'DigitalOcean', 'Jest'],
      links: [
        // { label: 'Repo', href: 'https://github.com/...' },
        // { label: 'Demo', href: 'https://...' },
      ],
    },
    {
      id: 2,
      name: 'Plataforma Veterinaria (Práctica)',
      image:vetlife,
      description:
        'Componentes reutilizables, validaciones y mejoras de UX en frontend.',
      details: [
        'Implementación de vistas y componentes en React + TypeScript.',
        'Estados vacíos, validaciones y feedback visual.',
        'Tests básicos con Vitest y utilidades.',
        'Redux Toolkit para gestión de estado.'
      ],
      tech: ['React', 'TypeScript', 'CSS', 'React Router', 'Vitest', 'Redux'],
    },
    {
      id: 3,
      name: 'E-commerce con WebPay',
      image: duende,
      description:
        'Checkout con WebPay, catálogo y órdenes. Arquitectura simple y mantenible.',
      details: [
        'Pasarela WebPay y flujo de pago completo.',
        'Productos, carrito y órdenes.',
        'Despliegue liviano y documentación de endpoints.',
      ],
      tech: ['React', 'Node', 'Express', 'PostgreSQL', 'WebPay'],
      links: [

        // { label: 'Repo', href: 'https://github.com/...' },
        { label: 'Demo sin microservicios(Click aqui)', href: 'https://front-end-goblin-store-95du.vercel.app' },
      ],
    },
    {
      id: 4,
      name: 'Reservas Turísticas con Flow',
      image: '/proj-reservas.jpg',
      description:
        'Gestión de reservas y pagos en línea con Flow; panel admin básico.',
      details: [
        'Creación y gestión de reservas con estados.',
        'Integración de pagos Flow.',
        'Panel administrativo con métricas básicas.',
      ],
      tech: ['React', 'Node', 'Express', 'Flow', 'PostgreSQL'],
    },
    {
      id: 5,
      name: 'App móvil de gestión',
      image: '/proj-mobile.jpg',
      description:
        'Autenticación, notificaciones y reportería básica en móvil.',
      details: [
        'React Native + NestJS, TypeORM.',
        'Login/JWT, perfiles y notificaciones.',
        'Reportes simples y sincronización.',
      ],
      tech: ['React Native', 'NestJS', 'TypeORM', 'JWT'],
    },
  ];

  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBrandCodepen />}
        label="Proyectos"
        description={sectionDescription}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} onClick={() => setSelected(p)}>
            <ProjectCard
              id={p.id}
              image={p.image}
              name={p.name}
              description={p.description}
              tech={p.tech.slice(0, 4)} // pocos chips en la tarjeta
            />
          </div>
        ))}
      </div>

      {/* Modal de detalle */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelected(null)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 40, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 22, stiffness: 250 }}
            className="relative mx-4 mt-20 w-full max-w-3xl rounded-2xl border border-teal-500/40 bg-gray-950 p-6 shadow-2xl"
          >
            <button
              aria-label="Cerrar"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 rounded-lg p-1 hover:bg-white/10"
            >
              <IconX />
            </button>

            <img
              src={selected.image}
              alt={selected.name}
              className="mb-4 h-56 w-full rounded-xl object-cover"
            />

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-teal-400">{selected.name}</h3>
              <p className="text-white/80">{selected.description}</p>
            </div>

            <div className="mt-4 space-y-2">
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
                {selected.tech.map((t) => (
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
                    rel="noreferrer noopener"
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
