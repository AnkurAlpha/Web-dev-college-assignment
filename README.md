# Web Dev College Assignment - React

## 1. Explore Advanced React Hooks

### Requirements
- Implement `useContext` for theme switching (Light/Dark)
- Implement `useReducer` for managing complex state (Todo list)
- Create a global theme provider
- Use centralized state and cleaner state logic

### Implemented
- Added a global `ThemeProvider` using `useContext` for light/dark theme switching
- Added a `ThemeToggle` button in the Navbar
- Added a Todo app managed with `useReducer` with:
  - Add todo
  - Toggle todo
  - Delete todo

## 2. Implement Navigation in a React Application

### Requirements
- Install React Router
- Create pages:
  - Home
  - About
  - Contact
- Add navigation bar
- Implement dynamic routing (e.g., `/user/:id`)
- Implement a 404 page
- Multi-page navigation within a single-page application

### Implemented
- Set up `react-router-dom`
- Added routes/pages:
  - `/` -> Home
  - `/about` -> About
  - `/contact` -> Contact
  - `/user/:username` -> Dynamic User route
  - `*` -> NotFound (404)
- Added a shared Navbar for navigation

## 3. Deploy a React Application

### Requirements
- Build the project:
  - `npm run build`
- Deploy using:
  - Netlify / Vercel / GitHub Pages
- Share live URL

### Build Command
```bash
npm run build
```

### Deployment Platform
- GitHub Pages (or Netlify/Vercel)

### Live URL
- Add your deployed app URL here: `https://<your-live-url>`
