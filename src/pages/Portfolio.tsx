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
      name: 'Sistema de Gestión y Valorización de Relaves Mineros',
      image: '/proj-relaves.jpg',
      description:
        'API backend en Python/FastAPI para estimación de valor económico de relaves mineros con análisis determinístico y probabilístico. (Nov-Dic 2025)',
      details: [
        'Desarrollo de API REST con FastAPI para análisis económico de relaves mineros.',
        'Modelado de dominios geológico, metalúrgico y económico con trazabilidad técnica.',
        'Implementación de simulación Monte Carlo para análisis de riesgo (P10, P50, P90).',
        'Integración de Machine Learning (Random Forest) para predicción de leyes residuales.',
        'Arquitectura extensible preparada para integración de visión artificial y LLMs.',
        'Duración: 2 meses (Noviembre - Diciembre 2025)',
      ],
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Machine Learning', 'Random Forest', 'Monte Carlo', 'REST API'],
      links: [],
    },
    {
      id: 2,
      name: 'ERP Clínico (IC La Serena Research)',
      image: erpClinico,  
      description:
        'Sistema modular para gestión de estudios clínicos: factibilidades, visitas médicas, pacientes y documentos con KPIs en Power BI.',
      details: [
        'Frontend: React + TypeScript con Material UI y Vite para desarrollo ágil.',
        'Backend: NestJS con arquitectura de microservicios, MongoDB/Mongoose y Docker.',
        'Toma de requerimientos directa con usuarios finales y reuniones de seguimiento.',
        'Tests unitarios con Jest y utilidades de validación.',
        'Despliegue en DigitalOcean con CI/CD automatizado.',
      ],
      tech: ['React', 'TypeScript', 'Material UI', 'NestJS', 'MongoDB', 'Mongoose', 'Docker', 'Power BI', 'DigitalOcean', 'Jest', 'GitHub Actions'],
      links: [
        // { label: 'Repo', href: 'https://github.com/...' },
        // { label: 'Demo', href: 'https://...' },
      ],
    },
    {
      id: 3,
      name: 'Catálogo Vial - Gestión de Inventario',
      image: '/proj-vial.jpg',
      description:
        'Sistema integral para gestión de inventario vial con app móvil para trabajo en terreno y panel web administrativo.',
      details: [
        'API REST con FastAPI y PostgreSQL con sincronización offline/online.',
        'Frontend en React + TypeScript y app Android (Expo) con lectura de códigos de barras.',
        'Cache local para funcionamiento sin conexión en terreno.',
        'Despliegue y monitoreo con Docker, Nginx, Cloudflare y DigitalOcean.',
      ],
      tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Expo', 'Docker', 'Nginx', 'Cloudflare'],
      links: [],
    },
    {
      id: 4,
      name: 'Plataforma Veterinaria (Práctica)',
      image:vetlife,
      description:
        'Sistema de gestión veterinaria con componentes reutilizables, validaciones robustas y mejoras de experiencia de usuario.',
      details: [
        'Desarrollo de vistas y componentes modulares con React + TypeScript.',
        'Implementación de estados vacíos, validaciones de formularios y feedback visual.',
        'Testing con Vitest y React Testing Library para asegurar calidad.',
        'Gestión de estado global con Redux Toolkit.',
        'Navegación con React Router y rutas protegidas.',
      ],
      tech: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'CSS', 'Vitest', 'Testing Library'],
    },
    {
      id: 5,
      name: 'E-commerce con WebPay',
      image: duende,
      description:
        'Tienda online con integración de WebPay para pagos seguros, catálogo de productos y gestión de órdenes.',
      details: [
        'Integración completa de pasarela WebPay y flujo de pago seguro.',
        'Sistema de productos con catálogo, carrito de compras y órdenes.',
        'Backend REST API con Node.js y Express.',
        'Base de datos PostgreSQL con relaciones optimizadas.',
        'Despliegue liviano y documentación completa de endpoints.',
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'WebPay', 'REST API'],
      links: [

        // { label: 'Repo', href: 'https://github.com/...' },
        { label: 'Demo sin microservicios(Click aqui)', href: 'https://front-end-goblin-store-95du.vercel.app' },
      ],
    },
    {
      id: 6,
      name: 'Reservas Turísticas con Flow',
      image: '/proj-reservas.jpg',
      description:
        'Sistema de gestión de reservas turísticas con pagos en línea usando Flow y panel administrativo con métricas.',
      details: [
        'Creación y gestión de reservas con estados (pendiente, confirmada, cancelada).',
        'Integración de pagos Flow para transacciones seguras.',
        'Panel administrativo con métricas básicas y reportes.',
        'Backend con Express y PostgreSQL para gestión de datos.',
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Flow', 'PostgreSQL'],
    },
    {
      id: 7,
      name: 'App móvil de gestión',
      image: '/proj-mobile.jpg',
      description:
        'Aplicación móvil con autenticación JWT, notificaciones push y sistema de reportes.',
      details: [
        'Frontend móvil con React Native para iOS y Android.',
        'Backend con NestJS y TypeORM para gestión de datos.',
        'Autenticación segura con JWT y gestión de sesiones.',
        'Sistema de notificaciones push y perfiles de usuario.',
        'Reportes simples con sincronización en tiempo real.',
      ],
      tech: ['React Native', 'NestJS', 'TypeORM', 'JWT', 'PostgreSQL'],
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
