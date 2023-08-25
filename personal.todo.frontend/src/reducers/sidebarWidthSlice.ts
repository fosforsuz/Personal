import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SideBarWidth } from "../types/sidebar.interface";
import { RootState } from "../store/store";

const localStorageWidth = localStorage.getItem('sidebarWidth');
const initialWidth = localStorageWidth ? parseInt(localStorageWidth) : 268;

const initialState: SideBarWidth = {
    width: initialWidth,
};

export const sidebarWidthSlice = createSlice({
    name: 'sidebarWidth',
    initialState,
    reducers: {
        setSidebarWidth: (state, action:PayloadAction<SideBarWidth>) => {
            state.width = action.payload.width;
        },
    }
});

export const { setSidebarWidth } = sidebarWidthSlice.actions;
export const selectSidebarWidth = (state: RootState) => state.sidebarWidth.width;
export default sidebarWidthSlice.reducer;
