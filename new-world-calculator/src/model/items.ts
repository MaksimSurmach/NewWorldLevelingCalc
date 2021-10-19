export enum IItemTier {
    First,
    Second,
    Third,
    Fourth,
    Fifth
}

export interface ICraftItem {
    Name: string
    Tier: IItemTier
}

export interface IRecipe {
    Output: ICraftItem
    Ingridiends: ICraftItem[]
    ExperinceGain: number
    Tier: IItemTier
    RequiredLevel: number
}
