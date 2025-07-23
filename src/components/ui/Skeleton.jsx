import { motion } from 'framer-motion';

const Skeleton = ({ className = "", width, height, rounded = true }) => {
  return (
    <motion.div
      className={`
        bg-gray-200 animate-pulse
        ${rounded ? 'rounded' : ''}
        ${className}
      `}
      style={{ width, height }}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    />
  );
};

// Menu Item Skeleton
export const MenuItemSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Skeleton className="h-48 w-full" rounded={false} />
    <div className="p-4 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  </div>
);

// Service Card Skeleton
export const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Skeleton className="h-64 w-full" rounded={false} />
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-4 w-3/4" />
      <div className="flex space-x-2 mt-4">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
  </div>
);

// Testimonial Skeleton
export const TestimonialSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="ml-4 space-y-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
    <div className="flex mt-4">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-5 w-5 mr-1" />
      ))}
    </div>
  </div>
);

// Page Skeleton
export const PageSkeleton = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Header Skeleton */}
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex space-x-8">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-20" />
            ))}
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </div>

    {/* Hero Skeleton */}
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <Skeleton className="h-12 w-96 mx-auto" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
          <div className="flex justify-center space-x-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>

    {/* Content Skeleton */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

// Contact Form Skeleton
export const ContactFormSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <Skeleton className="h-8 w-48 mb-6" />
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div>
        <Skeleton className="h-4 w-28 mb-2" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-12 w-full" />
    </div>
  </div>
);

// Gallery Skeleton
export const GallerySkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[...Array(8)].map((_, i) => (
      <Skeleton key={i} className="aspect-square w-full" />
    ))}
  </div>
);

export default Skeleton;
