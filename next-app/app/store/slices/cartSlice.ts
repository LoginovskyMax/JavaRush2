import { ICartProduct, Iproduct } from '@/app/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICartState {
    products: ICartProduct[],
    total: number
}

// export interface IPayload {
//     value: TicketType[keyof TicketType],
//     key: string
// }


const initialState:ICartState = {
    total: 0,
    products: []
}

const cartSlice = createSlice({
    name: 'tikets',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Iproduct>) => {
            const productIndex = state.products.findIndex(item => item.id === action.payload.id)

            if(productIndex !== -1){
                state.products[productIndex].quanity += 1
                state.products[productIndex].totalPrice += action.payload.price
            } else {
                const newProduct:ICartProduct = {
                  quanity: 1,
                  totalPrice: action.payload.price,
                  id: action.payload.id,
                  product:  action.payload
                }

                state.products.push(newProduct)
            }

            state.total = state.products.reduce((acc, item) => {
                acc += item.totalPrice

                return acc
            }, 0)
        },
        removeProduct: (state, action: PayloadAction<Iproduct>) => {
            const productIndex = state.products.findIndex(item => item.id === action.payload.id)


            if(productIndex === -1) return


            if(state.products[productIndex].quanity === 1){
                state.products = state.products.filter(item => item.id !== action.payload.id)

                state.total = state.products.reduce((acc, item) => {
                acc += item.totalPrice

                return acc
            }, 0)

                return
            }

            state.products[productIndex].quanity -= 1
            state.products[productIndex].totalPrice -= action.payload.price

            state.total = state.products.reduce((acc, item) => {
                acc += item.totalPrice

                return acc
            }, 0)
        },
    }
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer

