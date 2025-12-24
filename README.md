Success & Unity Schools, Jos - School Website

A modern, responsive, and accessible school website for Success & Unity Schools in Jos, Plateau State, Nigeria. This website features both light and dark modes, comprehensive alumni networking, and a complete online presence for the educational institution.
🌟 Features
Core Features

    Fully Responsive Design - Works seamlessly on mobile, tablet, and desktop devices

    Light/Dark Mode - Toggle between light and dark themes with system preference detection

    Accessibility First - WCAG compliant with keyboard navigation and screen reader support

    Fast Performance - Optimized assets and lazy loading for better Core Web Vitals

    SEO Optimized - Structured data, meta tags, and semantic HTML for better search visibility

    Bootstrap 5 - Modern CSS framework for responsive components

Pages Included

    Homepage - Hero slider, vision/mission, leadership message, gallery preview

    Alumni Page - Alumni networking, registration, events, and benefits

    About Page - School history, values, leadership team, and statistics

    Contact Page - Contact information, inquiry form, and location map

    News & Events - Latest news, events calendar, and updates

    Gallery Page - Photo albums, video gallery, and school life

    Academics Section - Primary and secondary school information

Special Features

    Alumni Networking System - Featured alumni profiles with connection functionality

    Event Registration - Upcoming events with registration forms

    Newsletter Subscription - Email newsletter signup for updates

    Back-to-Top Button - Smooth scrolling navigation

    Breadcrumb Navigation - Easy page hierarchy navigation

    Theme Persistence - Remembers user's theme preference

    Print Styles - Optimized printing for all pages

🛠️ Technology Stack
Frontend

    HTML5 - Semantic markup with accessibility features

    CSS3 - Custom properties (CSS variables) for theming

    Bootstrap 5.3 - Responsive grid and components

    Font Awesome 6 - Icon library

    Vanilla JavaScript - No framework dependencies

Development Tools

    Modern CSS - Flexbox, Grid, CSS variables for theming

    Responsive Images - srcset, loading attributes, proper aspect ratios

    Progressive Enhancement - Works without JavaScript where possible


🚀 Getting Started
Prerequisites

    Modern web browser (Chrome, Firefox, Safari, Edge)

    Code editor (VS Code, Sublime Text, etc.)

    Basic understanding of HTML/CSS/JavaScript

Installation

    Clone or Download
    bash

git clone https://github.com/emmanuelaji/suss.git

Or download the ZIP file and extract.

Setup Folder Structure
Create the following folder structure:
text

suss/
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
└── [html files]

    Add CSS File
    Create assets/css/style.css and paste the complete CSS code provided.

    Add Images
    Place all images in the assets/img/ folder:

        slide1.jpg - Homepage hero image

        director.jpg - Director's photo

        anniversary1.jpg - 20th anniversary photo

        sports.jpg - Sports activities

        graduation.jpg - Graduation ceremony

        flyer.jpg - School flyer

        alumni-logo.jpg - Alumni network logo

    Open in Browser
    Simply open index.html in your web browser to view the site.

🎨 Customization
Theme Colors

Edit the CSS variables in style.css:
css

:root {
  --primary-color: #6b3e26;      /* Brown - main brand color */
  --secondary-color: #d35400;    /* Orange - accent color */
  --accent-color: #8b4513;       /* Dark brown - secondary accent */
  /* Add your custom colors here */
}

School Information

Update the following in each HTML file:

    Contact Information

        Phone: +234 807 329 5314

        Email: info@sussjos.com

        Address: Bauchi Ring Road, Kyan-Rikkos, Jos-North, Plateau State

    Social Media Links

        Facebook: https://facebook.com/sussjos

        Twitter: https://twitter.com/sussjos

        Instagram: https://instagram.com/sussjos

        LinkedIn: https://linkedin.com/company/sussjos

Content Updates

    Homepage

        Update hero slider images and text

        Modify director's message in index.html

        Update vision and mission statements

    Alumni Page

        Add real alumni profiles with images

        Update event dates and details

        Modify registration form fields as needed

    About Page

        Update school history timeline

        Add real staff photos and biographies

        Modify school values and statistics

🔧 Development
Adding New Pages

    Create new HTML file

    Copy the basic structure from existing pages

    Include the navigation and footer

    Add custom content

    Link in the main navigation

Adding JavaScript Features

All JavaScript is included at the bottom of each HTML file. For shared functionality, add to assets/js/main.js:
javascript

// Shared functions
function initThemeToggle() {
  // Theme toggle logic
}

function initBackToTop() {
  // Back to top functionality
}

Styling New Components

Add new styles to style.css following the existing pattern:
css

/* New component */
.new-component {
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 6px var(--shadow-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .new-component {
    padding: 1rem;
  }
}


📱 Responsive Breakpoints

The website uses Bootstrap 5 breakpoints:
Device	Breakpoint	Class Prefix
Extra small	<576px	.col-
Small	≥576px	.col-sm-
Medium	≥768px	.col-md-
Large	≥992px	.col-lg-
Extra large	≥1200px	.col-xl-
Extra extra large	≥1400px	.col-xxl-
♿ Accessibility Features

    Skip Navigation Link - For keyboard and screen reader users

    ARIA Labels - All interactive elements properly labeled

    Color Contrast - WCAG AA compliant in both light and dark modes

    Keyboard Navigation - Full keyboard support

    Semantic HTML - Proper heading hierarchy and landmarks

    Reduced Motion Support - Respects user's motion preferences

🔍 SEO Best Practices Implemented

    Meta Tags - Title, description, keywords, author

    Structured Data - JSON-LD for organization and events

    Semantic HTML - Proper use of headings and sections

    Image Optimization - Alt text, dimensions, lazy loading

    Mobile-Friendly - Responsive design with viewport meta tag

    Fast Loading - Optimized images and assets

🐛 Troubleshooting
Common Issues

    Images Not Loading

        Check file paths are correct

        Ensure images are in the assets/img/ folder

        Verify file extensions (.jpg, .png)

    CSS Not Applying

        Check CSS file path in HTML

        Clear browser cache (Ctrl+F5)

        Verify CSS syntax is correct

    JavaScript Not Working

        Check console for errors (F12 > Console)

        Ensure jQuery/Bootstrap are loaded before custom scripts

        Verify all HTML elements exist before JavaScript runs

    Responsive Issues

        Check viewport meta tag is present

        Verify Bootstrap CSS is loaded

        Test on actual devices if possible

Browser Compatibility

    Chrome 90+ (Recommended)

    Firefox 88+

    Safari 14+

    Edge 90+

    Mobile browsers (iOS Safari, Chrome Mobile)

📞 Support

For technical support or questions:

    Email: info@sussjos.com

    Phone: +234 807 329 5314

    Visit: Bauchi Ring Road, Kyan-Rikkos, Jos-North, Plateau State

📄 License

This website is proprietary property of Success & Unity Schools, Jos. All rights reserved.
🙏 Acknowledgments

    Bootstrap 5 - Responsive framework

    Font Awesome - Icon library

    Unsplash - Stock photography

    Bootstrap Icons - Additional icons

    SOSA 2015 SET - Website donation

🔄 Update Log
v1.0.0 (Initial Release)

    Complete website with all core pages

    Light/Dark mode toggle

    Alumni networking system

    Responsive design for all devices

    SEO optimization

    Accessibility features

Future Updates Planned

    Student/parent portal integration

    Online application system

    Live chat support

    Event booking system

    Alumni directory with search

    Multi-language support

    Mobile app companion

Success & Unity Schools, Jos
Education for Entrepreneurship
📍 Bauchi Ring Road, Kyan-Rikkos, Jos-North, Plateau State
📞 +234 807 329 5314 | ✉️ info@sussjos.com
🌐 https://sussjos.com
