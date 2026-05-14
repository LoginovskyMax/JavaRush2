import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import charactersSlice from "./slices/charactersSlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        characters: charactersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch