import React from 'react';
import { useNavigate } from 'react-router-dom';
import i1 from '../assets/consultt.jpg'
import i2 from '../assets/hair.jpg'
import i3 from '../assets/pd1.jpg'

const services = [
  { id: 1, title: "Consult a vet online", description: "Discover the best walkers around", image:i1},
  { id: 2, title: "Online pet store", description: "Earn money by taking care of pets", image:i3},
  { id: 3, title: "Book Grooming Sessions", description: "Partner with us to open a franchise", image:i2}
];

export default function Services() {
  const navigate = useNavigate();  // Use react-router-dom for navigation

  const handleServiceClick = (service) => {
    if (service.title === 'Online pet store') {
      navigate('/signin');  // Navigate to the Shop component when Online Pet Store is clicked
    }else if (service.title === 'Consult a vet online') {
      navigate('/signin'); // Navigate to the Book component when Consult a vet online is clicked
    }else if (service.title === 'Book Grooming Sessions') {
      navigate('/signin'); // Navigate to the Book component when Consult a vet online is clicked
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-white shadow-lg p-6 rounded-lg text-center cursor-pointer hover:bg-gray-100"
            onClick={() => handleServiceClick(service)} // Handle service click
          >
            <img
              src={service.image}
              alt={service.title}
              className="mb-4 mx-auto rounded-full w-40 h-40 object-cover"
            />
            <h3 className="text-2xl font-extrabold mb-2">{service.title}</h3>
            <p className="text-black-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

