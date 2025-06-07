import React from 'react';
import './Animated.css';

const Animated = ({ src, text }) => {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <img src={src} style={{ width: '1450px', height: '500px' }} alt="Animated" />
      <div className="overlay-content">
        {"We are your local leading pet boarding and grooming service provider"}
      </div>
    </div>
  );
};

export default Animated;
