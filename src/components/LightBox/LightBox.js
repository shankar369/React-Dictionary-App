import React from "react";
import "./LightBox.css";

function LightBox({ children }) {
  return (
    <div className="lightBox">
      <div className="lightbox-container">{children}</div>
    </div>
  );
}

export default LightBox;
