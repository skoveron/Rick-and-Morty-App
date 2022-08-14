import { FC } from "react";
import styles from "./Button.module.css";

import { ButtonProps } from "../../interfaces";

const Button: FC<ButtonProps> = ({ title, onClick, width, disabled }) => {
  return (
    <button
      className={styles.buttonPrimary}
      onClick={onClick}
      style={width ? { width } : { width: "100%" }}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
