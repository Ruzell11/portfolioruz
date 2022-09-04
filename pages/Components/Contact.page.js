import React from 'react';

const Contact = () => {
    return (
        <div name='Contact' className=' bg-black px-3 h-[100vh]'>
            <div className='flex w-full min-h-screen justify-center items-center'>
                <div className='bg-white/90 flex-col space-y-6 w-full max-w-2xl p-8 rounded text-black font-semibold  '>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>Work with me:)</h1>
                        </div>
                        <div>

                        </div>
                        <div className='bg-white/90 rounded-xl shadow-xl p-8 mt-10'>
                            <form action="" className='flex flex-col space-y-1 '>
                                <div>
                                    <label htmlFor="" className='text-md font-bold'>Name:</label>
                                </div>
                                <div>
                                    <input type='text' placeholder='Your Name' className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white
                                        bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out  m-0  focus:text-gray-700
                                         focus:bg-white focus:border-blue-600 focus:outline-none"/>
                                         </div>
                                <div>
                                    <label htmlFor="" className='text-md font-bold'>Email</label>
                                </div>
                                <div>
                                    <input type='text' placeholder='Email' className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white
                                        bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out  m-0  focus:text-gray-700
                                         focus:bg-white focus:border-blue-600 focus:outline-none"/>
                                         </div>
                                <div>
                                    <label htmlFor="" className='text-md font-bold'>Message:</label>
                                </div>
                                <div>
                                    <textarea
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white
                                        bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out  m-0  focus:text-gray-700
                                         focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <div className='pt-3'>
                                <button className='rounded-full py-3 px-3 bg-black/90 text-white w-full '>Send</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact