import { createSlice } from "@reduxjs/toolkit";

interface regionType {
    count: number
}

const initialStates: regionType = {
    count: 0
}


const RoomSlice = createSlice({
    name: "roomSlice",
    initialState: initialStates,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            }
        }
    }

})

export default RoomSlice.reducer

export const { increment, decrement } = RoomSlice.actions