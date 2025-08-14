import { motion } from 'framer-motion';
import { MediaBarMotion } from '../common/motion/MediaBar';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  // IconBrandInstagram, // <- si después quieres IG, descomenta
} from '@tabler/icons-react';

export const MediaBar = () => {
  const media = [
    {
      icon: <IconBrandGithub />,
      href: 'https://github.com/FranciscoLopezKanto',
      label: 'GitHub',
    },
    {
      icon: <IconBrandLinkedin />,
      href: 'https://www.linkedin.com/in/francisco-lopez-kanto',
      label: 'LinkedIn',
    },
    {
      icon: <IconBrandWhatsapp />,
      href: 'https://wa.me/56930577935', // sin + ni espacios
      label: 'WhatsApp',
    },
    {
      icon: <IconMail />,
      href: 'mailto:franciscolopmez599@gmail.com?subject=Hola%20Francisco',
      label: 'Correo',
    },
    // {
    //   icon: <IconBrandInstagram />,
    //   href: 'https://www.instagram.com/tu_usuario',
    //   label: 'Instagram',
    // },
  ];

  const { container } = MediaBarMotion;

  return (
    <motion.div
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="hidden md:flex absolute z-10 flex-col w-10 p-2 bg-teal-500 items-center rounded-md bottom-0 md:bottom-auto md:top-80 space-y-4"
    >
      {media.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-black hover:text-white"
          aria-label={item.label}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </motion.div>
  );
};
