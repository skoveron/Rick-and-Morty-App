import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import blogologo from "../../assets/Logo.jpg";
// import { SearchResults } from "../Search/Search";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/">
        <img className={styles.logoImg} src={blogologo} alt="Blogologo" />
      </Link>
      <Search />
      <Link to="/auth">Auth</Link>
    </div>
  );
};

export default Navigation;
