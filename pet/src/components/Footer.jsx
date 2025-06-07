// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-blue-800 via-blue-500 to-gray-900 shadow-lg">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           {/* Company Info */}
//           <div className="pt-8">
//             <h2 className="text-3xl font-bold  text-white">PawsParadise</h2>
//             <p className="text-white text-1xl ">
//               Take care of your lovely pets. <br />We are your number one trusted pet <br /> boarding service company.
//             </p>
//           </div>
          
//           {/* Quick Links */}
//           <div >
//             <h3 className="text-2xl font-semibold  text-white">Quick Links</h3>
//             <Link to="/about" className="hover:underline text-white" style={{ textDecoration: 'none' }}>About Us</Link><br />
//             <Link to="/services" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Services</Link><br />
//             <Link to="/shop" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Shop</Link><br />
//             <Link to="/contact" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Contact Us</Link><br />
//           </div>
          
//           {/* Working Hours */}
//           <div className="text-start">
//             <form className="flex mt-4">
//             <input 
//               type="email" 
//               placeholder="Email Address" 
//               className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-start" 
//             />

//             <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
//             </form>
//           </div>
//         </div>

//         {/* Social Media Links */}
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-white">© 2025 Harstuti. All rights reserved.</p>
//           {/* <div className="space-x-4">
//             <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">Facebook</a>
//             <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">Twitter</a>
//             <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">Instagram</a>
//           </div> */}
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-500 to-gray-900 shadow-lg mt-auto">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="pt-8">
            <h2 className="text-3xl font-bold  text-white">PawsParadise</h2>
            <p className="text-white text-1xl ">
              Take care of your lovely pets. <br />We are your number one trusted pet <br /> boarding service company.
            </p>
          </div>
          
          {/* Quick Links */}
          <div >
            <h3 className="text-2xl font-semibold  text-white">Quick Links</h3>
            <Link to="/about" className="hover:underline text-white" style={{ textDecoration: 'none' }}>About Us</Link><br />
            <Link to="/services" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Services</Link><br />
            <Link to="/shop" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Shop</Link><br />
            <Link to="/contact" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Contact Us</Link><br />
          </div>
          
          {/* Email Subscription */}
          <div className="text-start">
            <form className="flex mt-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-start" 
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">© 2025 Harstuti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
