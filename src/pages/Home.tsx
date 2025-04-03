import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '916200861130';
    const message = encodeURIComponent('Hi! I would like to know more about your heat transfer foil products.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div 
      className="h-screen bg-cover bg-center relative"
      style={{
        // backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")',
        backgroundImage: 'url(factory.png)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Premium Heat Transfer Foils</h1>
            <p className="text-xl mb-8">Transform your designs with our high-quality heat transfer foils. Perfect for textiles, crafts, and commercial applications.</p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition duration-300"
            >
              <MessageCircle size={20} />
              <span>Contact us on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}