import React from "react";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../../interfaces";
import styles from "./SingleCharacter.module.css";

interface SingleCharacterProps {
  character: ICharacter;
}

const SingleCharacter = ({ character }: SingleCharacterProps) => {
  const navigate = useNavigate();

  const clickHandler = () => navigate(`/character/${character.id}`);

  return (
    <div className={styles.characterWrapper} onClick={clickHandler}>
      <img
        className={styles.singleCharacterImg}
        src={character.image}
        alt="lost img"
      ></img>
      <div>{character.name}</div>
      <div>{character.status}</div>
    </div>
  );
};

export default SingleCharacter;
