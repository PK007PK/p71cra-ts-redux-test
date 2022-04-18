import { configureStore } from "@reduxjs/toolkit";
import { calculatorSlice } from "../features/calculator/calculator-slice";

export type RootState = ReturnType<typeof store.getState>;

export const store =  configureStore({
    reducer: {
        calculator: calculatorSlice.reducer,
    }
})

