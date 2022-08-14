import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import SignUp from "../../components/SignUp";
import styles from "../SignInPage/SignInPage.module.css";
const SignUpPage = () => {
  return (
    <div className={styles.signInContainer}>
      <Navigation />
      <h1 className={styles.h1}>Sign Up</h1>
      <div className={styles.signInWrapper}>
        <SignUp />
        <p>
          Already have an account? <Link to="/signIn">Sign In</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
