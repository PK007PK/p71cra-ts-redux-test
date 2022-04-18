import { useDispatch, useSelector } from "react-redux"
import { addToHistory, setResult } from "./features/calculator/calculator-slice";
import { Operation } from "./ReduxAppToolkit";
import { RootState } from "./store"

export const CalculatorArithmeticsButtons = () => {
    const dispatch = useDispatch();
    const {first, second} = useSelector((store: RootState) => store.calculator);

    const handleSetOperationResult = (result: number | string) => {
        dispatch(setResult(result));
    }

    const handleAddHistory = (line: string) => {
        dispatch(addToHistory(line));
    }

    const handleOperation = (operation: Operation) => {
        switch(operation) {
            case Operation.ADD: {
                const operationResult = first + second;
                handleSetOperationResult(operationResult);
                handleAddHistory(`Added ${first} to ${second} and got ${operationResult}`);
                break;
            }
            case Operation.SUBTRACT: {
                const operationResult = first - second;
                handleSetOperationResult(operationResult);
                handleAddHistory(`Subtracted ${first} from ${second} and got ${operationResult}`);
                break;
            }
            case Operation.MULTIPLY: {
                const operationResult = first * second;
                handleSetOperationResult(operationResult);
                handleAddHistory(`Multiplied ${first} by ${second} and got ${operationResult}`);
                break;
            }
            case Operation.DIVIDE: {
                const operationResult = first / second;
                handleSetOperationResult(operationResult);
                handleAddHistory(`Divided ${first} by ${second} and got ${operationResult}`);
                break;
            }
        }
    }
    return <>
        <button onClick={()=>handleOperation(Operation.ADD)}>+</button>
        <button onClick={()=>handleOperation(Operation.SUBTRACT)}>-</button>
        <button onClick={()=>handleOperation(Operation.MULTIPLY)}>*</button>
        <button onClick={()=>handleOperation(Operation.DIVIDE)}>/</button>
    </>
}