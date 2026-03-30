# GEMINI.md

## Project Overview
This project is a modern web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS 4**. It appears to be a standard "Create Next App" template, providing a robust starting point for development.

The core of the application is located in the `my-app/` directory.

### Main Technologies
- **Next.js 16+**: React framework with App Router support.
- **React 19**: Modern UI library.
- **Tailwind CSS 4**: Utility-first CSS framework (configured with `@theme inline` in `globals.css`).
- **TypeScript**: Statically typed JavaScript.
- **ESLint**: Linter for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Directory Structure
- `my-app/app/`: Contains the application pages, layouts, and global styles.
- `my-app/public/`: Static assets such as images and fonts.
- `my-app/package.json`: Project metadata, scripts, and dependencies.
- `my-app/tsconfig.json`: TypeScript configuration, including path aliases.

## Building and Running
All commands should be run from within the `my-app/` directory.

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the development server on `http://localhost:3000`. |
| `npm run build` | Builds the application for production usage. |
| `npm run start` | Starts the production server after running `npm run build`. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

## Development Conventions
- **App Router**: Follow the Next.js App Router conventions (e.g., `layout.tsx`, `page.tsx`).
- **Path Aliases**: Use the `@/*` alias to import modules relative to the `my-app/` root.
- **Styling**: Prefer Tailwind CSS utility classes. Custom theme variables are defined in `my-app/app/globals.css`.
- **Fonts**: The project uses **Geist** and **Geist Mono** fonts via `next/font/google`.

## Key Files
- `my-app/app/layout.tsx`: The root layout shared across all pages.
- `my-app/app/page.tsx`: The main entry point (home page).
- `my-app/app/globals.css`: Global styles and Tailwind CSS 4 configuration.
- `my-app/next.config.ts`: Next.js specific configuration.
