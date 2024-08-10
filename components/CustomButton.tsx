import React from 'react'
import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({title, containerStyles, textStyles, rightIcon,handleClick}: CustomButtonProps) => {
  return (
    <button
        onClick={handleClick}
        className={`custom-btn ${containerStyles}`}
    >
        <span
          className={`${textStyles}`}
        >
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-4 h-4">
            <Image 
              src={rightIcon}
              alt='right-icon'
              // fill
              width={20}
              height={20}
              className='absolute h-full w-full right-[-5px] text-transparent'
            />
          </div>
        )}
    </button>
  )
}

export default CustomButton