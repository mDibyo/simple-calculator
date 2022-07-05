import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";

interface DigitKeyProps {
  value: string;
}

function DigitKey({ value }: DigitKeyProps) {
  const { pushDigit } = useContext(CalculatorContext);
  return (
    <button className="calculator--key" onClick={() => pushDigit(value)}>
      {value}
    </button>
  );
}

export default DigitKey;
