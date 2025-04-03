import React from 'react';
export function Products() {
  return (
    <div className="pt-16">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Bharatbenz Motors .co</h3>
                <p className="text-gray-600 mb-4">
                  "The metallic foils provided by HeatFoils have become an integral part of our premium clothing line. The quality and consistency are unmatched."
                </p>
                <img 
                  src= "../../public/bharatbenz.jpeg"
                  alt="Bharat benz"
                  className="w-full h-48 object-contain rounded"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Milton India.pvt.ltd</h3>
                <p className="text-gray-600 mb-4">
                  "We've been using HeatFoils for our custom jersey numbers and logos. The durability through washing and wear is exceptional."
                </p>
                <img 
                  src="../../public/milton.png" 
                  alt="Sports Apparel"
                  className="w-full h-48 object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}