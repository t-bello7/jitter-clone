import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px"
        },
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
                signika: ['var(--font-signika)', 'Signika', 'sans-serif']
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    md: '2rem',
                    lg: '4rem'
                }
            },
            colors: {
                'red-orange': {
                    500: 'color-mix(in srgb, theme("colors.red.500") 50%,theme("colors.orange.500") 50%)'
                }
                // #f0eff1 // light gray
                // #ffffff // white
                // #f2f1f3 // gray
                // #19171c // text overlay dark 
                // #00b2ff // light blue
                // #a981ff // light purple
                // #ecfb09 // light yellow
                // #000000 //
            }
        },
    },
    plugins: [],
};
export default config;
