import { IRecipe } from './items';

export interface ITradingSkill {
    Id: string
    Name: string
}

export interface ITradingWithRecipes extends ITradingSkill {
    Recipes: IRecipe[]
}