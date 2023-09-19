import { configureStore, } from "@reduxjs/toolkit";
import HomeSlices from "../slices/HomeSlices";
import PriceSlices from "../slices/PriceSlices";
import RegionSlices from "../slices/RegionSlices";
import RentSlices from "../slices/RentSlices";
import RoomSlices from "../slices/RoomSlices";
import StatusSlice from "../slices/StatusSlice";

export const store = configureStore({
    reducer: {
        RegionSlice: RegionSlices,
        HomeSlice: HomeSlices,
        RoomSlice: RoomSlices,
        PriceSlice: PriceSlices,
        RentSlice: RentSlices,
        StatusSlice:StatusSlice
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>