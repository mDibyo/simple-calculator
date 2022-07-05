import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";
import { Operation } from "./types";

interface OperatorKeyProps {
  value: string;
  operation: Operation;
}

function OperatorKey({ value, operation }: OperatorKeyProps) {
  const { pushOperation } = useContext(CalculatorContext);
  return <button onClick={() => pushOperation(operation)}>{value}</button>;
}

export default OperatorKey;
