/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2DD4BF',
                    50: '#ebfbfa',
                    100: '#d0f7f4',
                    200: '#a3ede5',
                    300: '#2DD4BF',
                    400: '#44c2cc',
                    500: '#2ba7b1',
                    600: '#21858f',
                    700: '#1c6b75',
                    800: '#195a62',
                    900: '#184c53',
                    950: '#0d3136',
                },
                dark: {
                    DEFAULT: '#0a0a0a',
                    50: '#f7f7f7',
                    100: '#e3e3e3',
                    200: '#c8c8c8',
                    300: '#a4a4a4',
                    400: '#818181',
                    500: '#666666',
                    600: '#515151',
                    700: '#434343',
                    800: '#383838',
                    900: '#272727',
                    950: '#0a0a0a',
                },
            },
            fontFamily: {
                sans: ['Inter var', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(45, 212, 191, 0.15)',
                'card': '0 10px 30px rgba(0, 0, 0, 0.25)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-main': 'linear-gradient(135deg, #0a0a0a 0%, #111111 100%)',
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}