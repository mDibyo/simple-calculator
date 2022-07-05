import BackspaceKey from "./BackspaceKey";
import { CalculatorProvider } from "./CalculatorContext";
import Display from "./Display";
import Numpad from "./NumPad";

function Calculator() {
  console.log("hello");
  return (
    <CalculatorProvider>
      <div>
        <Display />
        <Numpad />
        <BackspaceKey />
      </div>
    </CalculatorProvider>
  );
}

export default Calculator;
