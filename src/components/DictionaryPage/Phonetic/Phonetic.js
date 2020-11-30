import React from "react";
import "./Phonetic.css";

const Phonetic = ({ phonetic }) =>
  phonetic && (
    <div className="phonetics">
      <h1 className="sub-heading">Phonetics</h1>
      <div className="phonetics-text">{phonetic.text}</div>
      <div className="phonetics-audio">
        <audio
          id="audio2"
          src={phonetic.audio}
          type="audio/mp3"
          preload="auto"
          autobuffer="true"
          controls
        ></audio>
      </div>
    </div>
  );

export default Phonetic;
