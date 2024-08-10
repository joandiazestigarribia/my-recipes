'use client'

import React, { useState } from 'react'
import { RecipeProps } from '@/types'
import Image from 'next/image';
import CustomButton from './CustomButton';
import RecipeDetails from './RecipeDetails';

interface RecipeCardProps {
    recipe: RecipeProps
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const { image, title, newCategory } = recipe;
    const [IsOpen, setIsOpen] = useState(false)
    return (
        <div className='recipe-card group'>
            <div className='recipe-card__content'>
                <div className='relative my-3 object-contain recipe-card__image'>
                    <Image
                        src={image}
                        alt='recipe'
                        fill priority
                        className='object-contain'
                    />
                </div>
                <div className='min-h-[78px]'>
                    <div>
                        <h2 className="recipe-card__content-category">
                            {newCategory}
                        </h2>
                    </div>
                    <div className=''>
                        <h2 className="recipe-card__content-title">
                            {title}
                        </h2>
                    </div>
                </div>
                <div className='relative flex w-full mt-2'>
                    <div className='recipe-card__btn-container'>
                        <CustomButton
                            title='View More'
                            containerStyles='w-full p-2 rounded-full bg-primary-green'
                            textStyles='text-white text-[12px]'
                            rightIcon='/right-arrow.svg'
                            handleClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>
            </div>
            <RecipeDetails 
                isOpen={IsOpen}
                closeModal={() => setIsOpen(false)}
                recipe={recipe}
            />
        </div>
    )
}

export default RecipeCard