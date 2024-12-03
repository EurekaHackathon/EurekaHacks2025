import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                one: "var(--one)",
                two: "var(--two)",
                three: "var(--three)",
                four: "var(--four)",
                five: "var(--five)",
                six: "var(--six)",
                seven: "var(--seven)",
                contrast: "var(--contrast)",
            },
            backgroundImage: {
                primaryGradient: "linear-gradient(to right, #ff69eb, #ff86c8, #ffa3a5, #ffbf81, #ffdc5e)"
            },
        },
    },
    plugins: [],
};
export default config;
