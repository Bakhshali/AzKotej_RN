import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface regionType {
    data: any,
    filterName: string,
    status: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any
}

const initialStates: regionType = {
    data: [],
    filterName: "",
    status: null,
    error: null,
}

export const getData = createAsyncThunk('get/region', async () => {
    const response = await axios.get('http://192.168.56.1:7777/api/getregion');
    return response.data
})



const RegionSlice = createSlice({
    name: "regionSlice",
    initialState: initialStates,
    reducers: {
        addFilterName: (state, action) => {
            state.filterName = action.payload
        },
        deleteFilterName: (state) => {
            state.filterName = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.status = 'pending'
        }).addCase(getData.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        }).addCase(getData.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})

export default RegionSlice.reducer

export const { addFilterName, deleteFilterName } = RegionSlice.actions