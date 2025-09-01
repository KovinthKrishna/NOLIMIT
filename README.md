# NOLIMIT (Frontend)

A React + TypeScript + Vite frontend for an e-commerce experience inspired by NOLIMIT. The app uses Chakra UI for styling and Axios for API communication.

## Backend repositories

This frontend is designed to work with two alternative backends. Use the appropriate backend depending on the branch you are working on:

- Master branch (Node.js backend):
  - Backend repository: https://github.com/KovinthKrishna/NOLIMIT_Server
- spring-boot branch (Spring Boot backend):
  - Backend repository: https://github.com/KovinthKrishna/NolimitServer

Notes:

- Both backends should expose the same REST API contract described below.
- If your backend runs on a different host/port than the default, set the VITE_URL environment variable accordingly (see .env section).

---

## Environment variables (.env)

Create a `.env` file in the project root to configure runtime environment variables for Vite.

- VITE_URL
  - Description: Base URL of the backend API.
  - Example: `http://localhost:3000` (Node.js) or `http://localhost:8080` (Spring Boot).
  - Default when not set: `http://localhost:3000`

Example `.env`:

```
VITE_URL=http://localhost:3000
```

If you omit `VITE_URL`, the app will use `http://localhost:3000`.

---

## Backend API contract expected by the frontend

The frontend calls the following endpoints relative to `VITE_URL`:

- GET `/fetch/items` — Fetch current cart/items
- POST `/add/items` — Add an item
  - Body: `{ id: number, count: number }`
- PUT `/update/items/:id` — Update an item’s count
  - Body: `{ count: number }`
- DELETE `/delete/items/:id` — Delete an item
- POST `/add/users` — Subscribe a user by email
  - Body: `{ email: string }`

Ensure your backend implements CORS to allow requests from the frontend origin in development.

---

## Getting started

Prerequisites:

- Node.js 18+ recommended (for Vite 5 compatibility)
- npm (or yarn/pnpm)

Install dependencies:

```
npm install
```

Run in development:

```
npm run dev
```

Build for production:

```
npm run build
```

Preview the production build locally:

```
npm run preview
```

Lint:

```
npm run lint
```

---

## Project structure

```
.
├─ index.html
├─ package.json
├─ vite.config.ts
├─ src
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ index.css
│  ├─ hooks
│  │  └─ useItem.ts             # Axios calls; reads VITE_URL (default http://localhost:3000)
│  ├─ components
│  │  ├─ About.tsx              # Newsletter subscription (POST /add/users)
│  │  ├─ Brands.tsx
│  │  ├─ CartBalance.tsx
│  │  ├─ GiftCards.tsx
│  │  ├─ ProductCards.tsx
│  │  ├─ collectionsDetails.ts  # In-app product/collection data
│  │  └─ offersDetails.ts       # In-app offer tiles
│  └─ assets/                   # Images and static assets
└─ .eslintrc.cjs
```

---

## Technologies used

- React 18
- TypeScript
- Vite 5
- Chakra UI (`@chakra-ui/react`, `@chakra-ui/icons`)
- Axios
- React Router (`react-router-dom`)
- React Multi Carousel
- Framer Motion
- React Icons
- ESLint with TypeScript + React Hooks plugins
- SWC React plugin for Vite

---

## Branches and backend pairing

- master — Pair with the Node.js backend (set `VITE_URL` to the Node server, default `http://localhost:3000`).
- spring-boot — Pair with the Spring Boot backend (set `VITE_URL` to your Spring server, e.g., `http://localhost:8080`).

---

## Notes

- If running frontend and backend on different ports during development, ensure the backend has CORS enabled for the frontend origin.
- Image assets and product/offer lists are stored locally in `src/assets` and `src/components/*Details.ts` for demo purposes.

---
