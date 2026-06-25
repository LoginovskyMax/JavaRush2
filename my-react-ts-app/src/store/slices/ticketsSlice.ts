import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TicketType } from '../../types';

interface ITicketsState {
    tickets: TicketType | null,
    price: number,
    totalPrice: number
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
        addToTickets: (state, action: PayloadAction<TicketType>) => {
            const newTickets = {
                ...state.tickets,
                ...action.payload
            }
            state.tickets = newTickets
        },

    }
})

export const { setTickets } = ticketsSlice.actions

export default ticketsSlice.reducer

