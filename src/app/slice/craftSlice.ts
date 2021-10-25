import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CraftSlice {
    Items: any[]
    SelectedItem: any
}
debugger;
const initialState = {
    Items: [],
    SelectedItem: {}
} as CraftSlice

export const craftSlice = createSlice({
    name: 'craft',
    initialState: initialState,
    reducers: {
        selectSkill: (state, action: PayloadAction<string>) => {
            let items = require('../../data/json/'+ action.payload + '.json')
            state.Items = items
        },
        selectRecipe: (state, action: PayloadAction<any>) => {
            state.SelectedItem = action.payload
        }
    }
})

export const {selectSkill, selectRecipe} = craftSlice.actions

export const craft = (state: RootState) => state.craftSlice

export default craftSlice.reducer