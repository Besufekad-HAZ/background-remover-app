# Project Structure Guide

## Frontend (`client/src`)
- `app/` – Application shell components (providers, router, layouts).
- `assets/` – Static assets and data exported for reuse across the app.
- `components/` – Reusable presentational pieces; `layout/` hosts global chrome, `ui/` is reserved for shared primitives.
- `features/` – Domain-specific modules grouping components, hooks, and services by concern.
- `hooks/` – Cross-cutting custom React hooks that are shared across multiple features.
- `lib/` – Shared infrastructure utilities (API clients, configuration helpers, generic utils).
- `pages/` – Route-level components that compose features into screens.
- `providers/` – Application-wide context providers and related helpers.
- `styles/` – Global stylesheets and Tailwind layers.
- `types/` – Place for shared TypeScript types or JSDoc typedefs when required.

## Backend (`server/src`)
- `config/` – Environment, database, and third-party configuration modules.
- `middleware/` – Express middleware units (auth, logging, uploads, etc.).
- `modules/` – Feature-aligned folders that bundle controllers, routes, and services.
- `utils/` – Server-side helpers and shared utilities.
- `app.js` / `index.js` – Express app bootstrap and server entry point.

Keep this document updated when introducing new top-level folders or moving code between domains.
