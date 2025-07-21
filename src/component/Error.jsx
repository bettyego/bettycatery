import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { HiHome, HiArrowLeft } from 'react-icons/hi';

const Error = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-orange-500 mb-4">404</div>
            <div className="text-6xl mb-4">🍽️</div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for seems to have wandered off to the kitchen.
            Let's get you back to something delicious!
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link to="/">
              <Button variant="primary" size="lg" className="w-full">
                <HiHome className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <HiArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Help Links */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Need help? Try these popular pages:</p>
            <div className="space-y-2">
              <Link to="/menu" className="block text-orange-600 hover:text-orange-500">
                View Our Menu
              </Link>
              <Link to="/services" className="block text-orange-600 hover:text-orange-500">
                Our Services
              </Link>
              <Link to="/contact" className="block text-orange-600 hover:text-orange-500">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error;