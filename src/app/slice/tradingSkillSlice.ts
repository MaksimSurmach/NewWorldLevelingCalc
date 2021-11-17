import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITradingSkill } from '../../model'
import type { RootState } from '../store'

function setBoundaries(val: number) {
    if(val > 200) {
        return 200;
    }
    if(val < 0) {
        return 0;
    }
    return val;
}

function calcXP(start:number, finish:number, lavelDB:any){
    var totalXP:number = 0
    for (start; start < finish; start++) {
        totalXP = totalXP + lavelDB[start].InfluenceCost
    }
    return totalXP
}

interface TradingSkillState {
    SelectedTradingSkill: ITradingSkill | null
    Recipes: any[]
    Levels: any[]
    SelectedRecipe: any | null
    Totalxp: number
    levelChoser: {
        Start : number,
        Finish: number
    },
    CurrentItemXP: number
}

const initialState = {
    SelectedTradingSkill: null,
    Recipes: [],
    Levels: [],
    SelectedRecipe: null,
    Totalxp: 489277,
    levelChoser: {
        Start : 0,
        Finish: 150
    },
    CurrentItemXP: 1
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
            state.CurrentItemXP = action.payload.recipeExp
        },
        setStartLevel: (state, action: PayloadAction<number>) => {
            if(action.payload > state.levelChoser.Finish){
                state.levelChoser.Start = state.levelChoser.Finish;
                return;
            }
            state.levelChoser.Start = setBoundaries(action.payload);
            state.Totalxp = calcXP(state.levelChoser.Start, state.levelChoser.Finish, state.Levels)
        },
        setFinishLevel: (state, action: PayloadAction<number>) => {
            if(action.payload < state.levelChoser.Start){
                state.levelChoser.Finish = state.levelChoser.Start;
                return;
            }
            state.levelChoser.Finish = setBoundaries(action.payload);
            state.Totalxp = calcXP(state.levelChoser.Start, state.levelChoser.Finish, state.Levels)
        }
    }
})

export const {selectSkill, selectRecipe, setStartLevel, setFinishLevel} = tradingSkillSlice.actions

export const craft = (state: RootState) => state.tradingSkillSlice

export default tradingSkillSlice.reducer