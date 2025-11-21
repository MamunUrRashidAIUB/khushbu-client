# Khushbu — React E‑commerce Client

A modern, responsive React front-end for an e‑commerce site built with Vite, Tailwind CSS and Firebase. This repository contains the client application used to browse products, filter by brands, manage a shopping cart, and (for admins) upload products and view orders.

**Live demo**: Not provided in this repo. Deploy to Vercel, Netlify or a static hosting provider to publish.

**Tech Stack**
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS + DaisyUI
- **Backend / Auth**: Firebase (client SDK)
- **Data fetching / utilities**: Axios, @tanstack/react-query
- **Routing**: react-router-dom
- **Extras**: Swiper, SweetAlert2, react-hook-form, react-icons

**Features**
- Product listing and filtering by brand/category
- Product cards and detail view
- Shopping cart integration
- Admin pages for upload and order management
- Authentication via Firebase

**Repository Structure (key files & folders)**
- `src/` — application source code
  - `src/Pages/` — page views (Home, Cart, Admin, Brands, Login/Signup)
  - `src/Components/` — UI components and Cards
  - `src/Hooks/` — custom hooks (e.g., `useAuth`, `useCart`, `useProducts`)
  - `src/providers/AuthProviders.jsx` — Firebase auth provider wrapper
  - `src/firebase/firebase.config.js` — Firebase configuration (replace with your own)
  - `src/Layout/` — Main layout and Dashboard

**Getting Started (Local Development)**
1. Clone the repository

```powershell
git clone https://github.com/<your-username>/khushbu-client.git
cd khushbu-client
```

2. Install dependencies

```powershell
npm install
```

3. Configure Firebase

- Open `src/firebase/firebase.config.js` and replace the placeholder configuration with your Firebase project's config values. The app expects a typical Firebase SDK export (`initializeApp`, etc.).
- If you prefer environment variables, update the file to read from `import.meta.env` or create a `.env` / `.env.local` and update imports accordingly.

4. Run the dev server

```powershell
npm run dev
```

The app should be available at the address shown by Vite (usually `http://localhost:5173`).

**Available NPM Scripts**
- `npm run dev` — start the Vite development server
- `npm run build` — build the production assets
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint checks

These scripts come from the project's `package.json`.

**Firebase Notes**
- Current Firebase config placeholder: `src/firebase/firebase.config.js` — replace with your own config.
- Ensure Firebase services used in the app (Auth, Firestore/Realtime DB, Storage) are enabled in your Firebase console and that rules are set appropriately for your use-case.

**Environment Variables**
- This project does not require `.env` by default, but you can store keys as `VITE_*` variables and reference them via `import.meta.env.VITE_YOUR_KEY` if you convert `firebase.config.js` to read from env variables.

**Contributing**
- Fork the repo and open a pull request with a clear description of the change.
- Keep changes focused and small; follow the existing code style.

**License**
- No license is included in this repository. If you want to publish this project publicly, consider adding a `LICENSE` file (e.g., MIT).

**Contact / Support**
- Created for a client project. For questions, update the README with a contact email or link to the project owner.

---

If you want, I can also:
- add a short `CONTRIBUTING.md` or `LICENSE` file,
- update the Firebase config to use environment variables,
- or create a one-line deploy configuration for Netlify/Vercel.

File created: `README.md`
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
