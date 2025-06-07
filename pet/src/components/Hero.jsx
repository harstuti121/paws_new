import React from 'react';
import Dog from '../assets/dog_image-removebg-preview.png';

export default function Hero() {
  return (
    <section className="bg-yellow-100 py-16">
      <div className="container mx-auto flex flex-row items-center">
        <div className="flex flex-col items-start w-1/2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6">
            Take Good Care of Pets
          </h1>
          <p className="text-3xl text-black-600 mb-8">
            We are your local leading pet boarding and grooming service provider
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          {/* <img
            src={Dog}
            alt="Pet Hero"
            className="mt-8 rounded-lg shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
}
