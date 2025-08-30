import React from 'react';
import { Link } from 'react-router-dom';

// Sample offer data - in a real application, this would come from an API or database
const offers = [
  {
    id: 1,
    brand: 'MakeMyTrip',
    logo: 'https://logodix.com/logo/2018221.png',
    title: 'Flight Booking Discount',
    description: 'Get special discounts on domestic flight bookings',
    expiryDays: 18,
    discount: '50% OFF',
    offerLink: '/offers/makemytrip',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 2,
    brand: 'Dominos',
    logo: 'https://logodix.com/logo/2052017.png',
    title: 'Pizza Weekend Special',
    description: 'Buy 1 get 1 free on medium and large pizzas',
    expiryDays: 7,
    discount: 'BUY 1 GET 1',
    offerLink: '/offers/dominos',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
  },
  {
    id: 3,
    brand: 'Amazon',
    logo: 'https://logodix.com/logo/19149.png',
    title: 'Electronics Sale',
    description: 'Top deals on electronics and accessories',
    expiryDays: 12,
    discount: '40% OFF',
    offerLink: '/offers/amazon',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-700',
  },
  {
    id: 4,
    brand: 'Myntra',
    logo: 'https://logodix.com/logo/1070633.png',
    title: 'Fashion Sale',
    description: 'Season end sale on premium brands',
    expiryDays: 5,
    discount: '60% OFF',
    offerLink: '/offers/myntra',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
  },
];

const TodaysDeals = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Today's Deals
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
            >
              <div className={`${offer.bgColor} p-4 flex justify-between items-center`}>
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src={offer.logo} 
                    alt={`${offer.brand} logo`} 
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
                <div className={`${offer.textColor} font-bold text-xl`}>
                  {offer.discount}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {offer.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-orange-500 font-medium">
                    Ends in {offer.expiryDays} days
                  </div>
                  <Link 
                    to={offer.offerLink}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Get Offer
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodaysDeals;
