import BackspaceKey from "./BackspaceKey";
import { CalculatorProvider } from "./CalculatorContext";
import Display from "./Display";
import Numpad from "./NumPad";
import Operations from "./Operations";

function Calculator() {
  console.log("hello");
  return (
    <CalculatorProvider>
      <div className="calculator">
        <Display />
        <div className="calculator--inputs">
          <Numpad />
          <Operations />
        </div>
      </div>
    </CalculatorProvider>
  );
}

export default Calculator;
