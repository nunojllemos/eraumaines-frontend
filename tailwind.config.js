/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    theme: {
        screens: {
            414: '414px',
            640: '640px',
            768: '768px',
            991: '991px',
            1024: '1024px',
            1140: '1140px',
            1280: '1280px',
            1440: '1440px',
            1680: '1680px',
            'fix-hover': { raw: '(hover: hover) and (pointer: fine)' },
        },

        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
            black: '#1c1c1c',
            primary: '#1a1a1a',
        },

        fontSize: {
            10: '1rem',
            11: '1.1rem',
            12: '1.2rem',
            13: '1.3rem',
            14: '1.4rem',
            15: '1.5rem',
            16: '1.6rem',
            17: '1.7rem',
            18: '1.8rem',
            19: '1.9rem',
            20: '2rem',
            22: '2.2rem',
            24: '2.4rem',
            26: '2.6rem',
            28: '2.8rem',
            30: '3rem',
            32: '3.2rem',
            33: '3.2rem',
            34: '3.4rem',
            35: '3.5rem',
            36: '3.6rem',
            38: '3.8rem',
            40: '4rem',
            45: '4.5rem',
            48: '4.8rem',
            50: '5rem',
            52: '5.2rem',
            55: '5.5rem',
            60: '6rem',
            70: '7rem',
            80: '8rem',
            90: '9rem',
            100: '10rem',
            110: '11rem',
            115: '11.5rem',
            120: '12rem',
            130: '13rem',
            140: '14rem',
            150: '15rem',
        },

        transitionTimingFunction: {
            DEFAULT: 'cubic-bezier(0.19, 1, 0.22, 1)',
        },

        extend: {
            fontFamily: {
                subjectivity: 'Subjectivity',
                'power-grotesk': 'Power Grotesk',
                maginia: 'Maginia',
            },

            transitionDuration: {
                DEFAULT: '450ms',
                400: '400ms',
            },

            zIndex: {
                1: '1',
            },
        },
    },
    plugins: [],
}
