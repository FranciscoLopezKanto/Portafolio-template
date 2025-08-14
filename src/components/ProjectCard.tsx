import { motion } from 'framer-motion';
import React from 'react';

interface ProjectCardProps {
  id: number;
  image: string;
  name: string;
  description?: string;
  tech?: string[];
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  description,
  tech = [],
  onClick,
}) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          'rgba(50,50,93,0.25) 0px 50px 100px -20px, rgba(0,0,0,0.3) 0px 30px 60px -30px, rgba(10,37,64,0.35) 0px -2px 6px 0px inset',
      }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center max-w-full md:max-w-lg overflow-hidden rounded-xl bg-gray-900 cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick?.();
      }}
      aria-label={`Ver detalles de ${name}`}
    >
      <img src={image} alt={name} className="object-cover w-full h-60" />
      <div className="flex flex-col justify-start p-4 text-gray-300 text-sm w-full">
        <h2 className="text-lg font-bold text-white">{name}</h2>
        {description && <p className="mt-1 text-gray-400 line-clamp-2">{description}</p>}
        {!!tech.length && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-teal-500/40 bg-teal-500/10 px-2.5 py-0.5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
