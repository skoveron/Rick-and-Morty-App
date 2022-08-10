import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Navigate, useNavigate } from "react-router-dom";

import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Pagination from "../../components/Pagination/Pagination";

import SingleCharacter from "../../components/SingleCharacter";
import Sorting from "../../components/Sorting";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCharacters } from "../../redux/actionCreators/fetchCharacters";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { error, loading, characters, count, pages, prev, next } =
    useAppSelector((state) => state.characters);
  let [pageNumber, setPageNumber] = useState(1);

  // const { paginationInfo } = useAppSelector((state) => state.paginationInfo);
  // const pageCount = 42;
  // const count = 826;
  //const next: "https://rickandmortyapi.com/api/character/?page=2";
  //const prev: null;
  //console.log(characters);
  // const { error, loading, paginationInfo } = useAppSelector(
  //   (state) => state.paginationInfo
  // );
  // console.log(paginationInfo);
  // let [currentPage, setCurrentPage] = useState(1);
  // //const page = useRef(1);
  // const pageChangeHandler = ({ selected }: { selected: number }) => {
  //   currentPage = selected + 1;
  //   dispatch(fetchCharacters());
  // };

  // const navigate = useNavigate();

  // const clickHandler = ({ selected }: { selected: number }) => {
  //   navigate(`https://rickandmortyapi.com/api/character/?page=${selected}`);
  //   dispatch(fetchCharacters());
  // };

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
