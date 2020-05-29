import React from "react";
import "./TitleBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const TitleBar = (props) => {
  return (
    <div className="appHeadingContainer">
      <span id="appHeading">App Name</span>
      <span id="titleIcon">
        {props.displayMode === "Day" && <FontAwesomeIcon icon={faMoon} />}
        {props.displayMode === "Night" && (
          <FontAwesomeIcon icon={faSun} color="#FCEA2D" />
        )}
        <FontAwesomeIcon icon={faShareAlt} style={{ marginLeft: 15 }} />{" "}
      </span>
    </div>
  );
};

export default TitleBar;
