# Portfolio-v3 | Christopher Harley UX Designer

A modern, data-driven portfolio website built for Christopher Harley, a UX Designer. This project leverages Astro for performance and React for interactive components, with a focus on accessibility and clean design.

## Project Overview

*   **Framework:** [Astro 4](https://astro.build/)
*   **UI Library:** [React 18](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Libraries:** [Radix UI](https://www.radix-ui.com/), [Vaul](https://github.com/emilkowalski/vaul) (Drawer)
*   **Icons:** [Lucide Astro](https://lucide.dev/guide/packages/lucide-astro) & [Lucide React](https://lucide.dev/guide/packages/lucide-react)
*   **Fonts:** [Raleway Variable](https://fontsource.org/fonts/raleway) via `@fontsource-variable/raleway`
*   **Analytics:** [PostHog](https://posthog.com/) integration

### Architecture

The project follows a standard Astro directory structure:

*   `src/components/`: Modular UI components, split into `.astro` (static/server-side) and `.tsx` (interactive/client-side).
    *   `src/components/ui/`: Low-level, reusable UI primitives (e.g., drawer, button).
    *   `src/components/shared/`: Components used across multiple pages (e.g., navigation, footer).
*   `src/data/`: Centralized data store (JSON and TS) for projects, experience, education, and links.
*   `src/layouts/`: Base layout templates (e.g., `Layout.astro`).
*   `src/pages/`: File-based routing for index, about, contact, and case studies.
*   `src/styles/`: Global CSS and Tailwind configurations.
*   `src/hooks/`: Custom React hooks (e.g., `use-media-query`).

## Building and Running

The project uses `pnpm` as the preferred package manager.

### Key Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start development server at `http://localhost:4321` |
| `pnpm build` | Run `astro check` and build the project for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro ...` | Run Astro CLI commands |

## Development Conventions

### Styling & UI
*   **Tailwind CSS:** Use utility classes for all styling. Global styles are defined in `src/styles/globals.css`.
*   **Colors:** Custom color palette defined in `tailwind.config.mjs` (e.g., `custom-dark`, `custom-light`, `custom-primary`).
*   **Responsive Design:** Mobile-first approach, utilizing Tailwind's responsive prefixes (e.g., `md:`, `lg:`).
*   **Accessibility:** Use Radix UI primitives and ensure proper ARIA attributes where applicable.

### Code Structure
*   **Path Aliases:** Use `@/` for imports from the `src/` directory (e.g., `import MyComponent from '@/components/MyComponent'`).
*   **Component Choice:** Prefer `.astro` components for static content and `.tsx` (React) for client-side interactivity. Use the `client:load` or `client:visible` directives in Astro files when client-side JS is needed.
*   **Data-Driven:** Keep content (projects, experience) in `src/data/` to separate content from presentation logic.

### Tooling
*   **Formatting:** Prettier is used for code formatting, including the `prettier-plugin-astro`.
*   **TypeScript:** Strict typing is encouraged across the project (`tsconfig.json`).
