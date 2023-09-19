import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface homeType {
    home: any,
    favorites: any,
    status: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any
}

const initialStates: homeType = {
    home: [],
    favorites: [],
    status: null,
    error: null,
}

export const getHome = createAsyncThunk('get/home', async () => {
    const response = await axios.get('http://192.168.56.1:7777/api/gethome');
    return response.data
})

const HomeSlices = createSlice({
    name: "homeSlice",
    initialState: initialStates,
    reducers: {
        addToFavorite: (state, action) => {
            const itemId = action.payload._id;
            const isFavorite = state.favorites.some((favorite: any) => favorite._id === itemId);

            if (isFavorite) {
                state.favorites = state.favorites.filter((favorite: any) => favorite._id !== itemId);
            } else {
                state.favorites.push(action.payload);
            }
        }
    },
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

export const { addToFavorite } = HomeSlices.actions