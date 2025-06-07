// src/components/RecentArticles.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import r1 from '../assets/ra1.jpeg';
import r2 from '../assets/ra2.jpeg';
import r3 from '../assets/ra3.jpeg';
import r4 from '../assets/ra4.jpg';


const articles = [
  { id: 1, title: "How to Shelter Dogs", date: "09", month: "JULY 2024", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "Harshuti", image: r1 },
  { id: 2, title: "Benefits of Adopting", date: "08", month: "JULY 2024", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "Harshuti", image: r2 },
  { id: 3, title: "The Best Dog Food", date: "07", month: "JULY 2024", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "Harshuti", image: r3 },
  { id: 4, title: "Training Your Dog", date: "06", month: "JULY 2024", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", author: "Harshuti", image: r4},
];

export default function RecentArticles() {
  // Slider settings with autoplay
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // Adjusted for better readability
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
        <Slider {...settings}>
          {articles.map(article => (
            <div key={article.id} className="bg-white shadow-lg p-6 rounded-lg flex flex-col">
            <img 
                src={article.image} 
                alt={article.title} 
                style={{ width: '400px', height: '200px', objectFit: 'cover' }} 
                className="mb-4 rounded-md" 
            />

              <div className="flex mb-4">
                <div className="text-left mr-6">
                  <span className="block text-2xl font-bold">{article.date}</span>
                  <span className="block text-lg">{article.month}</span>
                </div>

                {/* Divider Line */}
                <div className="h-16 w-px bg-black-300 mx-4"></div> 

                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold mb-1">{article.title}</h3>
                  <p className="text-gray-600 mb-1">{article.para}</p>
                  <p className="text-gray-500 italic">{article.author}</p>
                </div>
              </div>

              <button className="text-blue-500 font-bold">View More</button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
