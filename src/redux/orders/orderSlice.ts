import { IProducts } from '@/models/products'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface OrderState {
  orders: IProducts[]
}

const initialState: OrderState = {
  orders: [],
}

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IProducts>) => {
        state.orders.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addOrder } = orderSlice.actions

export default orderSlice.reducer