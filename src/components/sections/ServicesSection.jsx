import React from 'react';
import { 
  HiOfficeBuilding, 
  HiHeart, 
  HiGift, 
  HiCalendar,
  HiUserGroup,
  HiSparkles
} from 'react-icons/hi';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ServicesSection = () => {
  const services = [
    {
      icon: HiOfficeBuilding,
      title: 'Corporate Catering',
      description: 'Professional catering for business meetings, conferences, and corporate events.',
      features: ['Business lunches', 'Conference catering', 'Office parties', 'Product launches'],
      image: '/pexels-iamabdullahsheik-10480254.jpg',
      color: 'bg-blue-500'
    },
    {
      icon: HiHeart,
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our elegant wedding catering services.',
      features: ['Bridal tastings', 'Custom menus', 'Full service', 'Cake & desserts'],
      image: '/ctg2.jpg',
      color: 'bg-pink-500'
    },
    {
      icon: HiGift,
      title: 'Private Events',
      description: 'Intimate gatherings and private parties with personalized service.',
      features: ['Birthday parties', 'Anniversary dinners', 'Family reunions', 'Celebrations'],
      image: '/ctg6.jpg',
      color: 'bg-purple-500'
    },
    {
      icon: HiCalendar,
      title: 'Holiday Catering',
      description: 'Festive menus for all your holiday celebrations and seasonal events.',
      features: ['Christmas dinners', 'Thanksgiving feasts', 'New Year parties', 'Easter brunches'],
      image: '/pexels-the-castlebar-3902897-19107131.jpg',
      color: 'bg-green-500'
    },
    {
      icon: HiUserGroup,
      title: 'Buffet Services',
      description: 'Self-service buffet options perfect for large gatherings and casual events.',
      features: ['Hot buffets', 'Cold displays', 'Salad bars', 'Dessert stations'],
      image: '/pexels-rachel-claire-4577167.jpg',
      color: 'bg-orange-500'
    },
    {
      icon: HiSparkles,
      title: 'Custom Events',
      description: 'Tailored catering solutions for unique events and special occasions.',
      features: ['Theme parties', 'Cultural events', 'Outdoor catering', 'Special diets'],
      image: '/pexels-tim-douglas-6210747.jpg',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Catering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive catering 
            services tailored to your specific needs and preferences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Custom Catering Solution?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your unique requirements and create a personalized catering experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              Get Custom Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-500"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
