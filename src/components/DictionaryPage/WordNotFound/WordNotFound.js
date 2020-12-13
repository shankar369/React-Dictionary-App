import React from "react";

const WordNotFound = ({ wordNotFound, word }) =>
  wordNotFound && (
    <div className="word-not-found">
      <div className="text">
        No meanings found for the word <span className="word">'{word}'</span>
      </div>
    </div>
  );

export default WordNotFound;
