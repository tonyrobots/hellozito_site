/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  // Enable class-based dark mode for future Mode B (retro-futurist) toggle.
  // Mode B is activated via <html data-mode="retro"> on the root element;
  // this hook lets Tailwind dark: variants participate if needed later.
  darkMode: 'class',
  theme: {
    // No overrides — tokens live in src/styles/tokens.css as CSS custom props.
    // Reference them in Tailwind via arbitrary values: bg-[var(--bone)], etc.
    extend: {},
  },
  plugins: [],
};
