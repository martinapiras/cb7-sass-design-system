import { useState } from "react";
import styles from "./Dropdown.module.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Dropdown = (props) => {
  const { options } = props || null;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select an option");

  const handleChoice = (e) => {
    setSelectedValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={styles.dropdownContainer}
      onClick={() => setIsOpen(!isOpen)}
    >
      {selectedValue}
      <div className={styles.dropdown}>
        {isOpen && (
          <ul className={styles.list}>
            {options?.options?.map((option) => (
              <li
                key={option.id}
                className={styles.listOption}
                onClick={handleChoice}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        <div className={styles.icon}>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
