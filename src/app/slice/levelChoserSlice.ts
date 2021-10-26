import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface LevelChoserState {
    Start: number;
    Finish: number;
}

const initialState = {
    Start: 0,
    Finish: 150,
} as LevelChoserState

function setBoundaries(val: number) {
    if(val > 200) {
        return 200;
    }
    if(val < 0) {
        return 0;
    }
    return val;
}

export const levelChoserSlice = createSlice({
    name: 'levelChoser',
    initialState: initialState,
    reducers: {
        setStartLevel: (state, action: PayloadAction<number>) => {
            if(action.payload > state.Finish){
                state.Start = state.Finish;
                return;
            }
            state.Start = setBoundaries(action.payload);
        },
        setFinishLevel: (state, action: PayloadAction<number>) => {
            if(action.payload < state.Start){
                state.Finish = state.Start;
                return;
            }
            state.Finish = setBoundaries(action.payload);
        }
    }
})

export const {setStartLevel, setFinishLevel} = levelChoserSlice.actions

export const levelChoser = (state: RootState) => state.levelChoserSlice

export default levelChoserSlice.reducer
