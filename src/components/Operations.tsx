import EqualKey from "./EqualKey";
import OperatorKey from "./OperatorKey";
import { Operation } from "./types";

function Operations() {
  return (
    <div className="calculator--operations">
      <OperatorKey operation={Operation.Addition} value="+" />
      <OperatorKey operation={Operation.Subtraction} value="−" />
      <OperatorKey operation={Operation.Multiplication} value="×" />
      <OperatorKey operation={Operation.Division} value="÷" />
      <EqualKey />
    </div>
  );
}

export default Operations;
