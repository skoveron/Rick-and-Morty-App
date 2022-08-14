import { FC, useState } from "react";
import Button from "../Button";
import styles from "./Form.module.css";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={styles.formWrapper}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <Button
        className={styles.buttonPrimary}
        title={title}
        onClick={() => handleClick(email, pass)}
      />
      {/* <button onClick={() => handleClick(email, pass)}>{title}</button> */}
    </div>
  );
};

export default Form;
