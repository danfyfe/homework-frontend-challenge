import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'copy': 'HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif'
      },
      fontSize: {
        'h2-mob': ['1.5rem', '2rem'],
        'h2-desk': ['2rem', '2.5rem'],
        'h3': ['1rem', '1.5rem'],
        'p': ['1rem', '1.25rem'],
        'cta': ['1.125rem', '1.75rem']
      },
      colors: {
        'aqua': '#effaf9',
        'charcoal': '#514f4e',
        'cta-blue': '#536dc4',
        'cta-blue-hover': '#3b54ab'
      }
    },
  },
  plugins: [],
}
export default config
