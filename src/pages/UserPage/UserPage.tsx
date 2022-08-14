import React from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import styles from "./UserPage.module.css";
import { useAuth } from "../../hooks/auth";
import { useAppDispatch } from "../../hooks/redux";
import { removeUser } from "../../redux/slices/userSlice";
import Button from "../../components/Button";

const UserPage = () => {
  const dispatch = useAppDispatch();
  const { email } = useAuth();

  return (
    <>
      <div className={styles.userContainer}>
        <Navigation />
        <div className={styles.userWrapper}>
          <div className={styles.userInfo}>
            <div className={styles.userHello}>Welcome, {email}!</div>
            <Button
              className={styles.buttonPrimary}
              title="LogOut"
              onClick={() => dispatch(removeUser())}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserPage;
