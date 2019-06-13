import React from "react";
import closeIcon from "../../Icons/close-button.png";
import minimizeIcon from "../../Icons/minimize_window.png";

function ApplicationWindowBar(props) {
  return (
    <div>
      <p>{props.applicationName}</p>
      <img src={minimizeIcon} alt="minimize window icon" />
      <img src={closeIcon} alt="close window icon" />
    </div>
  );
}

export default ApplicationWindowBar;
