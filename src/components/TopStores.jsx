import React, { useRef } from 'react';
import './TopStores.css';

// Sample store data - in a real application, this would come from an API or database
const stores = [
  {
    id: 1,
    name: "The Fashion Hub",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop",
    badge: "Gold Member",
    offer: "Up to 50% OFF on all items",
    daysLeft: 3,
    hoursLeft: 8,
  },
  {
    id: 2,
    name: "Electronics World",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=400&auto=format&fit=crop",
    badge: "Silver Member",
    offer: "20% OFF on smartphones",
    daysLeft: 5,
    hoursLeft: 12,
  },
  {
    id: 3,
    name: "Home Decor",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=400&auto=format&fit=crop",
    badge: "Gold Member",
    offer: "Buy 2 Get 1 Free",
    daysLeft: 2,
    hoursLeft: 6,
  },
  {
    id: 4,
    name: "Fitness Center",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop",
    badge: "Silver Member",
    offer: "30% OFF on annual membership",
    daysLeft: 7,
    hoursLeft: 14,
  },
  {
    id: 5,
    name: "Gourmet Foods",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1559741033-d85618ce7e8c?q=80&w=400&auto=format&fit=crop",
    badge: "Gold Member",
    offer: "Weekend Special: 25% OFF",
    daysLeft: 1,
    hoursLeft: 9,
  },
  {
    id: 6,
    name: "Digital Gadgets",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop",
    badge: "Silver Member",
    offer: "Flash Sale: 40% OFF",
    daysLeft: 0,
    hoursLeft: 5,
  },
  {
    id: 7,
    name: "Book Paradise",
    location: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=400&auto=format&fit=crop",
    badge: "Gold Member",
    offer: "Buy books worth $50, get $15 off",
    daysLeft: 4,
    hoursLeft: 22,
  },
];

const TopStores = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Top Stores</h2>
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft} 
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight} 
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div 
          ref={carouselRef} 
          className="flex overflow-x-auto gap-4 pb-6 hide-scrollbar scroll-smooth" 
        >
          {stores.map((store) => (
            <div 
              key={store.id} 
              className="flex-shrink-0 w-[280px] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="h-36 overflow-hidden relative">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-3 right-3 py-1 px-3 rounded-full text-xs font-medium ${
                  store.badge === 'Gold Member' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {store.badge}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{store.name}</h3>
                    <p className="text-gray-500 text-sm">{store.location}</p>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-100 rounded-md p-3 mb-3">
                  <p className="text-orange-600 font-medium text-sm">{store.offer}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {store.daysLeft === 0 ? (
                      <span>Ends in <span className="font-semibold text-red-500">{store.hoursLeft}h</span></span>
                    ) : (
                      <span>Ends in <span className="font-semibold text-orange-500">{store.daysLeft}d {store.hoursLeft}h</span></span>
                    )}
                  </div>
                  
                  <button className="text-xs font-medium bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded transition">
                    Visit Store
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStores;
