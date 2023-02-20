/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      height: {
        '0%': {
          height: '0'
        },
        '100%': {
          height: '100%'
        },
      }
    },
    animation: {
      height: 'heigth .35s ease',
    },
    extend: {
      colors: {
        main: "#00846f",
        title: "#100743",
        subtitle: "#a5a2b3"
      }
    }

  },
  plugins: [
    require('@tailwindcss/forms'),
    require("flowbite/plugin")
  ],
}
