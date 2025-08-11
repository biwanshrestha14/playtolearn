# HTML/CSS to React + Tailwind Conversion

This project converts the original HTML/CSS website into modern React components using Tailwind CSS.

## What was converted:

### Original Files:
- `index.html` - Main HTML structure
- `style.css` - Original CSS styles

### New React Components:
- `src/components/Navbar.tsx` - Responsive navigation bar with mobile hamburger menu
- `src/components/Hero.tsx` - Introduction section with image and text
- `src/components/OurVision.tsx` - Our Vision section
- `src/components/OurMission.tsx` - Our Mission section

## Key Features:

### Responsive Design:
- Mobile-first approach using Tailwind CSS
- Hamburger menu for mobile devices
- Flexible layouts that adapt to different screen sizes

### Modern Styling:
- Glassmorphism effects using backdrop-blur and transparency
- Smooth animations and transitions
- Custom hover effects and interactions
- Gradient backgrounds and text effects

### Animations:
- Slide-in animations for hero section
- Floating animations for decorative elements
- Smooth transitions for all interactive elements
- Custom keyframe animations for enhanced UX

### Technical Stack:
- React 19.1.0 with TypeScript
- Tailwind CSS v4 for styling
- PostCSS for CSS processing
- Custom CSS animations for advanced effects

## How to Run:

1. Navigate to the React project directory:
   ```bash
   cd /home/onmivoid/playtolearn/playtolearn-react
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit: `http://localhost:3000`

## Custom Styles:

The project includes custom CSS animations and utilities in `src/index.css`:
- Floating animations
- Slide-in effects
- Custom scrollbar styling
- Smooth scrolling behavior

## Images:

- Logo: `public/logofinal.png`
- Hero image: `public/learning-illustration.jpeg`

## Mobile Responsiveness:

All components are fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Interactive Features:

- Responsive navigation with mobile hamburger menu
- Hover effects on navigation items and cards
- Smooth scrolling between sections
- Animated background elements
- Glass-morphism styled cards and containers
