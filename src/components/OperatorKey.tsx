import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";

interface OperatorKeyProps {
  value: string;
}

function OperatorKey({ value }: OperatorKeyProps) {
  const { pushOperator } = useContext(CalculatorContext);
  return <button onClick={() => pushOperator(value)}>{value}</button>;
}

export default OperatorKey;
