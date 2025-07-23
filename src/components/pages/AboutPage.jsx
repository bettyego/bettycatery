import Layout from '../layout/Layout';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { HiHeart, HiStar, HiUsers, HiBadgeCheck } from 'react-icons/hi';

const AboutPage = () => {
  const stats = [
    { icon: HiUsers, number: '500+', label: 'Happy Clients' },
    { icon: HiStar, number: '1000+', label: 'Events Catered' },
    { icon: HiBadgeCheck, number: '5', label: 'Years Experience' },
    { icon: HiHeart, number: '98%', label: 'Client Satisfaction' }
  ];

  const team = [
    {
      name: 'Betty Nwabethroseonu',
      role: 'Founder & Head Chef',
      image: '/pexels-anastasia-shuraeva-4765133.jpg',
      bio: 'With over 15 years of culinary experience, Betty founded Betty Catery to bring exceptional food and service to every event.'
    },
    {
      name: 'Michael Johnson',
      role: 'Executive Chef',
      image: '/pexels-beyza-c-555707524-28983185.jpg',
      bio: 'Michael brings creativity and precision to our kitchen, ensuring every dish meets our high standards of excellence.'
    },
    {
      name: 'Sarah Williams',
      role: 'Event Coordinator',
      image: '/pexels-karography-438592595-16331112.jpg',
      bio: 'Sarah manages all event logistics, ensuring seamless execution from planning to cleanup for every catering event.'
    },
    {
      name: 'David Chen',
      role: 'Pastry Chef',
      image: '/pexels-lum3n-44775-1410235.jpg',
      bio: 'David creates stunning desserts and baked goods that provide the perfect sweet ending to any meal.'
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We source the finest ingredients and maintain the highest standards in food preparation and presentation.',
      icon: HiStar
    },
    {
      title: 'Customer Focus',
      description: 'Every decision we make is centered around creating exceptional experiences for our clients and their guests.',
      icon: HiHeart
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our menus and services to stay ahead of culinary trends and client expectations.',
      icon: HiBadgeCheck
    },
    {
      title: 'Reliability',
      description: 'Our clients trust us to deliver consistent, professional service for their most important events.',
      icon: HiUsers
    }
  ];

  const seoProps = {
    title: 'About Betty Catery - Our Story, Team & Values | Professional Catering Since 2020',
    description: 'Learn about Betty Catery\'s story, meet our experienced team, and discover our commitment to quality, customer focus, and exceptional catering experiences.',
    keywords: 'about Betty Catery, catering company story, professional catering team, catering values, Betty Nwabethroseonu, catering experience',
    url: 'https://bettycatery.com/about'
  };

  return (
    <Layout seoProps={seoProps}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Betty Catery
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Passionate about creating unforgettable culinary experiences 
                that bring people together and make every event special.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Our Story
              </Button>
            </div>
            <div className="relative">
              <img
                src="/ctg2.jpg"
                alt="Lady B's Catering Service - Wedding Setup"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div>
              <img 
                src="/story.jpg" 
                alt="Our Kitchen"
                className="rounded-2xl shadow-lg "
              />
            </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My culinary journey began in university, where I noticed a common struggle among students.
                  Many found it challenging to cook meals for themselves, opting instead for quick snacks
                  like Indomie or packaged treats. I saw an opportunity to make a difference and decided
                  to take action. With a passion for cooking, I started preparing homemade meals and
                  delivering them to students, making their lives easier one meal at a time.
                </p>
                <p>
                  As my service grew, so did my interest in exploring the world of catering. I began
                  delivering meals beyond the university campus, to busy professionals, homes, and event
                  hosts. Whether it was preparing weekend meals, handling cooking duties for parties,
                  or catering to individuals with special events, I was determined to provide delicious,
                  convenient solutions.
                </p>
                <p>
                  My business gradually expanded, and I developed a range of menus to suit different
                  tastes and preferences. From hearty meals to elegant party cuisine, my goal was to
                  deliver exceptional food and exceptional service. Through hard work and dedication,
                  I built a reputation as a reliable and skilled caterer, and my passion for cooking
                  continues to drive me forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to catering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center" padding="lg">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented professionals who make every event a success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden" padding="lg">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create an unforgettable culinary experience for your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
