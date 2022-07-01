import React from "react";
import "./LoadSpinner.css";

function LoadSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}

export default React.memo(LoadSpinner);