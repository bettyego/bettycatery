import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiMail } from 'react-icons/hi';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      {/* Top bar with contact info */}
      <div className="bg-gray-800 text-white py-2" role="complementary" aria-label="Contact information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <HiPhone className="h-4 w-4" aria-hidden="true" />
                <a
                  href="tel:+2348064111501"
                  className="hover:text-purple-300 transition-colors"
                  aria-label="Call us at +234 806 411 1501"
                >
                  +234 806 411 1501
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <HiMail className="h-4 w-4" aria-hidden="true" />
                <a
                  href="mailto:nwabethroseonuoha@gmail.com"
                  className="hover:text-purple-300 transition-colors"
                  aria-label="Email us at nwabethroseonuoha@gmail.com"
                >
                  nwabethroseonuoha@gmail.com
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Luxury Catering Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" aria-label="Lady B's Catering Service - Go to homepage">
              <img
                src="/my ct.jpg"
                alt="Lady B's Catering Service logo"
                className="h-10 w-10 object-cover rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-gray-900 font-luxury">
                Lady B's Catering Service
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t" role="menu" aria-orientation="vertical">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => navigate('/contact')}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
