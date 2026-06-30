import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TicketType } from '../../types';

interface ITicketsState {
    tickets: TicketType | null,
    price: number,
    totalPrice: number
}

export interface IPayload {
    value: TicketType[keyof TicketType],
    key: string
}


const initialState:ITicketsState = {
    tickets: null,
    price: 0,
    totalPrice: 0
}

const ticketsSlice = createSlice({
    name: 'tikets',
    initialState,
    reducers: {
        setTickets: (state, action: PayloadAction<TicketType>) => {
            state.tickets = action.payload
        },
        addToTickets: (state, action: PayloadAction<IPayload>) => {
            const newTickets = {
                ...state.tickets,
                [action.payload.key] : action.payload.value
            }
            state.tickets = newTickets as TicketType
        },

    }
})

export const { setTickets, addToTickets } = ticketsSlice.actions

export default ticketsSlice.reducer

