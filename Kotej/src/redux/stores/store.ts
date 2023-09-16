import {configureStore, } from "@reduxjs/toolkit";
import HomeSlices from "../slices/HomeSlices";
import RegionSlices from "../slices/RegionSlices";

export const store = configureStore({
    reducer:{
        RegionSlice:RegionSlices,
        HomeSlice:HomeSlices
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>