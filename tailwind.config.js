/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				primary: {
					light: "#1971c2",
					dark: "#1864AB",
				},
			},
		},
	},
	plugins: [],
};

/*
- add css variables on button => through .btn class
*/
