import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../common/axios";
import { useDebounce } from "../../hooks/debounce";
import { useInput } from "../../hooks/Input";
import { AllCharacter, ICharacter } from "../../interfaces";
import styles from "./Search.module.css";

const Search = () => {
  const input = useInput("");
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce<string>(input.value, 800);

  async function searchCharacters() {
    const response = await axios.get<AllCharacter<ICharacter>>("/character", {
      params: { name: debounced },
    });
    setCharacters(response.data.results);
  }

  useEffect(() => {
    if (debounced.length > 2) {
      searchCharacters().then(() => setDropdown(true));
    } else {
      setDropdown(false);
    }
  }, [debounced]);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search by name"
        {...input}
      ></input>
      {dropdown && (
        <ul className={styles.searchDropdown}>
          {characters.map((character) => {
            return (
              <li
                className={styles.charactersLi}
                key={character.id}
                onClick={() => navigate(`/character/${character.id}`)}
              >
                {character.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;

// import React, { useEffect, useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import axios from "../../common/axios";
// import { useDebounce } from "../../common/hooks/debounce";
// import { useInput } from "../../common/hooks/input";
// import { IArticle, ServerResponse } from "../../common/interfaces/interfaces";
// import styles from "./Search.module.css";
// import searchBtn from "../../assets/search.png";

// const Search = () => {
//   const navigate = useNavigate();
//   const input = useInput("");
//   const [dropdown, setDropdown] = useState(false);
//   const [articles, setArticles] = useState<IArticle[]>([]);

//   const debounced = useDebounce(input.value);

//   const AuthStr = "54ee2db275f04982a44c3132ae0f904e";

//   async function searchArticles() {
//     const response = await axios.get<ServerResponse<IArticle>>(`everything`, {
//       params: { q: debounced, language: "en", pageSize: 10, apiKey: AuthStr },
//     });
//     setArticles(response.data.articles);
//   }

//   useEffect(() => {
//     if (debounced.length > 3) {
//       searchArticles().then(() => setDropdown(true));
//     } else {
//       setDropdown(false);
//     }
//   }, [debounced]);

//   // function searchButtonHandler(event: React.MouseEvent<HTMLElement>) {
//   //   () => setDropdown(true);
//   // }

//   function keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>): void {
//     if (event.code === "Enter") {
//       navigate("/searched");
//     }
//     if (event.code === "Escape") {
//       input.value = "";
//     }
//   }

//   return (
//     <div className={styles.searchContainer}>
//       <input
//         type="text"
//         className={styles.searchInput}
//         placeholder="Search"
//         {...input}
//         onKeyDown={keyDownHandler}
//       />

//       <button className={styles.btn}>
//         <img className={styles.searchBtn} src={searchBtn} alt="search" />
//       </button>
//       {dropdown && (
//         <ul className="list-none absolute left-0 right-0 h-[200px] top-[42 px] shadow-md bg-white overflow-y-scroll">
//           {articles.map((article) => {
//             return (
//               <li
//                 className="py-2 px-4 hover:bg-gray-500 hover:transition-colors cursor-pointer hover:text-white"
//                 key={article.source.id + Math.random()}
//                 onClick={() => navigate("/article/article.id")}
//               >
//                 {article.title}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Search;
