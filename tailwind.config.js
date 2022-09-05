/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#f37335",
					secondary: "#135e9e",
					primary_gradient: "linear-gradient(180deg,#fdc830,#f37335)",
					accent: "#F6F9C8",
					neutral: "#191A3E",
					"base-100": "#FFFFFF",
					info: "#CAE2E8",
					success: "#DFF2A1",
					warning: "#F7E488",
					error: "#F2B6B5",
				},
			},
		],
	},
};
