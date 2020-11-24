import React, { useState } from "react";
import LightBox from "../../LightBox/LightBox";
import Card from "../Card/Card";
import "./SavedMeanings.css";

function SavedMeanings({ savedMeanings }) {
  const [meaning, setMeaning] = useState([]);

  const lightBox = () =>
    meaning.length !== 0 && (
      <LightBox showLightBox={true} setMeaning={setMeaning} word={meaning.word}>
        {meaning.map((example, i) => (
          <Card key={i} example={example} />
        ))}
      </LightBox>
    );

  return (
    <div className="accordion">
      {savedMeanings.map((meaning, i) => (
        <div key={i}>
          <div
            className={`accordion-header`}
            onClick={() => setMeaning(meaning.data)}
          >
            {meaning.word}
          </div>
        </div>
      ))}
      {lightBox()}
    </div>
  );
}

export default SavedMeanings;
