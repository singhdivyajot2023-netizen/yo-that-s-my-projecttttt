# AGENTS.md

## Project overview

A single-page, static, vanilla HTML/CSS/JS "useless but fun" interactive site
built as a course assignment (Activity 1). No frameworks, no bundler, no build step.

## Architecture

- `index.html` — all markup, split into `<section class="card">` blocks, one per
  interaction (clicker, generator, mouse-driven color box, easter egg).
- `style.css` — single global stylesheet. Dark mode is a `body.dark` class toggle,
  not a separate stylesheet or CSS-in-JS.
- `script.js` — single script, split into clearly commented sections matching each
  `index.html` section. No modules, no imports — everything runs in global scope.

## Conventions

- Keep it dependency-free. This is intentionally a plain HTML/CSS/JS project — do not
  introduce a framework, bundler, or package.json unless the scope of the project
  changes significantly.
- State that should survive a page reload (high score, dark mode preference) is stored
  in `localStorage` with the `uselessSite` prefix on key names.
- Visual style is deliberately simple/handmade (thick borders, hard drop shadows,
  Comic Sans-ish font stack) — keep new UI consistent with that look rather than making
  it look overly polished/corporate.

## Hosting

Static files only — deployable as-is to Netlify, Vercel, or GitHub Pages with no build
command.
