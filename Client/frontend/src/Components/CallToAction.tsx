import React from 'react'

const CallToAction = () => {
  return (
    <section className='border-red-500 border h-[94%] p-3 flex items-center justify-center mb-10 lg:mb-20'>
        <div className='border font-raleway -mt-20 border-yellow-500 lg:max-w-[80%] w-full  flex flex-col items-center'>
        <h1 className='text-[34px] md:text-6xl lg:text-7xl w-full leading-[35px] mb-4  
                        lg:mb-10 text-white font-bold text-center'>Discover Exclusive, Sustainable Luxury Travel <span className='bg-gradient-to-r from-theme via-violet-600 to-indigo-600 bg-clip-text text-transparent'>Experiences</span></h1>
        <p className='text-center text-xs lg:text-base leading-[22px] px-8 lg:mb-16 mb-12'>Search, compare and book 15,000+ multiday tours all over the world.</p>
        <button className='bg-theme w-[10rem] p-3 rounded-3xl font-semibold lg:text-lg'>Explore Now</button>
        </div>
    </section>
  )
}

export default CallToAction
