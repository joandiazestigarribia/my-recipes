'use client'

import { RecipeProps } from '@/types'
import { fetchRecipesDetails } from '@/utils';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react'

interface RecipeDetailsProps {
    recipe: RecipeProps;
    isOpen: boolean;
    closeModal: () => void;
}

const RecipeDetails = ({ recipe, isOpen, closeModal }: RecipeDetailsProps) => {
    const [recipeDetails, setRecipeDetails] = useState<any>(null);
    const keysToShow = {
        Duracion: 'Preparation time',
        Raciones: 'Number of servings',
        Ingredientes: 'Ingredients'
    };

    const renderValue = (key: string, value: any) => {
        if (Array.isArray(value)) {
            return (
                <ul>
                    {value.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        } else if (typeof value === 'object') {
            return JSON.stringify(value);
        } else {
            return value.toString();
        }
    };

    useEffect(() => {
        if (isOpen) {
            fetchRecipesDetails().then(details => {
                setRecipeDetails(details);
            }).catch(error => {
                console.error("Error fetching recipe details:", error);
            });
        }
    }, [isOpen]);
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </TransitionChild>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <DialogPanel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                    <button
                                        type='button'
                                        onClick={closeModal}
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-green-100 rounded-full'
                                    >
                                        <Image
                                            src="/close.svg"
                                            alt='close'
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        />
                                    </button>
                                    <div className='flex-1 flex flex-col gap-3'>
                                        <div className="relative w-full h-40">
                                            <Image
                                                src={recipe.image}
                                                alt='recipe image'
                                                fill priority
                                            />
                                        </div>
                                    </div>
                                    <div className='flex-1 flex flex-col gap-2'>
                                        <h2 className="font-semibold text-xl capitalize">
                                            {recipe.title}
                                        </h2>
                                        <div className='mt-3 flex flex-wrap gap-4'>
                                            {recipeDetails && Object.entries(keysToShow).map(([key, displayName]) => (
                                                recipeDetails[key] && (
                                                    <div className='flex flex-col gap-2 w-full' key={key}>
                                                        <h4 className='text-gray capitalize font-bold'>{displayName}</h4>
                                                        <div className='text-black-100'>{renderValue(key, recipeDetails[key])}</div>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default RecipeDetails