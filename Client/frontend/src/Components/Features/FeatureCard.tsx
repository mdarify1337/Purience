import React from 'react'

const FeatureCard = ({icon, description, title} : {icon: string, description: string, title: string}) => {
  return (
    <div className='border w-[316px] h-[200px] rounded-md font-poppins flex flex-col gap-2 p-4'>
        <div className='flex items-center gap-2'>
            <img src={icon} alt={title} />
            <h3 className='font-semibold'>{title}</h3>
        </div>
        <p className='text-xs text-gray-500 p-2 mt-3 pl-2'>{description}</p>
    </div>
  )
}

export default FeatureCard
