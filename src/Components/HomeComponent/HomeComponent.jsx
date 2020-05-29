import React from "react";
import "./HomeComponent.css";
import Carousel from "./Carousel/Carousel";
const HomeComponent = () => {
  const imageURLs = [
    "https://images.unsplash.com/photo-1516052016015-6c951fdad2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://media.gettyimages.com/photos/western-region-of-maharashtra-state-were-hit-by-225-rain-fall-in-picture-id1216221332?s=612x612",
    // "https://source.unsplash.com/random/400x200",
    // "https://source.unsplash.com/random/400x200",
  ];
  return (
    <div className="HomeComponentContainer">
      <Carousel imageURLs={imageURLs} />
    </div>
  );
};

export default HomeComponent;
