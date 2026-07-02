import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TicketType, PriceType } from '../../types';
import { PromoCodes } from '../../constants';

interface ITicketsState {
    tickets: TicketType | null,
    price: PriceType,
}

export interface IPayload {
    value: TicketType[keyof TicketType],
    key: string
}


const initialState:ITicketsState = {
    tickets: null,
    price: {
        tikets: 0,
        food: 0,
        baggage: 0,
        discount: 0,
        total: 0
    }
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

            const ticketsPrice = (newTickets.passengers || 0) * (newTickets.train?.railcar.price || 0)
            const foodPrice = newTickets.food?.reduce((acc, food) => {
                return acc += food.counter * food.price
            }, 0) || 0

            let newPrice:PriceType = {
                tikets: ticketsPrice,
                food: foodPrice,
                baggage: newTickets.extraBaggage ? 500 : 0,
            }
         
            const total = Object.values(newPrice).reduce((acc, value) => {
                  return  acc += value
            }, 0)

            let sale = 0

            if(newTickets.promoCode){
              
              sale = PromoCodes[(newTickets.promoCode as keyof typeof PromoCodes)] || 0
            }
      
            const discountPrice = (sale/100) * total 

             console.log(discountPrice);
            newPrice = {
                ...newPrice,
                discount:discountPrice,
                total: total - discountPrice
            }

            state.price = newPrice
            state.tickets = newTickets as TicketType
        },

    }
})

export const { setTickets, addToTickets } = ticketsSlice.actions

export default ticketsSlice.reducer

