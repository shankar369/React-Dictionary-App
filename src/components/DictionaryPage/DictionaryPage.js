import React from "react";

// import SavedMeanings from "./SavedMeanings/SavedMeanings";

import "./DictionaryPage.css";
import SearchResult from "./SearchResult/SearchResult";

const DictionaryPage = ({
  // savedMeanings,
  setLoading,
  data,
  // wordNotFound,
  word,
  setData,
  showSave,
  setShowSave,
}) => {
  return (
    <div className="main-page">
      {/* {savedMeanings.length !== 0 && data.length === 0 && !wordNotFound && (
        <SavedMeanings
          savedMeanings={savedMeanings}
          setLoading={setLoading}
          setData={setData}
        />
      )} */}

      <SearchResult
        word={word}
        data={data}
        setData={setData}
        setLoading={setLoading}
        showSave={showSave}
        setShowSave={setShowSave}
      />
    </div>
  );
};

export default DictionaryPage;
