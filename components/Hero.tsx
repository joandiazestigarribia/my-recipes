'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const handleScroll = () => {

}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find the best recipes
        </h1>
        <p className='hero__subtitle'>
          Find delicious and healthy dishes prepared by our top chefs!
        </p>
        <CustomButton
          title="Explore Recipes"
          containerStyles="bg-primary-green text-white rounded-full mt-10 py-3 px-6"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
            src="/hero.jpg"
            alt='The best recipes'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero