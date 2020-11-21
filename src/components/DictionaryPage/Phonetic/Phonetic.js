import React from "react";

const Phonetic = ({ phonetic }) => (
  <div class="phonetics">
    <div class="phonetics-text">{phonetic.text}</div>
    <div class="phonetics-audio">
      <audio
        id="audio2"
        src={phonetic.audio}
        type="audio/mp3"
        preload="auto"
        autobuffer
        controls
      ></audio>
    </div>
  </div>
);

export default Phonetic;
