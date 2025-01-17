/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens:{
        'desktop': '1440px',
        'tablet': '768px',
        'mobile': '375px',
      }
    },
  },
  plugins: [
    daisyui
  ],
}

