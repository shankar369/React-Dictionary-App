import React from "react";
import "./LightBox.css";

function LightBox({ children, setMeaning }) {
  return (
    <div className="lightBox">
      <div className="lightbox-container">{children}</div>
      <div className="close-button" onClick={() => setMeaning([])}>
        CLOSE
      </div>
    </div>
  );
}

export default LightBox;
