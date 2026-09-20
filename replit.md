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

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/rod24/src/App.jsx` — route-aware UI, navigation shell, booking flow, pages, validation, and demo confirmation states
- `artifacts/rod24/src/lib/rod24-data.js` — local Bihar locations, route pages, cab options, and demo ride history
- `artifacts/rod24/src/index.css` — ROD24 visual theme, responsive utilities, motion and accessibility styles
- `artifacts/rod24/public/rod24-logo.png` — supplied ROD24 logo asset

## Architecture decisions

- The first release is frontend-only and uses local mock data so users can exercise the whole booking experience without backend dependencies.
- Booking verification is intentionally demo-only: the static OTP is `1234`, and success data is presented as local demo state.
- The UI keeps data in a small local module so the future booking estimate, auth, and booking APIs can replace the mock layer without scattering data through views.
- The app uses JavaScript/JSX source only, with Vite configured through `vite.config.js`.

## Product

Users can explore ROD24 services and Bihar routes, search local locations, select mock cab options, review fare estimates, verify a mobile number with the demo OTP flow, view a booking confirmation, browse ride history, and submit a local demo contact form.

## User preferences

The supplied ROD24 logo and its navy/saffron identity should remain the visual source of truth.

## Gotchas

- The web workflow provides `PORT` and `BASE_PATH`; use the managed workflow rather than starting the Vite dev server without them.
- This is a demo booking surface; do not represent local confirmation or contact submission as a live backend transaction.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
