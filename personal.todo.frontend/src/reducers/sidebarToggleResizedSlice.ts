import { createSlice } from "@reduxjs/toolkit";
import { SideBarToggleResized } from "../types/sidebar.interface";
import { RootState } from "../store/store";

const initialState: SideBarToggleResized = {
    isResized: false,
};

export const sidebarToggleResizedSlice = createSlice({
    name: 'sidebarToggleResized',
    initialState,
    reducers: {
        toggleSidebarResized: (state, action) => {
            state.isResized = action.payload.isResized;
        }
    }
});

export const { toggleSidebarResized } = sidebarToggleResizedSlice.actions;
export const selectSidebarToggleResized = (state : RootState) => state.sidebarToggleResized.isResized;
export default sidebarToggleResizedSlice.reducer;
