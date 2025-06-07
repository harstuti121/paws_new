// import React from 'react';
// import Slider from 'react-slick';
// import './front.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; 
// import i2 from './p2.jpg';
// import i3 from './p3.jpg';
// import i4 from './p4.jpg';
// import i6 from './p6.jpg';
// import i8 from './p8.jpg';


// const front = () => {
//   const images = [
//   i2,i4,i6,i8
//   ];
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//   };
//   return (
//     <div className="hero-slider">
//       <Slider {...settings}>
//         {images.map((img, index) => (
//           <div key={index} className="slide">
//             <div
//               className="slide-image"
//               style={{ backgroundImage: `url(${img})` }}
//             > 
//             <h2 className="slide-text" style={{ textShadow: '2px 2px 4px #800000'}}>
//             Welcome to, <span style={{ color: 'yellow', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>Paws & Paradise! 🐶🐾</span>
//             </h2>
//               <p className='para'> Your one-stop destination for pet-friendly groceries, vet consultations, and heartwarming pet stories! 🐕🐱</p>
//               {/* <button className='hero-btn-h'>Book Now</button> */}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
// export default front; 


// import React from 'react';
// import './front.css';
// import i2 from './p2.jpg';
// import i4 from './p4.jpg';
// import i6 from './p6.jpg';
// import i8 from './p8.jpg';

// const Front = () => {
//   return (
//     <div className="hero-section">
//       {/* Left Text Section */}
//       <div className="text-section">
//         <h1 className="text-5xl font-bold text-gray-800 mb-6">
//           Welcome to <span className="text-yellow-600">Paws & Paradise!</span> 🐾
//         </h1>
//         <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//           Where wagging tails meet endless love! Explore top-quality pet groceries, 
//           trusted vet consultations, and heartwarming stories. Let’s make every day 
//           special for your furry companions!
//         </p>
//         <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">
//           Explore Now
//         </button>
//       </div>

//       {/* Right Photo Section */}
//       <div className="photo-grid">
//         <img src={i2} alt="Dog 1" className="grid-img" />
//         <img src={i4} alt="Dog 2" className="grid-img" />
//         <img src={i6} alt="Dog 3" className="grid-img" />
//         <img src={i8} alt="Dog 4" className="grid-img" />
//         <img src={i8} alt="Dog 5" className="grid-img" />
//         <img src={i2} alt="Dog 6" className="grid-img" />
//       </div>
//     </div>
//   );
// };

// export default Front;

import React, { useEffect } from 'react';
import './front.css';
import i2 from './p2.jpg';
import i4 from './p4.jpg';
import i6 from './p6.jpg';
import i8 from './p8.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Front = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration
      easing: 'ease-in-out',  // Easing effect for animation
      once: true,  // Run animation only once
    });
  }, []);

  return (
    <div className="hero-section">
      {/* Left Text Section */}
      <div className="text-section" data-aos="fade-right">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-yellow-600">Paws & Paradise!</span> 🐾
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Where wagging tails meet endless love! Explore top-quality pet groceries, 
          trusted vet consultations, and heartwarming stories. Let’s make every day 
          special for your furry companions!
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">
          Explore Now
        </button>
      </div>

      {/* Right Photo Section */}
      <div className="photo-grid" data-aos="fade-left">
        <img src={i2} alt="Dog 1" className="grid-img" />
        <img src={i4} alt="Dog 2" className="grid-img" />
        <img src={i6} alt="Dog 3" className="grid-img" />
        <img src={i8} alt="Dog 4" className="grid-img" />
        <img src={i8} alt="Dog 5" className="grid-img" />
        <img src={i2} alt="Dog 6" className="grid-img" />
      </div>
    </div>
  );
};

export default Front;
