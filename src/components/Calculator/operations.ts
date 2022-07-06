export enum Operation {
  Addition,
  Subtraction,
  Multiplication,
  Division,
}

export const operationCalculators: {
  [operation in Operation]: (value1: number, value2: number) => number;
} = {
  [Operation.Addition]: (val1, val2) => val1 + val2,
  [Operation.Subtraction]: (val1, val2) => val1 - val2,
  [Operation.Multiplication]: (val1, val2) => val1 * val2,
  [Operation.Division]: (val1, val2) => val1 / val2,
};
