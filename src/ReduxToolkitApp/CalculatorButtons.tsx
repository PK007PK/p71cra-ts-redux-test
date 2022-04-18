import { useDispatch, useSelector } from "react-redux"
import { clearHistory } from "./features/calculator/calculator-slice";
import { CalculatorArithmeticsButtons } from "./CalculatorArithmeticsButtons";
import { RootState } from "./store"

export const CalculatorButtons = () => {
    const dispatch = useDispatch()
    const {history} = useSelector((store: RootState)=>store.calculator);

    const handleClearHistory = () => {
        dispatch(clearHistory());
    }
    return <>
        <CalculatorArithmeticsButtons />
        <button onClick={handleClearHistory}>Clear history ({history.length})</button>
    </>
}