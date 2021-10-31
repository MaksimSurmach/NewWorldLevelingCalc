import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './slice/homeSlice';
import tradingSkillSlice from './slice/tradingSkillSlice';
const store = configureStore({
  reducer: {
    tradingSkillSlice: tradingSkillSlice,
    homeSlice: homeSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;