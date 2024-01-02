import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        CHANGE_THEME: (state, action) => { state.theme = action.payload }
    }
});

export const { CHANGE_THEME } = themeSlice.actions;
export default themeSlice.reducer; 