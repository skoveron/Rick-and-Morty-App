import React from "react";
import styles from "./Footer.module.css";
import line from "../../assets/line.png";
import copyR from "../../assets/copyR.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <img className={styles.footerLine} src={line} alt="line" />
      <div className={styles.footerWrapper}>
        <img className={styles.footerCopyR} src={copyR} alt="copyR" />
        <div>Dark theme</div>
      </div>
    </div>
  );
};

export default Footer;
