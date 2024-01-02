import { createContext } from "react";

export const StateContext = createContext({
    state: 'light',
    setState: (state) => { }
});