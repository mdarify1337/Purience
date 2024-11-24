import React from 'react'
import Tour from './Tour'

const PopularTours = () => {
  return (
    <div className='lg:pt-24 items-center border border-red-500 p-4 lg:p-10 font-poppins flex flex-col gap-12 lg:gap-20'>
      <h1 className='text-black text-xl lg:text-4xl md:text-3xl font-medium text-center'>The <span className='text-theme'>best popular Tours</span> for you</h1>
      <div>
        <Tour/>
      </div>
    </div>
  )
}

export default PopularTours
