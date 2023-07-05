import { FaArrowRight } from "react-icons/fa6";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { label, icon, iconLeft, outline, size, square } = props || null;

  return (
    <button
      className={`
        ${styles.Button}
        ${iconLeft && styles.iconLeft}
        ${outline ? styles.outline : styles.fill}
        ${size ? styles[size] : styles.md}
        ${square && styles.square}
        `}
    >
      {square ? (
        icon && <FaArrowRight />
      ) : (
        <>
          <span>{label && label}</span>
          {icon && <FaArrowRight />}
        </>
      )}
    </button>
  );
};

export default Button;
