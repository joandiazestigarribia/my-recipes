import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full fixed z-10 bg-white shadow-[0_4px_2px_-2px_rgba(128,128,128,0.13)]'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link
          href="/"
          className='flex justify-center items-center'
        >
          <Image 
            src="/logo-food.png"
            alt='logo food'
            width={118}
            height={118}
            className='object-contain'
          />
        </Link>
        <CustomButton
          title='Sign In'
          containerStyles='bg-primary-green text-white rounded-full  py-3 px-6'
        />
      </nav>
    </header>
  )
}

export default Navbar