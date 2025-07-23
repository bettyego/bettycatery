import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HiStar } from 'react-icons/hi';
import Card from '../ui/Card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Event Coordinator',
      company: 'Tech Solutions Inc.',
      image: '/pexels-anastasia-shuraeva-4765133.jpg',
      rating: 5,
      text: 'Betty Catery exceeded our expectations for our annual company retreat. The food was exceptional, and their team was incredibly professional. Our employees are still talking about the amazing spread!'
    },
    {
      name: 'Michael Chen',
      role: 'Groom',
      company: 'Wedding Client',
      image: '/ctg2.jpg',
      rating: 5,
      text: 'Our wedding day was perfect thanks to Lady B\'s Catering Service. From the initial tasting to the final cleanup, everything was flawless. The food was delicious and beautifully presented. Highly recommended!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Agency',
      image: '/pexels-karography-438592595-16331112.jpg',
      rating: 5,
      text: 'We\'ve used Betty Catery for multiple corporate events, and they never disappoint. Their attention to detail and ability to accommodate dietary restrictions is impressive. True professionals!'
    },
    {
      name: 'David Thompson',
      role: 'Birthday Celebrant',
      company: 'Private Client',
      image: '/pexels-lum3n-44775-1410235.jpg',
      rating: 5,
      text: 'Betty Catery made my 50th birthday celebration unforgettable. The custom menu was perfect, and the service was impeccable. My guests couldn\'t stop complimenting the food!'
    },
    {
      name: 'Lisa Park',
      role: 'HR Manager',
      company: 'Financial Services',
      image: '/pexels-matheus-lara-1785960246-29111982.jpg',
      rating: 5,
      text: 'Professional, reliable, and delicious! Betty Catery has been our go-to for all office events. They understand our needs and always deliver exceptional service and food quality.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience with Betty Catery.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="h-full" padding="lg">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">1000+</div>
            <div className="text-gray-600">Events Catered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
