import { createSlice } from '@reduxjs/toolkit';
import { configs } from 'configs/configs';

const initialState = {
    currentLanguage: configs.defaultLanguage
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        CHANGE_LANGUAGE: (state, action) => { state.currentLanguage = action.payload }
    }
});

export const { CHANGE_LANGUAGE } = languageSlice.actions;
export default languageSlice.reducer;