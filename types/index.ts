import { MouseEventHandler } from "react"


export interface CustomButtonProps {
    title: string,
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    textStyles?: string
    rightIcon?: string
}

export interface RecipeProps {
    image: string,
    title: string,
    newCategory: string,
    path: string
}

export interface RecipeDetailsPreparation {
    ingredients: string[],
    instructions: string[],
    servings: number,
    prepTime: string
}

export interface FilterProps {
    newCategory?: string;
    query?: string;
    page?: number;
}

export interface HomeProps {
    searchParams: FilterProps;
}
