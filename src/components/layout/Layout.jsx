import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEOHead from '../SEO/SEOHead';

const Layout = ({
  children,
  showHeader = true,
  showFooter = true,
  seoProps = {}
}) => {
  return (
    <>
      <SEOHead {...seoProps} />
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
        >
          Skip to main content
        </a>

        {showHeader && (
          <Header role="banner" />
        )}

        <main
          id="main-content"
          className="flex-1"
          role="main"
          tabIndex="-1"
        >
          {children}
        </main>

        {showFooter && (
          <Footer role="contentinfo" />
        )}
      </div>
    </>
  );
};

export default Layout;
