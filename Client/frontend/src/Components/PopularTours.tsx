import React from 'react'
import Tour from './Tour'
import tours from '../dummy/tours'

const PopularTours = () => {
  return (
    <section className='lg:pt-24 items-center border border-red-500 p-4 lg:p-10 font-poppins flex flex-col gap-12 lg:gap-20'>
      <h1 className='text-black text-xl lg:text-4xl md:text-3xl font-medium text-center'>The <span className='text-theme'>best popular Tours</span> for you</h1>
      <div className='border-2 border-blue-700 w-full flex flex-wrap items-center justify-center gap-10 max-w-[1500px] p-8 lg:p-3'>
        {
          tours.map((tour) => (
            <Tour key={tour.id} tour={tour} />
          ))
        }
      </div>
      <button className='text-theme border-theme border p-3 px-6 rounded-lg'>View more</button>
    </section>
  )
}

export default PopularTours
