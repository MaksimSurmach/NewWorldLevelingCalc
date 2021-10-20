import { IRecipe } from './items';

export interface ITradingSkill {
    Id: string
    Name: string
    Image: string
}

export interface ITradingWithRecipes extends ITradingSkill {
    Recipes: IRecipe[]
}