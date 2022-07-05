import { createContext, useCallback, useMemo, useState } from "react";

interface CalculatorContextValue {
  pushDigit(digit: string): void;
  popDigit(): void;

  currentStackValue: number;
}

// TODO: Type defaultValue correctly
const CalculatorContext = createContext<CalculatorContextValue>(
  undefined as any
);

export function CalculatorProvider({ children }) {
  const [currentStackFrame, setCurrentStackFrame] = useState<string[]>([]);

  const pushDigit = useCallback((digit: string) => {
    setCurrentStackFrame((stackFrame) => [...stackFrame, digit]);
  }, []);
  const popDigit = useCallback(() => {
    setCurrentStackFrame((stackFrame) => stackFrame.slice(0, -1));
  }, []);
  const currentStackValue = parseInt(currentStackFrame.join(""), 10) || 0;

  const value = useMemo(
    () => ({ pushDigit, popDigit, currentStackValue }),
    [pushDigit, popDigit, currentStackValue]
  );
  console.log("value", value);
  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorContext;
