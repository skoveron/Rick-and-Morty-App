import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../Form";
import { setUser } from "../../redux/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <div className={styles.signInContainer}>
      <Form title="sign in" handleClick={handleLogin} />
    </div>
  );
};

export default SignIn;
