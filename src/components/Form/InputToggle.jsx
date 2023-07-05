import { useState } from "react";
import styles from "./InputToggle.module.scss";

const InputToggle = ({ toggled }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <label className={`${styles.InputToggle} ${isToggled && styles.active}`}>
      <input
        type="checkbox"
        className={styles.input}
        defaultChecked={isToggled}
        onChange={handleToggle}
      />
      <span
        className={`${styles.toggle} ${isToggled && styles.toggled}`}
      ></span>
    </label>
  );
};

export default InputToggle;
