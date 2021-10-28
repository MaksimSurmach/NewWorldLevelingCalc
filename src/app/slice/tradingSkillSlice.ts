import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITradingSkill } from '../../model'
import type { RootState } from '../store'

interface TradingSkillState {
    SelectedTradingSkill: ITradingSkill | null
    Recipes: any[]
    Levels: any[]
    SelectedRecipe: any | null
    Multiplier: number
}

const initialState = {
    SelectedTradingSkill: null,
    Recipes: [],
    Levels: [],
    SelectedRecipe: null,
    Multiplier: 1
} as TradingSkillState

export const tradingSkillSlice = createSlice({
    name: 'craft',
    initialState: initialState,
    reducers: {
        selectSkill: (state, action: PayloadAction<ITradingSkill>) => {
            state.SelectedTradingSkill = action.payload;
            state.Recipes =  require('../../data/json/ItemsRecipes/'+ action.payload.CraftItemsSrc);
            state.Levels =  require('../../data/json/TradeSkills/'+ action.payload.LevelingSrc);
            state.SelectedRecipe = null;
        },
        selectRecipe: (state, action: PayloadAction<any>) => {
            state.SelectedRecipe = action.payload
        },
        selectMultiplier: (state, action: PayloadAction<number>) => {
            state.Multiplier = action.payload
        }
    }
})

export const {selectSkill, selectRecipe, selectMultiplier} = tradingSkillSlice.actions

export const craft = (state: RootState) => state.tradingSkillSlice

export default tradingSkillSlice.reducer