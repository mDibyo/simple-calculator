import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";

function EqualKey() {
  const { finalizeOperation } = useContext(CalculatorContext);
  return (
    <button className="calculator--key" onClick={finalizeOperation}>
      =
    </button>
  );
}

export default EqualKey;
