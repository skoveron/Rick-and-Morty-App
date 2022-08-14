import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import SingleCharacterPage from "../pages/SingleCharacterPage";
import { useAuth } from "../hooks/auth";
import UserPage from "../pages/UserPage";

enum Pages {
  MainPage = "/",
  SignIn = "/signIn",
  SingleCharacterPage = "/character/:id",
  SignUp = "/signUp",
  UserPage = "/user",
}

const Router = () => {
  const { isAuth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Pages.MainPage}
          element={
            isAuth ? <MainPage /> : <Navigate to={Pages.SignIn} replace />
          }
        />
        <Route
          path={Pages.SingleCharacterPage}
          //element={<SingleCharacterPage />}
          element={<SingleCharacterPage />}
        />
        <Route
          path={Pages.UserPage}
          //element={<SingleCharacterPage />}
          element={
            isAuth ? <UserPage /> : <Navigate to={Pages.SignIn} replace />
          }
        />
        <Route path={Pages.SignIn} element={<SignInPage />} />
        <Route path={Pages.SignUp} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
