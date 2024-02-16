/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ["./src/**/*.{html,js,vue}"],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: [
      {
        crafted_by: {
          "primary": "#52667A",
          "secondary": "#9DADBE",
          "info": "#F3F5F7",
          "success": "#38cb89",
          "warning": "#E0E5EB",
          "error": "#ff5630",
        },
      },
    ],
  },
  plugins: [daisyui],
}

