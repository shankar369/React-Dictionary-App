import React from "react";
import Phonetic from "../Phonetic/Phonetic";
import Meaning from "../Meaning/Meaning";

const Card = ({ example }) => {
  const { word, phonetics, meanings } = example;
  return (
    <div className="card">
      <div className="word">{word}</div>
      <h1>Phonetics</h1>
      {phonetics.map((phonetic, i) => (
        <Phonetic key={i} phonetic={phonetic} />
      ))}
      <h1>Meanings</h1>
      {meanings.slice(0, 3).map((meaning, i) => (
        <Meaning key={i} meaning={meaning} />
      ))}
    </div>
  );
};

export default Card;
