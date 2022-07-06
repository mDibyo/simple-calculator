import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";
import InputKey from "./InputKey";

function EqualKey() {
  const { finalizeOperation } = useContext(CalculatorContext);
  return (
    <InputKey onPress={finalizeOperation} keyboardKey="=">
      =
    </InputKey>
  );
}

export default EqualKey;
