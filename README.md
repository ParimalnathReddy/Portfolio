# Data Forge – React + Vite + shadcn/ui (TypeScript)

A fast, modern portfolio built with **Vite + React + TypeScript**, styled with **Tailwind + shadcn/ui**, and deployed on **GitHub Pages**.  
This repo was originally scaffolded in **Lovable**, but has been cleaned up for standard Vite usage.

---

## ✨ Features
- ⚡ Vite + React 18 + TypeScript
- 🎨 TailwindCSS + shadcn/ui components
- 🧭 React Router (SPA)
- 📨 Contact form via **Formspree**
- 🚀 Easy deploy to **GitHub Pages**

---

## 🗂 Project Structure
```
src/
  components/        # UI components (Navbar, Projects, Contact, etc.)
  sections/          # Page sections (Hero, About, Skills, etc.)
  pages/             # Routes (if using react-router)
  lib/               # Utilities
  styles/            # Tailwind and global styles
```

---



## 🧑‍💻 Local Development
```bash
# install dependencies
npm install

# start dev server
npm run dev
```


---

## ✉️ Contact Form (Formspree)

This site uses **Formspree** so you can receive form submissions without a backend.

1. Create a form at [Formspree.io](https://formspree.io) → copy your endpoint (e.g. `https://formspree.io/f/mkgzdyne`).
2. In `src/components/Contact.tsx` set:
   ```ts
   const FORMSPREE_URL = "https://formspree.io/f/mkgzdyne";
   ```
3. The submit handler already posts `{ name, email, subject, message }` to that endpoint.

Tip: In your Formspree project settings, restrict submissions to your site’s domain.

---

## 🔗 Updating Projects (Code & Demo links)
In `src/components/Projects.tsx`, each project looks like:
```ts
{
  title: "Digital Twin Infrastructure Monitoring",
  description: "...",
  tech: ["Python", "YOLO", "Point Cloud Processing"],
  github: "https://github.com/<you>/<repo>",
  demo:   "https://<your-demo-url>",
}
```
Replace the `"#"` placeholders with your real **GitHub repo links** and **live demo URLs**.

---

## 🌐 Deployment on GitHub Pages

### 1. Set Vite `base`
In `vite.config.ts`, set:
```ts
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/<REPO_NAME>/" : "/",
  // ...
}));
```
- Replace `<REPO_NAME>` with your GitHub repo name.
- If repo is `username.github.io` → use `base: "/"`.

---

### 2. Add scripts in `package.json`
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build && cp dist/index.html dist/404.html || true",
    "deploy": "gh-pages -d dist"
  }
}
```

---

### 3. Deploy
```bash
npm run deploy
```
This creates a `gh-pages` branch and publishes your build.

Then → GitHub repo → **Settings → Pages** →  
**Branch:** `gh-pages` (root).  

Your site will be live at:
```
https://parimalnathreddy.github.io/Portfolio/
```

---

### 4. Auto-deploy with GitHub Actions (optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci || npm i
      - run: npm run build
      - run: cp dist/index.html dist/404.html || true
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

GitHub → **Settings → Pages** → set deployment source to **GitHub Actions**.

---

## 🧭 Routing Notes
Because this project uses `react-router-dom`:
- The `404.html` copy step ensures refresh works on GitHub Pages.
- Alternative: switch to `HashRouter` if you prefer URLs like `/#/about`.

---

## 🛠 Scripts
```bash
npm run dev        # start local dev server
npm run build      # build for production
npm run preview    # preview production build
npm run deploy     # publish to GitHub Pages
```

---

## 📄 License
MIT — free to use and adapt.

---

## 🙌 Credits
- [Vite](https://vitejs.dev) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)  
- Icons: [lucide-react](https://lucide.dev)  
- Hosting: [GitHub Pages](https://pages.github.com)  
- Form handling: [Formspree](https://formspree.io)
