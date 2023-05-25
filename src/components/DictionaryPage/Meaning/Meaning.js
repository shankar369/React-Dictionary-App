import React from "react";
import Definition from "../Definition/Definition";
import "./Meaning.css";

const Meaning = ({ meaning }) => {
  const { partOfSpeech, definitions } = meaning;
  return (
    <div className="meaning">
      <div className="parts-of-speech">
        <span className="sub-heading">Parts of speech: </span>
        {partOfSpeech}
      </div>
      {definitions.map((definition, i) => (
        <Definition key={i} definition={definition} />
      ))}
    </div>
  );
};

export default Meaning;
