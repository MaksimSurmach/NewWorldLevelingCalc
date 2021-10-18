import { IRecipe } from './items';

export interface ITradingSkill {
    Name: string
}

export interface ITradingWithRecipes extends ITradingSkill {
    Recipes: IRecipe[]
}