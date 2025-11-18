# Red Bull Racing F1 Website

A premium, modern full-stack Next.js website showcasing Red Bull Racing Formula 1 team data. Built for an educational Level-E software project with real-time data from the Ergast F1 API.

![Red Bull Racing](https://img.shields.io/badge/Red%20Bull%20Racing-001C3D?style=for-the-badge&logo=redbull&logoColor=FDB913)
![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

### Core Features
- **Real-time F1 Data**: Live driver standings, race results, and calendar from Ergast F1 API
- **Responsive Design**: Fully responsive from mobile to desktop with modern F1-styled UI
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Premium Animations**: Framer Motion animations with neon effects and glassmorphism
- **Server Components**: Optimized performance with Next.js 14 App Router
- **Type-Safe**: Full TypeScript implementation

### Pages
1. **Home** (`/`) - Hero section with Red Bull Racing branding and season highlights
2. **Drivers** (`/drivers`) - List of current Red Bull Racing drivers with stats
3. **Driver Details** (`/drivers/[id]`) - Individual driver pages with race results
4. **Races** (`/races`) - Complete race calendar with upcoming and past results
5. **Team** (`/team`) - About Red Bull Racing team information and values

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

### API Integration
- **Ergast F1 API** - Real-time Formula 1 data
  - Driver standings
  - Constructor standings
  - Race calendar
  - Race results

## Design System

### Red Bull Racing Colors
```css
Navy Blue:    #001C3D
Yellow:       #FDB913
Red:          #D6001C
Sky Blue:     #4F9DFE
Light BG:     #F6F7FB
Dark BG:      #0A0F1D
```

### Design Features
- **Glassmorphism Navbar**: Sticky navigation with backdrop blur
- **Neon Hover Effects**: Yellow glow on interactive elements
- **Premium Typography**: Bold, racing-inspired font hierarchy
- **Gradient Backgrounds**: Smooth color transitions
- **Card-based Layout**: Modern, clean component design

## Project Structure

```
project/
├── app/
│   ├── drivers/
│   │   ├── [id]/
│   │   │   └── page.tsx          # Dynamic driver detail page
│   │   └── page.tsx               # Drivers list page
│   ├── races/
│   │   └── page.tsx               # Races calendar & results
│   ├── team/
│   │   └── page.tsx               # Team information
│   ├── globals.css                # Global styles with theme
│   ├── layout.tsx                 # Root layout with providers
│   └── page.tsx                   # Home page
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── driver-card.tsx            # Driver card component
│   ├── footer.tsx                 # Footer component
│   ├── navbar.tsx                 # Navigation component
│   ├── race-card.tsx              # Race card component
│   ├── section-title.tsx          # Section title component
│   ├── theme-provider.tsx         # Theme context provider
│   └── theme-toggle.tsx           # Theme toggle button
├── lib/
│   ├── f1-api.ts                  # Ergast API utilities
│   └── utils.ts                   # Helper functions
├── tailwind.config.ts             # Tailwind configuration
├── next.config.js                 # Next.js configuration
└── package.json                   # Dependencies
```

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd project
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Type checking
npm run typecheck

# Linting
npm run lint
```

## API Integration

### Ergast F1 API Endpoints Used

```typescript
// Driver Standings
GET https://ergast.com/api/f1/current/driverStandings.json

// Constructor Standings
GET https://ergast.com/api/f1/current/constructorStandings.json

// Race Schedule
GET https://ergast.com/api/f1/current.json

// Race Results
GET https://ergast.com/api/f1/current/results.json

// Driver Info
GET https://ergast.com/api/f1/drivers/{driverId}.json

// Driver Results
GET https://ergast.com/api/f1/current/drivers/{driverId}/results.json
```

### API Features
- Automatic revalidation every 5 minutes
- Error handling and loading states
- TypeScript type definitions
- Server-side data fetching

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Configure project settings (auto-detected)
- Deploy

### Environment Variables
No environment variables required - the Ergast API is public.

## Key Components

### Navbar
- Glassmorphism design with backdrop blur
- Sticky positioning
- Mobile-responsive menu
- Theme toggle integration

### Driver Card
- Animated on scroll
- Hover effects with scale and border
- Stats display (points, wins)
- Links to driver detail pages

### Race Card
- Different styling for upcoming vs past races
- Date and location information
- Winner display for completed races
- Smooth animations

### Theme Toggle
- Seamless dark/light mode switching
- System preference detection
- Persistent user selection

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations
- Server-side rendering for initial load
- Image optimization
- Code splitting
- CSS optimization
- Lazy loading components

## Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

## Credits

### Data Source
- [Ergast F1 API](https://ergast.com/mrd/) - Formula 1 race data

### Design Inspiration
- Official Red Bull Racing branding
- Modern F1 digital experiences

### Technologies
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

## License
Educational project - Level-E Software Project

## Author
Built as an educational demonstration of modern web development practices.

---

**Note**: This is an educational project and is not affiliated with or endorsed by Red Bull Racing or Formula 1.
