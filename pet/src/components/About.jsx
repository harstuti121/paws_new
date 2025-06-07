// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function About() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6 py-12">
//       <p className="text-lg text-gray-700 mt-4 max-w-3xl text-center">
//         Welcome to **PawsAndParadise** – your one-stop destination for pet care! 🐶🐱  
//         We provide high-quality pet products, grooming services, and doctor consultations  
//         to ensure your furry friends stay happy and healthy.
//       </p>

//       {/* Image Section */}
//       <div className="mt-8">
//         <img
//           src="https://source.unsplash.com/600x400/?pets,dogs,cats"
//           alt="Pets"
//           className="rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Key Features */}
//       <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold text-yellow-600">🛍️ Pet Groceries</h3>
//           <p className="text-gray-600 mt-2">Shop premium pet food and accessories.</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold text-yellow-600">🩺 Vet Consultation</h3>
//           <p className="text-gray-600 mt-2">Get expert advice from professional vets.</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold text-yellow-600">✂️ Grooming Services</h3>
//           <p className="text-gray-600 mt-2">Pamper your pet with our top grooming services.</p>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <button
//         onClick={() => navigate("/shop")}
//         className="mt-8 px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-yellow-600"
//       >
//         Explore Products 🛒
//       </button>
//     </section>
//   );
// }
import React from "react";
import i1 from "../assets/consultt.jpg";
import i2 from "../assets/g1.jpeg";
import i3 from "../assets/g4.jpeg";
import i4 from "../assets/pd1.jpg";

import './About.css';

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Section - Text */}
        <div className="about-text">
          <h1 className="about-title">
            Welcome to <span className="highlight">PawsAndParadise</span> 🐾
          </h1>
          <p className="about-description">
            We’re dedicated to creating a paradise for your furry friends! At <b>PawsAndParadise</b>, you’ll find premium pet care services, luxurious grooming, expert vet consultations, and high-quality pet products—all designed to pamper your beloved companions.
          </p>
          <ul className="about-list">
            <li>✔ Professional Vet Consultations</li>
            <li>✔ High-Quality Pet Grooming</li>
            <li>✔ Premium Pet Food and Accessories</li>
          </ul>
          <button className="about-button">Learn More About Us</button>
        </div>

        {/* Right Section - Images */}
        <div className="about-images">
          <div className="about-img-container">
            <img src={i1} alt="Puppy Care" className="about-img" />
          </div>
          <div className="about-img-container">
            <img src={i2} alt="Kitten Grooming" className="about-img" />
          </div>
          <div className="about-img-container">
            <img src={i3} alt="Healthy Pets" className="about-img" />
          </div>
          <div className="about-img-container">
            <img src={i4} alt="Luxury Grooming" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
