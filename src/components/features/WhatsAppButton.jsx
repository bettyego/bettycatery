import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ 
  message = "Hello! I'm interested in your catering services.", 
  className = "",
  size = "md",
  variant = "floating"
}) => {
  const phoneNumber = "2348064111501";
  
  const generateWhatsAppURL = (customMessage) => {
    const encodedMessage = encodeURIComponent(customMessage || message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const sizeClasses = {
    sm: "w-10 h-10 text-lg",
    md: "w-12 h-12 text-xl",
    lg: "w-16 h-16 text-2xl",
    xl: "w-20 h-20 text-3xl"
  };

  const variantClasses = {
    floating: "fixed bottom-6 right-6 z-50 shadow-2xl hover:shadow-3xl",
    inline: "inline-flex",
    button: "px-4 py-2 rounded-lg"
  };

  if (variant === "button") {
    return (
      <motion.a
        href={generateWhatsAppURL()}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex items-center justify-center
          bg-green-500 hover:bg-green-600
          text-white font-medium
          transition-all duration-300
          ${variantClasses.button}
          ${className}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="mr-2" />
        Chat on WhatsApp
      </motion.a>
    );
  }

  return (
    <motion.a
      href={generateWhatsAppURL()}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center
        bg-green-500 hover:bg-green-600
        text-white rounded-full
        transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)"
      }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <FaWhatsapp className={`${variant === 'floating' ? 'animate-pulse' : ''}`} />
    </motion.a>
  );
};

// Predefined message templates
export const WhatsAppTemplates = {
  general: "Hello! I'm interested in your catering services.",
  quote: "Hi! I'd like to get a quote for my upcoming event.",
  wedding: "Hello! I'm planning a wedding and would love to discuss catering options.",
  corporate: "Hi! I need catering services for a corporate event.",
  birthday: "Hello! I'm organizing a birthday party and need catering services.",
  menu: "Hi! I'd like to know more about your menu options.",
  availability: "Hello! I'd like to check your availability for my event date.",
  custom: (eventType, date, guests) => 
    `Hi! I'm planning a ${eventType} on ${date} for ${guests} guests. Could you provide a quote?`
};

// Quick WhatsApp buttons for different scenarios
export const QuickWhatsAppButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <WhatsAppButton 
        variant="button" 
        message={WhatsAppTemplates.quote}
        className="text-sm"
      />
      <WhatsAppButton 
        variant="button" 
        message={WhatsAppTemplates.menu}
        className="text-sm bg-blue-500 hover:bg-blue-600"
      >
        <FaWhatsapp className="mr-2" />
        Menu Info
      </WhatsAppButton>
    </div>
  );
};

export default WhatsAppButton;
