// import React from 'react';

// const testimonials = [
//   { id: 1, name: "John Doe", comment: "Great service!", image: "https://via.placeholder.com/100" },
//   { id: 2, name: "Jane Smith", comment: "My dog loved it!", image: "https://via.placeholder.com/100" },
//   { id: 3, name: "Alice Johnson", comment: "Will definitely come back!", image: "https://via.placeholder.com/100" },
//   { id: 4, name: "Michael Brown", comment: "Highly recommend!", image: "https://via.placeholder.com/100" },
//   { id: 5, name: "Sarah Lee", comment: "Excellent care!", image: "https://via.placeholder.com/100" }
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>

//         {/* Bootstrap Carousel */}
//         <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
//           <div className="carousel-inner">
//             {testimonials.map((testimonial, index) => (
//               <div 
//                 key={testimonial.id} 
//                 className={`carousel-item ${index === 0 ? 'active' : ''}`}
//               >
//                 <div className="text-center p-6 bg-white shadow-lg rounded-lg">
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name} 
//                     className="rounded-full mx-auto mb-4"
//                   />
//                   <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
//                   <h3 className="text-xl font-bold">{testimonial.name}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useRef, useEffect } from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import r1 from '../assets/R1.jpg';
// import r2 from '../assets/R2.jpg';
// import r3 from '../assets/R3.jpg';
// import r4 from '../assets/R4.jpg';
// import r5 from '../assets/R5.jpg';
// import r6 from '../assets/R6.jpg';

// const testimonials = [
//   { id: 1, name: "Ava Thompson", comment: "Absolutely the best pet service! My dog is always happy.", image: r1 },
//   { id: 2, name: "Lucas Anderson", comment: "Professional and affordable grooming services. Loved it!", image: r2},
//   { id: 3, name: "Sophia Reynolds", comment: "Best quality pet food. My cat is healthier than ever!", image: r3 },
//   { id: 4, name: "Ethan Brooks", comment: "Vet consultation was super helpful. Great experience!", image:r4 },
//   { id: 5, name: "Mia Carter", comment: "Wonderful staff and excellent care. Highly recommended!", image: r5 },
//   { id: 6, name: "Oliver Scott", comment: "They treat pets like family. Exceptional service!", image: r6 },
// ];

// // Duplicate the array for infinite looping effect
// const infiniteTestimonials = [...testimonials, ...testimonials];

// export default function Testimonials() {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const scroll = () => {
//       if (carouselRef.current) {
//         const firstItem = carouselRef.current.children[0];
//         carouselRef.current.appendChild(firstItem.cloneNode(true));
//         carouselRef.current.removeChild(firstItem);
//       }
//     };

//     const interval = setInterval(scroll, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-300">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>

//         {/* Carousel Wrapper */}
//         <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
//           <div
//             ref={carouselRef}
//             className="flex space-x-4 animate-marquee"
//           >
//             {infiniteTestimonials.map((testimonial, index) => (
//               <div key={index} className="flex-none w-1/3 p-4">
//                 <div className="bg-white shadow-lg rounded-lg p-6">
//                   <FaQuoteLeft className="text-blue-400 text-3xl mb-4" />
//                   <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-blue-400" />
//                   <p className="text-gray-600 italic">"{testimonial.comment}"</p>
//                   <h3 className="text-lg font-semibold text-gray-700 mt-2">{testimonial.name}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import r1 from '../assets/R1.jpg';
import r2 from '../assets/R2.jpg';
import r3 from '../assets/R3.jpg';
import r4 from '../assets/R4.jpg';
import r5 from '../assets/R5.jpg';
import r6 from '../assets/R6.jpg';
import './Testimonials.css';

const testimonials = [
  { id: 1, name: "Ava Thompson", comment: "Absolutely the best pet service! My dog is always happy.", image: r1 },
  { id: 2, name: "Lucas Anderson", comment: "Professional and affordable grooming services. Loved it!", image: r2 },
  { id: 3, name: "Sophia Reynolds", comment: "Best quality pet food. My cat is healthier than ever!", image: r3 },
  { id: 4, name: "Ethan Brooks", comment: "Vet consultation was super helpful. Great experience!", image: r4 },
  { id: 5, name: "Mia Carter", comment: "Wonderful staff and excellent care. Highly recommended!", image: r5 },
  { id: 6, name: "Oliver Scott", comment: "They treat pets like family. Exceptional service!", image: r6 },
];

const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 1, behavior: "smooth" });

        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
        }
      }
    };

    const interval = setInterval(scroll, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
       <h6 className='font-bold text-rose-700'>REVIEWS SECTION</h6>
        <h1 className="section-title text-4xl font-bold mb-8">What Our Clients Say</h1>

        <div className="carousel-wrapper">
          <div ref={carouselRef} className="carousel">
            {infiniteTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                <p className="testimonial-text">"{testimonial.comment}"</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
