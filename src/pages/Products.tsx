
import React from 'react';

const products = [
  {
    id: 1,
    name: "RAW VANNAMEI HEADON, WHOLE SHRIMP",
    description: "Premium quality whole vannamei shrimp with head intact. Carefully processed to preserve natural flavor and texture. Ideal for presentations where the complete shrimp appearance is desired.",
    image: "Van-Head-on.jpg",
  },
  {
    id: 2,
    name: "RAW VANNAMEI HEADLESS, SHELL-ON SHRIMP",
    description: "Vannamei shrimp with heads removed but shells intact. This processing method enhances shelf life while maintaining the protection of the shell. Popular for cooking methods where the shell adds flavor.",
    image: "Van-Head-less.jpg",
  },
  {
    id: 3,
    name: "RAW VANNAMEI EASY PEEL SHRIMP",
    description: "Specially processed vannamei shrimp designed for convenient peeling. The shell is partially cut to allow for easy removal while cooking or before consumption. Maintains the flavor benefits of shell-on cooking with added convenience.",
    image: "Van-Easy-Peel.jpg",
  },
  {
    id: 4,
    name: "RAW TIGER HEADON, WHOLE SHRIMP",
    description: "Complete tiger shrimp with head and shell intact. Known for their distinctive stripes and robust flavor. Our tiger shrimp are sourced from sustainable farms and processed to preserve their premium quality.",
    image: "Tig-Head-On.jpg",
  },
  {
    id: 5,
    name: "RAW TIGER HEADLESS, SHELL-ON SHRIMP",
    description: "Tiger shrimp with heads removed but shells intact. This processing reduces weight while preserving the protective shell. Ideal for various cooking methods where shell-on preparation is preferred.",
    image: "Tig-Head-Less.jpg",
  },
  {
    id: 6,
    name: "RAW TIGER EASY PEEL SHRIMP",
    description: "Tiger shrimp processed for convenient peeling. The shell is partially separated to facilitate easy removal. Combines the flavor enhancement of shell-on cooking with user-friendly preparation.",
    image: "Tig-Easy-Peel.jpg",
  }
];

const Products = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-ocean-blue py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Products</h1>
            <p className="text-xl">
              Discover our range of BAP-certified shrimp products sourced from trusted farmers
            </p>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Premium Quality Shrimp</h2>
            <p className="text-gray-700 mb-6 text-lg text-center">
              At BRPS, we take pride in offering the highest quality shrimp products to our customers worldwide. Our products are BAP-certified, ensuring they meet the highest standards of sustainability, food safety, and quality.
            </p>
            <p className="text-gray-700 text-lg text-center">
              Each product undergoes our rigorous 8-step processing procedure to ensure consistent quality and freshness.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Product Range</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  
                  <p className="text-gray-700">
                    {product.description}
                  </p>
                  <div className="mt-6">
                    <a href="/orders" className="bg-ocean-blue text-white px-4 py-2 rounded inline-block hover:bg-blue-700 transition-colors">
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Quality Certifications</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Best Aquaculture Practices (BAP) Certified</h3>
              <p className="text-gray-700 mb-6">
                All our products are sourced from BAP-certified farms, ensuring that they meet the highest standards for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-blue mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Environmental responsibility</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-blue mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Social accountability</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-blue mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Food safety</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-blue mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Animal welfare</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-blue mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Traceability</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-blue mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Quality assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ocean-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Order?</h2>
          <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific requirements and get a customized quote for our premium shrimp products.
          </p>
          <a href="/orders" className="bg-white text-ocean-blue px-8 py-3 rounded-md inline-block font-bold hover:bg-gray-100 transition-colors">
            Place an Order
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
