import styles from "./Badge.module.scss";
import { FaXmark } from "react-icons/fa6";

const Badge = (props) => {
  const { label, icon, iconLeft, outline, size, circle } = props || null;

  return (
    <div
      className={`
  ${styles.Badge}
  ${iconLeft && styles.iconLeft}
  ${outline ? styles.outline : styles.fill}
  ${size ? styles[size] : styles.md}
  ${circle && styles.circle}
  `}
    >
      {circle ? (
        <span>{label && label}</span>
      ) : (
        <>
          <span>{label && label}</span>
          {icon && <FaXmark />}
        </>
      )}
    </div>
  );
};

export default Badge;
