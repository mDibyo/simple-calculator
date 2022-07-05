import { createContext, useCallback, useMemo, useState } from "react";
import { Operation } from "./types";

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

const operationCalculators: {
  [operation in Operation]: (value1: number, value2: number) => number;
} = {
  [Operation.Addition]: (val1, val2) => val1 + val2,
  [Operation.Subtraction]: (val1, val2) => val1 - val2,
  [Operation.Multiplication]: (val1, val2) => val1 * val2,
  [Operation.Division]: (val1, val2) => val1 / val2,
};

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

  const pushOperation = useCallback((operation: Operation) => {
    finalizeOperation();
    setCurrentStackFrame((stackFrame) => {
      return {
        previousValue:
          parseDigits(stackFrame.digits) || stackFrame.previousValue,
        digits: [],
        operation,
      };
    });
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

  const currentStackValue =
    currentStackFrame.digits.join("") ||
    currentStackFrame.previousValue.toString();
  const value = useMemo(
    () => ({
      pushDigit,
      popDigit,
      currentStackValue,
      pushOperation,
      finalizeOperation,
    }),
    [pushDigit, popDigit, currentStackValue, pushOperation, finalizeOperation]
  );
  console.log("value", value);
  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorContext;
