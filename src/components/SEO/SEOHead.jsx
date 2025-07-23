import { useEffect } from 'react';

const SEOHead = ({
  title = 'Lady B\'s Catering Service - Luxury Catering Services',
  description = 'Lady B\'s Catering Service provides exquisite luxury catering for corporate events, weddings, private parties, and special occasions. Premium cuisine, impeccable service, and unforgettable experiences.',
  keywords = 'luxury catering, catering services, wedding catering, corporate catering, event catering, premium food service, Lady B\'s Catering Service',
  image = '/my ct.jpg',
  url = 'https://ladybscatering.com',
  type = 'website'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Lady B\'s Catering Service');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Lady B\'s Catering Service', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional SEO tags
    updateMetaTag('theme-color', '#a855f7');
    updateMetaTag('msapplication-TileColor', '#a855f7');

    // Structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Lady B's Catering Service",
      "description": description,
      "url": url,
      "telephone": "+234-806-411-1501",
      "email": "nwabethroseonuoha@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abuja",
        "addressRegion": "Federal Capital Territory",
        "addressCountry": "Nigeria"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.0765",
        "longitude": "7.3986"
      },
      "openingHours": [
        "Mo-Fr 08:00-20:00",
        "Sa-Su 09:00-18:00"
      ],
      "servesCuisine": "American",
      "priceRange": "$$",
      "image": image,
      "logo": "/my ct.jpg",
      "sameAs": [
        "https://www.facebook.com/share/1ApYd8KChU/?mibextid=wwXIfr",
        "https://www.instagram.com/be.thel1513?igsh=YmVmNHB4ejUzbXVx",
        "https://www.linkedin.com/in/onuoha-mba-bethel-nwakaego-07987b368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    };

    // Add or update structured data
    let structuredDataScript = document.querySelector('#structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEOHead;
