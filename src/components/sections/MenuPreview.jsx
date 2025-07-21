import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '../ui/Button';
import Card from '../ui/Card';

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers', count: 12 },
    { id: 'entrees', name: 'Main Courses', count: 18 },
    { id: 'desserts', name: 'Desserts', count: 8 },
    { id: 'beverages', name: 'Beverages', count: 15 }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Mini Caprese Skewers',
        description: 'Fresh mozzarella, cherry tomatoes, and basil with balsamic glaze',
        image: '/pexels-annl-2284604.jpg',
        price: '$3.50'
      },
      {
        name: 'Gourmet Bruschetta',
        description: 'Artisan bread topped with tomato, garlic, and fresh herbs',
        image: '/pexels-enesfilm-8360218.jpg',
        price: '$4.25'
      },
      {
        name: 'Stuffed Mushrooms',
        description: 'Button mushrooms filled with herb cream cheese and breadcrumbs',
        image: '/istockphoto-498311434-612x612.jpg',
        price: '$5.00'
      }
    ],
    entrees: [
      {
        name: 'Herb-Crusted Salmon',
        description: 'Atlantic salmon with lemon herb butter and seasonal vegetables',
        image: '/pexels-meruyert-gonullu-6161669.jpg',
        price: '$28.00'
      },
      {
        name: 'Prime Beef Tenderloin',
        description: 'Grilled to perfection with garlic mashed potatoes',
        image: '/pexels-the-castlebar-3902897-19107140.jpg',
        price: '$35.00'
      },
      {
        name: 'Vegetarian Lasagna',
        description: 'Layers of pasta with roasted vegetables and ricotta cheese',
        image: '/pexels-vlada-karpovich-7561328.jpg',
        price: '$22.00'
      }
    ]
  };

  const featuredImages = [
    '/pexels-jonathanborba-4599123.jpg',
    '/pexels-pnw-prod-8995668.jpg',
    '/pexels-viniciusvieirafotografia-19763212.jpg',
    '/pexels-nicole-michalou-5779181.jpg',
    '/pexels-mathew-thomas-318779-10661278.jpg'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Signature Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted menu featuring fresh, seasonal ingredients 
            and innovative culinary techniques that will impress your guests.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="rounded-2xl overflow-hidden"
          >
            {featuredImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Featured dish ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {(menuItems[activeCategory] || menuItems.appetizers).map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Add to Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="primary" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
