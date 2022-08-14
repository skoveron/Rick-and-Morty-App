import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import blogologo from "../../assets/Logo.jpg";
import user from "../../assets/user.png";
// import { SearchResults } from "../Search/Search";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/">
        <img className={styles.logoImg} src={blogologo} alt="Blogologo" />
      </Link>

      <Link to="/user">
        <img src={user} alt="User" />
      </Link>
    </div>
  );
};

export default Navigation;
