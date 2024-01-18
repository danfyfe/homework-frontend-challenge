import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'h2-mob': ['1.5rem', '2rem'],
        'h2-desk': ['2rem', '2.5rem'],
        'h3-mob': '',
        'h3-desk': '',
        'p-mob': '',
        'p-desk': '',
        'cta-mob': '',
        'cta-desk': ''
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
