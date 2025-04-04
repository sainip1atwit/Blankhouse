/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}", 
    "./(auth)/**/*.{js,jsx,ts,tsx}", 
    "./community/**/*.{js,jsx,ts,tsx}", 
    "./gallery/**/*.{js,jsx,ts,tsx}", 
    "./society/**/*.{js,jsx,ts,tsx}", 
    "./studios/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}