import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { HiCalendar, HiClock, HiUsers, HiCheck } from 'react-icons/hi';

const BookingCalendar = ({ onBookingSelect, unavailableDates = [] }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [eventDetails, setEventDetails] = useState({
    eventType: '',
    guestCount: '',
    duration: '',
    notes: ''
  });
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  // Time slots for different types of events
  const timeSlots = {
    morning: [
      { time: '09:00', label: '9:00 AM' },
      { time: '10:00', label: '10:00 AM' },
      { time: '11:00', label: '11:00 AM' }
    ],
    afternoon: [
      { time: '12:00', label: '12:00 PM' },
      { time: '13:00', label: '1:00 PM' },
      { time: '14:00', label: '2:00 PM' },
      { time: '15:00', label: '3:00 PM' },
      { time: '16:00', label: '4:00 PM' }
    ],
    evening: [
      { time: '17:00', label: '5:00 PM' },
      { time: '18:00', label: '6:00 PM' },
      { time: '19:00', label: '7:00 PM' },
      { time: '20:00', label: '8:00 PM' }
    ]
  };

  const eventTypes = [
    'Corporate Event',
    'Wedding',
    'Birthday Party',
    'Anniversary',
    'Holiday Celebration',
    'Private Dinner',
    'Other'
  ];

  const durations = [
    { value: '2', label: '2 hours' },
    { value: '4', label: '4 hours' },
    { value: '6', label: '6 hours' },
    { value: '8', label: '8+ hours' }
  ];

  // Check if a date is unavailable
  const isDateUnavailable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Disable past dates
    if (date < today) return true;
    
    // Disable dates that are too far in the future (1 year)
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    if (date > oneYearFromNow) return true;
    
    // Check against unavailable dates
    return unavailableDates.some(unavailableDate => {
      const unavailable = new Date(unavailableDate);
      return date.toDateString() === unavailable.toDateString();
    });
  };

  // Get available time slots based on selected date
  useEffect(() => {
    if (selectedDate) {
      // For demo purposes, all time slots are available
      // In a real app, you'd check against existing bookings
      const allSlots = [
        ...timeSlots.morning,
        ...timeSlots.afternoon,
        ...timeSlots.evening
      ];
      setAvailableTimeSlots(allSlots);
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time selection
  };

  const handleInputChange = (field, value) => {
    setEventDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookingSubmit = () => {
    if (!selectedDate || !selectedTime || !eventDetails.eventType || !eventDetails.guestCount) {
      alert('Please fill in all required fields');
      return;
    }

    const bookingData = {
      date: selectedDate,
      time: selectedTime,
      ...eventDetails,
      timestamp: new Date().toISOString()
    };

    if (onBookingSelect) {
      onBookingSelect(bookingData);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card padding="lg" className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <HiCalendar className="h-6 w-6 text-orange-500 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Book Your Event</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h4>
          <div className="calendar-container">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileDisabled={({ date }) => isDateUnavailable(date)}
              className="w-full border border-gray-300 rounded-lg"
              tileClassName={({ date }) => {
                if (isDateUnavailable(date)) {
                  return 'unavailable-date';
                }
                return null;
              }}
            />
          </div>
          
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-orange-50 rounded-lg"
            >
              <p className="text-sm font-medium text-orange-800">
                Selected Date: {formatDate(selectedDate)}
              </p>
            </motion.div>
          )}
        </div>

        {/* Booking Details Section */}
        <div className="space-y-6">
          {/* Time Selection */}
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                <HiClock className="inline h-5 w-5 mr-2" />
                Select Time
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {availableTimeSlots.map(slot => (
                  <button
                    key={slot.time}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                      selectedTime === slot.time
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Event Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Event Details</h4>
            
            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type *
              </label>
              <select
                value={eventDetails.eventType}
                onChange={(e) => handleInputChange('eventType', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Select event type</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <HiUsers className="inline h-4 w-4 mr-1" />
                Number of Guests *
              </label>
              <input
                type="number"
                min="1"
                max="1000"
                value={eventDetails.guestCount}
                onChange={(e) => handleInputChange('guestCount', e.target.value)}
                placeholder="Enter number of guests"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Duration
              </label>
              <select
                value={eventDetails.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Select duration</option>
                {durations.map(duration => (
                  <option key={duration.value} value={duration.value}>
                    {duration.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                rows={3}
                value={eventDetails.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Any special requirements or requests..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          {selectedDate && selectedTime && eventDetails.eventType && eventDetails.guestCount && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                onClick={handleBookingSubmit}
                variant="primary"
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                <HiCheck className="h-5 w-5 mr-2" />
                Request Booking
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Custom CSS for calendar styling */}
      <style jsx>{`
        .calendar-container .react-calendar {
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-family: inherit;
        }
        
        .calendar-container .react-calendar__tile {
          border-radius: 0.25rem;
          margin: 2px;
        }
        
        .calendar-container .react-calendar__tile:enabled:hover {
          background-color: #fed7aa;
        }
        
        .calendar-container .react-calendar__tile--active {
          background-color: #f97316 !important;
          color: white;
        }
        
        .calendar-container .unavailable-date {
          background-color: #f3f4f6 !important;
          color: #9ca3af !important;
          cursor: not-allowed !important;
        }
      `}</style>
    </Card>
  );
};

export default BookingCalendar;
