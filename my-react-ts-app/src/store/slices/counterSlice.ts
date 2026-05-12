import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICounterState {
    count: number,
    age: number
}

const initialState:ICounterState = {
    count: 0,
    age: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        setAge: (state, action:PayloadAction<number>) => {
            state.age = action.payload
        }
    }
})

export const {increment, decrement, setAge} = counterSlice.actions

export default counterSlice.reducer

