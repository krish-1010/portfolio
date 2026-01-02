import React from "react";
import "./Gallery.css";

import img1 from "../components/imgs/image1.jpg";
import img2 from "../components/imgs/image2.jpg";
import img3 from "../components/imgs/image3.jpg";
import img4 from "../components/imgs/image4.jpg";
import img5 from "../components/imgs/image5.jpg";
// import img6 from "../components/imgs/image6.jpg";
// import img7 from "../components/imgs/image7.jpg";
// import img8 from "../components/imgs/image8.jpg";

const Gallery = () => {
  const images = [img2, img5, img1, img4, img3];
  return (
    <div className="gallery" id="gallery">
      <div className="container">
        <h2>
          <span className="gray">My </span>
          <span className="purple"> Gallery</span>
        </h2>
        <p className="subheading">Change the world by being yourself.</p>

        <div className="grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
