import React from "react";
import Phonetic from "../Phonetic/Phonetic";
import Meaning from "../Meaning/Meaning";
import "./Card.css";

const Card = ({ example }) => {
  const { phonetics, meanings } = example;
  console.log(example,"----------example")
  return (
    <div className="card">
      <h1 className="sub-heading">Phonetics</h1>

      {phonetics.map((phonetic, i) => (
        <Phonetic key={i} phonetic={phonetic} />
      ))}
      <div className="sub-heading">Meanings</div>

      {meanings.map((meaning, i) => (
        <Meaning key={i} meaning={meaning} />
      ))}
    </div>
  );
};

export default Card;
