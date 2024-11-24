import React from 'react'

const Tour = () => {
  return (
    <div className='w-[300px] rounded-[12px] h-[350px] p-2 border-[#E7E6E6] border shadow-custom'>
      <img src="/tour-img.jpg" alt="" className='mb-2 bg-cover rounded-lg'/>
      <div>
        <p className='text-dark_gray text-xs mb-2 pl-2 opacity-80'>Agafay, Morocco</p>
        <p className='text-black px-2 font-normal text-sm'>Agafay Desert Adventure - Guided Moroccan Desert Tour by ATV</p>
      </div>
    </div>
  )
}

export default Tour
