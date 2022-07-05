interface DigitProps {
  digit: string;
}

function Digit({ digit }: DigitProps) {
  return <button>{digit}</button>;
}

export default Digit;
