import React from 'react';
import { HiPhone, HiMail, HiCalendar } from 'react-icons/hi';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Let's discuss your catering needs and create an unforgettable culinary experience 
            for your guests. Get your free quote today!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-white text-orange-600 hover:bg-gray-100 w-full sm:w-auto"
            >
              <HiCalendar className="h-6 w-6 mr-3" />
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-orange-600 w-full sm:w-auto"
            >
              <HiPhone className="h-6 w-6 mr-3" />
              Call Now
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiPhone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">+1 (555) 123-4567</p>
              <p className="text-sm opacity-75">Mon-Fri: 8AM-8PM</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiMail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">info@bettycatery.com</p>
              <p className="text-sm opacity-75">24/7 Response</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiCalendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Online</h3>
              <p className="opacity-90">Schedule Consultation</p>
              <p className="text-sm opacity-75">Free Planning Session</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-lg opacity-90 mb-4">
              Trusted by leading companies and families across the region
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
              <span className="text-sm">Licensed & Insured</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Health Department Certified</span>
              <span className="text-sm">•</span>
              <span className="text-sm">5-Star Rated</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
