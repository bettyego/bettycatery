// Google Analytics 4 tracking utilities

// Initialize Google Analytics
export const initGA = () => {
  const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
  
  if (!trackingId) {
    console.warn('Google Analytics tracking ID not found');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', trackingId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (path, title) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      page_path: path,
      page_title: title,
    });
  }
};

// Track events
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Business-specific tracking functions
export const trackQuoteRequest = (eventData) => {
  trackEvent('quote_request', 'lead_generation', eventData.eventType, eventData.guestCount);
};

export const trackMenuView = (category) => {
  trackEvent('menu_view', 'engagement', category);
};

export const trackServiceView = (serviceName) => {
  trackEvent('service_view', 'engagement', serviceName);
};

export const trackContactAttempt = (method) => {
  trackEvent('contact_attempt', 'engagement', method);
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', 'contact', 'whatsapp_button');
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', 'contact', 'phone_number');
};

export const trackEmailClick = () => {
  trackEvent('email_click', 'contact', 'email_address');
};

export const trackFormSubmission = (formType, success = true) => {
  trackEvent('form_submission', 'conversion', formType, success ? 1 : 0);
};

export const trackDownload = (fileName) => {
  trackEvent('file_download', 'engagement', fileName);
};

export const trackSocialClick = (platform) => {
  trackEvent('social_click', 'engagement', platform);
};

// E-commerce tracking (for future use)
export const trackPurchase = (transactionId, value, currency = 'NGN') => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }
};

// Conversion tracking
export const trackConversion = (conversionId, value, currency = 'NGN') => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency,
    });
  }
};

// User engagement tracking
export const trackEngagement = (engagementType, duration = 0) => {
  trackEvent('user_engagement', 'engagement', engagementType, duration);
};

// Scroll tracking
export const trackScroll = (percentage) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage);
};

// Time on page tracking
export const trackTimeOnPage = (seconds) => {
  trackEvent('time_on_page', 'engagement', window.location.pathname, seconds);
};

// Error tracking
export const trackError = (errorMessage, errorType = 'javascript') => {
  trackEvent('error', 'technical', `${errorType}: ${errorMessage}`);
};

// Custom dimensions (if configured in GA)
export const setCustomDimension = (index, value) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      [`custom_map.dimension${index}`]: value,
    });
  }
};

// User properties
export const setUserProperty = (propertyName, value) => {
  if (typeof window.gtag === 'function') {
    window.gtag('set', { [propertyName]: value });
  }
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackQuoteRequest,
  trackMenuView,
  trackServiceView,
  trackContactAttempt,
  trackWhatsAppClick,
  trackPhoneClick,
  trackEmailClick,
  trackFormSubmission,
  trackDownload,
  trackSocialClick,
  trackPurchase,
  trackConversion,
  trackEngagement,
  trackScroll,
  trackTimeOnPage,
  trackError,
  setCustomDimension,
  setUserProperty,
};
