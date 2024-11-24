import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex p-4 justify-between'>
      <h3 className='text-theme font-semibold text-lg'>Purience</h3>
      <ul className='text-black text-sm flex gap-5 items-center'>
        <li>About Us</li>
        <li>Contact US</li>
        <li className='bg-theme p-2 rounded-2xl'><a href="#">Login</a></li>
      </ul>
    </div>
  )
}

export default Navbar
