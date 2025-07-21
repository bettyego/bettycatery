import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { 
  HiOfficeBuilding, 
  HiHeart, 
  HiGift, 
  HiCalendar,
  HiUserGroup,
  HiSparkles,
  HiCheck,
  HiStar
} from 'react-icons/hi';

const ServicesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const services = [
    {
      icon: HiOfficeBuilding,
      title: 'Corporate Catering',
      description: 'Professional catering solutions for business events, meetings, and corporate functions.',
      features: [
        'Business lunch meetings',
        'Conference catering',
        'Office parties & celebrations',
        'Product launch events',
        'Board meeting refreshments',
        'Team building events'
      ],
      image: '/pexels-iamabdullahsheik-10480254.jpg',
      startingPrice: 15,
      color: 'bg-blue-500'
    },
    {
      icon: HiHeart,
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our elegant wedding catering services.',
      features: [
        'Bridal menu tastings',
        'Custom wedding menus',
        'Full-service catering',
        'Wedding cake & desserts',
        'Cocktail hour service',
        'Reception dining'
      ],
      image: '/pexels-jonathanborba-29098366.jpg',
      startingPrice: 45,
      color: 'bg-pink-500'
    },
    {
      icon: HiGift,
      title: 'Private Events',
      description: 'Intimate gatherings and private parties with personalized service and attention.',
      features: [
        'Birthday celebrations',
        'Anniversary dinners',
        'Family reunions',
        'Graduation parties',
        'Retirement celebrations',
        'Holiday gatherings'
      ],
      image: '/pexels-daisy-anderson-5584276.jpg',
      startingPrice: 25,
      color: 'bg-purple-500'
    },
    {
      icon: HiCalendar,
      title: 'Holiday Catering',
      description: 'Festive menus and seasonal specialties for all your holiday celebrations.',
      features: [
        'Christmas dinner service',
        'Thanksgiving feasts',
        'New Year celebrations',
        'Easter brunch',
        'Halloween parties',
        'Valentine\'s dinners'
      ],
      image: '/pexels-the-castlebar-3902897-19107131.jpg',
      startingPrice: 30,
      color: 'bg-green-500'
    },
    {
      icon: HiUserGroup,
      title: 'Buffet Services',
      description: 'Self-service buffet options perfect for large gatherings and casual events.',
      features: [
        'Hot buffet stations',
        'Cold display buffets',
        'Salad & appetizer bars',
        'Dessert stations',
        'Beverage service',
        'Setup & breakdown'
      ],
      image: '/pexels-rachel-claire-4577167.jpg',
      startingPrice: 18,
      color: 'bg-orange-500'
    },
    {
      icon: HiSparkles,
      title: 'Custom Events',
      description: 'Tailored catering solutions for unique events and special occasions.',
      features: [
        'Theme party catering',
        'Cultural event menus',
        'Outdoor event service',
        'Special dietary menus',
        'Pop-up events',
        'Festival catering'
      ],
      image: '/pexels-tim-douglas-6210747.jpg',
      startingPrice: 20,
      color: 'bg-indigo-500'
    }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: 15,
      description: 'Perfect for small gatherings and simple events',
      features: [
        'Menu planning consultation',
        'Food preparation & delivery',
        'Basic setup assistance',
        'Disposable serving ware',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: 25,
      description: 'Our most popular option for medium-sized events',
      features: [
        'Everything in Basic',
        'Professional service staff',
        'China & glassware rental',
        'Table linens & setup',
        'Event coordination',
        'Phone support'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 40,
      description: 'Full-service luxury catering for special occasions',
      features: [
        'Everything in Standard',
        'Dedicated event manager',
        'Custom menu development',
        'Floral arrangements',
        'Complete event setup',
        'Post-event cleanup',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const seoProps = {
    title: 'Catering Services & Packages - Betty Catery | Corporate, Wedding & Private Events',
    description: 'Comprehensive catering services for corporate events, weddings, private parties, and special occasions. Professional packages from basic to premium with full-service options.',
    keywords: 'catering services, corporate catering, wedding catering, private events, catering packages, event planning, Betty Catery services',
    url: 'https://bettycatery.com/services'
  };

  return (
    <Layout seoProps={seoProps}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Catering Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we provide comprehensive 
            catering services tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of specialized catering services, each designed 
              to create memorable experiences for your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  padding="none"
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 ${service.color} rounded-full flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      From ${service.startingPrice}/person
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <HiCheck className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-gray-500 italic">
                          +{service.features.length - 4} more services
                        </li>
                      )}
                    </ul>

                    <Button variant="outline" size="sm" className="w-full">
                      Get Quote
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your event size and requirements. 
              All packages can be customized to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={`relative overflow-hidden transition-all duration-300 ${
                  pkg.popular 
                    ? 'ring-2 ring-orange-500 shadow-xl scale-105' 
                    : 'hover:shadow-lg'
                }`}
                padding="lg"
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <HiStar className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    ${pkg.price}
                    <span className="text-lg text-gray-600 font-normal">/person</span>
                  </div>
                  <p className="text-gray-600">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <HiCheck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.popular ? "primary" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  Choose {pkg.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your catering needs and create a customized proposal for your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
