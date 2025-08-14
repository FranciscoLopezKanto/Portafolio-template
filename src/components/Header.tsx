import { IconMenu2 } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from './Drawer';
import { INavLink } from '../types/common';
import logoPokeball from '../../public/logoPokeball.png'

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navLink: INavLink[] = [
    { name: 'Acerca de', path: '/about' },
    { name: 'Habilidades', path: '/skills' },
    { name: 'Experiencia', path: '/experience' },
    { name: 'Educación', path: '/education' },
    { name: 'Portafolio', path: '/portfolio' },
    { name: 'Contacto', path: '/contact' },
  ];

  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <motion.header className="w-full sticky md:px-20 top-0 bg-gray-950 z-20 mb-4 flex text-white items-center justify-between p-4">
      <Link to="/">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-2 font-bold text-md md:text-3xl text-teal-400"
        >
          <img src={logoPokeball} alt="Logo Pokeball" width={70}/>
          <span>Francisco López</span>
        </motion.div>
      </Link>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden lg:flex space-x-10"
      >
        {navLink.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-white font-bold hover:text-teal-400"
          >
            {item.name}
          </Link>
        ))}
      </motion.nav>

      <IconMenu2
        onClick={toggleDrawer}
        className="cursor-pointer flex lg:hidden"
      />
      {openDrawer && <Drawer onClick={toggleDrawer} links={navLink} />}
    </motion.header>
  );
};
