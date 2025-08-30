import React from 'react';

// Sample restaurant data - in a real application, this would come from an API or database
const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=400&auto=format&fit=crop",
    offer: "Flat Rs.100 OFF",
    oldPrice: "Rs.499",
    newPrice: "Rs.399",
    cuisine: "North Indian, Chinese",
    rating: 4.2
  },
  {
    id: 2,
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop",
    offer: "Flat 50% OFF",
    oldPrice: "Rs.600",
    newPrice: "Rs.300",
    cuisine: "Italian, Fast Food",
    rating: 4.5
  },
  {
    id: 3,
    name: "Sushi Sensation",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=400&auto=format&fit=crop",
    offer: "Flat 30% OFF",
    oldPrice: "Rs.800",
    newPrice: "Rs.560",
    cuisine: "Japanese, Asian",
    rating: 4.7
  },
  {
    id: 4,
    name: "Burger Bliss",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop",
    offer: "Flat Rs.150 OFF",
    oldPrice: "Rs.450",
    newPrice: "Rs.300",
    cuisine: "American, Fast Food",
    rating: 4.3
  }
];

const TopRestaurants = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Top Restaurants</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
            >
              {/* Restaurant Image with Offer Tag */}
              <div className="relative">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-0 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-r">
                  OFFER
                </div>
              </div>
              
              <div className="p-4">
                {/* Restaurant Name and Rating */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                  <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                    <span className="text-green-700 text-sm font-medium">{restaurant.rating}</span>
                    <svg className="w-4 h-4 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                
                {/* Cuisine Type */}
                <p className="text-gray-500 text-sm mb-3">{restaurant.cuisine}</p>
                
                {/* Offer Details */}
                <div className="bg-orange-50 border border-orange-100 rounded-md p-3 mb-3">
                  <p className="text-orange-600 font-medium">{restaurant.offer}</p>
                </div>
                
                {/* Price Details */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through">{restaurant.oldPrice}</span>
                  <span className="text-green-600 font-bold">{restaurant.newPrice}</span>
                  <span className="ml-auto">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors">
                      Order Now
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRestaurants;
