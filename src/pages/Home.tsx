import { motion } from 'framer-motion';
import { LeaveCard } from '../components/LeaveCard';
import { HomeMotion } from '../common/motion/Home';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;
  const labels = [
    'Desarrollador Frontend',
    'Desarrollador Backend',
    'Desarrollador Fullstack',
    'Ingeniero de Software',
  ]// coso que va saliendo en pantalla al lado de la foto

    const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % labels.length);
    }, 2500); // cambia cada 2s (ajusta a gusto)
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora">
          <span>¡Hola!</span>{' '}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl">
          Francisco López
        </h1>
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
          Ingeniero Civil en Computación e Informática
        </h2>
        <p className="text-center md:text-start text-xs md:text-base">
          Soy desarrollador de software con experiencia en la creación de
          aplicaciones web y móviles, abarcando todo el ciclo de vida del
          desarrollo. Me especializo en soluciones escalables y funcionales,
          combinando creatividad con un enfoque técnico sólido.
        </p>
        <a href="/FranciscoLopezGCv2026.pdf" target="_blank" download>
          <motion.div
            initial={resume.initial}
            animate={resume.animated}
            transition={resume.transition}
            className="rounded-3xl w-max border px-4 py-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black hover:border-teal-500"
          >
            Descargar CV
          </motion.div>
        </a>
      </motion.div>

      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 via-emerald-900 to-black overflow-hidden"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="/fotoPersonal.png"
          alt="Foto de perfil"
          width="100%"
          height="100%"
        />
      </motion.div>

      <LeaveCard label={labels[idx]} />
    </section>
  );
};
