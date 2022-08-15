import React from "react";
import styles from "./Footer.module.css";
import line from "../../assets/line.png";
import copyR from "../../assets/copyR.png";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import ReactSwitch from "react-switch";

const Footer = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const onClickTheme = () => {
    const themeValue = theme === Theme.Light ? Theme.Dark : Theme.Light;
    onChangeTheme(themeValue);
  };
  return (
    <div className={styles.footerContainer}>
      <img className={styles.footerLine} src={line} alt="line" />
      <div className={styles.footerWrapper}>
        <img className={styles.footerCopyR} src={copyR} alt="copyR" />
        <div className={styles.switch}>
          <label>{theme === "light" ? "Light theme" : "Dark theme"}</label>
          <ReactSwitch
            onChange={onClickTheme}
            checked={theme === Theme.Dark}
            onColor="#6C1BDB"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
