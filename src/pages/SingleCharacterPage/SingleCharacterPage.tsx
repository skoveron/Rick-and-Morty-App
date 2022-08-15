import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../common/axios";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
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
    <>
      <Navigation />
      <div className={styles.singleCharacterPageContainer}>
        <div className={styles.characterWrapper}>
          <h1>{character?.name}</h1>
          <img
            className={styles.characterImg}
            src={character?.image}
            alt={`${character?.name} img`}
          />
          <div className={styles.characterDescriptionWrapper}>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location.name}</p>
            <p>Species: {character?.species}</p>
            <p>Status: {character?.status}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SingleCharacterPage;
