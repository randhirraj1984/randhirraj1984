import React from 'react';

// Sample coupon data - in a real application, this would come from an API or database
const coupons = [
  {
    id: 1,
    brand: "KFC",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/KFC-Logo-700x394.png",
    offer: "50% OFF",
    description: "On orders above $30",
    expiryDate: "Sept 15, 2025",
    bgColor: "bg-red-50",
    textColor: "text-red-600"
  },
  {
    id: 2,
    brand: "Dominos",
    logo: "https://logodix.com/logo/2052017.png",
    offer: "Buy 1 Get 1 Free",
    description: "On medium and large pizzas",
    expiryDate: "Sept 10, 2025",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    id: 3,
    brand: "Burger King",
    logo: "https://logodix.com/logo/19083.png",
    offer: "30% OFF",
    description: "On combo meals",
    expiryDate: "Sept 20, 2025",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600"
  },
  {
    id: 4,
    brand: "7Up",
    logo: "https://logodix.com/logo/873850.png",
    offer: "20% Cashback",
    description: "On all products",
    expiryDate: "Sept 05, 2025",
    bgColor: "bg-green-50",
    textColor: "text-green-600"
  }
];

const TopCoupons = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Top Coupons</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coupons.map((coupon) => (
            <div 
              key={coupon.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
            >
              <div className={`${coupon.bgColor} p-5 flex flex-col items-center justify-center relative h-44`}>
                <div className="w-32 h-20 flex items-center justify-center">
                  <img 
                    src={coupon.logo} 
                    alt={`${coupon.brand} logo`} 
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
                
                <div className={`${coupon.textColor} font-bold text-2xl mt-4`}>
                  {coupon.offer}
                </div>
                
                <div className={`text-sm ${coupon.textColor}`}>
                  {coupon.description}
                </div>
              </div>
              
              <div className="p-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Expires: <span className="font-medium">{coupon.expiryDate}</span>
                </div>
                
                <button className="text-orange-500 hover:text-orange-600 text-sm font-medium transition">
                  Get Coupon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCoupons;
