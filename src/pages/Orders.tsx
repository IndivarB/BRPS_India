import React, { useState } from 'react';

// Mock toast function since the original is not provided.
// In a real app, you would use your actual toast implementation.
const toast = ({ title, description }: { title: string, description: string }) => {
  console.log(`Toast: ${title} - ${description}`);
  // A simple alert for demonstration purposes in this environment.
  // In a real app, a proper toast component would render this.
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


const OrderSteps = [
  {
    id: 1,
    title: "Submit Order Request",
    description: "Fill out our order form with your product requirements and contact details.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Receive Confirmation & Quotation",
    description: "Our team will review your request and respond with a detailed quotation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Confirm Order",
    description: "After reviewing the quotation, confirm your order to proceed with processing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Production & Quality Check",
    description: "Your order enters our production line and undergoes our rigorous quality checks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Shipping & Delivery",
    description: "Once approved, your order is carefully packed and shipped to your specified location.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  }
];

const products = [
  { id: 1, name: "RAW VANNAMEI HEADON, WHOLE SHRIMP" },
  { id: 2, name: "RAW VANNAMEI HEADLESS, SHELL-ON SHRIMP" },
  { id: 3, name: "RAW VANNAMEI EASY PEEL SHRIMP" },
  { id: 4, name: "RAW TIGER HEADON, WHOLE SHRIMP" },
  { id: 5, name: "RAW TIGER HEADLESS, SHELL-ON SHRIMP" },
  { id: 6, name: "RAW TIGER EASY PEEL SHRIMP" },
];

const Orders = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    specifications: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (value.length > 25) return "Full Name cannot exceed 25 characters.";
        if (!/^[a-zA-Z\s]*$/.test(value)) return "Full Name should only contain letters and spaces.";
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email address.";
        break;
      case 'phone':
        if (!/^[0-9]*$/.test(value)) return "Phone Number should only contain numbers.";
        break;
      case 'quantity':
        if (!/^[0-9]*$/.test(value)) return "Quantity should only contain numbers.";
        break;
      case 'company':
        if (value.length > 25) return "Company Name cannot exceed 25 characters.";
        break;
      case 'specifications':
        if (value.length > 50) return "Product Specifications cannot exceed 50 characters.";
        break;
      case 'message':
        if (value.length > 50) return "Additional Information cannot exceed 50 characters.";
        break;
      default:
        break;
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    const error = validate(name, value);
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation check on all fields
    const finalErrors: Partial<typeof formData> = {};
    let formIsValid = true;

    // Check required fields
    const requiredFields: (keyof typeof formData)[] = ['name', 'email', 'phone', 'product', 'quantity'];
    requiredFields.forEach(field => {
      if (!formData[field]) {
        finalErrors[field] = "This field is required.";
        formIsValid = false;
      }
    });
    
    // Check all validation rules
    Object.keys(formData).forEach(key => {
        const fieldKey = key as keyof typeof formData;
        const error = validate(fieldKey, formData[fieldKey]);
        if (error) {
            finalErrors[fieldKey] = error;
            formIsValid = false;
        }
    });

    setErrors(finalErrors);

    if (!formIsValid) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors before submitting.",
      });
      return;
    }

    // --- Email Sending Logic ---
    // This uses the `mailto:` protocol to open the user's default email client.
    // This is a client-side solution and does not require a backend.
    const recipientEmail = "exports.bolisettypvtltd@gmail.com";
    const subject = `New Order Request from ${formData.company || formData.name}`;
    const body = `
A new order request has been submitted.

--- Customer Details ---
Full Name: ${formData.name}
Company Name: ${formData.company || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}

--- Order Details ---
Product: ${formData.product}
Quantity: ${formData.quantity} kg
Product Specifications: ${formData.specifications || 'N/A'}
Additional Information: ${formData.message || 'N/A'}

---
This email was generated from the website order form.
    `;

    // Encode the subject and body for the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the email client
    window.location.href = mailtoLink;

    toast({
      title: "Redirecting to Email Client",
      description: "Please complete and send the email to submit your order.",
    });

    // Optionally clear the form after submission attempt
    // setFormData({
    //   name: '', company: '', email: '', phone: '',
    //   product: '', quantity: '', specifications: '', message: '',
    // });
  };

  return (
    <div className="bg-white pt-20 font-sans">
      {/* Hero Section */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Order Our Products</h1>
            <p className="text-xl">
              Follow our simple ordering process to receive high-quality shrimp products tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Ordering Process</h2>
          
          <div className="relative max-w-5xl mx-auto">
             {/* Desktop Steps with connecting line */}
            <div className="hidden md:flex justify-between items-start">
              <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-300"></div>
              {OrderSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center w-1/5 z-10">
                  <div className="mb-4 bg-white p-1 rounded-full">{step.icon}</div>
                  <div className="bg-white p-4 rounded-lg shadow-md h-full w-full">
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Steps */}
            <div className="md:hidden space-y-8">
              {OrderSteps.map((step) => (
                <div key={step.id} className="flex items-start">
                  <div className="mr-4 mt-1 flex-shrink-0">{step.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Submit Your Order Request</h2>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange} required
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                
                {/* Company Name (Optional) */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text" id="company" name="company"
                    value={formData.company} onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
                
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange} required
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel" id="phone" name="phone"
                    value={formData.phone} onChange={handleChange} required
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                
                {/* Product */}
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                    Product <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="product" name="product"
                    value={formData.product} onChange={handleChange} required
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-white ${errors.product ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                  >
                    <option value="">Select a Product</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.name}>{product.name}</option>
                    ))}
                  </select>
                   {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
                </div>
                
                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity (in kg) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" id="quantity" name="quantity"
                    value={formData.quantity} onChange={handleChange} required
                    placeholder="e.g., 500"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.quantity ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                  />
                   {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
                </div>
                
                {/* Product Specifications (Optional) */}
                <div className="md:col-span-2">
                  <label htmlFor="specifications" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Specifications
                  </label>
                  <input
                    type="text" id="specifications" name="specifications"
                    value={formData.specifications} onChange={handleChange}
                    placeholder="e.g., Size requirements, packaging preferences"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.specifications ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                  />
                  {errors.specifications && <p className="text-red-500 text-xs mt-1">{errors.specifications}</p>}
                </div>
                
                {/* Additional Information (Optional) */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} rows={4}
                    placeholder="Please provide any additional details about your order requirements"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button type="submit" className="bg-blue-700 hover:bg-blue-800 px-8 py-3 text-white font-medium rounded-md w-full md:w-auto transition-colors duration-300">
                  Submit Order Request
                </Button>
                <p className="mt-4 text-sm text-gray-500">
                  We will respond to your request within 24-48 business hours.
                </p>
              </div>
            </form>
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
                <h3 className="font-bold text-lg mb-2 text-gray-800">What is the minimum order quantity?</h3>
                <p className="text-gray-700">Our minimum order quantity varies by product. Please contact us with your requirements, and we will provide you with specific information.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">How long does shipping take?</h3>
                <p className="text-gray-700">Shipping times depend on your location and the shipping method chosen. Typically, shipping takes 7-14 business days for international orders.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Can I customize the packaging?</h3>
                <p className="text-gray-700">Yes, we offer customized packaging options for bulk orders. Please specify your requirements in the order form, and our team will discuss the possibilities with you.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">What payment methods do you accept?</h3>
                <p className="text-gray-700">We accept bank transfers, letter of credit, and other standard international payment methods. Payment details will be provided in the quotation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orders;
