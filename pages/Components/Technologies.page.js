import React from 'react'
import Image from 'next/image'



const Skills = () => {
    return (
      <section className='bg-black/90 py-5 flex items-center justify-center' name='Skills'>
        <div className='container mx-auto slider'>
          <div
            className='grid grid-cols-11 md:grid-flow-col slide-track'>
                <h1 className='hidden lg:flex text-white text-3xl  h-50 justify-center items-center'>Tech Stack</h1>
            {[1,2,3,4,5,6,7,8,9,10,11].map((image) => {
              return (
                <div
                  className='flex items-center justify-center slide'
                  key={image}>  <Image className='lg:h-20 cursor-pointer hover:-translate-y-5 transition-all object-contain' src={`/${image}.png`} alt='' height='80px' width='50px' />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  

export default Skills