# Personal Blog

A modern personal blog built with Remix v2 (with v3 future flags enabled).

## Features

- 📝 Clean, responsive blog layout
- 🚀 Built with Remix for optimal performance
- 💅 Custom CSS styling
- 📱 Mobile-friendly design
- 🔍 Individual blog post pages
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
│   └── root.tsx              # Root layout
├── public/                   # Static assets
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Technologies Used

- **Remix** - Full-stack web framework
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool
- **CSS** - Styling

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
