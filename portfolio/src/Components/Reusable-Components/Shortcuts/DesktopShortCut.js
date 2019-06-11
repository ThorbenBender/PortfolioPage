import React from "react";

function DesktopShortCut(props) {
  return (
    <div>
      <img src={props.imgSource} alt={props.imgAlt} />
      <p>{props.shortcutName}</p>
    </div>
  );
}

export default DesktopShortCut;
