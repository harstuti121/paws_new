// import React, { useState } from 'react';
// import i1 from '../assets/g1.jpeg'


// function ShoppingCart({cart}) {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: 'Iphone 6S',
//       brand: 'Apple',
//       price: 400,
//       quantity: 1,
//       imageUrl:i1 
//     },
//     {
//       id: 2,
//       name: 'Xiaomi Mi 20000mAh',
//       brand: 'Xiaomi',
//       price: 40,
//       quantity: 1,
//       imageUrl:i1
//     },
//     {
//       id: 3,
//       name: 'Airpods',
//       brand: 'Apple',
//       price: 150,
//       quantity: 1,
//       imageUrl: i1
//     }
//   ]);

//   const [promoCode, setPromoCode] = useState('');
//   const shippingCost = 10;

//   const handleRemoveItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0) + shippingCost;

//   return (
//     <div className="container mx-auto mt-10">
//       <div className="flex shadow-md my-10">
//         <div className="w-3/4 bg-white px-10 py-10">
//           <div className="flex justify-between border-b pb-8">
//             <h1 className="font-semibold text-2xl">Shopping Cart</h1>
//             <h2 className="font-semibold text-2xl">{items.length} Items</h2>
//           </div>
//           <div className="flex mt-10 mb-5">
//             <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
//             <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
//             <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
//             <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
//           </div>

//           {items.map((item) => (
//             <div key={item.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//               <div className="flex w-2/5">
//                 <div className="w-2">
//                   <img className="h-2" src={item.imageUrl} alt={item.name} />
//                 </div>
//                 <div className="flex flex-col justify-between ml-4 flex-grow">
//                   <span className="font-bold text-sm">{item.name}</span>
//                   <span className="text-red-500 text-xs">{item.brand}</span>
//                   <button
//                     className="font-semibold hover:text-red-500 text-gray-500 text-xs"
//                     onClick={() => handleRemoveItem(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//               <div className="flex justify-center w-1/5">
//                 <input
//                   className="mx-2 border text-center w-8"
//                   type="text"
//                   value={item.quantity}
//                   readOnly
//                 />
//               </div>
//               <span className="text-center w-1/5 font-semibold text-sm">${item.price.toFixed(2)}</span>
//               <span className="text-center w-1/5 font-semibold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
//             </div>
//           ))}

//           <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
//             <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
//               <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
//             </svg>
//             Continue Shopping
//           </a>
//         </div>

//         <div id="summary" className="w-1/4 px-8 py-10">
//           <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
//           <div className="flex justify-between mt-10 mb-5">
//             <span className="font-semibold text-sm uppercase">Items {items.length}</span>
//             <span className="font-semibold text-sm">${totalCost.toFixed(2)}</span>
//           </div>
//           <div>
//             <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
//             <select className="block p-2 text-gray-600 w-full text-sm">
//               <option>Standard shipping - $10.00</option>
//             </select>
//           </div>
//           <div className="py-10">
//             <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
//               Promo Code
//             </label>
//             <input
//               type="text"
//               id="promo"
//               placeholder="Enter your code"
//               className="p-2 text-sm w-full"
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//             />
//           </div>
//           <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
//           <div className="border-t mt-8">
//             <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//               <span>Total cost</span>
//               <span>${totalCost.toFixed(2)}</span>
//             </div>
//             <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShoppingCart;

import React, { useState } from 'react';
import i1 from '../assets/g1.jpeg';

function ShoppingCart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Huawei P30',
      brand: 'Apple',
      price: 400,
      quantity: 1,
      imageUrl: i1,
    },
    {
      id: 2,
      name: 'OPPOF19',
      brand: 'Apple',
      price: 400,
      quantity: 1,
      imageUrl: i1,
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const shippingCost = 10;

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0) + shippingCost;

  return (
    <div className="min-h-screen flex flex-col justify-between p-6">
      {/* Main content: flex-grow will push the footer to the bottom */}
      <div className="flex-grow container mx-auto mt-10">
        <div className="flex shadow-lg my-10">
          {/* Cart Section */}
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{items.length} Items</h2>
            </div>

            {/* Table Headings */}
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
            </div>

            {/* Cart Items */}
            {items.map((item) => (
              <div key={item.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                {/* Product Image */}
                <div className="flex w-2/5">
                  <div className="w-24">
                    <img className="h-24" src={item.imageUrl} alt={item.name} />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.name}</span>
                    <span className="text-red-500 text-xs">{item.brand}</span>
                    <button
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex justify-center w-1/5">
                  <button className="bg-gray-300 text-gray-600 h-6 w-6 rounded-l">-</button>
                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={item.quantity}
                    readOnly
                  />
                  <button className="bg-gray-300 text-gray-600 h-6 w-6 rounded-r">+</button>
                </div>

                {/* Price and Total */}
                <span className="text-center w-1/5 font-semibold text-sm">${item.price.toFixed(2)}</span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            {/* Continue Shopping Link */}
            <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>

          {/* Order Summary */}
          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {items.length}</span>
              <span className="font-semibold text-sm">${totalCost.toFixed(2)}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default ShoppingCart;
