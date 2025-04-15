import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {

        AddToCart: (state, action) => {
            const exist = state.items.find((item) => item.id === action.payload.id)
            if (exist) {
                state.items = state.items.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
            } else {
                const item = action.payload
                state.items.push({ ...item, qty: 1 })
            }
        },

        RemoveFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },

        IncrimentItem: (state, action) => {
            state.items = state.items.map((item) => item.id === action.payload ? { ...item, qty: item.qty + 1 } : item)
        },

        DecrementItem: (state, action) => {
            state.items = state.items.map((item) => item.id === action.payload ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item)
        }
        
    }
})

export const { AddToCart, RemoveFromCart, IncrimentItem, DecrementItem } = cartslice.actions
export default cartslice.reducer