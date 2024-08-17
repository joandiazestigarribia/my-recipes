'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-11 z-10 ${otherClasses}`}>
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
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (recipe === '') {
            return alert('Please fill in the search bar');
        }

        updateSearchParams(recipe.toLowerCase())
    }

    const updateSearchParams = (recipe: string) => {
        const searchParams = new URLSearchParams(window.location.search);
    
        if (recipe) {
            searchParams.set('query', recipe)
        } else {
            searchParams.delete('query')
        }
    
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    
        router.push(newPathname, { scroll: false });
    }


    return (
        <form className="searchbar" onSubmit={handleSearch}>
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