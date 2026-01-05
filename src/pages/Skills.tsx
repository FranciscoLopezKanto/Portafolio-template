import { motion } from 'framer-motion';
import {
  IconCodeCircle,
  // Frontend
  IconBrandReact,
  IconBrandNextjs,
  IconBrandVue,
  IconBrandNuxt,
  IconBrandTailwind,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandVite,
  IconCode,
  // Backend
  IconBrandNodejs,
  IconApi,
  IconDatabase,
  IconBrandPython,
  // DevOps / Tools
  IconBrandDocker,
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandFigma,
  IconBrandGit,
  IconCloud,
  IconSettingsAutomation,
  // Testing / Mobile
  IconChecks,
  IconDeviceMobile,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Tecnologías y metodologías que manejo';

  const categories = [
    {
      title: 'Frontend & Frameworks',
      items: [
        { label: 'React', icon: <IconBrandReact /> },
        { label: 'Next.js', icon: <IconBrandNextjs /> },
        { label: 'Astro', icon: <IconCode /> },
        { label: 'Vue', icon: <IconBrandVue /> },
        { label: 'Nuxt', icon: <IconBrandNuxt /> },
        { label: 'Tailwind CSS', icon: <IconBrandTailwind /> },
        { label: 'Material UI', icon: <IconCode /> },
        { label: 'Redux Toolkit', icon: <IconCode /> },
        { label: 'React Router', icon: <IconCode /> },
        { label: 'JavaScript', icon: <IconBrandJavascript /> },
        { label: 'TypeScript', icon: <IconBrandTypescript /> },
        { label: 'C#', icon: <IconCode /> },
        { label: 'C++', icon: <IconCode /> },
        { label: 'Vite', icon: <IconBrandVite /> },
        { label: 'HTML/CSS', icon: <IconCode /> },
        { label: 'Expo', icon: <IconDeviceMobile /> },
      ],
    },
    {
      title: 'Backend & APIs',
      items: [
        { label: 'Node.js', icon: <IconBrandNodejs /> },
        { label: 'NestJS', icon: <IconBrandNodejs /> },
        { label: 'Express', icon: <IconBrandNodejs /> },
        { label: 'Python', icon: <IconBrandPython /> },
        { label: 'FastAPI', icon: <IconBrandPython /> },
        { label: '.NET', icon: <IconCode /> },
        { label: 'REST', icon: <IconApi /> },
        { label: 'gRPC', icon: <IconApi /> },
        { label: 'GraphQL', icon: <IconApi /> },
        { label: 'Microservicios', icon: <IconApi /> },
        { label: 'MongoDB', icon: <IconBrandMongodb /> },
        { label: 'PostgreSQL', icon: <IconDatabase /> },
        { label: 'Mongoose', icon: <IconDatabase /> },
        { label: 'TypeORM', icon: <IconDatabase /> },
        { label: 'Prisma', icon: <IconDatabase /> },
        { label: 'SQL', icon: <IconDatabase /> },
      ],
    },
    {
      title: 'DevOps & Cloud',
      items: [
        { label: 'Docker', icon: <IconBrandDocker /> },
        { label: 'Kubernetes', icon: <IconCloud /> },
        { label: 'GitHub Actions', icon: <IconBrandGithub /> },
        { label: 'CI/CD', icon: <IconSettingsAutomation /> },
        { label: 'DigitalOcean', icon: <IconCloud /> },
        { label: 'Cloudflare', icon: <IconCloud /> },
        { label: 'Nginx', icon: <IconBrandGit /> },
      ],
    },
    {
      title: 'Testing & Mobile',
      items: [
        { label: 'Vitest', icon: <IconChecks /> },
        { label: 'Jest', icon: <IconChecks /> },
        { label: 'Testing Library', icon: <IconChecks /> },
        { label: 'React Native', icon: <IconDeviceMobile /> },
      ],
    },
    {
      title: 'Diseño & BI',
      items: [
        { label: 'Figma', icon: <IconBrandFigma /> },
        { label: 'Power BI', icon: <IconCodeCircle /> },
        { label: 'Tableau', icon: <IconCodeCircle /> },
        { label: 'Knime', icon: <IconCodeCircle /> },
      ],
    },
    {
      title: 'Metodologías',
      items: [
        { label: 'Agile', icon: <IconCodeCircle /> },
        { label: 'Scrum', icon: <IconCodeCircle /> },
        { label: 'Kanban', icon: <IconCodeCircle /> },
        { label: 'Trabajo Colaborativo', icon: <IconCodeCircle /> },
      ],
    },
  ];

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-10"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Habilidades"
        description={sectionDescription}
      />

      {categories.map((cat) => (
        <div key={cat.title} className="space-y-4">
          <h3 className="text-lg font-semibold text-teal-400">{cat.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {cat.items.map((skill) => (
              <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
};
