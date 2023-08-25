import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface InitialState {
    message: string | null,
}

const initialState: InitialState = {
    message: null,
}


export const alertMessageSlice = createSlice({
    name: 'alertMessage',
    initialState,
    reducers: {
        addMessage: (state, action:PayloadAction<InitialState>) => {
            state.message = action.payload.message;
        }
    }
});


export const { addMessage } = alertMessageSlice.actions;

export const selectMessage = (state: RootState) => state.alertMessage.message;

export default alertMessageSlice.reducer;