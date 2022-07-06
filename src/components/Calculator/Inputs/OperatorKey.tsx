import { useContext } from "react";
import CalculatorContext from "../CalculatorContext";
import InputKey from "./InputKey";
import { Operation } from "../operations";

interface OperatorKeyProps {
  value: string;
  operation: Operation;
  keyboardKey: string;
}

function OperatorKey({ value, operation, keyboardKey }: OperatorKeyProps) {
  const { pushOperation } = useContext(CalculatorContext);
  return (
    <InputKey
      onPress={() => pushOperation(operation)}
      keyboardKey={keyboardKey}
    >
      {value}
    </InputKey>
  );
}

export default OperatorKey;
