import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { CalculatorForm } from './CalculatorForm';
import { CalculatorResult } from './CalculatorResult';
import { CalculatorHistory } from './CalculatorHistory';
import { CalculatorButtons } from './CalculatorButtons';

export enum Operation {
  ADD, 
  SUBTRACT, 
  MULTIPLY,
  DIVIDE,
}

function ReduxAppToolkit() {
  return (
    <div className="App">
      <Provider store={store}>
        <CalculatorForm />
        <CalculatorResult />
        <CalculatorButtons />
        <CalculatorHistory />
      </Provider>
    </div>
  );
}

export default ReduxAppToolkit;
