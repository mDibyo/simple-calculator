import { CalculatorProvider } from "./CalculatorContext";
import Display from "./Display";
import Inputs from "./Inputs";

function Calculator() {
  console.log("hello");
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
