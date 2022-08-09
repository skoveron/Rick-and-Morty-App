import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../common/axios";
import { ISingeCharacter } from "../../interfaces";
import styles from "./SingleCharacterPage.module.css";

const SingleCharacterPage = () => {
  const params = useParams<"id">();
  const [character, setCharacter] = useState<ISingeCharacter | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchSingleCharacter() {
    const response = await axios.get<ISingeCharacter>(
      `/character/${params.id}`
    );
    setCharacter(response.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchSingleCharacter();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  return (
    <div className={styles.singleCharacterPageWrapper}>
      <div className={styles.characterWrapper}>
        <h1>{character?.name}</h1>
        <img
          className={styles.characterImg}
          src={character?.image}
          alt={`${character?.name} img`}
        />
        <div className={styles.characterDescriptionWrapper}>
          <p>Created: {character?.created}</p>

          <p>Gender: {character?.gender}</p>
          <p>Location: {character?.location.name}</p>
          <p>Species: {character?.species}</p>
          <p>Status: {character?.status}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacterPage;

// export const fetchCharacters = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       dispatch(charactersSlice.actions.fetching());
//       const response = await axios.get<AllCharacter<ICharacter>>("/character", {
//         params: {},
//       });

//       dispatch(charactersSlice.actions.fetchSuccess(response.data.results));
//     } catch (error) {
//       dispatch(charactersSlice.actions.fetchError(error as Error));
//     }
//   };
// };
// const SingleCharacterPage = () => {
//   const params = useParams<"id">();

//   return (
//     <div className={styles.singleArticlePageWrapper}>
//       <h1>Character {params.id}</h1>{" "}
//     </div>
//   );
// };

// export default SingleCharacterPage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "../../common/axios";
// import styles from "./SingleArticlePage.module.css";

// const SingleArticlePage = () => {
//   const params = useParams<"id">();

//   const [article, setArticle] = useState([]);

//   async function fetchSingleAirport() {
//     const response = await axios.get(`/article`);

//     console.log(response);
//   }

//   useEffect(() => {
//     fetchSingleAirport();
//   }, []);

//   return (
//     <div className={styles.singleArticlePageWrapper}>
//       <h1>Article {params.id}</h1>
//     </div>
//   );
// };

// export default SingleArticlePage;
