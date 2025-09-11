import React from 'react';

const About = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-center">Learn about our company, our founder, and our mission to deliver premium quality shrimp products worldwide.</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img 
                src="/founder.jpg" 
                alt="Dr. Bolisetty Rama Krishna, Founder & Chairman" 
                className="h-80 w-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">Dr. Bolisetty Rama Krishna</h2>
              <h3 className="text-xl text-gray-600 mb-6">Founder & Chairman</h3>
              <h3 className="text-xl text-gray-600 mb-6">Honorable President of Andhra Pradesh Seafood Suppliers Association</h3>
              <p className="text-gray-700 mb-6 text-justify">
                Dr. Bolisetty Rama Krishna (BRK) is the visionary behind BRPS, having prodigious experience of more than 35 years in The Seafood Industry. 
                He is the Honorable President of Andhra Pradesh Seafood Suppliers Association and a well-known dynamic personality in Andhra Pradesh - India.
              </p>
              <p className="text-gray-700 text-justify">
                Mr. BRK has rendered valuable service to the Aqua Culture Industries because of his rich experience in the business, 
                which enabled him to be an important member in decision making in both Government and Private institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-6 text-justify">
                To manufacture world class products & ensure exceptional customer satisfaction by committing to the highest level of performance with integrity, innovation and a passion for results.
              </p>
              <p className="text-gray-700 mb-6 text-justify">
                This commitment to quality is built on a solid base of our esteemed customers, both domestic and overseas. Our greatest asset is the trust our customers bestow on us. While quality and customer satisfaction is the key to any successful business, it is not as simple as we talk about. Sheer hard work and dedicated customer service which this company has been investing over these years have enabled us to expand our businesses from agriculture to aquaculture, food processing, and to a multitude of diverse enterprises.
              </p>
              <p className="text-gray-700 text-justify">
                Last but not least our mission to build long lasting connections with our clients by giving them optimum quality at most reasonable prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Company Details</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">The Company</h3>
                <p className="text-gray-700 text-justify">
                  M/s. Bolisetty Rich Protein Shrimps Private Limited (BRPS) is incorporated with an objective of processing and exporting of Shrimps. This company led by its Chairman & Managing Director, Dr. Bolisetty Rama Krishna (BRK) and Mrs. Suneetha, W/o CMD as Director, making it a complete Family Entity. The company has registered as Merchant Exporter with MPEDA.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Industry Experience</h3>
                <p className="text-gray-700 text-justify">
                  Dr BRK is having presence in the entire value chain of Seafood processing from Cultivation to Processing for more than 3 decades. He has been cultivating his own Aqua Culture and also with his family members. In the process of cultivation of shrimp, Dr BRK has developed close liaison with farmers, hatcheries, aqua feed manufacturers, shrimp traders, processing plants and exporters.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Raw Material Sourcing Network</h3>
                <p className="text-gray-700 text-justify">
                  BRK has developed loyal client-base with more than En number farmers and marine export traders for procurement of Top Quality shrimps. He is having Huge client base spread across coastal Andhra Pradesh and Southern India. Qualified personnel are employed to ensure the quality of the product and also provide assistance to farmers to grow the Culture under technical guidance.
                </p>
                <p className="text-gray-700 mt-4 text-justify">
                  Dr BRK has been supplying seed to the farmers in the State. Average volume of seed supplied to the farmers is 300 Millions per annum (250 Millions of Letopeanus Vannamei variant and 50 Millions of Black Tiger seed), Supplied to the farmers cultivating in an extent of over 3000 acres of Aqua Culture Tanks.
                  Dr BRK has buyback arrangement for the shrimp cultivated by the farmers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Global Expansion</h3>
                <p className="text-gray-700 text-justify">
                  In the process of natural forward integration of the business, Dr BRK has proposed to enter into processing and exporting of shrimp to USA, EU, Asia, Middle-east and World Wide. The company has engaged marketing executives and has started to secure orders by negotiating with International buyers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Family Values & Social Responsibility</h3>
                <p className="text-gray-700 text-justify">
                  The Family-managed Business has not only strengthened the existing business but also developed new business and has also successfully planned to transition into a professional corporate entity. The Family with rich traditional values has always planned to contribute for the welfare of its community through its Foundation – Ramakrishna Vidyalaya and Sri RajaRajeswari Foundation. The Foundation is actively involved in Public health and education in the communities where its companies operate.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-700 text-white rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Motto in BRK's Words</h3>
              <blockquote className="text-xl italic">
                "In the mission to promote business and humanitarian activities in India and abroad,
                Between the generations that are and the generations that are yet to come
                To The SEAFOOD INDUSTRY."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
