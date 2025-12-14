# Repository Guidelines

## Project Structure
- Angular 20 SSR app; entry points `src/main.ts` (browser) and `src/main.server.ts` (server) with Express host `src/server.ts`.
- Feature-first layout under `src/app` (`auth`, `pages`, `secciones`, `shared`, `services`, `models`). Use lazy-loaded routes for new features.
- Styling: global `src/styles.css`, tokens in `src/theme.css`, assets in `src/assets`. Environment files live in `src/environments/`. Builds output to `dist/` (`dist/samval-webPage/` for SSR).

## Build, Test, and Dev Commands
- `npm start` — `ng serve` at http://localhost:4200/.
- `npm run watch` — dev build in watch mode.
- `npm run build` — production browser + server bundles to `dist/`.
- `npm run start:ssr` — serve the built SSR bundle (run build first).
- `npm test` — unit tests (Jasmine/Karma). Add `--watch=false --code-coverage` for coverage reports.

## Angular & TypeScript Practices
- Standalone components/directives only; no NgModules and no `standalone: true` flag (Angular 20+ default).
- TypeScript 5.8 target; `strict` flags on. Prefer inference; avoid `any`, fall back to `unknown`.
- State via signals; `computed()` for derived values; use `update`/`set`, never `mutate`.
- Components: single responsibility, `changeDetection: ChangeDetectionStrategy.OnPush`, inline templates when possible, `input()`/`output()`, host bindings/listeners via decorator `host` object.
- Templates: use native control flow (`@if`, `@for`, `@switch`), async pipe for observables, no arrow functions, minimal logic. Use `class`/`style` bindings instead of `ngClass`/`ngStyle`.
- Images: `NgOptimizedImage` for static assets (not base64). Ensure focus states, ARIA labels, and color contrast meet WCAG AA and pass AXE.

## Services & Routing
- Services are single-responsibility with `providedIn: 'root'`; inject dependencies via `inject()` not constructors.
- Feature routes must be lazy; keep guards/resolvers minimal.

## Testing Guidelines
- Specs sit with features (`*.spec.ts`); TestBed + shallow mocks for services. Prefer Reactive forms in tests too.
- Name tests by behavior (`should_render_footer_links`). Keep assertions focused; aim for consistent coverage (`npm test -- --code-coverage`).

## Coding Style & Formatting
- Files in kebab-case (`about.component.ts`); classes/interfaces PascalCase; observables end with `$`.
- Prettier settings in `package.json` (print width 100, single quotes). Run formatter before commits.

## Commit & PR Guidelines
- Use short, imperative commits (Spanish acceptable): e.g., `alineacion footer`, `btn contacto`. One logical change per commit.
- Before PR: run `npm run build` and `npm test`; attach issue link and screenshots/GIFs for UI updates; note environment or SSR-impacting changes.

## Security & Configuration
- No secrets in repo; prefer env variables. For server config (`server.ts`, `nginx.conf`, `Dockerfile`), document ports/cache rules and verify SSR with `npm run start:ssr`.
