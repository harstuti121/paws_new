// import React from 'react';
// import './components/Shop.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Product from './components/Product';
// import DoctorList from "./components/DoctorList"; // Import DoctorList component
// import Section from './components/Section';
// import Services from './components/Services';
// import Newsletter from './components/Newsletter';
// import Testimonials from './components/Testimonials';
// import RecentArticles from './components/Articles';
// import Footer from './components/Footer';
// import Recomended from './components/Recomended';
// import Shop from './components/Shop';
// import DogProduct from './components/DogProduct';
// import Book from './components/Book';
// import Home from './Pages/Home';
// import DogFood from './components/DogFood';
// import Grooming from './components/Grooming';
// import { useRef } from 'react';
// import { CartContextProvider } from './components/CartContext';
// import CartPage from './components/CartPage';
// import ShopPage from './components/ShopPage';
// import Signup from './components/SignUp.jsx';
// import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import Signin from './components/Signin.jsx';
// import PetOwnerDashboard from './components/PetOwnerDashboard.jsx';
// import DoctorDashboard from './components/DoctorDashboard.jsx';
// import Appointments from './components/Appointments.jsx';

// function App() {
//   const servicesRef = useRef(null); 

//   return (
//     <CartContextProvider>
//       <Router>
//         <Navbar servicesRef={servicesRef}/> 
//         <Routes>
//           <Route path="/" element={<Home servicesRef={servicesRef} />} /> {/* Main home route */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/book" element={<Book />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/dog-food" element={<DogFood />} />
//           <Route path="/grooming" element={<Grooming />} />
//           <Route path="/shop-page" element={<ShopPage />} /> {/* Changed path to avoid duplication */}
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/doctor-dashboard/:doctorId" element={<DoctorDashboard />} />
//           <Route path="/pet-owner-dashboard" element={<PetOwnerDashboard element={<h1>Pet Owner Dashboard</h1>} />} />
//           <Route path="/doctor-dashboard" element={<DoctorDashboard />} />  {/* ✅ Add Dashboard Route */}
//           <Route path="/doctors" element={<DoctorList />} /> {/* ✅ Doctor List Route */}
//           <Route path="/book/:doctorId" element={<Book />} /> {/* ✅ Booking Route */}        </Routes>
//           <Route path="/appointments" element={<Appointments/>} />
//         <Footer /> 
//       </Router>
//     </CartContextProvider>
//   );
// }

// export default App;

import React, { useRef } from 'react';
import './components/Shop.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartContextProvider } from './components/CartContext';

// Pages & Components
import Home from './Pages/Home';
import Signup from './components/SignUp.jsx';
import Signin from './components/Signin.jsx';
import Services from './components/Services';
import Shop from './components/Shop';
import DogFood from './components/DogFood';
import Grooming from './components/Grooming';
import ShopPage from './components/ShopPage';
import CartPage from './components/CartPage';
import Book from './components/Book';
import DoctorList from "./components/DoctorList";
import PetOwnerDashboard from './components/PetOwnerDashboard.jsx';
import DoctorDashboard from './components/DoctorDashboard.jsx';
import Appointments from './components/Appointments.jsx';
import Patient from './components/Patient.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';


function App() {
  const servicesRef = useRef(null); 

  return (
    <CartContextProvider>
      <Router>
        <Navbar servicesRef={servicesRef} /> 

        {/* ✅ Wrap all routes inside <Routes> */}
        <Routes>
          <Route path="/" element={<Home servicesRef={servicesRef} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/dog-food" element={<DogFood />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          {/* ✅ Doctor Dashboard (with & without doctorId) */}
          <Route path="/doctor-dashboard/:doctorId" element={<DoctorDashboard />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />

          {/* ✅ Pet Owner Dashboard */}
          <Route path="/pet-owner-dashboard" element={<PetOwnerDashboard />} />

          {/* ✅ Doctor List & Booking */}
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/book/:doctorId" element={<Book />} />

          {/* ✅ Fixed Appointments Route (Moved inside <Routes>) */}
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/patients" element={<Patient />} />
        </Routes>

        <Footer /> 
      </Router>
    </CartContextProvider>
  );
}

export default App;
