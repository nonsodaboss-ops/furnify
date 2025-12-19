import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center'>
      <div className='bg-[#C0D5CE] rounded-md p-2 w-19 relative h-12'>
        <p className='text-2xl font-semibold absolute left-7'>Furnify</p>
      </div>
      <div className='flex'>
        <ul className='flex gap-10 font-medium'>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
        </ul>
        <input type="text" placeholder='Search in site               🔍' className='border-gray-300 border px-1 rounded-md ml-10' />
      </div>
    </nav>
  )
}

export default Nav