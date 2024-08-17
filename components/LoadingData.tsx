'use client'
import React, { useEffect, useState } from 'react'
import { RecipeCard } from "@/components";
import { HomeProps, RecipeProps } from "@/types";
import { fetchRecipes } from "@/utils";
import Paginator from './Paginator';

const LoadingData = ({ searchParams }: HomeProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [allRecipes, setAllRecipes] = useState<RecipeProps[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const { recipes, totalPages } = await fetchRecipes({
                    newCategory: searchParams.newCategory || '',
                    query: searchParams.query || '',
                    page: currentPage
                });
                setAllRecipes(recipes);
                setTotalPages(totalPages);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [searchParams.newCategory, searchParams.query, currentPage]);

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    if (isLoading) {
        return <div className='flex justify-center mt-12 mb-12'>Loading...</div>;
    }

    if (allRecipes.length === 0) {
        return (
            <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                <p>We couldn't find any recipes matching your search.</p>
            </div>
        );
    }

    return (
        <>
            <div className="home__cars-wrapper">
                {allRecipes.map((recipe) => (
                    <RecipeCard key={recipe.path} recipe={recipe} />
                ))}
            </div>
            <div className='home__recipes-paginator mt-12'>
                <Paginator totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
        </>
    );
}

export default LoadingData;