import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiPhone, 
  HiMail, 
  HiLocationMarker,
  HiClock 
} from 'react-icons/hi';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Corporate Catering',
    'Wedding Catering',
    'Private Events',
    'Holiday Catering',
    'Buffet Services',
    'Custom Menus',
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1ApYd8KChU/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/be.thel1513?igsh=YmVmNHB4ejUzbXVx', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/onuoha-mba-bethel-nwakaego-07987b368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/my ct.jpg"
                alt="Lady B's Catering Service"
                className="h-8 w-8 object-cover rounded-full"
              />
              <span className="ml-2 text-xl font-bold font-luxury">Lady B's Catering Service</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Luxury catering services for all your special events.
              Exquisite cuisine, impeccable service, and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Abuja, Nigeria<br />
                  Federal Capital Territory
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <HiPhone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+234 806 411 1501</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">nwabethroseonuoha@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <HiClock className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>Mon - Fri: 8:00 AM - 8:00 PM</div>
                  <div>Sat - Sun: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Lady B's Catering Service. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
