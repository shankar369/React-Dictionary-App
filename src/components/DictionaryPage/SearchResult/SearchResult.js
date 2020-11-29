import React from "react";
import Card from "../Card/Card";
import { postMeaning } from "../../../api";

const SearchResult = ({
  data,
  word,
  setData,
  setLoading,
  showSave,
  setShowSave,
}) => (
  <div>
    {data.map((example, i) => (
      <Card key={i} example={example} />
    ))}
    {data.length !== 0 && (
      <div className="button-group">
        {showSave && (
          <button
            onClick={() => postMeaning({ word, data }, setLoading, setShowSave)}
          >
            Save
          </button>
        )}
        <button onClick={() => setData([])}>back</button>
      </div>
    )}
  </div>
);

export default SearchResult;
