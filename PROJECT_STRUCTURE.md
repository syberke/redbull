# Red Bull Racing F1 - Complete Project Structure

## File Tree
```
project/
├── app/
│   ├── drivers/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── races/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   └── tooltip.tsx
│   ├── driver-card.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   ├── race-card.tsx
│   ├── section-title.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   ├── f1-api.ts
│   └── utils.ts
├── .eslintrc.json
├── .gitignore
├── components.json
├── next.config.js
├── package.json
├── postcss.config.js
├── PROJECT_STRUCTURE.md
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Component Details

### App Pages

#### `/` (Home Page)
- Hero section with animated Red Bull Racing branding
- Feature cards showcasing team values
- Call-to-action sections
- Full Framer Motion animations

#### `/drivers` (Drivers List)
- Displays Red Bull Racing drivers from API
- Driver cards with stats (position, points, wins)
- Loading states and error handling
- Links to individual driver pages

#### `/drivers/[id]` (Driver Detail)
- Dynamic route for individual drivers
- Comprehensive driver statistics
- Season race results
- Animated stats cards

#### `/races` (Race Calendar & Results)
- Tabbed interface (Upcoming/Past)
- Race cards with date, location, circuit info
- Winner information for completed races
- Sorted by date

#### `/team` (Team Information)
- Team statistics and achievements
- Core values and mission
- About Red Bull Racing
- Animated content sections

### Reusable Components

#### `navbar.tsx`
- Glassmorphism design with backdrop blur
- Responsive mobile menu
- Active link highlighting
- Integrated theme toggle

#### `footer.tsx`
- Team branding
- Navigation links
- Social media links
- Credits and copyright

#### `driver-card.tsx`
- Animated card with hover effects
- Driver information display
- Stats (points, wins, position)
- Click to navigate to detail page

#### `race-card.tsx`
- Race information display
- Different styling for past/upcoming
- Circuit and location data
- Winner display for completed races

#### `section-title.tsx`
- Consistent section heading
- Gradient text effect
- Optional subtitle support

#### `theme-toggle.tsx`
- Sun/Moon icon toggle
- Smooth theme transition
- System preference detection

#### `theme-provider.tsx`
- next-themes integration
- Theme context management

### API Utilities (`lib/f1-api.ts`)

Functions:
- `getDriverStandings()` - Current driver standings
- `getConstructorStandings()` - Constructor standings
- `getRaceSchedule()` - Season race calendar
- `getRaceResults()` - Race results
- `getDriverInfo()` - Individual driver data
- `getDriverResults()` - Driver's race results
- `getRedBullDrivers()` - Red Bull Racing drivers only

Type Definitions:
- `Driver` - Driver information
- `DriverStanding` - Driver standing data
- `Constructor` - Team information
- `ConstructorStanding` - Team standing data
- `Circuit` - Circuit information
- `Race` - Race data
- `RaceResult` - Race result data

## Styling System

### Tailwind Configuration
- Custom Red Bull Racing colors
- Extended animations (glow effect)
- Custom spacing and typography
- Dark mode support

### Theme Variables
```css
Light Mode:
- Background: #F6F7FB
- Primary: Red Bull Navy
- Accent: Red Bull Yellow

Dark Mode:
- Background: #0A0F1D
- Primary: Red Bull Yellow
- Accent: Red Bull Sky
```

### Design Patterns
- Card-based layouts
- Gradient backgrounds
- Glassmorphism effects
- Neon hover states
- Smooth transitions

## Data Flow

1. **Server Components** fetch data from Ergast API
2. **Loading States** displayed during fetch
3. **Error Boundaries** catch and display errors
4. **Client Components** handle interactivity
5. **Animations** trigger on mount/scroll

## Performance Features

- Server-side rendering
- Automatic code splitting
- Image optimization
- CSS optimization
- Lazy loading
- Data revalidation (5 min cache)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus states on all interactive elements

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components adapt layout and sizing across breakpoints.
