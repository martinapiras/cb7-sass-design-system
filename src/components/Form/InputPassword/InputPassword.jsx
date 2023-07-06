import { useState } from "react";
import styles from "./InputPassword.module.scss";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const InputPassword = (props) => {
  const {
    id,
    name,
    label,
    line,
    placeholder,
    disabled,
    error,
    errorMessage,
    handleChange,
  } = props || null;

  const [isVisible, setIsVisible] = useState(false);
  const toggleShowPassword = () => setIsVisible(!isVisible);

  return (
    <div className={styles.inputForm}>
      <label htmlFor={id} className={`${error && styles.error}`}>
        <span className={styles.label}>{label && label}</span>
        <div className={styles.inputWrapper}>
          <input
            type={isVisible ? "text" : "password"}
            placeholder={placeholder}
            id={id}
            name={name}
            className={`${styles.input} ${error && styles.error} ${
              line && styles.line
            }`}
            disabled={disabled}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className={styles.eye} onClick={toggleShowPassword}>
            {isVisible ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        {error && errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </label>
    </div>
  );
};

export default InputPassword;
