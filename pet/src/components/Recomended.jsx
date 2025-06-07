// // // Recomended.js
// // import React, { useContext } from 'react';
// // import Slider from 'react-slick';
// // import { CiStar } from "react-icons/ci";
// // import i1 from '../assets/pd.jpg';
// // import i2 from '../assets/pd1.jpg';
// // import i3 from '../assets/pd3.jpg';
// // import i4 from '../assets/pd4.jpg';
// // import i5 from '../assets/pd5.jpg';
// // import { CartContext } from './CartContext'; // Import the CartContext

// // const Recomend = [
// //     { id: 1, title: "Beaphar Aloe Vera Shiny Dog Shampoo 250 ml", price: "Rs 350", rating: 5, image: i1 },
// //     { id: 2, title: "Royal Canin Mini Puppy Food for Dogs 4 kg", price: "Rs 1,500", rating: 4, image: i2 },
// //     { id: 3, title: "Pedigree Adult Dog Food for Nutrition 3 kg", price: "Rs 1,200", rating: 5, image: i3 },
// //     { id: 4, title: "Himalaya Pet Food for Adult Dogs 2 kg", price: "Rs 1,000", rating: 4, image: i4 },
// //     { id: 5, title: "Himalaya Erina Coat Cleanser for Dogs 200 ml", price: "Rs 275", rating: 4, image: i5 },
// //     { id: 6, title: "Drools Calcium Supplement for Dogs 50 pcs Pack", price: "Rs 450", rating: 5, image: i1 },
// //     { id: 7, title: "Virbac Omega 3 Skin Supplement for Dogs 200 ml", price: "Rs 600", rating: 4, image: i2 },
// //     { id: 8, title: "Petlife Neem and Aloe Dog Shampoo 500 ml", price: "Rs 450", rating: 3, image: i3 },
// // ];

// // export default function Recomended() {
// //   const { addToCart } = useContext(CartContext); // Access addToCart function from context

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     slidesToShow: 5,
// //     slidesToScroll: 1,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 1,
// //         },
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1,
// //         },
// //       },
// //     ],
// //   };

// //   return (
// //     <section className="py-16 bg-gray-100">
// //       <div className="container mx-auto text-center">
// //         <h2 className="text-4xl font-bold mb-8">Recommended Products</h2>
// //         <Slider {...settings}>
// //           {Recomend.map((product) => (
// //             <div key={product.id} className="p-4">
// //               <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
// //                 <img
// //                   src={product.image}
// //                   alt={product.title}
// //                   className="mb-8 rounded-lg w-48 h-40 object-cover"
// //                 />
                
// //                 <div className="flex-grow flex flex-col justify-between">
// //                   <div className="text-center h-16 w-full">
// //                     <h3 className="text-xl font-bold mb-2 text-center h-full w-full overflow-hidden text-ellipsis line-clamp-2">
// //                       {product.title}
// //                     </h3>
// //                   </div>

// //                   <p className="text-gray-600 mb-2 text-lg font-medium">{product.price}</p>
                  
// //                   <div className="flex justify-center mb-4 space-x-1">
// //                     {[...Array(5)].map((_, index) => (
// //                       <CiStar
// //                         key={index}
// //                         className={index < product.rating ? 'text-yellow-400' : 'text-gray-300'}
// //                       />
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <button
// //                   className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mt-4"
// //                   onClick={() => addToCart(product)} // Call addToCart with the product
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </Slider>
// //       </div>
// //     </section>
// //   );
// // }

// // Recomended.js
// import React, { useContext } from 'react';
// import Slider from 'react-slick';
// import { CiStar } from "react-icons/ci";
// import i1 from '../assets/pd.jpg';
// import i2 from '../assets/pd1.jpg';
// import i3 from '../assets/pd3.jpg';
// import i4 from '../assets/pd4.jpg';
// import i5 from '../assets/pd5.jpg';
// import { CartContext } from './CartContext';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Recomend = [
//     { id: 1, title: "Beaphar Aloe Vera Shiny Dog Shampoo 250 ml", price: "Rs 350", rating: 5, image: i1 },
//     { id: 2, title: "Royal Canin Mini Puppy Food for Dogs 4 kg", price: "Rs 1,500", rating: 4, image: i2 },
//     { id: 3, title: "Pedigree Adult Dog Food for Nutrition 3 kg", price: "Rs 1,200", rating: 5, image: i3 },
//     { id: 4, title: "Himalaya Pet Food for Adult Dogs 2 kg", price: "Rs 1,000", rating: 4, image: i4 },
//     { id: 5, title: "Himalaya Erina Coat Cleanser for Dogs 200 ml", price: "Rs 275", rating: 4, image: i5 },
//     { id: 6, title: "Drools Calcium Supplement for Dogs 50 pcs Pack", price: "Rs 450", rating: 5, image: i1 },
//     { id: 7, title: "Virbac Omega 3 Skin Supplement for Dogs 200 ml", price: "Rs 600", rating: 4, image: i2 },
//     { id: 8, title: "Petlife Neem and Aloe Dog Shampoo 500 ml", price: "Rs 450", rating: 3, image: i3 },
// ];

// export default function Recomended() {
//   const { addToCart } = useContext(CartContext);
//   const navigate = useNavigate(); // Use the useNavigate hook

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8">Recommended Products</h2>
//         <Slider {...settings}>
//           {Recomend.map((product) => (
//             <div key={product.id} className="p-4">
//               <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="mb-8 rounded-lg w-48 h-40 object-cover"
//                 />
                
//                 <div className="flex-grow flex flex-col justify-between">
//                   <div className="text-center h-16 w-full">
//                     <h3 className="text-xl font-bold mb-2 text-center h-full w-full overflow-hidden text-ellipsis line-clamp-2">
//                       {product.title}
//                     </h3>
//                   </div>

//                   <p className="text-gray-600 mb-2 text-lg font-medium">{product.price}</p>
                  
//                   <div className="flex justify-center mb-4 space-x-1">
//                     {[...Array(5)].map((_, index) => (
//                       <CiStar
//                         key={index}
//                         className={index < product.rating ? 'text-yellow-400' : 'text-gray-300'}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 <button
//                   className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mt-4"
//                   onClick={() => {
//                     addToCart(product);
//                     navigate('/cart'); // Navigate to cart page after adding
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// // }
// import React from 'react';
// import Slider from 'react-slick';
// import { CiStar } from "react-icons/ci"; // Ensure CiStar is imported
// import i1 from '../assets/pd.jpg';
// import i2 from '../assets/pd1.jpg';
// import i3 from '../assets/pd3.jpg';
// import i4 from '../assets/pd4.jpg';
// import i5 from '../assets/pd5.jpg';

// const Recomend = [
//     { id: 1, title: "Beaphar Aloe Vera Shiny Dog Shampoo 250 ml", price: "Rs 350", rating: 5, image: i1 },
//     { id: 2, title: "Royal Canin Mini Puppy Food for Dogs 4 kg", price: "Rs 1,500", rating: 4, image: i2 },
//     { id: 3, title: "Pedigree Adult Dog Food for Nutrition 3 kg", price: "Rs 1,200", rating: 5, image: i3 },
//     { id: 4, title: "Himalaya Pet Food for Adult Dogs 2 kg", price: "Rs 1,000", rating: 4, image: i4 },
//     { id: 5, title: "Himalaya Erina Coat Cleanser for Dogs 200 ml", price: "Rs 275", rating: 4, image: i5 },
//     { id: 6, title: "Drools Calcium Supplement for Dogs 50 pcs Pack", price: "Rs 450", rating: 5, image: i1 },
//     { id: 7, title: "Virbac Omega 3 Skin Supplement for Dogs 200 ml", price: "Rs 600", rating: 4, image: i2 },
//     { id: 8, title: "Petlife Neem and Aloe Dog Shampoo 500 ml", price: "Rs 450", rating: 3, image: i3 },
// ];

// export default function Recomended({ AddToCart }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8">Recommended Products</h2>
//         <Slider {...settings}>
//           {Recomend.map((product) => (
//             <div key={product.id} className="p-4">
//               <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="mb-8 rounded-lg w-48 h-40 object-cover"  // Uniform size for images
//                 />
//                 <div className="flex-grow flex flex-col justify-between">
//                   <div className="text-center h-16 w-full">
//                     <h3 className="text-xl font-bold mb-2 text-center h-full w-full overflow-hidden text-ellipsis line-clamp-2">
//                       {product.title}
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 mb-2 text-lg font-medium">{product.price}</p>
//                   <div className="flex justify-center mb-4 space-x-1">
//                     {[...Array(5)].map((_, index) => (
//                       <CiStar
//                         key={index}
//                         className={index < product.rating ? 'text-yellow-400' : 'text-gray-300'}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mt-4"
//                   onClick={() => AddToCart(product)} // Call AddToCart when the button is clicked
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

// Recomended.jsx

// import React, { useContext } from 'react';
// import Slider from 'react-slick';
// import { CiStar } from "react-icons/ci"; // Ensure CiStar is imported
// import { CartContext } from './CartContext'; // Import the context
// import i1 from '../assets/pd.jpg';
// import i2 from '../assets/pd1.jpg';
// import i3 from '../assets/pd3.jpg';
// import i4 from '../assets/pd4.jpg';
// import i5 from '../assets/pd5.jpg';

// const Recomend = [
//     { id: 1, title: "Beaphar Aloe Vera Shiny Dog Shampoo 250 ml", price: "Rs 350", rating: 5, image: i1 },
//     { id: 2, title: "Royal Canin Mini Puppy Food for Dogs 4 kg", price: "Rs 1,500", rating: 4, image: i2 },
//     { id: 3, title: "Pedigree Adult Dog Food for Nutrition 3 kg", price: "Rs 1,200", rating: 5, image: i3 },
//     { id: 4, title: "Himalaya Pet Food for Adult Dogs 2 kg", price: "Rs 1,000", rating: 4, image: i4 },
//     { id: 5, title: "Himalaya Erina Coat Cleanser for Dogs 200 ml", price: "Rs 275", rating: 4, image: i5 },
//     { id: 6, title: "Drools Calcium Supplement for Dogs 50 pcs Pack", price: "Rs 450", rating: 5, image: i1 },
//     { id: 7, title: "Virbac Omega 3 Skin Supplement for Dogs 200 ml", price: "Rs 600", rating: 4, image: i2 },
//     { id: 8, title: "Petlife Neem and Aloe Dog Shampoo 500 ml", price: "Rs 450", rating: 3, image: i3 },
// ];

// export default function Recomended() {
//   const { addToCart } = useContext(CartContext); // Use the context

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
  
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8">Recommended Products</h2>
//         <Slider {...settings}>
//           {Recomend.map((product) => (
//             <div key={product.id} className="p-4">
//               <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="mb-8 rounded-lg w-48 h-40 object-cover"  // Uniform size for images
//                 />
                
//                 <div className="flex-grow flex flex-col justify-between">
//                   <div className="text-center h-16 w-full">
//                     <h3 className="text-xl font-bold mb-2 text-center h-full w-full overflow-hidden text-ellipsis line-clamp-2">
//                       {product.title}
//                     </h3>
//                   </div>

//                   <p className="text-gray-600 mb-2 text-lg font-medium">{product.price}</p>
                  
//                   <div className="flex justify-center mb-4 space-x-1">
//                     {[...Array(5)].map((_, index) => (
//                       <CiStar
//                         key={index}
//                         className={index < product.rating ? 'text-yellow-400' : 'text-gray-300'}
//                       />
//                     ))}
//                   </div>
//                 </div>
  
//                 <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mt-4"
//                   onClick={() => addToCart(product)} // Use addToCart from context
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

// import React, { useContext, useEffect, useState } from "react";
// import Slider from "react-slick";
// import { CiStar } from "react-icons/ci";
// import { CartContext } from "./CartContext";

// export default function Recomended() {
//   const { addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/data/pet-supplies.json") // Fetching from JSON file in public/data
//       .then((res) => {
//         console.log("📩 Fetch Status:", res.status);
//         return res.json();
//       })
//       .then((data) => {
//         console.log("📥 Fetched Pet Supplies Data:", data);

//         if (Array.isArray(data) && data.length > 0) {
//           const processedData = data.map((item) => ({
//             id: item.asin || Math.random(), // Use ASIN as unique ID
//             title: item.title || "No title available",
//             price: item.price || "Price not available",
//             rating: Math.floor(Math.random() * 5) + 1, // Generate random rating (if not provided)
//             image: item.images ? item.images.split("~")[0] : "https://via.placeholder.com/150",
//           }));

//           setProducts(processedData); // ✅ Set the processed products
//         } else {
//           console.error("❌ No products found in JSON!");
//         }
//       })
//       .catch((err) => console.error("❌ Error fetching data:", err));
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8">Recommended Pet Products</h2>
//         <Slider {...settings}>
//           {products.length > 0 ? (
//             products.map((product, index) => (
//               <div key={index} className="p-4">
//                 <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="mb-8 rounded-lg w-48 h-40 object-cover"
//                   />

//                   <div className="flex-grow flex flex-col justify-between">
//                     <h3 className="text-xl font-bold mb-2 text-center">
//                       {product.title}
//                     </h3>
//                     <p className="text-gray-600 mb-2 text-lg font-medium">
//                       {product.price}
//                     </p>

//                     <div className="flex justify-center mb-4 space-x-1">
//                       {[...Array(5)].map((_, i) => (
//                         <CiStar
//                           key={i}
//                           className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   <button
//                     className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mt-4"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No products available.</p>
//           )}
//         </Slider>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import { CiStar } from "react-icons/ci"; // Star icon
import { CartContext } from "./CartContext"; // Import Cart Context

export default function Recomended() {
  const { addToCart } = useContext(CartContext); // Use cart context
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/pet-supplies.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("📥 Fetched Data:", data); // Debugging

        // ✅ Process Data (Convert images from string to array)
        const processedData = data.map((item) => ({
          ...item,
          images: item.images ? item.images.split("~") : [],
          price: item.price || "Price not available",
          currency: "INR",
        }));

        setProducts(processedData);
      })
      .catch((err) => console.error("❌ Error fetching data:", err));
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Recommended Products</h2>
        <Slider {...settings}>
          {products.length > 0 ? (
            products.map((product, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                  <img
                    src={product.images?.[0] || "https://via.placeholder.com/150"}
                    alt={product.title}
                    className="mb-8 rounded-lg w-48 h-40 object-cover"
                  />

                  <div className="flex-grow flex flex-col justify-between">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{product.brand || "Unknown Brand"}</p>
                    <p className="text-green-500 font-bold">
                      {product.currency} {product.price}
                    </p>

                    <div className="flex justify-center mb-4 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <CiStar key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                  </div>

                  <button
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mt-4"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products available.</p>
          )}
        </Slider>
      </div>
    </section>
  );
}
