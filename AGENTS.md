# Repository Guidelines

## Project Structure & Module Organization

The project implements Feature-Sliced Design under `src/`. Keep domain logic isolated by slice and expose only what higher layers need.

- `src/app/entrypoint/main.tsx` bootstraps React, mounts providers, and pulls routing from `src/app/routes/routes.tsx`.
- `src/pages/*` host route-level composition; delegate reusable UI to `widgets` and business logic to `features`.
- `src/widgets` assembles entities and features for reuse across pages, while `src/entities` keeps domain primitives.
- `src/shared` owns cross-cutting utilities, API clients (`shared/api`), configuration (`shared/config`), and UI building blocks.
- `src/assets` contains static resources, including the `Icon` map used by shared components.

## Build, Test, and Development Commands

- `npm install` installs dependencies pinned in `package-lock.json`.
- `npm run start` starts Vite with hot reload for local work.
- `npm run build` runs TypeScript project references (`tsc -b`) and emits a production bundle.
- `npm run preview` serves the built assets for smoke-testing the output bundle.
- `npm run lint` applies the ESLint stack; resolve diagnostics before pushing.
- `npm run fsd` invokes `steiger` to verify slice boundaries and dependency rules.

## Coding Style & Naming Conventions

Write TypeScript React function components with 2-space indentation and semicolons. Name components, slices, and files with `PascalCase`; reserve `camelCase` for hooks (`useDebounce`) and helpers. Co-locate CSS Modules (`*.module.css`) with their components and compose modifiers with `classnames`. Use barrel exports (e.g., `shared/index.ts`) for public APIs and route environment access exclusively through `shared/config/env.ts`.

## Testing Guidelines

A unit test runner is not configured yet; prefer adding `vitest` plus React Testing Library when introducing testable logic. Store specs beside the code (`Feature/__tests__/Component.test.tsx`) and cover hooks, services, and mappers before UI shells. Document new commands in `package.json` and ensure they run in CI before merging.

## Commit & Pull Request Guidelines

Follow Conventional Commits (`feat:`, `fix:`, `chore:`) as seen in history. Keep commits scoped to a single slice or concern and explain impact or follow-up work in the body. Pull requests should include: a concise summary, linked issues, screenshots for UI updates, verification steps (`npm run lint`, `npm run build`), and notes on config changes or new env vars. Request review from maintainers of the affected slices and wait for green checks prior to merge.
