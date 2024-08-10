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
    newCategory: string
}

export interface RecipeDetailsPreparation {
    ingredients: string[],
    instructions: string[],
    servings: number,
    prepTime: string
}