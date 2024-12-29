import twPrimeUI from "tailwindcss-primeui"
import animate from "tailwindcss-animate"
import daisyUI from "daisyui"

/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {height: 0},
					to: {height: "var(--radix-accordion-content-height)"},
				},
				"accordion-up": {
					from: {height: "var(--radix-accordion-content-height)"},
					to: {height: 0},
				},
				"collapsible-down": {
					from: {height: 0},
					to: {height: "var(--radix-collapsible-content-height)"},
				},
				"collapsible-up": {
					from: {height: "var(--radix-collapsible-content-height)"},
					to: {height: 0},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"collapsible-down": "collapsible-down 0.2s ease-in-out",
				"collapsible-up": "collapsible-up 0.2s ease-in-out",
			},
		},
	},
	plugins: [animate, twPrimeUI, daisyUI],
	daisyui: {
		themes: [
			{
				custom: {
					primary: "#AF9D24",
					"primary-content": "#0b0900",
					secondary: "#0f7c3f",
					"secondary-content": "#d3e4d7",
					accent: "#37cadd",
					"accent-content": "#010f11",
					neutral: "#3e383b",
					"neutral-content": "#d5d3d4",
					"base-100": "#232323",
					"base-200": "#1d1d1d",
					"base-300": "#171717",
					"base-content": "#000000",
					info: "#eeeeee",
					"info-content": "#141414",
					success: "#86efac",
					"success-content": "#06140b",
					warning: "#facc15",
					"warning-content": "#150f00",
					error: "#e81c24",
					"error-content": "#130000",
				},
			},
		],
	},
}
