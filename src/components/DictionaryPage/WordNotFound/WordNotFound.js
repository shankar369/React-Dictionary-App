import React from "react";

const WordNotFound = ({ wordNotFound, setWordNotFound, word }) =>
  wordNotFound && (
    <div className="word-not-found">
      <div className="text">
        No meanings found for the word <span className="word">'{word}'</span>
      </div>
      <button onClick={() => setWordNotFound(false)}>back</button>
    </div>
  );

export default WordNotFound;
