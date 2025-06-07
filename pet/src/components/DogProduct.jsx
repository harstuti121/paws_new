// src/ProductGrid.jsx
import React from 'react';

const DogProduct = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {Array(2).fill(null).map((_, index) => (
        <article
          key={index}
          className="min-h-[350px] w-full md:max-w-[320px] group cursor-pointer flex space-x-2 md:space-x-0 flex-row md:flex-col relative"
        >
          <div className="h-full md:h-64 w-32 md:w-full border rounded-md overflow-hidden py-2">
            <div className="flex items-center justify-between absolute w-full left-0 px-1 right-0 top-2 z-10">
              <div className="text-xs bg-green-600 text-white py-1 px-2 flex items-center space-x-1">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="9" y1="15" x2="15" y2="9"></line>
                  <circle cx="9.5" cy="9.5" r=".5" fill="currentColor"></circle>
                  <circle cx="14.5" cy="14.5" r=".5" fill="currentColor"></circle>
                  <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path>
                </svg>
                <span> Save 15%</span>
              </div>
              <div className="absolute right-2 top-0 z-10 hidden lg:block">
                <button>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="text-gray-700"
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-hidden relative block h-full w-full">
              <span style={{ display: 'inline-block', width: 'initial', height: 'initial' }}>
                <span style={{ display: 'block', width: 'initial', height: 'initial' }}>
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27256%27%20height=%27256%27/%3e"
                    style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial' }}
                  />
                </span>
                <img
                  alt=""
                  src="https://cdn.petsworld.network/v1/s/images/FD3DD65C89F04580DFCB3A5E2FDD2B40/640.webp"
                  decoding="async"
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center center',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="lg:mt-3 flex-2 flex flex-col">
            <div className="flex-1">
              <h4 className="text-sm md:text-lg font-semibold">Fancy Dog Collar</h4>
              <div className="flex flex-row justify-between items-center">
                <span className="text-md md:text-xl font-bold">$24.99</span>
                <span className="text-xs md:text-sm line-through text-gray-500">$29.99</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default DogProduct;
