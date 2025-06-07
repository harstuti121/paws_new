// import React from 'react'
// import './Contact.css'
// import msg_icon from '../assets/consult.jpg'
// import mail_icon from '../assets/consult.jpg'
// import phone_icon from '../assets/consult.jpg'
// import location_icon from '../assets/consult.jpg'
// import { SiGmail } from "react-icons/si";
// import { CgMail } from "react-icons/cg";
// import { IoCallOutline } from "react-icons/io5";
// import { IoLocationOutline } from "react-icons/io5";
// import { FiMessageSquare } from "react-icons/fi";


// const Contact = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "7061b8c2-ff86-4a03-acf7-bede56285ce8");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   }

//   return (
//     <>
//     <h3 className="text-4xl font-bold mb-6 text-center text-blue-600">Contact Us</h3>
//     <div className='contact'>
//         <div className='contact-col'>
//             <h3 className="ml-2">Send Us A Message <FiMessageSquare/></h3>
//             <p>Feel free to reach out through contact form or 
//             find our contact information below.Your feedback,questions,
//             and suggestions are important to us as we strive to provide
//             exceptional service to our community.</p>
//             <ul>
//                 <li><CgMail/>harstuti@gmail.com</li>
//                 <li><IoCallOutline/>9495039204</li>
//                 <li><IoLocationOutline/>Delhi</li>
//             </ul>
//         </div>
//         <div className='contact-col'>
//           <form onSubmit={onSubmit}>
//             <label>Your Name</label>
//             <input type='text' name='name' placeholder='Enter your name' required/>
//             <label htmlFor="">Phone Number</label>
//             <input type="text" name='phone' placeholder='Enter your mobile number' required />
//             <label htmlFor="">Write your messages here</label>
//             <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
//             <button
//                   className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
//                   Submit Now
//                 </button>          
//               </form>
//           <span>{result}</span>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Contact

// import React from 'react';
// import './Contact.css';
// import { FiMessageSquare } from "react-icons/fi";
// import { CgMail } from "react-icons/cg";
// import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

// const Contact = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");
//     const formData = new FormData(event.target);
//     formData.append("access_key", "7061b8c2-ff86-4a03-acf7-bede56285ce8");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     if (data.success) {
//       setResult("Form Submitted Successfully!");
//       event.target.reset();
//     } else {
//       console.error("Error:", data);
//       setResult("Oops! Something went wrong.");
//     }
//   };

//   return (
//     <section className="contact-section">
//       <div className="contact-container">
//         <h3 className="contact-heading">Get in Touch</h3>

//         <div className="contact-box">
//           {/* Left Section */}
//           <div className="contact-info">
//             <h3 className="info-title">
//               <FiMessageSquare size={24} /> Contact Information
//             </h3>
//             <p className="info-text">
//               Have questions or just want to say hi? We’d love to hear from you!
//               Reach out through the form or use the details below.
//             </p>
//             <ul className="info-list">
//               <li><CgMail /> harstuti@gmail.com</li>
//               <li><IoCallOutline /> 9495039204</li>
//               <li><IoLocationOutline /> Delhi</li>
//             </ul>
//           </div>

//           {/* Right Section */}
//           <div className="contact-form-container">
//             <form onSubmit={onSubmit} className="contact-form">
//               <div>
//                 <label>Your Name</label>
//                 <input type="text" name="name" placeholder="Enter your name" required />
//               </div>
//               <div>
//                 <label>Phone Number</label>
//                 <input type="text" name="phone" placeholder="Enter your phone number" required />
//               </div>
//               <div>
//                 <label>Your Message</label>
//                 <textarea name="message" rows="5" placeholder="Type your message" required></textarea>
//               </div>
//               <button type="submit" className="contact-btn">
//                 Submit Now
//               </button>
//             </form>
//             <span className="form-result">{result}</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from 'react';
import './Contact.css';
import { FiMessageSquare } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "7061b8c2-ff86-4a03-acf7-bede56285ce8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("Oops! Something went wrong.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h3 className="contact-heading">Get in Touch</h3>

        <div className="contact-content">
          {/* Left Section */}
          <div className="contact-info">
            <h3 className="info-title">
              <FiMessageSquare size={24} /> Contact Information
            </h3>
            <p className="info-text">
              Have questions or just want to say hi? We’d love to hear from you!
              Reach out through the form or use the details below.
            </p>
            <ul className="info-list">
              <li className="info-item">
                <CgMail /> harstuti@gmail.com
              </li>
              <li className="info-item">
                <IoCallOutline /> 9495039204
              </li>
              <li className="info-item">
                <IoLocationOutline /> Delhi
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="contact-form-container">
            <form onSubmit={onSubmit} className="contact-form">
              <div>
                <label className="input-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="input-label">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="input-label">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Type your message"
                  required
                  className="textarea-field"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit Now
              </button>
            </form>
            <span className="form-result">{result}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
