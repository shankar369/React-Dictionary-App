import React, { useState } from "react";
import LightBox from "../../LightBox/LightBox";
import Card from "../Card/Card";
import "./SavedMeanings.css";
import { MdDeleteForever } from "react-icons/md";

import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";

function SavedMeanings({ savedMeanings, setLoading }) {
  const [meaning, setMeaning] = useState([]);
  const [deleteWord, setDeleteWord] = useState("");

  const lightBox = () =>
    meaning.length !== 0 && (
      <LightBox showLightBox={true} word={meaning.word}>
        <div className="lightbox-word">
          <h1>{meaning[0].word}</h1>
        </div>
        <div className="lightbox-data">
          {meaning.map((example, i) => (
            <Card key={i} example={example} />
          ))}
        </div>
        <div className="close">
          <button onClick={() => setMeaning([])}>CLOSE</button>
        </div>
      </LightBox>
    );

  return (
    <div className="accordion">
      {savedMeanings.map((meaning, i) => (
        <div key={i}>
          <div className={`accordion-header effect8`}>
            <div className="word" onClick={() => setMeaning(meaning.data)}>
              {meaning.word}
            </div>
            <MdDeleteForever
              onClick={() => setDeleteWord(meaning.word)}
              className="delete-icon"
            />
          </div>
        </div>
      ))}
      <ConfirmationPopup
        word={deleteWord}
        setDeleteWord={setDeleteWord}
        setLoading={setLoading}
      />
      {lightBox()}
    </div>
  );
}

export default SavedMeanings;
