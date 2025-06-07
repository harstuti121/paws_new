// import React, { useState } from 'react';
// import './Product.css';

// const categories = [
//   { id: 1, name: "Pet Supplies", icon: "🐾" },
//   { id: 2, name: "Pet Food", icon: "🍖" },
//   { id: 3, name: "Grooming Items", icon: "✂️" },
//   { id: 4, name: "Toys", icon: "🧸" },
//   { id: 5, name: "Pet Care", icon: "🧼" }
// ];

// export default function ProductCategories() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsToShow = 5;

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? categories.length - 1 : (prevIndex - 1) % categories.length
//     );
//   };

//   const getVisibleCategories = () => {
//     let visibleCategories = [];
//     for (let i = 0; i < itemsToShow; i++) {
//       visibleCategories.push(categories[(currentIndex + i) % categories.length]);
//     }
//     return visibleCategories;
//   };

//   const visibleCategories = getVisibleCategories();

//   return (
//     <section className="bg-yellow-50 py-16">
//       <div className="container mx-auto text-center">
//         <h6 className='font-bold text-rose-700'>FIND HEALTHY PRODUCT BY CATEGORY</h6>
//         <h1 className="text-4xl font-bold mb-8">Browse by Categories</h1>

//         <div className="flex justify-center items-center gap-8">
//           {/* Backward Button */}
//           <button
//             onClick={handlePrev}
//             className="p-2 bg-rose-500 text-white rounded-full"
//           >
//             ◀
//           </button>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-items-center">
//             {visibleCategories.map((category, index) => (
//               <div
//                 key={`${category.id}-${index}`}
//                 className="bg-white shadow-md p-4 rounded-full flex flex-col items-center cursor-pointer justify-center transition-colors duration-300"
//                 style={{ width: '200px', height: '200px' }}
//               >
//                 <div className="text-5xl mb-2">{category.icon}</div>
//                 <h3 className="text-lg font-bold">{category.name}</h3>
//               </div>
//             ))}
//           </div>

//           {/* Forward Button */}
//           <button
//             onClick={handleNext}
//             className="p-2 bg-rose-500 text-white rounded-full"
//           >
//             ▶
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import './Product.css';

const categories = [
  { id: 1, name: "Pet Supplies", icon: "🐾" },
  { id: 2, name: "Pet Food", icon: "🍖" },
  { id: 3, name: "Grooming Items", icon: "✂️" },
  { id: 4, name: "Toys", icon: "🧸" },
  { id: 5, name: "Pet Care", icon: "🧼" }
];

export default function ProductCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : (prevIndex - 1) % categories.length
    );
  };

  const getVisibleCategories = () => {
    let visibleCategories = [];
    for (let i = 0; i < itemsToShow; i++) {
      visibleCategories.push(categories[(currentIndex + i) % categories.length]);
    }
    return visibleCategories;
  };

  const visibleCategories = getVisibleCategories();

  return (
    <section className="bg-yellow-50 py-16">
      <div className="container mx-auto text-center">
        <h6 className="font-bold text-rose-700">Find Healthy Products by Category</h6>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Browse by Categories</h1>

        <div className="flex justify-center items-center gap-6">
          {/* Backward Button */}
          <button
            onClick={handlePrev}
            className="p-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full shadow-md transition duration-300"
          >
            ◀
          </button>

          {/* Category Cards */}
          <div className="flex gap-6">
            {visibleCategories.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="category-circle flex flex-col items-center justify-center text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-5xl">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">{category.name}</h3>
              </div>
            ))}
          </div>

          {/* Forward Button */}
          <button
            onClick={handleNext}
            className="p-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full shadow-md transition duration-300"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
