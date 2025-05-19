import React, { useState } from 'react';
import './Slideshow.css'; // You can add your custom styles here

const Slideshow = () => {
  const images = [
    "/assets/mustang.jpg",
    "/assets/f150.jpg",
    "/assets/bronco.jpg",
    "/assets/explorer.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow">
      <button className="prev" onClick={prevImage}>❮</button>
      <img src={images[currentIndex]} alt="Car slideshow" className="slideshow-image" />
      <button className="next" onClick={nextImage}>❯</button>
    </div>
  );
};

export default Slideshow;
