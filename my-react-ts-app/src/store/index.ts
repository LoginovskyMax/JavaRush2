import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import charactersSlice from "./slices/charactersSlice"
import ticketsSlice from './slices/ticketsSlice'
import { pokemonApi } from "./slices/pokemonSlice";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        characters: charactersSlice,
        tickets: ticketsSlice,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware)  =>  getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch