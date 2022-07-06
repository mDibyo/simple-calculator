import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";

function Display() {
  const { currentStackValue } = useContext(CalculatorContext);
  return <div className="calculator--display">{currentStackValue}</div>;
}

export default Display;
