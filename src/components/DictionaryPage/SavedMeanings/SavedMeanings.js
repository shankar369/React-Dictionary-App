import React, { useState } from "react";
import LightBox from "../../LightBox/LightBox";
import Card from "../Card/Card";
import "./SavedMeanings.css";
import { MdDeleteForever } from "react-icons/md";

function SavedMeanings({ savedMeanings }) {
  const [meaning, setMeaning] = useState([]);

  const handleDelete = (word) => {
    console.log(word, "deleted");
  };

  const lightBox = () =>
    meaning.length !== 0 && (
      <LightBox showLightBox={true} word={meaning.word}>
        {meaning.map((example, i) => (
          <Card key={i} example={example} />
        ))}
        <div className="close-button" onClick={() => setMeaning([])}>
          CLOSE
        </div>
      </LightBox>
    );

  return (
    <div className="accordion">
      {savedMeanings.map((meaning, i) => (
        <div key={i}>
          <div className={`accordion-header effect8`}>
            <div onClick={() => setMeaning(meaning.data)}> {meaning.word} </div>
            <MdDeleteForever
              onClick={() => handleDelete(meaning.word)}
              className="delete-icon"
            />
          </div>
        </div>
      ))}
      {lightBox()}
    </div>
  );
}

export default SavedMeanings;
