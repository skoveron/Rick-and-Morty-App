import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";

import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import SingleCharacter from "../../components/SingleCharacter";
import Sorting from "../../components/Sorting";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCharacters } from "../../redux/actionCreators/fetchCharacters";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { error, loading, characters } = useAppSelector(
    (state) => state.characters
  );
  const pageCount = 42;
  const count = 826;
  //const next: "https://rickandmortyapi.com/api/character/?page=2";
  //const prev: null;
  //console.log(characters);
  // const { error, loading, paginationInfo } = useAppSelector(
  //   (state) => state.paginationInfo
  // );
  // console.log(paginationInfo);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <div className={styles.mainContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.contentContainer}>
            <h1>Blog</h1>
            <div className={styles.sortFilterContainer}>
              <Sorting />
              <Filter />
            </div>
            {loading && <p className={styles.loading}>Loading</p>}
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.charactersWrapper}>
              {characters.map((character) => (
                <SingleCharacter key={character.id} character={character} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
