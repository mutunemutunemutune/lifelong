/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '820px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
   
  },
  plugins: [],
}

}