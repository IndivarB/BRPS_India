
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-ocean-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
          We're sorry, but the page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="bg-ocean-blue hover:bg-blue-700">
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
