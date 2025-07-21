import React from 'react';
import { 
  HiSparkles, 
  HiClock, 
  HiShieldCheck, 
  HiHeart,
  HiUsers,
  HiStar
} from 'react-icons/hi';
import Card from '../ui/Card';

const FeaturesSection = () => {
  const features = [
    {
      icon: HiSparkles,
      title: 'Premium Quality',
      description: 'Fresh, locally-sourced ingredients prepared by experienced chefs to ensure exceptional taste and presentation.',
      color: 'text-orange-500'
    },
    {
      icon: HiClock,
      title: 'Timely Service',
      description: 'Reliable scheduling and punctual delivery or setup, ensuring your event runs smoothly without delays.',
      color: 'text-blue-500'
    },
    {
      icon: HiShieldCheck,
      title: 'Food Safety',
      description: 'Strict hygiene standards and food safety protocols to guarantee the health and safety of your guests.',
      color: 'text-green-500'
    },
    {
      icon: HiHeart,
      title: 'Custom Menus',
      description: 'Personalized menu options tailored to your preferences, dietary requirements, and event theme.',
      color: 'text-red-500'
    },
    {
      icon: HiUsers,
      title: 'Professional Staff',
      description: 'Experienced and courteous service staff to ensure your guests receive exceptional hospitality.',
      color: 'text-purple-500'
    },
    {
      icon: HiStar,
      title: 'Event Excellence',
      description: 'Comprehensive event support from planning to cleanup, making your celebration stress-free.',
      color: 'text-yellow-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-luxury">
            Why Choose Lady B's Catering Service?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to delivering luxury catering experiences that surpass your highest expectations.
            Discover what makes us the premier choice for discerning clients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                padding="lg"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center">
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-purple-100 rounded-full text-purple-800 font-medium">
            <HiStar className="h-5 w-5 mr-2" />
            Trusted by 500+ distinguished clients
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
