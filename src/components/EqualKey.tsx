import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";

function EqualKey() {
  const { finalizeOperation } = useContext(CalculatorContext);
  return <button onClick={finalizeOperation}>=</button>;
}

export default EqualKey;
