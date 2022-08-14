import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Navigate, useNavigate } from "react-router-dom";

import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search";

import SingleCharacter from "../../components/SingleCharacter";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCharacters } from "../../redux/actionCreators/fetchCharacters";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { error, loading, characters, count, pages, prev, next } =
    useAppSelector((state) => state.characters);
  let [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.SearchContainer}>
            <h1>Blog</h1>
            <Search />
          </div>
          {loading && <p className={styles.loading}>Loading</p>}
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.charactersWrapper}>
            {characters.map((character) => (
              <SingleCharacter key={character.id} character={character} />
            ))}
          </div>
        </div>

        <Pagination
          pageCount={pages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />

        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
