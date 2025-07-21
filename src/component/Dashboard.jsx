import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {
  HiUser,
  HiCalendar,
  HiClipboardList,
  HiCog,
  HiLogout,
  HiChartBar
} from 'react-icons/hi';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async() => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const request = await fetch('http://localhost:5000/api/fetchData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth': token
        }
      });

      if (request.ok) {
        const response = await request.json();
        setUser(response.user);
      } else {
        // Token might be invalid
        localStorage.removeItem('token');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // For demo purposes, set a mock user
      setUser({ email: 'demo@bettycatery.com', name: 'Demo User' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const dashboardItems = [
    {
      title: 'My Events',
      description: 'View and manage your upcoming catering events',
      icon: HiCalendar,
      count: 3,
      color: 'bg-blue-500'
    },
    {
      title: 'Quote Requests',
      description: 'Track your quote requests and proposals',
      icon: HiClipboardList,
      count: 2,
      color: 'bg-green-500'
    },
    {
      title: 'Order History',
      description: 'Review your past catering orders',
      icon: HiChartBar,
      count: 12,
      color: 'bg-purple-500'
    },
    {
      title: 'Profile Settings',
      description: 'Update your account information',
      icon: HiCog,
      count: null,
      color: 'bg-gray-500'
    }
  ];

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back{user?.name ? `, ${user.name}` : ''}!
                </h1>
                <p className="text-gray-600 mt-2">
                  Manage your catering events and account settings
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center"
              >
                <HiLogout className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* User Info Card */}
          <Card className="mb-8" padding="lg">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <HiUser className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {user?.name || 'User'}
                </h2>
                <p className="text-gray-600">{user?.email}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Member since {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </Card>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  padding="lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {item.count !== null && (
                      <span className="text-2xl font-bold text-gray-900">
                        {item.count}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button
                variant="primary"
                size="lg"
                className="h-16"
                onClick={() => navigate('/contact')}
              >
                Request New Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16"
                onClick={() => navigate('/menu')}
              >
                Browse Menu
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16"
                onClick={() => navigate('/services')}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard