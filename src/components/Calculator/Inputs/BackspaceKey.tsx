import { useContext } from "react";
import CalculatorContext from "../CalculatorContext";
import InputKey from "./InputKey";

function BackspaceKey() {
  const { popDigit } = useContext(CalculatorContext);
  return (
    <InputKey onPress={popDigit} keyboardKey="Backspace">
      🔙
    </InputKey>
  );
}

export default BackspaceKey;
