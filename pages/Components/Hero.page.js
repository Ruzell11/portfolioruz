import React from 'react'
import SocialMedia from './SocialMedia'



export default function Hero(){   

        return (
        <div name='Home' className='lg:h-[85vh] py-[50%] lg:py-[25%] flex items-center bg-[#050402] lg:bg-cover lg:bg-center lg:bg-no-repeat   overflow-hidden text-center'>
            <div className='container mx-auto h-full'>
                <div className="flex items-center h-full ">
                    <div className="flex-1 flex flex-col items-center  text-white">
                        <p className='text-3xl  text-md mb-[22px] font-serif lg:text-4xl '>
                            Hey Im Ruz 
                        </p>
                        <h1 className=' sliding-text text-3xl mx-3 text-center 
                        leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px] capitalize font-[Pacifico]'>
                            I Build Web Applications
                        </h1>
                        <button className='capitalize mt-10 btn bg-[#8b4513] hover:bg-[#8b4513]/80 rounded-full py-3 px-4'>work with me</button>
                        <div className='flex pt-7 space-x-6 text-md lg:text-3xl'>
                      <SocialMedia/>
                        </div>
                    </div>
                 
                </div>
                

            </div>
        </div>
    )
}

