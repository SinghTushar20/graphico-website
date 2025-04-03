import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

export function Contact() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '916200861130';
    const message = encodeURIComponent('Hi! I would like to know more about your heat transfer foil products.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-16">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 6200861130</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">ranjeet-singh@graphico.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">123 Industrial area, Silvassa City, Dadar and Nagar Haveli 12890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300"
              >
                <MessageCircle size={20} />
                <span>Message us on WhatsApp</span>
              </button>
              <p className="text-gray-600 text-center mt-4">
                We typically respond within minutes during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}