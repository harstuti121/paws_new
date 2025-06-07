import React from 'react';
import g1 from '../assets/g1.jpeg';
import g2 from '../assets/g2.jpeg';
import g3 from '../assets/g3.jpeg';
import g4 from '../assets/g4.jpeg';
import g5 from '../assets/g5.jpeg';
import g6 from '../assets/g6.jpeg';
import g7 from '../assets/g7.jpeg';
import g8 from '../assets/g8.jpeg';
import g9 from '../assets/g9.jpeg';
import './Grooming.css';
import { useCart } from './CartContext'; // Import the CartContext

// Define the grooming services array with images, descriptions, and prices
const groomingServices = [
  {
    title: "Bath",
    description: "Regular bathing helps remove dirt, debris, and the 'doggy smell'.",
    image: g1,
    price: 450,
  },
  {
    title: "Nail Trimming",
    description: "Keeps nails short to ensure healthy feet and prevent painful walking.",
    image: g2,
    price: 350,
  },
  {
    title: "Ear Cleaning",
    description: "Regular cleaning prevents ear infections and maintains ear health.",
    image: g3,
    price: 400,
  },
  {
    title: "Perfume",
    description: "Leave your pet smelling fresh and clean.",
    image: g4,
    price: 500,
  },
  {
    title: "Comb Out",
    description: "Removes tangles and dead hair, promoting a healthy coat.",
    image: g5,
    price: 300,
  },
  {
    title: "Medicated Bath",
    description: "Special baths for skin conditions and overall health.",
    image: g6,
    price: 600,
  },
  {
    title: "Sanitary Trim",
    description: "Keeps your pet clean and comfortable in sensitive areas.",
    image: g7,
    price: 550,
  },
  {
    title: "Eye and Face Trim",
    description: "Keeps your pet's face looking neat and tidy.",
    image: g8,
    price: 380,
  },
  {
    title: "Lion Cut",
    description: "Stylish grooming cut for cats including bath and trim.",
    image: g9,
    price: 600,
  },
];

const Grooming = () => {
  const { addToCart } = useCart(); // Access the addToCart function

  const handleAddToCart = (service) => {
    // Create an item to add to the cart
    addToCart({
      id: service.id,
      title: service.title,
      image: service.image,
      price: service.price,
    });
    alert(`${service.title} has been added to the cart!`); // Notify the user
  };

  return (
    <div className="groom">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Grooming Services</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {groomingServices.map((service, index) => (
          <div key={index} className="card border overflow-hidden shadow-lg">
            <img 
              src={service.image} 
              alt={service.title} 
              className="mb-4 mx-auto rounded-md w-50 h-50 object-cover"
              />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
              <p className="text-gray-900 font-bold">Price: ₹{service.price}</p>
              {/* Book Now Button */}
              <button 
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500"
                onClick={() => handleAddToCart(service)} // Call handleAddToCart on click
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grooming;
