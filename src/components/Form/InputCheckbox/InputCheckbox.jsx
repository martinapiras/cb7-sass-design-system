import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "./InputCheckbox.module.scss";

const InputCheckbox = ({ checked }) => {
  const [isChecked, setIsChecked] = useState(checked);

  console.log(isChecked);

  return (
    <label className={styles.InputCheckbox}>
      <input
        type="checkbox"
        className={styles.input}
        defaultChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      {isChecked && (
        <div className={styles.checked}>
          <FaCheck />
        </div>
      )}
      {/* <div className={`${styles.checked} ${isChecked && styles.active}`}>
        <FaCheck />
      </div> */}
    </label>
  );
};

export default InputCheckbox;
