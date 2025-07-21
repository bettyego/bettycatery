import React from 'react';
import Layout from '../layout/Layout';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import MenuPreview from '../sections/MenuPreview';
import ServicesSection from '../sections/ServicesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';

const Home = () => {
  const seoProps = {
    title: 'Lady B\'s Catering Service - Luxury Catering Services | Premium Cuisine & Exceptional Service',
    description: 'Lady B\'s Catering Service provides exquisite luxury catering for corporate events, weddings, private parties, and special occasions. Premium cuisine, impeccable service, and unforgettable experiences.',
    keywords: 'luxury catering services, wedding catering, corporate catering, event catering, premium food service, Lady B\'s Catering Service, elegant dining',
    url: 'https://ladybscatering.com',
    type: 'website'
  };

  return (
    <Layout seoProps={seoProps}>
      <HeroSection />
      <FeaturesSection />
      <MenuPreview />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
