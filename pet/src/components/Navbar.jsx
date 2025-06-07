// import React, { useContext, useState, useRef, useEffect } from "react"; 
// import { useNavigate } from "react-router-dom";
// import { BsCart3 } from "react-icons/bs";
// import { CartContext } from "./CartContext"; 
// import { FaUserCircle } from "react-icons/fa";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const { cartItems } = useContext(CartContext);
//   const [showCart, setShowCart] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const cartRef = useRef(null);
//   const profileRef = useRef(null);

//   const user = JSON.parse(localStorage.getItem("user")) || null;
//   const role = localStorage.getItem("role") || null;

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (cartRef.current && !cartRef.current.contains(event.target)) {
//         setShowCart(false);
//       }
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/signin");
//     window.location.reload();
//   };

//   return (
//     <nav className="bg-transparent py-4 fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold text-yellow-500 cursor-pointer" onClick={() => navigate("/")}>PawsParadise</div>

//         {/* Navigation Links */}
//         <ul className="flex space-x-8 text-black">
//           <li className="cursor-pointer" onClick={() => navigate("/")}>Home</li>
//           <li className="cursor-pointer" onClick={() => navigate("/about")}>About</li>
//           <li className="cursor-pointer" onClick={() => navigate("/contact")}>Contact</li>

//           {role === "pet_owner" && (
//             <>
//               <li className="cursor-pointer" onClick={() => navigate("/shop")}>Shop</li>
//               <li className="cursor-pointer" onClick={() => navigate("/book")}>Book</li>
//             </>
//           )}

//           {role === "doctor" && (
//             <li className="cursor-pointer" onClick={() => navigate("/appointments")}>Appointments</li>
//           )}
//         </ul>

//         {/* Right Section: Cart + User Profile */}
//         <div className="flex items-center space-x-4 relative">
//           {role === "pet_owner" && (
//             <button className="bg-yellow-500 p-2 rounded focus:outline-none relative" onClick={() => setShowCart(!showCart)}>
//               <BsCart3 />
//               {cartItems.length > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
//                   {cartItems.length}
//                 </span>
//               )}
//             </button>
//           )}

//           {/* Profile Section */}
//  {/* Profile Section */}
// {user ? (
//   <div className="relative" ref={profileRef}>
//     <div
//       className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg cursor-pointer"
//       onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//     >
//       {user.name.charAt(0).toUpperCase()}
//     </div>
//         {showProfileDropdown && (
//           <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-2 z-50">
//             <p className="px-2 text-gray-700 font-semibold">{user.name}</p>
//             <hr className="my-2" />
//             <button className="w-full text-left px-2 py-1 hover:bg-gray-100" onClick={() => navigate("/profile")}>
//               Profile
//             </button>
//             <button className="w-full text-left px-2 py-1 text-red-500 hover:bg-gray-100" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//         ) : (
//           <button className="text-black-600 text-3xl" onClick={() => navigate("/signin")}>
//             <FaUserCircle />
//           </button>
//         )}
//       </div>
//       </div>
//     </nav>
//   );
// }

import React, { useContext, useState, useRef, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "./CartContext"; 
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const cartRef = useRef(null);
  const profileRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user")) || null;
  const role = localStorage.getItem("role") || null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
    window.location.reload();
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-500 to-gray-900 py-3 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div
          className="text-3xl font-extrabold text-white cursor-pointer hover:text-yellow-400 transition"
          onClick={() => navigate("/")}
        >
          PawsParadise
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white font-extrabold">
          <li className="cursor-pointer hover:text-yellow-400 transition" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer hover:text-yellow-400 transition" onClick={() => navigate("/about")}>About</li>
          <li className="cursor-pointer hover:text-yellow-400 transition" onClick={() => navigate("/contact")}>Contact</li>

          {role === "pet_owner" && (
            <>
              <li className="cursor-pointer hover:text-yellow-400 transition" onClick={() => navigate("/shop")}>Shop</li>
              <li className="cursor-pointer hover:text-yellow-400 transition" onClick={() => navigate("/book")}>Book</li>
            </>
          )}

          {role === "doctor" && (
            <li className="cursor-pointer hover:text-yellow-400 transition" onClick={() => navigate("/appointments")}>Appointments</li>
          )}
        </ul>

        {/* Right Section: Cart + User Profile */}
        <div className="flex items-center space-x-4 relative">
          {role === "pet_owner" && (
            <button
              className="bg-yellow-500 p-2 rounded-full focus:outline-none relative hover:bg-yellow-600 transition"
              onClick={() => setShowCart(!showCart)}
            >
              <BsCart3 className="text-white text-2xl" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          )}

          {/* Profile Section */}
          {user ? (
            <div className="relative" ref={profileRef}>
              <div
                className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg cursor-pointer hover:bg-blue-700 transition"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>

              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-50">
                  <p className="px-2 text-gray-700 font-semibold">{user.name}</p>
                  <hr className="my-2" />
                  <button 
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 transition"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </button>
                  <button 
                    className="w-full text-left px-2 py-1 text-red-500 hover:bg-gray-100 transition"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="text-white text-3xl" onClick={() => navigate("/signin")}>
              <FaUserCircle className="text-white hover:text-yellow-400 transition" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
