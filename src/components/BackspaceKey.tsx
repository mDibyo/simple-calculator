import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";

function BackspaceKey() {
  const { popDigit } = useContext(CalculatorContext);
  return <button onClick={popDigit}>🔙</button>;
}

export default BackspaceKey;
