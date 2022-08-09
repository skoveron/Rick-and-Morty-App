import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleCharacterPage.module.css";

const SingleCharacterPage = () => {
  const params = useParams<"id">();

  return (
    <div className={styles.singleArticlePageWrapper}>
      <h1>Character {params.id}</h1>{" "}
    </div>
  );
};

export default SingleCharacterPage;

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
