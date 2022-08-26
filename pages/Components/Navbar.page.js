import React from 'react'
import { Link } from 'react-scroll'
import NavMobile from './NavMobile.page'
import { useState, useEffect } from 'react';





export default function Navbar() {


  const [bg, setBg] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  const Navlinks = [
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


  return (
    <div className={`${bg ? 'bg-[#8b4513] h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 px-5`}>
      <div className='flex items-center justify-between w-full  cursor-pointer'>
        <div>
          <h1 className='font-bold text-2xl font-serif md:text-3xl'><span className={bg ? 'text-white' : 'text-[#8b4513]'}>PORTF</span><span className={bg ? 'text-black' : 'text-white'}>OLIO.</span></h1>
        </div>
        <div>
          <ul className='space-x-6 hidden md:flex'>
            {Navlinks.map(({ id, link, to }) => {
              return (
                <Link to={to} key={id} smooth duration={300}
                  className='text-white cursor-pointer hover:text-white/90 font-serif'>
                  {link}
                </Link>
              )

            })}
          </ul>
          <div className='flex md:hidden'>
            <NavMobile />
          </div>
        </div>
      </div>

    </div>
  )
}


