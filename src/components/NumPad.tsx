import DigitKey from "./DigitKey";

function Numpad() {
  return (
    <div>
      <div>
        <DigitKey value="1" />
        <DigitKey value="2" />
        <DigitKey value="3" />
      </div>
      <div>
        <DigitKey value="4" />
        <DigitKey value="5" />
        <DigitKey value="6" />
      </div>
      <div>
        <DigitKey value="7" />
        <DigitKey value="8" />
        <DigitKey value="9" />
      </div>
      <div>
        <DigitKey value="0" />
        <DigitKey value="." />
      </div>
    </div>
  );
}

export default Numpad;
