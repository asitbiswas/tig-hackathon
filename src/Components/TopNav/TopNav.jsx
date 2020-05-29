import React, { useEffect } from "react";
import "./TopNav.css";
import {
  faHSquare,
  faTachometerAlt,
  faSearch,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopNav = (props) => {
  useEffect(() => {
    document
      .getElementById("StatNav")
      .children[0].children[0].setAttribute("id", "StatNav");
    document
      .getElementById("SearchNav")
      .children[0].children[0].setAttribute("id", "SearchNav");
    document
      .getElementById("InfoNav")
      .children[0].children[0].setAttribute("id", "InfoNav");
    document
      .getElementById("HomeNav")
      .children[0].children[0].setAttribute("id", "HomeNav");
  });
  const changeColor = (e) => {
    const clickedIcon = e.target.id;
    if (clickedIcon === "HomeNav") {
      document.getElementById("StatNav").classList.remove("onDisplay");
      document.getElementById("SearchNav").classList.remove("onDisplay");
      document.getElementById("InfoNav").classList.remove("onDisplay");
      document.getElementById("HomeNav").classList.add("onDisplay");
      props.setComponentOnDisplay("Home");
    } else if (clickedIcon === "StatNav") {
      document.getElementById("StatNav").classList.add("onDisplay");
      document.getElementById("SearchNav").classList.remove("onDisplay");
      document.getElementById("InfoNav").classList.remove("onDisplay");
      document.getElementById("HomeNav").classList.remove("onDisplay");
      props.setComponentOnDisplay("Stat");
    } else if (clickedIcon === "SearchNav") {
      document.getElementById("StatNav").classList.remove("onDisplay");
      document.getElementById("SearchNav").classList.add("onDisplay");
      document.getElementById("InfoNav").classList.remove("onDisplay");
      document.getElementById("HomeNav").classList.remove("onDisplay");
      props.setComponentOnDisplay("Search");
    } else if (clickedIcon === "InfoNav") {
      document.getElementById("StatNav").classList.remove("onDisplay");
      document.getElementById("SearchNav").classList.remove("onDisplay");
      document.getElementById("InfoNav").classList.add("onDisplay");
      document.getElementById("HomeNav").classList.remove("onDisplay");
      props.setComponentOnDisplay("Info");
    }
  };
  return (
    <div className="navItemContainer">
      <div className="navItem onDisplay" id="HomeNav" onClick={changeColor}>
        <FontAwesomeIcon icon={faHSquare} size="2x" id="HomeNav" />
      </div>
      <div className="navItem " id="StatNav" onClick={changeColor}>
        <FontAwesomeIcon icon={faTachometerAlt} size="2x" id="StatNav" />
      </div>
      <div className="navItem " id="SearchNav" onClick={changeColor}>
        <FontAwesomeIcon icon={faSearch} size="2x" id="SearchNav" />
      </div>
      <div className="navItem" id="InfoNav" onClick={changeColor}>
        <FontAwesomeIcon icon={faInfo} size="2x" id="InfoNav" />
      </div>
    </div>
  );
};

export default TopNav;
