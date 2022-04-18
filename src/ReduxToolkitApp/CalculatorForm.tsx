import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setFirst, setSecond } from "./features/calculator/calculator-slice";
import { RootState } from "./store";

const CalculatorForm = () => {
    const dispatch = useDispatch();
    const {first, second} = useSelector((store: RootState) => store.calculator);

    const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirst(Number(e.target.value)));
    }

    const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecond(Number(e.target.value)));
    }

    return <>
        <input type="number" value={first} onChange={handleFirstChange}/>
        <input type="number" value={second} onChange={handleSecondChange}/>
    </>
}

export {CalculatorForm}