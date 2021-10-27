export interface ITradingSkill {
    Id: string
    Name: string
    ImageSrc: string
    CraftItemsSrc: string
    LevelingSrc: string
}

// Generated by https://quicktype.io

export interface IRecipe {
    Name:        string;
    Lvlcrafting: number;
    Exp:         ExpEnum | number;
    MinLvl:      number;
    MaxLvl:      number;
    Ingredients: Ingredient[];
}

export enum ExpEnum {
    Empty = "?",
}

export interface Ingredient {
    Resource: Resource;
}

export interface Resource {
    Name:     string;
    Quantity: number;
}

export interface TradingSkillLevel {
    Level:               number;
    RequiredLevel:       number;
    MaximumInfluence:    number;
    InfluenceCost:       number;
    CurrencyCost:        number;
    SanityCheck:         boolean;
    RecipeLevel:         number;
    RollBonus:           number;
    MinGearScoreBonus:   number;
    MaxGearScoreBonus:   number;
    MinGearScoreBonusT2: number;
    MaxGearScoreBonusT2: number;
    MinGearScoreBonusT3: number;
    MaxGearScoreBonusT3: number;
    MinGearScoreBonusT4: number;
    MaxGearScoreBonusT4: number;
    MinGearScoreBonusT5: number;
    MaxGearScoreBonusT5: number;
    ResourceTierUnlocks: number;
    XpReward:            number;
}
