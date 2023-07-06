import styles from "./InputText.module.scss";

const InputText = (props) => {
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

  return (
    <div className={styles.inputForm}>
      <label htmlFor={id} className={`${error && styles.error}`}>
        <span className={styles.label}>{label && label}</span>
        <input
          type="text"
          placeholder={placeholder}
          id={id}
          name={name}
          className={`${styles.input} ${error && styles.error} ${
            line && styles.line
          }`}
          disabled={disabled}
          onChange={(e) => handleChange(e.target.value)}
        />
        {error && errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </label>
    </div>
  );
};

export default InputText;
