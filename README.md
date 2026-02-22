# Arctura — Global Trade & Capital Infrastructure

A premium, high-fidelity web platform for structuring global trade and capital partnerships across energy, finance, and infrastructure markets. Built with a Tesla-meets-Apple aesthetic featuring modern glassmorphism, gradient design, and smooth micro-interactions.

## 🌐 Live Demo

Visit the deployed site: [https://madhavkabra.github.io/global-nexus/](https://madhavkabra.github.io/global-nexus/)

## ✨ Features

- **Premium Design System**: Modern dark theme with glassmorphism effects and gradient accents
- **Responsive Layout**: Fully responsive design optimized for all devices
- **Smooth Animations**: Framer Motion powered micro-interactions and transitions
- **Product Showcases**: 
  - Storage & Logistics Marketplace
  - FX Price Discovery Engine (Coming Soon)
- **Vertical Sections**: Energy, Infrastructure, Digital Assets, Commodities, Data & Analytics, Structured Finance
- **Trust Indicators**: Statistics, certifications, and partner logos
- **Modern Typography**: Geist/Inter font stack with optimized spacing

## 🛠️ Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/Madhavkabra/global-nexus.git

# Navigate to project directory
cd global-nexus

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 🚀 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build locally
npm run preview

# Run linter
npm run lint

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Deploy to GitHub Pages
npm run deploy
```

### Project Structure

```
global-nexus/
├── public/                 # Static assets
│   ├── favicon.svg        # Custom Arctura favicon
│   └── assets/            # Images and media
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── EcosystemSection.tsx
│   │   ├── VerticalsSection.tsx
│   │   ├── TrustSection.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Page components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── index.css        # Global styles and design tokens
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

- **Primary**: Purple gradient (`270 91% 65%` → `240 100% 70%`)
- **Background**: Dark slate (`220 14% 11%`)
- **Cards**: Semi-transparent with glassmorphism
- **Text**: High contrast white/silver gradients

### Typography

- **Font Family**: Geist, Inter, system fonts
- **Headings**: Tight letter spacing (-0.025em)
- **Body**: Increased line height (1.7) for readability

### Key Design Features

- **Glassmorphism**: Backdrop blur effects with subtle transparency
- **Gradients**: Purple-to-blue gradient system throughout
- **Micro-interactions**: Hover states with scale and glow effects
- **Grid Patterns**: Data-driven visual elements for FX section
- **Industrial Overlays**: Texture patterns for Logistics section

## 📱 Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

The site will be available at: `https://madhavkabra.github.io/global-nexus/`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the production-ready files
3. Deploy the contents to your hosting provider

### Environment Configuration

For production builds, the base path is automatically set to `/global-nexus/` in `vite.config.ts`. If deploying to a custom domain, update the `base` configuration.

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 📝 Code Style

- **ESLint**: Configured with React hooks and refresh plugins
- **Prettier**: Code formatting (if configured)
- **TypeScript**: Strict type checking enabled
- **Conventions**: 
  - Components under 200 lines
  - No `any` types
  - Proper Tailwind shorthands (e.g., `size-4` instead of `h-4 w-4`)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Contact

For inquiries about Arctura or this platform, please contact the development team.

---

Built with ❤️ using modern web technologies
