import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { CategoryState } from "../types/category.interface";

const initialState : CategoryState = {
    categories: [] 
}


export const categoryBaseSlice = createSlice({
    name: 'categoryBase',
    initialState,
    reducers: {
        addCategory: (state, action:PayloadAction<CategoryState>) => {
            state.categories = action.payload.categories;
        }
    }
});

export const { addCategory } = categoryBaseSlice.actions;

export const selectCategory = (state: RootState) => state.categoryBase.categories;

export default categoryBaseSlice.reducer;
