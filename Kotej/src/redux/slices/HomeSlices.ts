import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface homeType {
    home:any,
    status: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any
}

const initialStates: homeType = {
    home: [],
    status: null,
    error: null,
}

export const getHome = createAsyncThunk('get/home', async () => {
    const response = await axios.get('http://192.168.56.1:7777/api/gethome');
    return response.data
})

const HomeSlices = createSlice({
    name:"homeSlice",
    initialState:initialStates,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getHome.pending, (state) => {
            state.status = 'pending'
        }).addCase(getHome.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.home = action.payload
        }).addCase(getHome.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})

export default HomeSlices.reducer