import React from 'react';
import './about.css';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="home-container">
      
      <Footer />
      <div id="video" class="video-container">
        <h>Watch Now</h>
      <iframe  width="800" height="400" src="https://www.youtube.com/embed/e6T34u51MaA?si=r_e94clC6ZCF5GG6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default About;
