# ROD24 Ride Booking

ROD24 is a Bihar-focused ride-hailing website with local route discovery, cab estimates, and a complete demo booking and OTP verification flow.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/rod24 run dev` — run the ROD24 web app
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, Next.js 16 App Router, JavaScript
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Web build: Next.js with Tailwind CSS v4
- API build: esbuild (CJS bundle)

## Where things live

- `artifacts/rod24/src/App.js` — client-side route-aware UI, navigation shell, booking flow, pages, validation, and demo confirmation states
- `artifacts/rod24/src/app/layout.js` — Next.js document shell and site metadata
- `artifacts/rod24/src/app/[[...slug]]/page.js` — Next.js catch-all entry for the app's route-aware surface
- `artifacts/rod24/src/lib/rod24-data.js` — local Bihar locations, route pages, cab options, and demo ride history
- `artifacts/rod24/src/index.css` — ROD24 visual theme, responsive utilities, motion and accessibility styles
- `artifacts/rod24/public/rod24-logo.png` — supplied ROD24 logo asset

## Architecture decisions

- The first release is frontend-only and uses local mock data so users can exercise the whole booking experience without backend dependencies.
- Booking verification is intentionally demo-only: the static OTP is `1234`, and success data is presented as local demo state.
- The UI keeps data in a small local module so the future booking estimate, auth, and booking APIs can replace the mock layer without scattering data through views.
- The app uses JavaScript/JSX source only and runs through the Next.js App Router; no TypeScript, Vite, or Wouter files are used in the ROD24 artifact.

## Product

Users can explore ROD24 services and Bihar routes, search local locations, select mock cab options, review fare estimates, verify a mobile number with the demo OTP flow, view a booking confirmation, browse ride history, and submit a local demo contact form.

## User preferences

The supplied ROD24 logo and its navy/saffron identity should remain the visual source of truth.

## Gotchas

- The web workflow provides `PORT` and `BASE_PATH`; use the managed workflow rather than starting the Next.js dev server without them.
- This is a demo booking surface; do not represent local confirmation or contact submission as a live backend transaction.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
