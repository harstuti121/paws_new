import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Recentart.css"; // Import the CSS file

export default function Recentart() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=dogs&apiKey=837116726ffe4653afe3afb55d0f8f15`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles || []); // Ensure articles is always an array
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <section className="recent-article-section">
      <div className="article-container">
        <h6 className="article-heading">ARTICLES RELATED TO PETS</h6>
        <h1 className="article-heading">Recent Articles</h1>

        {articles.length === 0 ? (
          <p className="text-gray-600">No articles available. Try again later.</p>
        ) : (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="article-slider"
          >
            {articles.slice(0, 20).map((article, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="article-card">
                  {/* IMAGE */}
                  <img
                    src={article.urlToImage || "default-image.jpg"}
                    alt={article.title}
                    className="article-image"
                  />

                  {/* TEXT CONTENT */}
                  <div className="article-content">
                    <div className="flex mb-4 items-center">
                      {/* DATE */}
                      <div className="text-left mr-4">
                        <span className="article-date">
                          {new Date(article.publishedAt).getDate()}
                        </span>
                        <span className="article-month">
                          {new Date(article.publishedAt).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      {/* DIVIDER */}
                      <div className="article-divider"></div>

                      {/* TITLE AND DESCRIPTION */}
                      <div className="flex-1 text-left">
                        <h3 className="article-title">
                          {article.title.length > 50
                            ? article.title.substring(0, 50) + "..."
                            : article.title}
                        </h3>

                        <p className="article-description">
                          {article.description
                            ? article.description.length > 100
                              ? article.description.substring(0, 100) + "..."
                              : article.description
                            : "No description available."}
                        </p>

                        <p className="article-author">
                          {article.author || "Unknown Author"}
                        </p>
                      </div>
                    </div>

                    {/* VIEW MORE BUTTON */}
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-link"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
