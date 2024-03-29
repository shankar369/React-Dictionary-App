import React from "react";
import "./Definition.css";

const Definition = ({ definition }) => {
  const { example, synonyms } = definition;
  return (
    <div className="definition">
      {definition.definition && (
        <div>
          <span className="sub-heading">Definition : </span>
          {definition.definition}
        </div>
      )}

      {example && (
        <div className="example">
          <span className="sub-heading">Example : </span> {example}
        </div>
      )}

      {synonyms?.length !== 0 && (
        <div className="synonyms">
          <div className="sub-heading">Synonyms : </div>
          {synonyms.join(",  ")}
        </div>
      )}
    </div>
  );
};

export default Definition;
