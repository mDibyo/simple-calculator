import Digit from "./Digit";

function Numpad() {
  return (
    <div>
      <div>
        <Digit digit="1" />
        <Digit digit="2" />
        <Digit digit="3" />
      </div>
      <div>
        <Digit digit="4" />
        <Digit digit="5" />
        <Digit digit="6" />
      </div>
      <div>
        <Digit digit="7" />
        <Digit digit="8" />
        <Digit digit="9" />
      </div>
      <div>
        <Digit digit="0" />
        <Digit digit="." />
      </div>
    </div>
  );
}

export default Numpad;
