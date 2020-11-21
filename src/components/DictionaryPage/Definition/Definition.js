import React from "react";

const Definition = ({ definition }) => {
  const { example, synonyms } = definition;
  console.log(synonyms);
  return (
    <div className="definition">
      <div>
        <span className="sub-heading">Definition : </span>
        {definition.definition}
      </div>
      <div className="example">
        <span className="sub-heading">Example : </span> {example}
      </div>
      <div class="synonyms">
        <div class="sub-heading">Synonyms : </div>
        {synonyms && synonyms.join(", ")}{" "}
      </div>
    </div>
  );
};

export default Definition;
