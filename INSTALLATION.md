# Lady B's Catering Service - Installation & Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### 1. Clone & Install
```bash
git clone https://github.com/bettyego/bettycatery.git
cd bettycatery
npm install
```

### 2. Environment Setup
```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your configuration
```

### 3. Required Environment Variables

#### EmailJS Configuration (Required for contact forms)
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

**Setup EmailJS:**
1. Create account at [EmailJS.com](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template
4. Get service ID, template ID, and public key

#### Google Analytics (Optional)
```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### 4. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173`

## 📧 EmailJS Template Setup

### Email Template Variables
Your EmailJS template should include these variables:
- `{{from_name}}` - Customer name
- `{{from_email}}` - Customer email  
- `{{phone}}` - Customer phone
- `{{event_type}}` - Type of event
- `{{event_date}}` - Event date
- `{{guest_count}}` - Number of guests
- `{{budget}}` - Budget range
- `{{message}}` - Additional message
- `{{preferred_contact}}` - Preferred contact method

### Sample Email Template
```html
Subject: New Quote Request from {{from_name}}

New catering quote request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Event Details:
- Type: {{event_type}}
- Date: {{event_date}}
- Guests: {{guest_count}}
- Budget: {{budget}}
- Preferred Contact: {{preferred_contact}}

Message:
{{message}}
```

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#f97316', // Orange
      secondary: '#7c3aed', // Purple
    }
  }
}
```

### Contact Information
Update in multiple files:
- `src/components/layout/Header.jsx`
- `src/components/layout/Footer.jsx`
- `src/components/pages/ContactPage.jsx`
- `src/components/SEO/SEOHead.jsx`

### Social Media Links
Update in:
- `src/components/layout/Footer.jsx`
- `src/components/pages/ContactPage.jsx`
- `src/components/SEO/SEOHead.jsx`

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Deploy to Vercel
1. Connect GitHub repository
2. Framework preset: Vite
3. Add environment variables in Vercel dashboard

## 📱 Features Included

### ✅ Core Features
- Responsive design
- Contact forms with validation
- Quote calculator
- WhatsApp integration
- Image gallery
- Menu management
- Service pages
- SEO optimization

### ✅ Enhanced Features
- Toast notifications
- Loading skeletons
- Form validation with Yup
- Email integration with EmailJS
- Google Analytics tracking
- Booking calendar
- Image lightbox gallery
- Mobile-first design

### ✅ Business Features
- Dynamic pricing calculator
- Event booking system
- Customer review system
- Social media integration
- Professional contact forms
- Multi-channel communication

## 🔧 Troubleshooting

### Common Issues

#### 1. EmailJS Not Working
- Check service ID, template ID, and public key
- Verify EmailJS service is active
- Check browser console for errors

#### 2. Images Not Loading
- Ensure images are in `public/` folder
- Check image file names match imports
- Verify image file extensions

#### 3. Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors
- Verify all imports are correct

#### 4. Styling Issues
- Clear browser cache
- Check Tailwind CSS classes
- Verify CSS imports

## 📞 Support

For technical support:
- Email: nwabethroseonuoha@gmail.com
- WhatsApp: +234 806 411 1501

## 🔄 Updates

To update the project:
```bash
git pull origin main
npm install
npm run build
```

## 📄 License

This project is proprietary software for Lady B's Catering Service.

---

**Lady B's Catering Service** - Professional catering website with modern features and business tools.
