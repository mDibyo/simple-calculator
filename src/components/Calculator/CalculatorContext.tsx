import { createContext, useCallback, useMemo, useState } from "react";
import { Operation, operationCalculators } from "./operations";

interface StackFrame {
  digits: string[];
  previousValue: number;
  operation: Operation | null;
}

interface CalculatorContextValue {
  pushDigit(digit: string): void;
  popDigit(): void;

  pushOperation(operation: Operation): void;
  finalizeOperation(): void;

  currentStackValue: string;
}

// TODO: Type defaultValue correctly
const CalculatorContext = createContext<CalculatorContextValue>(
  undefined as any
);

function parseDigits(digits: string[]): number {
  return parseFloat(digits.join(""));
}

export function CalculatorProvider({ children }) {
  const [currentStackFrame, setCurrentStackFrame] = useState<StackFrame>({
    digits: [],
    previousValue: 0,
    operation: null,
  });

  const pushDigit = useCallback((digit: string) => {
    setCurrentStackFrame((stackFrame) => ({
      ...stackFrame,
      digits: [...stackFrame.digits, digit],
    }));
  }, []);
  const popDigit = useCallback(() => {
    setCurrentStackFrame((stackFrame) => ({
      ...stackFrame,
      digits: stackFrame.digits.slice(0, -1),
    }));
  }, []);

  const finalizeOperation = useCallback(() => {
    setCurrentStackFrame((stackFrame) => {
      if (stackFrame.operation === null) {
        return stackFrame;
      }

      const { previousValue, operation, digits } = stackFrame;
      const currentValue = parseDigits(digits);
      let operationResult = operationCalculators[operation](
        previousValue,
        currentValue
      );

      return {
        previousValue: operationResult,
        digits: [],
        operation: null,
      };
    });
  }, []);
  const pushOperation = useCallback(
    (operation: Operation) => {
      finalizeOperation();
      setCurrentStackFrame((stackFrame) => {
        return {
          previousValue:
            parseDigits(stackFrame.digits) || stackFrame.previousValue,
          digits: [],
          operation,
        };
      });
    },
    [finalizeOperation]
  );

  const currentStackValue =
    currentStackFrame.digits.join("") ||
    currentStackFrame.previousValue.toString();
  const value = useMemo(
    () => ({
      pushDigit,
      popDigit,
      pushOperation,
      finalizeOperation,
      currentStackValue,
    }),
    [pushDigit, popDigit, currentStackValue, pushOperation, finalizeOperation]
  );
  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorContext;
