import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

// Mock toast function since the original is not provided.
const toast = ({ title, description }: { title: string, description: string }) => {
  console.log(`Toast: ${title} - ${description}`);
  // A simple alert for demonstration purposes in this environment.
  alert(`${title}\n${description}`);
};

// Mock Button component
const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // --- Email Sending Logic ---
    // This uses the `mailto:` protocol to open the user's default email client.
    const recipientEmail = "exports.bolisettypvtltd@gmail.com";
    const subject = `Contact Form: ${formData.subject}`;
    const body = `
A new message has been sent from the website contact form.

--- Sender Details ---
Name: ${formData.name}
Email: ${formData.email}

--- Message ---
${formData.message}
    `;

    // Encode the subject and body for the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the email client
    window.location.href = mailtoLink;

    toast({
      title: "Redirecting to Email Client",
      description: "Please complete and send the email to submit your message.",
    });
    
    // Clear form after submission attempt
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-white pt-20 font-sans">
      {/* Hero Section */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">
              Get in touch with our team for inquiries, orders, or any questions about our products
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                  <Mail className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Email Us</h3>
                <p className="text-gray-600 mb-4">For general inquiries and orders</p>
                <a href="mailto:exports.bolisettypvtltd@gmail.com" className="text-blue-700 font-medium hover:underline break-all">
                  exports.bolisettypvtltd@gmail.com
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                  <MapPin className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Our Location</h3>
                <p className="text-gray-600 mb-4">Headquarters</p>
                <p className="text-blue-700 font-medium">
                  Repalle, Andhra Pradesh 522265, India
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                  <Phone className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Call Us</h3>
                <p className="text-gray-600 mb-4">Mon-Fri, 9am-5pm IST</p>
                <p className="text-blue-700 font-medium">
                  +91 9394555999
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row">
              {/* Contact Form */}
              <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text" id="subject" name="subject"
                        value={formData.subject} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message" name="message"
                        value={formData.message} onChange={handleChange} required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button type="submit" className="bg-blue-700 hover:bg-blue-800 w-full py-3 text-white font-medium rounded-md transition-colors duration-300">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Map */}
              <div className="lg:w-1/2 lg:pl-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">How to Reach Us</h2>
                <div className="bg-white p-4 rounded-lg shadow-lg h-[500px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15198.920788834577!2d80.82382845!3d16.0206452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49f59a2391c549%3A0xfe237504b0eca607!2sRepalle%2C%20Andhra%20Pradesh%20522265%2C%20India!5e0!3m2!1sen!2sus!4v1661896648318!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BRPS Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">What are your business hours?</h3>
                <p className="text-gray-700">Our office operates from Monday to Friday, 9:00 AM to 5:00 PM (IST). We are closed on weekends and public holidays.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">How long does it take to get a response?</h3>
                <p className="text-gray-700">We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please mention this in the subject line of your email.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Can I schedule a facility tour?</h3>
                <p className="text-gray-700">Yes, we welcome visitors to our facility. Please contact us in advance to schedule a tour, as we need to make arrangements and ensure compliance with food safety protocols.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Do you have distributors in other countries?</h3>
                <p className="text-gray-700">We are continuously expanding our distribution network. Please contact us directly for information about distributors in your specific region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
