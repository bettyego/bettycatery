import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { HiPhone, HiMail, HiStar, HiArrowRight } from 'react-icons/hi';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/h1.jpg"
          alt="Lady B's Catering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-full text-white text-sm font-medium mb-6">
                <HiStar className="h-4 w-4 mr-2" />
                Premium Catering Since 2020
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Exceptional Catering for
                <span className="text-orange-400 block">Memorable Events</span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
                From intimate gatherings to grand celebrations, Lady B's Catering Service
                delivers exquisite cuisine and impeccable service that makes every event extraordinary.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Get Free Quote
                  <HiArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/menu')}
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  View Our Menu
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center">
                  <HiPhone className="h-5 w-5 mr-2 text-orange-400" />
                  <a href="tel:+2348064111501" className="hover:text-orange-400 transition-colors">
                    +234 806 411 1501
                  </a>
                </div>
                <div className="flex items-center">
                  <HiMail className="h-5 w-5 mr-2 text-orange-400" />
                  <a href="mailto:nwabethroseonuoha@gmail.com" className="hover:text-orange-400 transition-colors">
                    nwabethroseonuoha@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Card */}
            <div className="lg:justify-self-end">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Why Choose Lady B's?
                </h3>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Events Catered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-1">5★</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-1">25+</div>
                    <div className="text-sm text-gray-600">Menu Options</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Professional event planning
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Fresh, locally sourced ingredients
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Customizable menu options
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Full-service catering team
                  </div>
                </div>

                <Button
                  variant="primary"
                  className="w-full mt-6 bg-orange-500 hover:bg-orange-600"
                  onClick={() => navigate('/services')}
                >
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
