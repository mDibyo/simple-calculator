import { ReactNode, useEffect } from "react";
import useKeyboardShortcut from "../lib/useKeyboardShortcut";

interface InputKeyProps {
  children: ReactNode;
  onPress(): void;
  keyboardKey: string;
}

function InputKey({ children, onPress, keyboardKey }: InputKeyProps) {
  useKeyboardShortcut(keyboardKey, onPress);
  return (
    <button className="calculator--key" onClick={onPress}>
      {children}
    </button>
  );
}

export default InputKey;
