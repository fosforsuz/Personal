import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { OpenSideBar } from '../types/sidebar.interface';
import { RootState } from '../store/store';

const isOpen = localStorage.getItem('isOpen');
const initialState: OpenSideBar = {
    open: isOpen ? JSON.parse(isOpen) : true
};
export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state, action: PayloadAction<OpenSideBar>) => {
            state.open = action.payload.open;
        }
    }
});

export const { toggleSidebar } = sidebarSlice.actions;
export const selectSideBar = (state: RootState) => state.sidebar.open;
export default sidebarSlice.reducer;

// Path: src\store\store.ts

