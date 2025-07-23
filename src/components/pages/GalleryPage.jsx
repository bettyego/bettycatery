import Layout from '../layout/Layout';
import { CategorizedGallery } from '../features/ImageGallery';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const galleryCategories = [
    {
      id: 'all',
      name: 'All Events',
      images: [
        { src: '/ctg.jpg', alt: 'Luxury Wedding Setup', caption: 'Elegant wedding reception setup' },
        { src: '/ctg2.jpg', alt: 'Wedding Catering', caption: 'Beautiful wedding catering display' },
        { src: '/ctg3.jpg', alt: 'Appetizer Platter', caption: 'Gourmet appetizer selection' },
        { src: '/ctg4.jpg', alt: 'Cheese Board', caption: 'Artisan cheese and charcuterie board' },
        { src: '/ctg5.jpg', alt: 'Elegant Canapés', caption: 'Sophisticated canapé presentation' },
        { src: '/ctg6.jpg', alt: 'Private Event', caption: 'Intimate private dining experience' },
        { src: '/ctg7.jpg', alt: 'Main Course', caption: 'Perfectly plated main course' },
        { src: '/story.jpg', alt: 'Kitchen Story', caption: 'Behind the scenes in our kitchen' },
        { src: '/pexels-jonathanborba-4599123.jpg', alt: 'Dessert Display', caption: 'Decadent dessert presentation' },
        { src: '/pexels-pnw-prod-8995668.jpg', alt: 'Fine Dining', caption: 'Fine dining experience' },
        { src: '/pexels-nicole-michalou-5779181.jpg', alt: 'Event Setup', caption: 'Professional event setup' },
        { src: '/pexels-viniciusvieirafotografia-19763212.jpg', alt: 'Catering Service', caption: 'Full-service catering in action' }
      ]
    },
    {
      id: 'weddings',
      name: 'Weddings',
      images: [
        { src: '/ctg.jpg', alt: 'Luxury Wedding Setup', caption: 'Elegant wedding reception setup' },
        { src: '/ctg2.jpg', alt: 'Wedding Catering', caption: 'Beautiful wedding catering display' },
        { src: '/pexels-jonathanborba-4599123.jpg', alt: 'Wedding Desserts', caption: 'Wedding dessert table' },
        { src: '/pexels-nicole-michalou-5779181.jpg', alt: 'Wedding Reception', caption: 'Wedding reception setup' }
      ]
    },
    {
      id: 'corporate',
      name: 'Corporate Events',
      images: [
        { src: '/ctg6.jpg', alt: 'Corporate Event', caption: 'Professional corporate catering' },
        { src: '/ctg7.jpg', alt: 'Business Lunch', caption: 'Executive business lunch service' },
        { src: '/pexels-viniciusvieirafotografia-19763212.jpg', alt: 'Corporate Catering', caption: 'Corporate event catering setup' }
      ]
    },
    {
      id: 'appetizers',
      name: 'Appetizers & Canapés',
      images: [
        { src: '/ctg3.jpg', alt: 'Shrimp Cocktail', caption: 'Fresh shrimp cocktail platter' },
        { src: '/ctg4.jpg', alt: 'Cheese Board', caption: 'Artisan cheese and charcuterie selection' },
        { src: '/ctg5.jpg', alt: 'Elegant Canapés', caption: 'Sophisticated canapé presentation' },
        { src: '/pexels-annl-2284604.jpg', alt: 'Caprese Skewers', caption: 'Fresh caprese skewers' }
      ]
    },
    {
      id: 'main-courses',
      name: 'Main Courses',
      images: [
        { src: '/ctg7.jpg', alt: 'Gourmet Main Course', caption: 'Perfectly plated gourmet entrée' },
        { src: '/pexels-meruyert-gonullu-6161669.jpg', alt: 'Herb-Crusted Salmon', caption: 'Herb-crusted salmon with vegetables' },
        { src: '/pexels-the-castlebar-3902897-19107140.jpg', alt: 'Prime Beef', caption: 'Prime beef tenderloin' },
        { src: '/pexels-vlada-karpovich-7561328.jpg', alt: 'Vegetarian Option', caption: 'Gourmet vegetarian entrée' }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      images: [
        { src: '/pexels-jonathanborba-4599123.jpg', alt: 'Chocolate Dessert', caption: 'Decadent chocolate creation' },
        { src: '/pexels-pnw-prod-8995668.jpg', alt: 'Elegant Dessert', caption: 'Elegant dessert presentation' },
        { src: '/pexels-nicole-michalou-5779183.jpg', alt: 'Crème Brûlée', caption: 'Classic crème brûlée' }
      ]
    },
    {
      id: 'behind-scenes',
      name: 'Behind the Scenes',
      images: [
        { src: '/story.jpg', alt: 'Kitchen Preparation', caption: 'Our team preparing fresh ingredients' },
        { src: '/my ct.jpg', alt: 'Lady B\'s Team', caption: 'Lady B\'s Catering Service team' }
      ]
    }
  ];

  const seoProps = {
    title: 'Gallery - Lady B\'s Catering Service | Event Photos & Food Presentation',
    description: 'Browse our gallery of beautifully catered events, from elegant weddings to corporate functions. See our food presentation and event setups.',
    keywords: 'catering gallery, event photos, food presentation, wedding catering, corporate events, Lady B\'s Catering',
    url: 'https://ladybscatering.com/gallery'
  };

  return (
    <Layout seoProps={seoProps}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our portfolio of beautifully catered events and exquisite food presentations 
              that showcase the artistry and elegance of Lady B's Catering Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CategorizedGallery 
              categories={galleryCategories}
              title="Event Portfolio"
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Your Own Memorable Event?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us bring the same level of excellence and attention to detail to your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Quote
              </motion.a>
              <motion.a
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Menu
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
