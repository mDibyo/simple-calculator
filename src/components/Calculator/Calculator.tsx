import { CalculatorProvider } from "./CalculatorContext";
import Display from "./Display";
import Inputs from "./Inputs";

function Calculator() {
  return (
    <CalculatorProvider>
      <div className="calculator">
        <Display />
        <Inputs />
      </div>
    </CalculatorProvider>
  );
}

export default Calculator;
