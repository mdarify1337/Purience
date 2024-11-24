import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex p-4 justify-between px-8 md:px-10 lg:px-20'>
      <h3 className='text-theme font-semibold text-xl'>Purience</h3>
      <ul className='text-black text-sm flex gap-6 items-center font-normal'>
        <li>About Us</li>
        <li>Contact US</li>
        <li>Sign Up</li>
        <li className='bg-theme p-2 px-5 rounded-2xl text-white '><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
