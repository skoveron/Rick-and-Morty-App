import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage";
import MainPage from "../pages/MainPage";
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";
import SingleCharacterPage from "../pages/SingleCharacterPage";

enum Pages {
  MainPage = "/",
  Auth = "/auth",
  SingleCharacterPage = "/character/:id",
  SearchResultsPage = "/searched",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.MainPage} element={<MainPage />} />
        <Route path={Pages.Auth} element={<AuthenticationPage />} />
        <Route
          path={Pages.SingleCharacterPage}
          element={<SingleCharacterPage />}
        />
        <Route path={Pages.SearchResultsPage} element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
