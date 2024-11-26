import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section className='text-black flex justify-center font-poppins mt-16 p-4 items-center flex-col'>
        <header className='flex flex-col items-center'>
            <h1 className='text-dark_blue text-2xl lg:text-4xl md:text-3xl font-medium text-center'>What Purience offers</h1>
            <p className='my-3 max-w-[80%] lg:max-w-[700px] text-center text-xs md:text-sm'>Purience offers luxury, eco-friendly travel with personalized itineraries and exclusive destinations for a seamless, unforgettable experience.</p>
        </header>
        <div className='border-red-500 border w-full p-10 max-w-[1200px] flex flex-wrap gap-16 items-center justify-center'>
            <FeatureCard icon={"/icons/calendrie.svg"} description='Plan your journey with ease and flexibility. Our secure booking process ensures your plans are protected, giving you peace of mind as you explore.' title='Book & Travel With Confidence'/>
            <FeatureCard icon={"/icons/guide.svg"} description='Discover the authentic charm of each destination with the help of knowledgeable local guides who bring each location to life with their insights.' title='Locally Based guides'/>
            <FeatureCard icon={"/icons/community.svg"} description='Every booking contributes to the local economy, supporting small businesses and communities in the places you visit, fostering a sustainable future.' title='Built Support Local Communities'/>
            <FeatureCard icon={"/icons/satisfaction.svg"} description='We’re committed to delivering exceptional travel experiences. If you’re not satisfied, we’ll work to make it right, so your journey is nothing short of perfect.' title='Satisfaction Guarantee'/>
            <FeatureCard icon={"/icons/confidence.svg"} description='Unlock access to unique, exclusive destinations tailored to your taste for luxury and adventure. We specialize in crafting unforgettable, tailored journeys.' title='Book & Travel With Confidence'/>
            <FeatureCard icon={"/icons/travel.svg"} description='Travel responsibly with our eco-friendly options that minimize your footprint and help preserve natural and cultural heritage for future generations.' title='Sustainability And Travel.'/>
        </div>
    </section>
  )
}

export default Features
