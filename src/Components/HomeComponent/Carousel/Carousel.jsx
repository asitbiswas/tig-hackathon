import React, { useState, useEffect } from "react";

const Carousel = (props) => {
  const [serial, setSerial] = useState(0);
  const [imageURLs, setImageURLs] = useState([]);
//   useEffect(() => {
//     props.imageURLs.map((item) => {
//       fetch(item).then((resp) => {
//         resp.blob().then((blb) => {
//           setImageURLs([...imageURLs, URL.createObjectURL(blb)]);
//         });
//       });
//     });
//     changeImage();
//   });

//   const changeImage = () => {
//     setTimeout(() => {
//       serial < imageURLs.length - 1 ? setSerial(serial + 1) : setSerial(0);
//       document
//         .getElementById("carouselImage")
//         .setAttribute("src", imageURLs[serial]);
//     }, 30000);
//   };
  return (
    <div className="CarouselContainer">
      <img alt="" id="carouselImage" width={window.innerWidth} />
    </div>
  );
};

export default Carousel;
