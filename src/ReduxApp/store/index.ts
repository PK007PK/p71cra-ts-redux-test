import { combineReducers, createStore } from "redux";
import calculatorReducer from "../reducers/calculator-reducer";

// { to chcemy mieć w storze:
//     calculator: { // za calculator będzie odpowiadał reducer,
//         first: number;
//         second: number;
//         result: number | string;
//         history: string[];
//     }
//     user: { za usera odpowiada inny reducer
//     }
// }

//reducerów może być wiele, poniżej je zbieramy do kupy:
const rootReducer = combineReducers({
    calculator: calculatorReducer,
})

export type RootState = ReturnType<typeof store.getState>;

export const store =  createStore(rootReducer);

