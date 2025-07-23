import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { HiFilter, HiSearch } from 'react-icons/hi';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Items', count: 25 },
    { id: 'appetizers', name: 'Appetizers', count: 6 },
    { id: 'entrees', name: 'Main Courses', count: 8 },
    { id: 'wedding', name: 'Wedding Packages', count: 2 },
    { id: 'sides', name: 'Side Dishes', count: 4 },
    { id: 'desserts', name: 'Desserts', count: 3 },
    { id: 'beverages', name: 'Beverages', count: 2 }
  ];

  const menuItems = [
    // Appetizers
    {
      id: 1,
      category: 'appetizers',
      name: 'Mini Caprese Skewers',
      description: 'Fresh mozzarella, cherry tomatoes, and basil with balsamic glaze',
      price: 3.50,
      image: '/pexels-annl-2284604.jpg',
      dietary: ['vegetarian'],
      servingSize: 'Per piece'
    },
    {
      id: 2,
      category: 'appetizers',
      name: 'Gourmet Bruschetta',
      description: 'Artisan bread topped with tomato, garlic, and fresh herbs',
      price: 4.25,
      image: '/pexels-enesfilm-8360218.jpg',
      dietary: ['vegetarian'],
      servingSize: 'Per piece'
    },
    {
      id: 3,
      category: 'appetizers',
      name: 'Stuffed Mushrooms',
      description: 'Button mushrooms filled with herb cream cheese and breadcrumbs',
      price: 5.00,
      image: '/istockphoto-498311434-612x612.jpg',
      dietary: ['vegetarian'],
      servingSize: 'Per piece'
    },
    {
      id: 4,
      category: 'appetizers',
      name: 'Shrimp Cocktail Platter',
      description: 'Fresh jumbo shrimp served with cocktail sauce and lemon',
      price: 8.50,
      image: '/ctg3.jpg',
      dietary: ['gluten-free'],
      servingSize: 'Per piece'
    },
    {
      id: 5,
      category: 'appetizers',
      name: 'Artisan Cheese Board',
      description: 'Selection of premium cheeses with crackers, nuts, and fruits',
      price: 12.00,
      image: '/ctg4.jpg',
      dietary: ['vegetarian'],
      servingSize: 'Per platter'
    },
    {
      id: 6,
      category: 'appetizers',
      name: 'Smoked Salmon Canapés',
      description: 'Delicate canapés with smoked salmon, cream cheese, and dill',
      price: 6.75,
      image: '/ctg5.jpg',
      dietary: ['gluten-free'],
      servingSize: 'Per piece'
    },
    // Main Courses
    {
      id: 7,
      category: 'entrees',
      name: 'Herb-Crusted Salmon',
      description: 'Atlantic salmon with lemon herb butter and seasonal vegetables',
      price: 28.00,
      image: '/pexels-meruyert-gonullu-6161669.jpg',
      dietary: ['gluten-free'],
      servingSize: 'Per person'
    },
    {
      id: 8,
      category: 'entrees',
      name: 'Prime Beef Tenderloin',
      description: 'Grilled to perfection with garlic mashed potatoes',
      price: 35.00,
      image: '/pexels-the-castlebar-3902897-19107140.jpg',
      dietary: [],
      servingSize: 'Per person'
    },
    {
      id: 9,
      category: 'entrees',
      name: 'Vegetarian Lasagna',
      description: 'Layers of pasta with roasted vegetables and ricotta cheese',
      price: 22.00,
      image: '/pexels-vlada-karpovich-7561328.jpg',
      dietary: ['vegetarian'],
      servingSize: 'Per person'
    },
    {
      id: 10,
      category: 'entrees',
      name: 'Roasted Chicken Supreme',
      description: 'Free-range chicken breast with wild mushroom sauce',
      price: 24.00,
      image: '/ctg7.jpg',
      dietary: ['gluten-free'],
      servingSize: 'Per person'
    },
    {
      id: 11,
      category: 'entrees',
      name: 'Pan-Seared Duck Breast',
      description: 'Duck breast with cherry glaze and roasted root vegetables',
      price: 32.00,
      image: '/istockphoto-1057297086-1024x1024.jpg',
      dietary: ['gluten-free'],
      servingSize: 'Per person'
    },
    {
      id: 12,
      category: 'entrees',
      name: 'Lobster Thermidor',
      description: 'Fresh lobster in creamy cognac sauce with herbs',
      price: 45.00,
      image: '/istockphoto-1386533522-612x612.jpg',
      dietary: ['gluten-free'],
      servingSize: 'Per person'
    },
    {
      id: 13,
      category: 'entrees',
      name: 'Rack of Lamb',
      description: 'Herb-crusted lamb with rosemary jus and seasonal vegetables',
      price: 38.00,
      image: '/istockphoto-1406317293-1024x1024.jpg',
      dietary: ['gluten-free'],
      servingSize: 'Per person'
    },
    {
      id: 14,
      category: 'entrees',
      name: 'Seafood Paella',
      description: 'Traditional Spanish paella with fresh seafood and saffron rice',
      price: 26.00,
      image: '/istockphoto-1406318658-1024x1024.jpg',
      dietary: ['gluten-free'],
      servingSize: 'Per person'
    },
    // Wedding Packages
    {
      id: 15,
      category: 'wedding',
      name: 'Wedding Celebration Package',
      description: 'Complete wedding catering with elegant presentation and premium service',
      price: 85.00,
      image: '/ctg2.jpg',
      dietary: ['customizable'],
      servingSize: 'Per person'
    },
    {
      id: 16,
      category: 'wedding',
      name: 'Luxury Wedding Experience',
      description: 'Premium wedding package with multiple courses and champagne service',
      price: 120.00,
      image: '/ctg.jpg',
      dietary: ['customizable'],
      servingSize: 'Per person'
    },
    // Side Dishes
    {
      id: 17,
      category: 'sides',
      name: 'Truffle Mac & Cheese',
      description: 'Creamy mac and cheese with truffle oil and breadcrumb topping',
      price: 8.00,
      image: '/pexels-juliomelanda-1448721.jpg',
      dietary: ['vegetarian'],
      servingSize: 'Per person'
    },
    {
      id: 18,
      category: 'sides',
      name: 'Roasted Seasonal Vegetables',
      description: 'Fresh seasonal vegetables roasted with herbs and olive oil',
      price: 6.50,
      image: '/pexels-karography-438592595-16331112.jpg',
      dietary: ['vegan', 'gluten-free'],
      servingSize: 'Per person'
    },
    {
      id: 19,
      category: 'sides',
      name: 'Garlic Herb Potatoes',
      description: 'Roasted baby potatoes with fresh herbs and garlic',
      price: 5.75,
      image: '/pexels-lum3n-44775-1410235.jpg',
      dietary: ['vegan', 'gluten-free'],
      servingSize: 'Per person'
    },
    {
      id: 20,
      category: 'sides',
      name: 'Wild Rice Pilaf',
      description: 'Aromatic wild rice with almonds, cranberries, and herbs',
      price: 7.25,
      image: '/pexels-matheus-lara-1785960246-29111982.jpg',
      dietary: ['vegan', 'gluten-free'],
      servingSize: 'Per person'
    },
    // Desserts
    {
      id: 21,
      category: 'desserts',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      price: 8.50,
      image: '/pexels-jonathanborba-4599123.jpg',
      dietary: ['vegetarian'],
      servingSize: 'Per person'
    },
    {
      id: 22,
      category: 'desserts',
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers',
      price: 7.75,
      image: '/pexels-pnw-prod-8995668.jpg',
      dietary: ['vegetarian'],
      servingSize: 'Per person'
    },
    {
      id: 23,
      category: 'desserts',
      name: 'Crème Brûlée',
      description: 'Classic French custard with caramelized sugar topping',
      price: 9.25,
      image: '/pexels-nicole-michalou-5779183.jpg',
      dietary: ['vegetarian', 'gluten-free'],
      servingSize: 'Per person'
    },
    // Beverages
    {
      id: 24,
      category: 'beverages',
      name: 'Premium Wine Selection',
      description: 'Curated selection of red and white wines',
      price: 12.00,
      image: '/pexels-pixabay-302457.jpg',
      dietary: [],
      servingSize: 'Per glass'
    },
    {
      id: 25,
      category: 'beverages',
      name: 'Artisan Coffee Service',
      description: 'Freshly brewed premium coffee with cream and sugar service',
      price: 4.50,
      image: '/logo.png',
      dietary: ['vegetarian'],
      servingSize: 'Per cup'
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDietaryBadgeColor = (dietary) => {
    if (dietary.includes('vegetarian')) return 'bg-green-100 text-green-800';
    if (dietary.includes('vegan')) return 'bg-purple-100 text-purple-800';
    if (dietary.includes('gluten-free')) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };

  const seoProps = {
    title: 'Our Complete Menu - Betty Catery | Fresh Ingredients & Culinary Expertise',
    description: 'Explore Betty Catery\'s extensive menu featuring appetizers, main courses, desserts, and beverages. Fresh ingredients, dietary accommodations, and exceptional taste for your event.',
    keywords: 'catering menu, appetizers, main courses, desserts, vegetarian options, gluten-free, event food, Betty Catery menu',
    url: 'https://bettycatery.com/menu'
  };

  return (
    <Layout seoProps={seoProps}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Complete Menu
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover our extensive collection of carefully crafted dishes, 
            made with fresh ingredients and culinary expertise.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
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
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${item.price.toFixed(2)}
                  </div>
                  {item.dietary.length > 0 && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDietaryBadgeColor(item.dietary)}`}>
                        {item.dietary[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{item.servingSize}</span>
                    <span className="text-lg font-bold text-orange-500">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Menu?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We can create a personalized menu tailored to your event's specific needs and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Request Custom Menu
            </Button>
            <Button variant="outline" size="lg">
              Download Full Menu PDF
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
