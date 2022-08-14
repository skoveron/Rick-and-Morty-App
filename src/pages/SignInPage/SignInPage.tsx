import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import SignIn from "../../components/SignIn";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <div className={styles.signInContainer}>
      <Navigation />
      <h1 className={styles.h1}>Sign In</h1>
      <div className={styles.signInWrapper}>
        <SignIn />
        <p>
          Or <Link to="/signUp">Sign Up</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
