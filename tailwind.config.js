/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",    // o donde tengas tus archivos
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js" // si usás Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    import('flowbite/plugin'),
  ],
}
