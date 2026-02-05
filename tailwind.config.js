/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all files that contain Nativewind classes.
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}"
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#1e1e1e",
					dark: "#ccc"
				},
				secondary: {
					DEFAULT: "#ccc",
					dark: "#1e1e1e"
				},
				grey: {
					100: "#bbb",
					200: "#999",
					300: "#666",
					400: "#444"
				},
				blue: {
					100: "#56f"
				}
			}
		}
	},
	plugins: []
}
