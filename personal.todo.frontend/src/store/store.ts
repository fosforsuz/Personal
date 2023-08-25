import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../reducers/sidebarToggleSlice";
import sidebarWidthSlice from "../reducers/sidebarWidthSlice";
import sidebarToggleResizedSlice from "../reducers/sidebarToggleResizedSlice";
import categoryBaseSlice from "../reducers/categoryBaseSlice";
import alertMessageSlice from "../reducers/alertMessageSlice";

export const store = configureStore({
    reducer: {
        // Reducers
        sidebar: sidebarSlice,
        sidebarWidth: sidebarWidthSlice,
        sidebarToggleResized: sidebarToggleResizedSlice,
        categoryBase: categoryBaseSlice,
        alertMessage: alertMessageSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

