
import React from 'react';

const ProcessingSteps = [
  {
    id: 1,
    title: "Headon washing",
    description: "The first step in our premium processing procedure involves thorough washing of head-on shrimp. This initial cleaning process is crucial as it removes debris, impurities and ensures the highest level of hygiene from the very beginning. Our specialized washing equipment uses filtered water to gently clean the shrimp while preserving their natural texture and quality.",
    image: "Head On Greading.jpg",
  },
  {
    id: 2,
    title: "De-heading",
    description: "After thorough washing, the shrimp undergoes a precise de-heading process. Our skilled technicians use specialized equipment to carefully remove the heads while ensuring minimal damage to the valuable body meat. This step is critical for both quality preservation and preparing certain shrimp products that require headless presentation. Our de-heading process is designed for maximum efficiency while maintaining the integrity of each shrimp.",
    image: "Processing.jpg",
  },
  {
    id: 3,
    title: "Headless grading",
    description: "Once de-headed, the shrimp passes through our advanced headless grading machine. This sophisticated equipment automatically sorts the shrimp based on size, weight, and quality parameters. Our grading process ensures consistency in product specifications and allows us to maintain strict quality standards. Each grade is carefully monitored and verified by quality control specialists to ensure precise categorization.",
    image: "Head Less Greading.jpg",
  },
  {
    id: 4,
    title: "Peeling",
    description: "The peeling area of our factory is designed for optimal efficiency and cleanliness. Here, the outer shell of the shrimp is carefully removed according to product specifications. Our highly trained peeling team uses both manual techniques and specialized equipment to ensure perfect peeling while preserving the delicate meat. Different products require specific peeling methods, and our versatile team can accommodate various peeling styles.",
    image: "Peeling.jpg",
  },
  {
    id: 5,
    title: "Packing",
    description: "Packing is performed in a sterile environment with stringent hygiene protocols. Our trained staff carefully places the processed shrimp into appropriate packaging materials designed to preserve freshness and protect the product during transportation. Each package is precisely weighed and sealed to maintain product integrity. We utilize modern packing materials that ensure product safety while maintaining the cold chain requirements.",
    image: "Processing-1.jpg",
  },
  {
    id: 6,
    title: "Metal Screening",
    description: "Safety is paramount at BRPS. All packaged products undergo thorough metal screening to detect and eliminate any potential foreign objects. Our state-of-the-art metal detection equipment scans every package to ensure completely safe products for consumption. This critical quality control step provides additional assurance that our products meet the highest international food safety standards.",
    image: "metal_screening.jpg",
  },
  {
    id: 7,
    title: "Quality Check",
    description: "Our quality assurance team conducts stringent checks at this stage to verify that all processed shrimp meet our rigorous standards. This includes visual inspection, sampling for laboratory testing, and verification of packaging integrity. Each batch of products undergoes multiple quality verification processes to ensure consistency in appearance, texture, size, and overall quality parameters set by international standards.",
    image: "Checking.jpg",
  },
  {
    id: 8,
    title: "Warehousing",
    description: "The final step involves storing the finished products in our temperature-controlled warehouses. These facilities are designed to maintain optimal conditions for preserving freshness until shipping. Our cold storage infrastructure ensures product quality during the entire pre-export period. The warehouse management system tracks inventory in real-time, ensuring efficient product rotation and timely dispatch to maintain product freshness.",
    image: "Storage.jpg",
  }
];

const Processing = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-ocean-blue py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Processing Facility</h1>
            <p className="text-xl">
              We follow a rigorous 8-step processing procedure to ensure the highest quality of shrimp products
            </p>
          </div>
        </div>
      </section>

      {/* Processing Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Quality Processing</h2>
            <p className="text-gray-700 mb-6 text-lg text-center">
              At BRPS, we take pride in our state-of-the-art processing facility that ensures the highest quality standards from reception to dispatch. Our comprehensive processing protocol is designed to deliver premium shrimp products that meet international standards.
            </p>
            <p className="text-gray-700 text-lg text-center">
              Each step in our processing line is carefully monitored by trained professionals to maintain strict quality control throughout the entire process.
            </p>
          </div>
        </div>
      </section>

      {/* Processing Steps */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Processing Steps</h2>
          
          <div className="space-y-16">
            {ProcessingSteps.map((step, index) => (
              <div key={step.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 md:px-12">
                  <div className="flex items-center mb-4">
                    <div className="bg-ocean-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.id}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Quality Commitment</h2>
            <p className="text-gray-700 mb-6">
              At BRPS, quality is not just a process but a commitment that runs through every aspect of our operations. Our facility is designed to maintain the highest standards of hygiene, efficiency, and product quality.
            </p>
            <p className="text-gray-700">
              Our team undergoes regular training to stay updated with the latest best practices in seafood processing and handling. We continuously invest in modern technology and equipment to enhance our processing capabilities while maintaining strict quality controls.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ocean-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Want to Learn More About Our Processing?</h2>
          <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a facility tour or to discuss your specific shrimp product requirements.
          </p>
          <a href="/contact" className="bg-white text-ocean-blue px-8 py-3 rounded-md inline-block font-bold hover:bg-gray-100 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Processing;
