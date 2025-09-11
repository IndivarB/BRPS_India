import React from 'react';
import HomeCarousel from '@/components/HomeCarousel';

const Index = () => {
  return (
    <div className="bg-white">
      {/* Hero Carousel Section */}
      <section className="pt-16">
        <HomeCarousel />
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BRPS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-ocean-blue inline-flex p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">We deliver the highest quality shrimp products sourced responsibly and processed with care.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-ocean-blue inline-flex p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Food Safety</h3>
              <p className="text-gray-600">Rigorous quality control measures ensure our products meet international safety standards.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-ocean-blue inline-flex p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Export</h3>
              <p className="text-gray-600">We export our premium shrimp products to markets worldwide, meeting international demands.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/founder.jpg" 
                alt="Dr. Bolisetty Rama Krishna, Chairman & Managing Director" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">About BRPS</h2>
              <p className="text-gray-700 mb-6">
                M/s. Bolisetty Rich Protein Shrimps Private Limited (BRPS) is incorporated with an objective of processing and exporting of premium quality Shrimps. Led by Chairman & Managing Director, Dr. Bolisetty Rama Krishna (BRK), with over 35 years of experience in The Seafood Industry.
              </p>
              <a href="/about" className="bg-ocean-blue text-white px-6 py-3 rounded-md inline-block hover:bg-blue-700 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-ocean-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Order Premium Shrimp Products?</h2>
          <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
            Our team is ready to assist you with your requirements and provide you with the finest quality shrimp products.
          </p>
          <a href="/orders" className="bg-white text-ocean-blue px-8 py-3 rounded-md inline-block font-bold hover:bg-gray-100 transition-colors">
            Place an Order
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;