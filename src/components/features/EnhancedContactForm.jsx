import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import DOMPurify from 'dompurify';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Card from '../ui/Card';
import Button from '../ui/Button';
import { HiMail, HiPhone, HiCalendar, HiUsers, HiClock } from 'react-icons/hi';

// Validation schema
const contactSchema = yup.object({
  name: yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  phone: yup.string()
    .matches(/^[+]?[\d\s\-()]+$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  eventType: yup.string()
    .required('Please select an event type'),
  eventDate: yup.date()
    .min(new Date(), 'Event date must be in the future')
    .required('Event date is required'),
  guestCount: yup.number()
    .min(1, 'Guest count must be at least 1')
    .max(1000, 'Guest count cannot exceed 1000')
    .required('Guest count is required'),
  message: yup.string()
    .max(500, 'Message must be less than 500 characters')
});

const EnhancedContactForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: null,
    guestCount: '',
    budget: '',
    message: '',
    preferredContact: 'email'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Holiday Celebration',
    'Private Dinner',
    'Graduation Party',
    'Baby Shower',
    'Other'
  ];

  const budgetRanges = [
    'Under ₦50,000',
    '₦50,000 - ₦100,000',
    '₦100,000 - ₦200,000',
    '₦200,000 - ₦500,000',
    '₦500,000 - ₦1,000,000',
    'Over ₦1,000,000'
  ];

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input.trim());
  };

  const handleInputChange = (field, value) => {
    // Sanitize input
    const sanitizedValue = typeof value === 'string' ? sanitizeInput(value) : value;

    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));

    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = async () => {
    try {
      await contactSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const errorMap = {};
      validationErrors.inner.forEach(error => {
        errorMap[error.path] = error.message;
      });
      setErrors(errorMap);
      return false;
    }
  };

  const sendEmail = async (templateParams) => {
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
      );
      return result;
    } catch (error) {
      console.error('EmailJS error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending your request...');

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        event_type: formData.eventType,
        event_date: formData.eventDate?.toLocaleDateString(),
        guest_count: formData.guestCount,
        budget: formData.budget,
        message: formData.message,
        preferred_contact: formData.preferredContact,
        to_email: 'nwabethroseonuoha@gmail.com'
      };

      // Send email
      await sendEmail(templateParams);

      toast.dismiss(loadingToast);
      toast.success('Your request has been sent successfully! We\'ll get back to you soon.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: null,
        guestCount: '',
        budget: '',
        message: '',
        preferredContact: 'email'
      });

      // Call success callback
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }

    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('Failed to send your request. Please try again or contact us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card padding="lg" className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <HiMail className="h-6 w-6 text-orange-500 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Request a Quote</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Phone and Event Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <HiPhone className="inline h-4 w-4 mr-1" />
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+234 xxx xxx xxxx"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Type *
            </label>
            <select
              value={formData.eventType}
              onChange={(e) => handleInputChange('eventType', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                errors.eventType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select event type</option>
              {eventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
          </div>
        </div>

        {/* Event Date and Guest Count */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <HiCalendar className="inline h-4 w-4 mr-1" />
              Event Date *
            </label>
            <DatePicker
              selected={formData.eventDate}
              onChange={(date) => handleInputChange('eventDate', date)}
              minDate={new Date()}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                errors.eventDate ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholderText="Select event date"
              dateFormat="MMMM d, yyyy"
            />
            {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <HiUsers className="inline h-4 w-4 mr-1" />
              Number of Guests *
            </label>
            <input
              type="number"
              min="1"
              max="1000"
              value={formData.guestCount}
              onChange={(e) => handleInputChange('guestCount', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                errors.guestCount ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Number of guests"
            />
            {errors.guestCount && <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>}
          </div>
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Budget Range (Optional)
          </label>
          <select
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Details
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us more about your event, dietary requirements, or any special requests..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Contact Method
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Email</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="phone"
                checked={formData.preferredContact === 'phone'}
                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Phone</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="whatsapp"
                checked={formData.preferredContact === 'whatsapp'}
                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">WhatsApp</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full bg-orange-500 hover:bg-orange-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Request...' : 'Send Quote Request'}
          </Button>
        </motion.div>
      </form>
    </Card>
  );
};

export default EnhancedContactForm;
