import { useRef, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Checkbox() {
  const [check, setCheck] = useState(false);
  const checkboxRef = useRef();
  const checkmarkRef = useRef();
  const handleCheckbox = () => {
    setCheck((prev) => !prev);
  };
  return (
    <div
      ref={checkboxRef}
      onClick={handleCheckbox}
      className="relative w-[20px] h-[20px] border-[2px] border-green-500 rounded-sm"
    >
      {check && (
        <div
          ref={checkmarkRef}
          className="absolute flex items-center top-0 h-[16px] w-[16px] bg-green-500"
        >
          <FontAwesomeIcon icon={faCheck} />
        </div>
      )}
    </div>
  );
}

export default Checkbox;
