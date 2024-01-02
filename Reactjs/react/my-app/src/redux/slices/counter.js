import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    sum: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        MINUS: (state, action) => { state.counter = --state.counter },
        PLUSE: (state, action) => { state.counter = ++state.counter },
        SUM: (state, action) => { state.sum = state.sum + action.payload }
    }
});

export const { MINUS, PLUSE, SUM } = counterSlice.actions;
export default counterSlice.reducer; 