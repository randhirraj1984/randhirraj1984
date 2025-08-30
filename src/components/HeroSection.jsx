import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// Slider data with each slide containing two offers side by side
const sliderData = [
  {
    id: 1,
    offers: [
      {
        id: 'a1',
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
        image: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/7da4988c3cdfaf7af4c46d2501f1c960/banner_home-580x1160.webp?644820"
      },
      {
        id: 'a2',
        logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png",
        image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg"
      }
    ]
  },
  {
    id: 2,
    offers: [
      {
        id: 'b1',
        logo: "https://logos-download.com/wp-content/uploads/2016/10/Myntra_logo-700x227.png",
        image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg"
      },
      {
        id: 'b2',
        logo: "https://assets.ajio.com/cms/AJIO/WEB/ajio-Logo-nobg.png",
        image: "https://assets.ajio.com/cms/AJIO/WEB/28042022-D-Unisex-topbanner-p1-brands-upto80.jpg"
      }
    ]
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="relative w-full bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Today's Deals</h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={prevSlide} 
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sliderData.map((slide) => (
              <div 
                key={slide.id} 
                className="w-full flex-shrink-0 flex gap-4"
                style={{ minWidth: '100%' }}
              >
                {slide.offers.map((offer) => (
                  <div 
                    key={offer.id}
                    className="w-1/2 rounded-xl overflow-hidden shadow-md relative"
                    style={{ height: "400px" }}
                  >
                    {/* Full width banner image with no text */}
                    <img 
                      src={offer.image} 
                      alt="Fashion sale banner"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Brand logo positioned at top left */}
                    <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-sm h-10 flex items-center justify-center">
                      <img 
                        src={offer.logo} 
                        alt="Brand logo" 
                        className="h-6 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
