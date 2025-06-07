// import React, { useEffect, useState } from "react";
// import { CiStar } from "react-icons/ci";
// import { useCart } from "./CartContext";

// const DogFood = () => {
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     fetch("/data/pet-supplies.json")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("📥 Fetched Data:", data); // ✅ JSON Fetched Successfully

//         // Directly setting all products without filtering
//         const processedData = data.map((item) => ({
//           ...item,
//           images: item.images ? item.images.split("~") : [],
//           price: item.price || "Price not available",
//           currency: "INR", // Default currency
//         }));

//         setProducts(processedData);
//       })
//       .catch((err) => console.error("❌ Error fetching data:", err));
//   }, []);

//   console.log("🛒 Render Check: Products State Updated", products); // ✅ Check If State is Updating

//   return (
//     <div className="Df">
//       <section className="py-10 bg-gray-100">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-6">Pet Food & Supplies</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.length > 0 ? (
//               products.map((product, index) => (
//                 <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                   <img 
//                     src={product.images?.[0] || "https://via.placeholder.com/150"} 
//                     alt={product.title} 
//                     className="mb-2 rounded-lg w-full h-48 object-cover" 
//                   />
//                   <h3 className="text-lg font-semibold">{product.title}</h3>
//                   <p className="text-gray-500">{product.brand || "Unknown Brand"}</p>
//                   <p className="text-green-500 font-bold">{product.currency} {product.price}</p>

//                   <div className="flex justify-start mb-2">
//                     {[...Array(5)].map((_, i) => (
//                       <CiStar key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />
//                     ))}
//                   </div>

//                   <button 
//                     className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No products available.</p>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DogFood;


import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { useCart } from "./CartContext";

const DogFood = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data/pet-supplies.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("📥 Fetched Data:", data); // ✅ JSON Fetched Successfully

        // Directly setting all products without filtering
        const processedData = data.map((item) => ({
          ...item,
          images: item.images ? item.images.split("~") : [],
          price: item.price || "Price not available",
          currency: "INR", // Default currency
        }));

        setProducts(processedData);
      })
      .catch((err) => console.error("❌ Error fetching data:", err));
  }, []);

  console.log("🛒 Render Check: Products State Updated", products); // ✅ Check If State is Updating

  return (
    <div className="Df">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-10 text-gray-800">
            Pet Food & Supplies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                >
                  <img
                    src={product.images?.[0] || "https://via.placeholder.com/150"}
                    alt={product.title}
                    className="mb-4 rounded-lg w-full h-56 object-cover transition-transform transform hover:scale-110"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 text-sm">{product.brand || "Unknown Brand"}</p>
                  <p className="text-green-600 font-semibold mt-2">
                    {product.currency} {product.price}
                  </p>

                  <div className="flex items-center mt-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CiStar
                        key={i}
                        className={i < 4 ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>

                  <button
                    className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition-colors"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DogFood;
