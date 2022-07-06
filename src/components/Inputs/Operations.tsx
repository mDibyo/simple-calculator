import EqualKey from "./EqualKey";
import OperatorKey from "./OperatorKey";
import { Operation } from "../operations";

function Operations() {
  return (
    <div className="calculator--operations">
      <OperatorKey operation={Operation.Addition} value="+" keyboardKey="+" />
      <OperatorKey
        operation={Operation.Subtraction}
        value="−"
        keyboardKey="-"
      />
      <OperatorKey
        operation={Operation.Multiplication}
        value="×"
        keyboardKey="*"
      />
      <OperatorKey operation={Operation.Division} value="÷" keyboardKey="/" />
      <EqualKey />
    </div>
  );
}

export default Operations;
