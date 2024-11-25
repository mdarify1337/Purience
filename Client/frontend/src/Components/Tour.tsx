import React, { useState } from 'react'
import RatingReview from './RatingReview';


const Tour = () => {
  const [rating, setRating] = useState<number>(0);
  return (
    <div className='w-[300px] rounded-[12px] h-[370px] p-2 border-[#E7E6E6] border shadow-custom'>
      <img src="/tour-img.jpg" alt="" className='mb-2 bg-cover rounded-lg'/>
      <div>
        <p className='text-dark_gray text-xs mb-2 lg:mt-2 pl-2 opacity-80'>Agafay, Morocco</p>
        <p className='text-dark_blue px-2 font-normal text-sm'>Agafay Desert Adventure - Guided Moroccan Desert Tour by ATV</p>
      </div>
      <div>
          <RatingReview rating={rating} setRating={setRating} static_rating={true} static_n={4} rating_count={65}/> 
      </div>
      <hr className='w-[95%] mr-auto ml-auto my-4' />
      <div className=''>
        <p className=''>2 Days</p>
        <p>From <span>$255/</span></p>
      </div>
    </div>
  )
}

export default Tour
