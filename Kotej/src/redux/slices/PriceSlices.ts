import { createSlice } from "@reduxjs/toolkit";

interface priceType {
    minPrice: number,
    maxPrice: number
}

const initialStates: priceType = {
    minPrice: 0,
    maxPrice: 0
}


const RoomSlice = createSlice({
    name: "priceSlice",
    initialState: initialStates,
    reducers: {
        setMinPrice: (state, action) => {
            state.minPrice = action.payload
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload
        },
    }

})

export default RoomSlice.reducer

export const { setMinPrice, setMaxPrice } = RoomSlice.actions