import React from 'react'

const Step = ({icon, title, description} : {icon: string, title: string, description: string}) => {
  return (
    <div className='flex gap-3 itemx-center'>
        <img src={`/icons/${icon}`} alt={title} />
        <div className='flex flex-col justify-center gap-1'>
            <p className='text-[#5E6282] font-semibold text-sm'>{title}</p>
            <span className='text-sm text-[#5E6282] lg:max-w-[80%]'>{description}</span>
        </div>
    </div>
  )
}

export default Step
