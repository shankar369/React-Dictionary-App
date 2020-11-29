import React from "react";
import Phonetic from "../Phonetic/Phonetic";
import Meaning from "../Meaning/Meaning";
import "./Card.css";

const Card = ({ example }) => {
  const { phonetics, meanings } = example;
  return (
    <div className="card">
      {phonetics.map((phonetic, i) => (
        <Phonetic key={i} phonetic={phonetic} />
      ))}
      {meanings.map((meaning, i) => (
        <Meaning key={i} meaning={meaning} />
      ))}
    </div>
  );
};

export default Card;
