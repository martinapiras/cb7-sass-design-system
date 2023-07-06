import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import styles from "./InputSelect.module.scss";

const InputSelect = (props) => {
  const { options, defaultValue, handleChange } = props || null;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.selectContainer}>
      {options && (
        <>
          <select
            className={styles.select}
            name="products"
            id="products"
            defaultValue={defaultValue}
            onClick={() => setIsOpen(!isOpen)}
            onChange={(e) => handleChange(e.target.value)}
          >
            {options?.options?.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className={styles.icon}>
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </>
      )}
    </div>
  );
};

export default InputSelect;
