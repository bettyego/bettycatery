import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { HiCalculator, HiUsers, HiCalendar, HiClock } from 'react-icons/hi';

const QuoteCalculator = ({ onQuoteGenerated }) => {
  const [formData, setFormData] = useState({
    eventType: '',
    guestCount: '',
    serviceType: '',
    eventDuration: '',
    additionalServices: []
  });
  
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [breakdown, setBreakdown] = useState({});

  const eventTypes = [
    { id: 'corporate', name: 'Corporate Event', multiplier: 1.2 },
    { id: 'wedding', name: 'Wedding', multiplier: 1.8 },
    { id: 'birthday', name: 'Birthday Party', multiplier: 1.0 },
    { id: 'anniversary', name: 'Anniversary', multiplier: 1.3 },
    { id: 'holiday', name: 'Holiday Celebration', multiplier: 1.4 },
    { id: 'private', name: 'Private Dinner', multiplier: 1.1 },
    { id: 'other', name: 'Other', multiplier: 1.0 }
  ];

  const serviceTypes = [
    { id: 'buffet', name: 'Buffet Service', basePrice: 25 },
    { id: 'plated', name: 'Plated Service', basePrice: 35 },
    { id: 'cocktail', name: 'Cocktail Reception', basePrice: 20 },
    { id: 'family', name: 'Family Style', basePrice: 30 },
    { id: 'premium', name: 'Premium Package', basePrice: 50 }
  ];

  const additionalServices = [
    { id: 'setup', name: 'Setup & Cleanup', price: 200 },
    { id: 'linens', name: 'Premium Linens', price: 150 },
    { id: 'flowers', name: 'Floral Arrangements', price: 300 },
    { id: 'music', name: 'Background Music', price: 250 },
    { id: 'photography', name: 'Event Photography', price: 500 },
    { id: 'bartender', name: 'Professional Bartender', price: 400 }
  ];

  const eventDurations = [
    { id: '2', name: '2 hours', multiplier: 0.8 },
    { id: '4', name: '4 hours', multiplier: 1.0 },
    { id: '6', name: '6 hours', multiplier: 1.3 },
    { id: '8', name: '8+ hours', multiplier: 1.6 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAdditionalServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId]
    }));
  };

  const calculateQuote = () => {
    const { eventType, guestCount, serviceType, eventDuration, additionalServices } = formData;
    
    if (!eventType || !guestCount || !serviceType || !eventDuration) {
      return { total: 0, breakdown: {} };
    }

    const guests = parseInt(guestCount);
    const eventTypeData = eventTypes.find(et => et.id === eventType);
    const serviceTypeData = serviceTypes.find(st => st.id === serviceType);
    const durationData = eventDurations.find(ed => ed.id === eventDuration);

    // Base calculation
    const basePrice = serviceTypeData.basePrice * guests;
    const eventTypeAdjustment = basePrice * eventTypeData.multiplier;
    const durationAdjustment = eventTypeAdjustment * durationData.multiplier;

    // Additional services
    const additionalServicesCost = additionalServices.reduce((total, serviceId) => {
      const service = additionalServices.find(as => as.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);

    const subtotal = durationAdjustment + additionalServicesCost;
    const tax = subtotal * 0.075; // 7.5% VAT
    const total = subtotal + tax;

    const breakdown = {
      basePrice: basePrice,
      eventTypeMultiplier: eventTypeData.multiplier,
      durationMultiplier: durationData.multiplier,
      additionalServices: additionalServicesCost,
      subtotal: subtotal,
      tax: tax,
      total: total
    };

    return { total, breakdown };
  };

  useEffect(() => {
    const { total, breakdown } = calculateQuote();
    setEstimatedCost(total);
    setBreakdown(breakdown);
  }, [formData]);

  const handleGetQuote = () => {
    if (onQuoteGenerated) {
      onQuoteGenerated({
        ...formData,
        estimatedCost,
        breakdown
      });
    }
  };

  return (
    <Card padding="lg" className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <HiCalculator className="h-6 w-6 text-orange-500 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Quote Calculator</h3>
      </div>

      <div className="space-y-6">
        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Type
          </label>
          <select
            value={formData.eventType}
            onChange={(e) => handleInputChange('eventType', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select event type</option>
            {eventTypes.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
        </div>

        {/* Guest Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <HiUsers className="inline h-4 w-4 mr-1" />
            Number of Guests
          </label>
          <input
            type="number"
            min="1"
            max="1000"
            value={formData.guestCount}
            onChange={(e) => handleInputChange('guestCount', e.target.value)}
            placeholder="Enter number of guests"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type
          </label>
          <select
            value={formData.serviceType}
            onChange={(e) => handleInputChange('serviceType', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select service type</option>
            {serviceTypes.map(type => (
              <option key={type.id} value={type.id}>
                {type.name} - ₦{type.basePrice}/person
              </option>
            ))}
          </select>
        </div>

        {/* Event Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <HiClock className="inline h-4 w-4 mr-1" />
            Event Duration
          </label>
          <select
            value={formData.eventDuration}
            onChange={(e) => handleInputChange('eventDuration', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select duration</option>
            {eventDurations.map(duration => (
              <option key={duration.id} value={duration.id}>{duration.name}</option>
            ))}
          </select>
        </div>

        {/* Additional Services */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Additional Services (Optional)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {additionalServices.map(service => (
              <label key={service.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.additionalServices.includes(service.id)}
                  onChange={() => handleAdditionalServiceToggle(service.id)}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {service.name} (+₦{service.price})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Estimated Cost */}
        {estimatedCost > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-50 border border-orange-200 rounded-lg p-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Estimated Cost</h4>
            <div className="text-3xl font-bold text-orange-600 mb-2">
              ₦{estimatedCost.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">
              *This is an estimate. Final pricing may vary based on specific requirements.
            </p>
            
            <Button
              variant="primary"
              className="w-full mt-4 bg-orange-500 hover:bg-orange-600"
              onClick={handleGetQuote}
            >
              Get Detailed Quote
            </Button>
          </motion.div>
        )}
      </div>
    </Card>
  );
};

export default QuoteCalculator;
