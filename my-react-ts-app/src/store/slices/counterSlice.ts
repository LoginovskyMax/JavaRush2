import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '../../types';

interface ICounterState {
    count: number,
    age: number,
    user: IUser | null
}

const initialState:ICounterState = {
    count: 0,
    age: 0,
    user: null
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
        },
        setUser: (state, action:PayloadAction<IUser | null>) => {
            state.user = action.payload
        }
    }
})

export const {increment, decrement, setAge, setUser} = counterSlice.actions

export default counterSlice.reducer

