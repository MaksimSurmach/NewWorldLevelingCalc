import { configureStore } from '@reduxjs/toolkit'
import craftSlice from './slice/craftSlice';

const store = configureStore({
    reducer: {
        craftSlice: craftSlice
      }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;