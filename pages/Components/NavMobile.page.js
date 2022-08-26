import React, { useState } from 'react';
import {HiMenuAlt3} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';



const NavMobile = () => {
  const navigation = [
    {
      id: 1,
      link: 'Home',
      to: 'Home',
      path: '/'

    },
    {
      id: 5,
      link: 'About',
      to: 'About',
      path: '/about'


    },
    {
      id: 2,
      link: 'Technologies',
      to: 'Skills',
      path: '/skills'

    },
    {
      id: 3,
      link: 'Project',
      to: 'Project',
      path: '/project'

    },

    {
      id: 4,
      link: 'Contact',
      to: 'contact',
      path: '/contact'

    }
  ]

  
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative '>
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-white '
      >
        <HiMenuAlt3 className='w-8 h-8' />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-black fixed top-0 right-0 h-100'
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-8 right-8 '
        >
          <GrClose className='w-8 h-8 bg-white rounded ' />
        </div>
        {navigation.map(({id , link , to}) => {
          return (
            <li key={id} className='mb-8 border-bottom border-white font-serif hover:text-white/60'>
              <Link 
              onClick={() => setIsOpen(false)}
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize'  >
                {link}
              </Link>
            </li>
          );
        })}
        
      </motion.ul>
     
    </nav>
    
  );
};

export default NavMobile;