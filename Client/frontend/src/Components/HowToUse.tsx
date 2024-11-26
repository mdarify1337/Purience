import React from 'react'
import Step from './Step'
import Tour from './Tour'

const HowToUse = () => {

    const tourExample = { "id": 5,
        "location": "Ibiza, Spain",
        "title": "Luxury Yacht Day in Ibiza hidden coves and crystal-clear waters",
        "rating": 4,
        "reviews": 243,
        "duration": "10 Days / 11 Nights",
        "days": 4,
        "price": 189.25,
        "image": "/images/ibiza.jpg"
    }

  return (
    <section className=' text-dark_blue  font-poppins border my-28 max-w-[1500px] lg:p-12 mr-auto ml-auto flex-col flex items-center'>
        <header>
            <h1 className='text-dark_blue text-xl md:text-3xl font-medium text-center'>Book Your <span className='text-theme'>Next Trip</span> in 3 Easy Steps</h1>
            <p className='text-center mt-2 text-sm text-black'>Easy and Fast</p>
        </header>
        <div className='items-center border border-red-500 lg:pt-12 p-8 lg:gap-20 lg:p-10 font-poppins  lg:flex'>
            <div className='flex flex-col gap-10  border border-red-500 '>
                <Step icon='destination.svg' title={'Choose Destination'} description='Browse our curated destinations and select the perfect spot for your next adventure.'/>
                <Step icon='payment-icon.svg' title={'Make Payment'} description='Secure your booking easily with our safe and convenient payment options.'/>
                <Step icon='reach-icon.svg' title={'Reach Airport on Selected Date'} description='Arrive at the airport on your scheduled date, and we’ll handle the rest.'/>
            </div>
            <div className='hidden lg:flex'>
            <div className="relative flex items-center justify-center z-[9999]">
                <div className="absolute rounded-full w-[370px] h-[370px] opacity-25 bg-[#289CE1] filter blur-lg -z-10"></div>
                    <Tour tour={tourExample} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowToUse
