import React from "react";
import Card from "../Card/Card";
// import { postMeaning } from "../../../api";
import "./SearchResult.css";

const SearchResult = ({
  data,
  word,
  setData,
  setLoading,
  showSave,
  setShowSave,
}) =>
<>
{data.length !== 0 && <h2 style={{color:'white', marginLeft: '10px'}}>Results for : {word}</h2> }
  {data.length !== 0 && (
    <div className="search-result">
      <div className="search-data">
        {data.map((example, i) => (
          <Card key={i} example={example} />
        ))}
      </div>

      <div className="button-group">
        {/* {showSave && (
          <button
            onClick={() => postMeaning({ word, data }, setLoading, setShowSave)}
          >
            Save
          </button>
        )} */}
        <button onClick={() => setData([])}>Clear</button>
      </div>
    </div>
  )}
    </>
  

export default SearchResult;
