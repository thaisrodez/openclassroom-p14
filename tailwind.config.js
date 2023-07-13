/** @type {import('tailwindcss').Config} */
import "./node_modules/paginated-table-react-pkg"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/paginated-table-react-pkg/**/*.{html,js, jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
