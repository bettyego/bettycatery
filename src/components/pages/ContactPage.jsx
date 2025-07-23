import { useState } from 'react';
import Layout from '../layout/Layout';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import EnhancedContactForm from '../features/EnhancedContactForm';
import QuoteCalculator from '../features/QuoteCalculator';
import WhatsAppButton, { WhatsAppTemplates } from '../features/WhatsAppButton';
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiClock,
  HiCalendar,
  HiUsers
} from 'react-icons/hi';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    'Corporate Event',
    'Wedding',
    'Birthday Party',
    'Anniversary',
    'Holiday Celebration',
    'Private Dinner',
    'Other'
  ];

  const contactInfo = [
    {
      icon: HiPhone,
      title: 'Phone',
      details: '+234 806 411 1501',
      subtitle: 'Mon-Fri: 8AM-8PM'
    },
    {
      icon: HiMail,
      title: 'Email',
      details: 'nwabethroseonuoha@gmail.com',
      subtitle: '24/7 Response'
    },
    {
      icon: HiLocationMarker,
      title: 'Address',
      details: 'Abuja, Nigeria',
      subtitle: 'Federal Capital Territory'
    },
    {
      icon: HiClock,
      title: 'Hours',
      details: 'Mon-Fri: 8AM-8PM',
      subtitle: 'Sat-Sun: 9AM-6PM'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Event type is required';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required';
    }

    if (!formData.guestCount.trim()) {
      newErrors.guestCount = 'Guest count is required';
    } else if (isNaN(formData.guestCount) || parseInt(formData.guestCount) < 1) {
      newErrors.guestCount = 'Please enter a valid number of guests';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        message: ''
      });
      
      alert('Thank you! Your quote request has been submitted. We\'ll get back to you within 24 hours.');
    } catch (error) {
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const seoProps = {
    title: 'Contact Betty Catery - Get Free Quote | Catering Consultation & Booking',
    description: 'Contact Betty Catery for a free catering quote and consultation. Professional catering services for your events. Call +1 (555) 123-4567 or request a quote online.',
    keywords: 'contact Betty Catery, catering quote, catering consultation, book catering, catering contact, event planning consultation',
    url: 'https://bettycatery.com/contact'
  };

  return (
    <Layout seoProps={seoProps}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Ready to plan your perfect event? Get in touch with us for a free consultation 
            and personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card padding="lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Request a Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={errors.name}
                      required
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 text-base rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 ${
                          errors.eventType 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                            : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500/20'
                        }`}
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.eventType && (
                        <p className="mt-1 text-sm text-red-600">{errors.eventType}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Event Date"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      error={errors.eventDate}
                      required
                    />
                    <Input
                      label="Number of Guests"
                      name="guestCount"
                      type="number"
                      min="1"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      error={errors.guestCount}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your event, dietary requirements, preferred menu style, and any special requests..."
                      className={`w-full px-4 py-2 text-base rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Quote'}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  We're here to help make your event perfect. Reach out to us through 
                  any of the following methods, and we'll respond promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} padding="lg" className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.subtitle}
                      </p>
                    </Card>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <Card padding="none" className="overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <HiLocationMarker className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Abuja, Nigeria</p>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card padding="lg" className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay connected for the latest updates and culinary inspirations
                </p>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.facebook.com/share/1ApYd8KChU/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                    aria-label="Follow us on Facebook"
                  >
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/be.thel1513?igsh=YmVmNHB4ejUzbXVx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    aria-label="Follow us on Instagram"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/onuoha-mba-bethel-nwakaego-07987b368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our catering services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 2-3 weeks in advance for most events. For large events or during peak seasons, 4-6 weeks is preferred."
              },
              {
                question: "Do you accommodate dietary restrictions?",
                answer: "Absolutely! We can accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Just let us know when you book."
              },
              {
                question: "What's included in your service?",
                answer: "Our service includes menu planning, food preparation, delivery/setup, serving staff (for full-service packages), and cleanup."
              },
              {
                question: "Can you provide equipment and linens?",
                answer: "Yes, we offer rental services for tables, chairs, linens, china, glassware, and other event essentials."
              }
            ].map((faq, index) => (
              <Card key={index} padding="lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Personalized Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our enhanced quote form for a more detailed and accurate estimate for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <EnhancedContactForm
              onSubmitSuccess={(data) => {
                console.log('Quote request submitted:', data);
              }}
            />
            <QuoteCalculator
              onQuoteGenerated={(quote) => {
                console.log('Quote generated:', quote);
              }}
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get instant answers to your questions through WhatsApp or give us a call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton
              variant="button"
              message={WhatsAppTemplates.quote}
              className="text-lg px-8 py-4"
            />
            <a
              href="tel:+2348064111501"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 text-lg"
            >
              <HiPhone className="mr-2" />
              Call Now: +234 806 411 1501
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
