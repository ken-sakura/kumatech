import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1a202c',
        'sidebar': '#2d3748',
        'text-main': '#e2e8f0',
        'text-muted': '#a0aec0',
        'accent': '#4299e1',
        'border-color': '#4a5568',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text-main'),
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: '#63b3ed',
              },
            },
            h1: { color: theme('colors.text-main') },
            h2: { color: theme('colors.text-main') },
            h3: { color: theme('colors.text-main') },
            h4: { color: theme('colors.text-main') },
            strong: { color: theme('colors.text-main') },
            code: { 
              color: theme('colors.text-main'),
              backgroundColor: theme('colors.sidebar'),
              padding: '2px 4px',
              borderRadius: '4px',
            },
            pre: {
              backgroundColor: theme('colors.sidebar'),
            },
            blockquote: {
              color: theme('colors.text-muted'),
              borderLeftColor: theme('colors.border-color'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
