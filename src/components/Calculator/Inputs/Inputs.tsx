import Numpad from "./NumPad";
import Operations from "./Operations";

function Inputs() {
  return (
    <div className="calculator--inputs">
      <Numpad />
      <Operations />
    </div>
  );
}

export default Inputs;
