import React from 'react'

const CustomersReviews = () => {
  return (
    <div className='border border-blue-600 font-poppins w-full relative flex flex-col items-center justify-center'>
        <header className='flex items-center justify-center'>
            <h1 className='text-dark_blue text-2xl lg:text-4xl tracking-wide leading-[30px] lg:leading-[40px] spacing text-center max-w-[450px]'>Contact us to review <span className='text-theme'>your experience</span> with us</h1>
        </header>
        <img className='absolute border-red-500 border-2 top-[40%] ' src="/images/reviews-bg.svg" alt="plains" />
        <p className='text-dark_blue text-sm text-[#666666] max-w-[500px] text-center my-4'>Give us feedback and let us know what experiences you had while on vacation with us</p>
    </div>
  )
}

export default CustomersReviews
