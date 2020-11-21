import React from "react";
import Definition from "../Definition/Definition";

const Meaning = ({ meaning }) => {
  const { partOfSpeech, definitions } = meaning;
  return (
    <div className="meaning">
      <div className="parts-of-speech">
        <span className="sub-heading">Parts of speech: </span>
        {partOfSpeech}
      </div>
      {definitions.slice(0, 3).map((definition, i) => (
        <Definition key={i} definition={definition} />
      ))}
    </div>
  );
};

export default Meaning;
