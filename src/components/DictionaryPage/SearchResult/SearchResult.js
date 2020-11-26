import React from "react";
import Card from "../Card/Card";
import { postMeaning } from "../../../api";

const SearchResult = ({ data, word, setData }) => (
  <div>
    {data.map((example, i) => (
      <Card key={i} example={example} />
    ))}
    {data.length !== 0 && (
      <div className="button-group">
        <button onClick={() => postMeaning({ word, data })}>Save</button>
        <button onClick={() => setData([])}>back</button>
      </div>
    )}
  </div>
);

export default SearchResult;
