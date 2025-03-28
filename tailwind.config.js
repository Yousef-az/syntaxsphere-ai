/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8CD7DB',
                    50: '#ebf9fa',
                    100: '#d0f1f4',
                    200: '#a3e3e8',
                    300: '#8CD7DB',
                    400: '#44c2cc',
                    500: '#2ba7b1',
                    600: '#21858f',
                    700: '#1c6b75',
                    800: '#195a62',
                    900: '#184c53',
                    950: '#0d3136',
                },
                dark: {
                    DEFAULT: '#0f1424',
                    50: '#f5f6f8',
                    100: '#e5e7ed',
                    200: '#cdd2dd',
                    300: '#a8b1c5',
                    400: '#7c89a6',
                    500: '#5c698b',
                    600: '#475173',
                    700: '#39425c',
                    800: '#323a4f',
                    900: '#2b3243',
                    950: '#0f1424',
                },
            },
            fontFamily: {
                sans: ['Inter var', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(140, 215, 219, 0.15)',
                'card': '0 8px 32px rgba(0, 0, 0, 0.2)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-main': 'linear-gradient(135deg, #0f1424 0%, #1a1f36 100%)',
            },
        },
    },
    plugins: [],
}