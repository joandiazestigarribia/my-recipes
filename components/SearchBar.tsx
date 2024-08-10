'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)

const SearchBar = () => {
    const [recipe, setRecipe] = useState('');
    return (
        <form className="searchbar">
            <div className='searchbar__item'>
                <SearchButton otherClasses='max-sm:hidden' />
            </div>
            <div className='searchbar__item'>
                <Image 
                    src="/icon-cook-book.png"
                    alt='cook book'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                />
                <input 
                    type="text"
                    name="recipe"
                    value={recipe}
                    onChange={(e) => setRecipe(e.target.value)}
                    placeholder='Look for your recipe'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='max-sm:hidden' />
            </div>
        </form>
    )
}

export default SearchBar