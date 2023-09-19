import { createSlice } from "@reduxjs/toolkit";

interface rentType {
    rentName: string,
}

const initialStates: rentType = {
    rentName: "",
}


const RentSlice = createSlice({
    name: "regionSlice",
    initialState: initialStates,
    reducers: {
        addRentName: (state, action) => {
            state.rentName = action.payload
        },
        deleteRentName: (state) => {
            state.rentName = "";
        }
    },
})

export default RentSlice.reducer

export const { addRentName, deleteRentName } = RentSlice.actions