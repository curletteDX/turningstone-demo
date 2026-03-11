# Turning Stone Demo

A demo site for Turning Stone Resort Casino built with [Uniform CMS](https://uniform.dev), Vite, and React. Features server-side rendering (SSR), TypeScript, and Tailwind CSS.

## Features

- **Uniform CMS Integration** - Full SDK setup with composition rendering
- **Server-Side Rendering** - Express-based SSR for production
- **TypeScript** - Type-safe development throughout
- **Tailwind CSS** - Utility-first styling (via CDN)
- **Vercel Ready** - Deploy with zero configuration
- **Minimal Component Set** - Core components only, ready for customization

## Quick Start

### 1. Create a Uniform Project

1. Sign up at [uniform.dev](https://uniform.dev)
2. Create a new project
3. Go to **Project Settings > API Keys**
4. Create an API key with "Read Published Compositions" permission

### 2. Configure Environment

```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your Uniform credentials
UNIFORM_PROJECT_ID=your-project-id
UNIFORM_API_KEY=uf_xxxxxxxxxxxx
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Push Base Components to Uniform

```bash
npm run uniform:push
```

This creates the base component definitions in your Uniform project.

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Project Structure

```
├── api/
│   └── ssr.mjs           # Vercel serverless SSR handler
├── src/
│   ├── components/       # React components (6 core components)
│   ├── uniform/
│   │   ├── api.ts        # Uniform API client
│   │   ├── resolve.tsx   # Component resolver
│   │   └── manifest.ts   # Context manifest
│   ├── App.tsx           # Root app component
│   ├── entry-client.tsx  # Client hydration
│   └── entry-server.tsx  # SSR render
├── uniform-data/         # Uniform component definitions
│   ├── component/        # Component schemas
│   └── locale/           # Locale configuration
├── server.js             # Development server
└── uniform.config.ts     # Uniform CLI configuration
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run uniform:push` | Push component definitions to Uniform |
| `npm run uniform:pull` | Pull latest from Uniform |

## Included Components

### Layout
- **Page** - Base page composition with header, content, footer slots
- **Header** - Site header with navigation slot
- **Footer** - Site footer with links slot

### Navigation
- **NavLink** - Navigation link for header
- **FooterLink** - Link for footer

### Content
- **Hero** - Hero section with title, description, CTA, and background image

## Adding New Components

1. Create React component in `src/components/MyComponent.tsx`
2. Add component definition in `uniform-data/component/myComponent.yaml`
3. Register in `src/uniform/resolve.tsx`
4. Run `npm run uniform:push` to sync with Uniform

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

```bash
npm run build
npm run start
```

## Resources

- [Uniform Documentation](https://docs.uniform.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

## License

MIT
