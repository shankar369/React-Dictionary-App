import React from "react";
import { deleteMeaning } from "../../../api";

import "./ConfirmationPopup.css";
const ConfirmationPopup = ({ word, setDeleteWord, setLoading }) => {
  return (
    word && (
      <div className="popup">
        <div className="container">
          <div className="popup-text">
            Delete word <span className="word">'{word}'</span> ?
          </div>
          <div className="popup-buttons">
            <button
              onClick={() => deleteMeaning(word, setLoading, setDeleteWord)}
            >
              Yes
            </button>
            <button onClick={() => setDeleteWord("")}>No</button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmationPopup;
