import React from 'react';
import Image from 'next/image'
import Link from 'next/link';


const Project = () => {

  const projectsLink = [
    {
      names:'Salon Appointment System (Ongoing)',
      image: 25,
      technologies:'HTML, CSS, JS, PHP, MYSQL, Paymongo',
      repository:'https://github.com/VonIsaac/Sofia-Salon',
      link:'#'
    },   
    {
      names:'E Blotter System (Ongoing)',
      image:24,
      technologies:'HTML, CSS, JS, PHP, MYSQL',
      repository:'https://github.com/VonIsaac/e-blotter-app',
      link:'#'
    },   
    {
      names:'Simple Blog Website',
      image:20,
      technologies:'Nextjs , Tailwind ,GraphCms',
      repository:'https://github.com/Ruzell11/blog-project-nextjs',
      link:'https://blog-project-nextjs-41yp08e4y-ruzell11.vercel.app/'
    },
    {
      names:'Working Search Movie App',
      image:21,
      technologies:'ReactJs , Boostrap',
      repository:'https://github.com/Ruzell11/movie-app',
      link:'https://ruzell11.github.io/movie-app/'
    },
    {
      names:'Pokemon Landing Page',
      image:22,
      technologies:'Material Ui , Html , Css , vanilla Js',
      repository:'https://github.com/Ruzell11/pokemon-landing-page',
      link:'https://ruzell11.github.io/pokemon-landing-page/#'
    },  
    {
      names:'Job Posting',
      image:23,
      technologies:'Laravel , Tailwind , Mysql',
      repository:'#',
      link:'http://dream-careers.herokuapp.com/'
    },   
    
  ]
  return (
    <div name='Project' className='lg:h-[100vh] flex items-center bg-black lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className="flex items-center h-full pt-8 space-x-20">
          <div className="flex-1 flex flex-col  items-center justify-center lg:items-start lg:max-w-[100%] w-full ">
            <h1 className=' text-3xl lg:text-4xl text-white  mb-[20px] border-b-4  border-white'>
              Projects
            </h1>
            <div className='w-full px-5 transition duration-300 ease-linear flex justify-center items-center h-full mt-3'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {projectsLink.map(({names,technologies,image , link , repository})=> {
                  return(
                    <div className=' w-full flex items-center justify-center py-3 px-4 flex-col space-y-5' key={names}>
                    <div className='bg-black/90 shadow-md rounded-lg shadow-slate-500 px-4 py-3 cursor-pointer transition duration-300 ease-linear hover:shadow-lg hover:shadow-white'>
                      <Image
                        src={`/${image}.jpg`}
                        height='200px'
                        width={400}
                        alt={names}
                        className='object-fit  cursor-pointer'
                      />
                      <div className='flex flex-col space-y-2 sm:flex-row justify-between items-center  pt-5 sm:px-4 sm:space-x-6 '>
                        <Link href={link}>
                          <a className='w-full text-center bg-white py-1 sm:px-2  text-sm lg:text-md sm:rounded-lg font-serif hover:bg-white/70 transition duration-300 ease-in mx-3'>
                            Visit Demo
                          </a>
                        </Link>
                        <Link href={repository}>
                        <a className='w-full text-center bg-white py-1 sm:px-2  text-sm lg:text-md sm:rounded-lg font-serif hover:bg-white/70 transition duration-300 ease-in mx-3'>
                            View Repository
                          </a>
                        </Link>
                      </div>
                      <div className='items-center flex-col flex justify-center my-2'>
                          <h3 className='text-white/80 font-serif py-2 px-2 rounded-md text-lg'>{names}</h3>
                        </div>
                        <div className='w-full text-center text-white/90 font-mono'>
                          <p className='text-md uppercase'>Technologies: {technologies}</p>
                        </div>
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project