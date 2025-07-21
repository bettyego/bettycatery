import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { HiMail, HiCheckCircle } from 'react-icons/hi';
import Swal from 'sweetalert2';

const Sub = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Email Required',
        text: 'Please enter your email address',
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      Swal.fire({
        icon: 'success',
        title: 'Successfully Subscribed!',
        text: 'Thank you for subscribing to our newsletter. You\'ll receive updates about our latest menus and special offers.',
        timer: 3000,
        showConfirmButton: false
      });

      setEmail('');

      // Redirect to home after successful subscription
      setTimeout(() => {
        navigate('/');
      }, 3000);

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Subscription Failed',
        text: 'There was an error processing your subscription. Please try again.',
        timer: 2000,
        showConfirmButton: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const seoProps = {
    title: 'Subscribe to Betty Catery Newsletter - Latest Updates & Special Offers',
    description: 'Subscribe to Betty Catery\'s newsletter for the latest menu updates, special offers, and catering tips. Stay informed about our professional catering services.',
    keywords: 'Betty Catery newsletter, catering updates, special offers, menu updates, catering tips, subscribe',
    url: 'https://bettycatery.com/sub'
  };

  return (
    <Layout seoProps={seoProps}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <Card className="text-center" padding="xl">
            {/* Icon */}
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <HiMail className="h-10 w-10 text-white" />
            </div>

            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h1>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter and be the first to know about new menu items,
              special offers, and catering tips from Betty Catery.
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-center"
                size="lg"
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What you'll get:
              </h3>
              <div className="space-y-3 text-left">
                {[
                  'Exclusive menu previews',
                  'Special discount offers',
                  'Event planning tips',
                  'Seasonal menu updates',
                  'Priority booking notifications'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <HiCheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Note */}
            <p className="mt-6 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
              Read our <a href="#" className="text-orange-600 hover:text-orange-500">Privacy Policy</a>.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Sub;