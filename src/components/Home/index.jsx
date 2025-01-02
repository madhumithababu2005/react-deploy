import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import Footer from '../Footer';

const Home = () => {
  const slidesRef = useRef(null);
  const [index, setIndex] = useState(0);
  const slideImages = [
    "https://www.macworld.com/wp-content/uploads/2024/12/MicrosoftTeams-image.png",
    "https://www.macworld.com/wp-content/uploads/2024/12/mw-Apple-Watch-bf-primary-2.jpg?resize=1536%2C1024&quality=50&strip=all",
    "https://www.macworld.com/wp-content/uploads/2024/12/Apple-Black-Friday-deal.jpg?quality=50&strip=all",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slideImages.length]);

  const showSlide = (newIndex) => {
    if (newIndex < 0) {
      setIndex(slideImages.length - 1);
    } else if (newIndex >= slideImages.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <div className="slider">
      <div
        ref={slidesRef}
        className="slides"
        style={{
          transform: `translateX(-${index * 100}%)`,
          display: "flex",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {slideImages.map((src, i) => (
          <img key={i} src={src} alt={`Image ${i + 1}`} />
        ))}
      </div>
      <div className="navigation">
        <button className="prev" onClick={() => showSlide(index - 1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => showSlide(index + 1)}>
          &#10095;
        </button>
      </div>
      <div className="indicators">
        {slideImages.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => showSlide(i)}
          ></button>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
