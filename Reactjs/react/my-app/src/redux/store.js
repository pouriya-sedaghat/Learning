import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter';
import themeReducer from './slices/theme';
import languageReducer from './slices/language';

export const store = configureStore({
    reducer: {
        counterReducer,
        themeReducer,
        languageReducer
    }
});