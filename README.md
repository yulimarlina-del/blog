# Personal Blog

A modern personal blog built with **React Router v7** (Remix v3).

## About React Router v7

React Router v7 is the latest evolution of the Remix framework, combining the best of both React Router and Remix into a unified, powerful framework for building modern web applications. This represents the next generation (Remix v3) with improved developer experience and performance.

## Features

- 📝 Clean, responsive blog layout
- 🚀 Built with React Router v7 for optimal performance
- 💅 Custom CSS styling
- 📱 Mobile-friendly design
- 🔍 Individual blog post pages with dynamic routing
- ℹ️ About page

## Getting Started

### Prerequisites

- Node.js 20.0.0 or higher
- npm 10.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yulimarlina-del/blog.git
cd blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
blog/
├── app/
│   ├── routes/
│   │   ├── _index.tsx       # Homepage with blog post list
│   │   ├── about.tsx         # About page
│   │   └── posts.$slug.tsx   # Individual blog post page
│   ├── styles/
│   │   └── app.css           # Global styles
│   ├── entry.client.tsx      # Client entry point
│   ├── entry.server.tsx      # Server entry point
│   ├── root.tsx              # Root layout
│   └── routes.ts             # Route configuration
├── public/                   # Static assets
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Technologies Used

- **React Router v7** - Next-generation full-stack framework (Remix v3)
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool
- **CSS** - Styling

## What's New in React Router v7 (Remix v3)

React Router v7 brings together the best of Remix and React Router:
- Simplified routing with enhanced file-based routing
- Improved data loading patterns
- Better type safety and developer experience
- Unified API surface
- Enhanced performance optimizations

## Deployment

Build the production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## License

MIT
