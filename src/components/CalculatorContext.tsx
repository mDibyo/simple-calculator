import { createContext, useCallback, useMemo, useState } from "react";

interface StackFrame {
  digits: string[];
  previousValue: number;
  operator: string | null;
}

interface CalculatorContextValue {
  pushDigit(digit: string): void;
  popDigit(): void;

  pushOperator(operator: string): void;
  finalizeOperation(): void;

  currentStackValue: number;
}

// TODO: Type defaultValue correctly
const CalculatorContext = createContext<CalculatorContextValue>(
  undefined as any
);

function calculateDigitsValue(digits: string[]): number {
  return parseInt(digits.join(""), 10);
}

export function CalculatorProvider({ children }) {
  const [currentStackFrame, setCurrentStackFrame] = useState<StackFrame>({
    digits: [],
    previousValue: 0,
    operator: null,
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

  const pushOperator = useCallback((operator: string) => {
    finalizeOperation();
    setCurrentStackFrame((stackFrame) => {
      return {
        previousValue:
          calculateDigitsValue(stackFrame.digits) || stackFrame.previousValue,
        digits: [],
        operator,
      };
    });
  }, []);

  const finalizeOperation = useCallback(() => {
    setCurrentStackFrame((stackFrame) => {
      if (stackFrame.operator === null) {
        return stackFrame;
      }

      const { previousValue, operator, digits } = stackFrame;
      const currentValue = calculateDigitsValue(digits);
      let operationResult: number;
      switch (operator) {
        case "+": {
          operationResult = previousValue + currentValue;
          break;
        }
        default:
          throw new TypeError(`Unknown operator ${operator}`);
      }

      return {
        previousValue: operationResult,
        digits: [],
        operator: null,
      };
    });
  }, []);

  const currentStackValue =
    calculateDigitsValue(currentStackFrame.digits) ||
    currentStackFrame.previousValue;
  const value = useMemo(
    () => ({
      pushDigit,
      popDigit,
      currentStackValue,
      pushOperator,
      finalizeOperation,
    }),
    [pushDigit, popDigit, currentStackValue, pushOperator, finalizeOperation]
  );
  console.log("value", value);
  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorContext;
