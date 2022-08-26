import React from 'react'

export const About = () => {
  return (
    <div name='About' className='lg:h-[85vh] flex items-center bg-black lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center ">
            <h1 className=' text-3xl lg:text-4xl text-white  mb-[20px] border-b-4  border-white'>
              About Me
            </h1>
            <p className='text-1xl lg:text-2xl   text-white lg:leading-10  lg:max-w-xxl  px-5 lg:px-0'>
              I enjoy having a mastering a new things It boosts self-esteem.Learning is about commmitment on how passionate you are on what you are doing. Having a skills does not a power , actions with skills does. Experience on learning journey is absolutely I love the most!
              My goal is to have the opportunity to work for an organization that offers me the opportunity to improve my skills or learn new things. Ideally, the experiences
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
