import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight, HiPhotograph } from 'react-icons/hi';

const ImageGallery = ({ images, title = "Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <HiPhotograph className="h-6 w-6 text-orange-500 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openLightbox(image, index)}
            >
              <img 
                src={image.src} 
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <HiPhotograph className="h-4 w-4 text-gray-800" />
                  </div>
                </div>
              </div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.caption}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-60 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
              onClick={closeLightbox}
            >
              <HiX className="h-6 w-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <HiChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <HiChevronRight className="h-6 w-6 text-white" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-60 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <span className="text-white text-sm font-medium">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            )}

            {/* Main Image */}
            <motion.div
              className="max-w-full max-h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || 'Gallery image'}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>

            {/* Image Caption */}
            {selectedImage.caption && (
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full max-w-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                <p className="text-white text-center text-sm font-medium">
                  {selectedImage.caption}
                </p>
              </motion.div>
            )}

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60 flex space-x-2 bg-white bg-opacity-10 backdrop-blur-sm p-2 rounded-lg max-w-md overflow-x-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
                      index === currentIndex 
                        ? 'border-white' 
                        : 'border-transparent opacity-60 hover:opacity-80'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                      setSelectedImage(image);
                    }}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Gallery with categories
export const CategorizedGallery = ({ categories, title = "Gallery" }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');
  
  const activeImages = categories.find(cat => cat.id === activeCategory)?.images || [];

  return (
    <div>
      <div className="flex items-center mb-6">
        <HiPhotograph className="h-6 w-6 text-orange-500 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name} ({category.images.length})
          </button>
        ))}
      </div>

      <ImageGallery images={activeImages} title="" />
    </div>
  );
};

export default ImageGallery;
