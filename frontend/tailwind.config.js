/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class"],
	theme: {
		extend: {
			gridTemplateColumns: {
				fluid: "repeat(auto-fit, minmax(10rem, 1fr))",
			},
		},
	},
	plugins: [],
};
