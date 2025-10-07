// import React, { useRef } from 'react';
// import './components/Shop.css';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import { CartContextProvider } from './components/CartContext';
// import Home from './Pages/Home';
// import Signup from './components/SignUp.jsx';
// import Signin from './components/Signin.jsx';
// import Services from './components/Services';
// import Shop from './components/Shop';
// import DogFood from './components/DogFood';
// import Grooming from './components/Grooming';
// import ShopPage from './components/ShopPage';
// import CartPage from './components/CartPage';
// import Book from './components/Book';
// import DoctorList from "./components/DoctorList";
// import PetOwnerDashboard from './components/PetOwnerDashboard.jsx';
// import DoctorDashboard from './components/DoctorDashboard.jsx';
// import Appointments from './components/Appointments.jsx';
// import Patient from './components/Patient.jsx';
// import About from './components/About.jsx';
// import Contact from './components/Contact.jsx';
// import ChatPage from "./Pages/ChatPage.jsx";
// import AcceptedAppointments from "./Pages/AcceptedAppointments.jsx";

// function App() {
//   const servicesRef = useRef(null);

//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <CartContextProvider>
//       <Router>
//         <Navbar servicesRef={servicesRef} />

//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home servicesRef={servicesRef} />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/dog-food" element={<DogFood />} />
//           <Route path="/grooming" element={<Grooming />} />
//           <Route path="/shop-page" element={<ShopPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/doctors" element={<DoctorList />} />
//           <Route path="/book" element={<Book />} />
//           <Route path="/book/:doctorId" element={<Book />} />
//           {/* <Route
//             path="/chat"
//             element={
//               <div style={{
//                 marginTop: "100px",
//                 marginBottom: "440px",
//                 textAlign: "center",
//                 fontSize: "1.5rem",
//                 color: "#555"
//               }}>
//                 <h2>Please select a doctor to chat with.</h2>
//               </div>
//             }
//           /> */}

//           <Route
//             path="/chat"
//             element={
//               isAuthenticated ? (
//                 <div style={{ marginTop: "100px", textAlign: "center" }}>
//                   <h2>Please select a doctor to chat with.</h2>
//                 </div>
//               ) : (
//                 <Navigate to="/signin" />
//               )
//             }
//           />

//           <Route path="/chat/:id" element={<ChatPage />} />
//           {/* 
//           <Route
//             path="/doctor-dashboard/:doctorId?"
//             element={isAuthenticated ? <DoctorDashboard /> : <Navigate to="/signin" />}
//           /> */}

//           <Route
//           path="/doctor-dashboard"
//           element={isAuthenticated ? <DoctorDashboard /> : <Navigate to="/signin" />}
//         />

//           <Route
//             path="/pet-owner-dashboard"
//             element={isAuthenticated ? <PetOwnerDashboard /> : <Navigate to="/signin" />}
//           />

//           {/* Other Functional Pages */}
//           <Route path="/appointments" element={<Appointments />} />
//           <Route path="/patients" element={<Patient />} />
//           <Route path="/accepted-appointments" element={<AcceptedAppointments />} />

//           {/* 404 Route (Optional) */}
//           <Route path="*" element={
//             <div style={{ padding: "100px", textAlign: "center" }}>
//               <h1>404 - Page Not Found</h1>
//               <p>The page you are looking for doesn't exist.</p>
//             </div>
//           } />
//         </Routes>

//         <Footer />
//       </Router>
//     </CartContextProvider>
//   );
// }

// export default App;

// import React, { useRef } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import { CartContextProvider } from './components/CartContext';

// import Home from './Pages/Home';
// import Signup from './components/SignUp';
// import Signin from './components/Signin';
// import Services from './components/Services';
// import Shop from './components/Shop';
// import DogFood from './components/DogFood';
// import Grooming from './components/Grooming';
// import ShopPage from './components/ShopPage';
// import CartPage from './components/CartPage';
// import Book from './components/Book';
// import DoctorList from "./components/DoctorList";
// import PetOwnerDashboard from './components/PetOwnerDashboard';
// import DoctorDashboard from './components/DoctorDashboard';
// import Appointments from './components/Appointments';
// import Patient from './components/Patient';
// import About from './components/About';
// import Contact from './components/Contact';
// import ChatPage from "./Pages/ChatPage";
// import AcceptedAppointments from "./Pages/AcceptedAppointments";

// function App() {
//   const servicesRef = useRef(null);
//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <CartContextProvider>
//       <Router>
//         <div className="min-h-screen flex flex-col">
//         <Navbar servicesRef={servicesRef} />
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home servicesRef={servicesRef} />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/dog-food" element={<DogFood />} />
//           <Route path="/grooming" element={<Grooming />} />
//           <Route path="/shop-page" element={<ShopPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/doctors" element={<DoctorList />} />
//           <Route path="/book" element={<Book />} />
//           <Route path="/book/:doctorId" element={<Book />} />
//            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
//           <Route path="/pet-owner-dashboard" element={<PetOwnerDashboard />} />
//             <Route
//             path="/appointments"
//             element={isAuthenticated ? <Appointments /> : <Navigate to="/signin" />}
//           />
//           <Route
//             path="/accepted-appointments"
//             element={isAuthenticated ? <AcceptedAppointments /> : <Navigate to="/signin" />}
//           />
//           <Route path="/chat" element={<ChatPage />} />
//           <Route path="/chat/:id" element={<ChatPage />} />
//           <Route
//             path="/patients"
//             element={isAuthenticated ? <Patient /> : <Navigate to="/signin" />}
//           />
//           <Route
//             path="*"
//             element={
//               <div style={{ padding: "100px", textAlign: "center" }}>
//                 <h1>404 - Page Not Found</h1>
//                 <p>The page you are looking for doesn't exist.</p>
//               </div>
//             }
//           />
//         </Routes>
//         <Footer />
//         </div>
//       </Router>
//     </CartContextProvider>
//   );
// }

// export default App;


import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { io } from "socket.io-client";   // ⬅️ added

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartContextProvider } from './components/CartContext';

import Home from './Pages/Home';
import Signup from './components/SignUp';
import Signin from './components/Signin';
import Services from './components/Services';
import Shop from './components/Shop';
import DogFood from './components/DogFood';
import Grooming from './components/Grooming';
import ShopPage from './components/ShopPage';
import CartPage from './components/CartPage';
import Book from './components/Book';
import DoctorList from "./components/DoctorList";
import PetOwnerDashboard from './components/PetOwnerDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import Appointments from './components/Appointments';
import Patient from './components/Patient';
import About from './components/About';
import Contact from './components/Contact';
import ChatPage from "./Pages/ChatPage";
import AcceptedAppointments from "./Pages/AcceptedAppointments";
import MyAppointments from './Pages/MyAppointments';
import ProtectedRoute from './components/ProtectedRoute';
import Chatt from "./components/Chatt";
import PetSOS from "./components/PetSOS";
import PetHealth from "./components/PetHealth";
import SymptomChecker from "./components/SymptomChecker";

// ✅ create socket connection once
const socket = io("http://localhost:5173");

function App() {
  const servicesRef = useRef(null);
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <CartContextProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
        <Navbar servicesRef={servicesRef} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home servicesRef={servicesRef} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }       
        />
        <Route
          path="/pet-owner-dashboard"
          element={
            <ProtectedRoute>
              <PetOwnerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/grooming"
          element={
            <ProtectedRoute>
              <Grooming />
            </ProtectedRoute>
          }
        />
          <Route path="/dog-food" element={<DogFood />} />
          {/* <Route path="/grooming" element={<Grooming />} /> */}
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/:doctorId" element={<Book />} />
          <Route path="/chat/:id" element={<Chatt/>} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard socket={socket} />} /> {/* ⬅️ pass socket */}
          {/* <Route path="/pet-owner-dashboard" element={<PetOwnerDashboard socket={socket} />} /> ⬅️ pass socket */}
          <Route
            path="/appointments"
            element={isAuthenticated ? <Appointments /> : <Navigate to="/signin" />}
          />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route
            path="/accepted-appointments"
            element={isAuthenticated ? <AcceptedAppointments socket={socket} /> : <Navigate to="/signin" />}
          />
       {/* <Route path="/chat" element={<ChatPage socket={socket} />} />
          <Route path="/chat/:id" element={<ChatPage socket={socket} />}  */}
          <Route
            path="/patients"
            element={isAuthenticated ? <Patient /> : <Navigate to="/signin" />}
          />
          <Route
            path="*"
            element={
              <div style={{ padding: "100px", textAlign: "center" }}>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for doesn't exist.</p>
              </div>
            }
          />
          <Route path="/pet/health/new" element={<PetHealth />} />
          <Route path="/pet/health/:petId" element={<PetHealth />} />
          <Route path="/sos" element={<PetSOS />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />

        </Routes>
        <Footer />
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
