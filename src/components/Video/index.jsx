import React from 'react';
import './video.css';


const Video = () => {
  return (
    <div className="home-container">
      
      
      <div id="video" class="video-container">
        
      <iframe  width="1200" height="600" src="https://www.youtube.com/embed/e6T34u51MaA?si=r_e94clC6ZCF5GG6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Video;
