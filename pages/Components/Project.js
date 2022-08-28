import React from 'react';

const Project = () => {
    return(
        <div name='Project' className='lg:h-[100vh] flex items-center bg-black lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
          <div className="flex items-center h-full pt-8 space-x-20">
            <div className="flex-1 flex flex-col  items-center justify-center lg:items-start lg:max-w-[100%] w-full ">
              <h1 className=' text-3xl lg:text-4xl text-white  mb-[20px] border-b-4  border-white '>
                Project
              </h1>
              <div className='w-full flex justify-center items-center h-full'>
                <h1 className='text-white text-center text-2xl lg:text-4xl flex justify-center items-center font-bold'>COMING SOON........</h1>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    )
}
export default Project