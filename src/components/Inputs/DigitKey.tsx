import { useContext } from "react";
import CalculatorContext from "../CalculatorContext";
import InputKey from "./InputKey";

interface DigitKeyProps {
  value: string;
}

function DigitKey({ value }: DigitKeyProps) {
  const { pushDigit } = useContext(CalculatorContext);
  return (
    <InputKey onPress={() => pushDigit(value)} keyboardKey={value}>
      {value}
    </InputKey>
  );
}

export default DigitKey;
