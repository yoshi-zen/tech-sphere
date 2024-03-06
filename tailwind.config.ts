import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        loop: 'loop 10s linear infinite',
      },
      fontFamily: {
        JP: ['Noto Sans JP', 'sans-serif'],
      },
      boxShadow: {
        rnCard: '0 2px 10px -5px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        rnOrange: '#F27516',
        rnSecondOrange: '#D4AE91',
        rnThirdOrange: '#F8E6D9',
        rnBlue: '#5DCEFF',
        rnSecondBlue: '#91BED4',
        rnThirdBlue: '#D9EBF8',
        rnBgWhite: '#F5F5F5',
        rnBgSecondWhite: '#D9D9D9',
        rnBgThirdWhite: '#EEEEEE',
        rnBlack: '#1A1B1E',
        rnBlackSecond: '#100F11',
        rnRed: '#DF0000',
        rnGreen: '#56CA2C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        md: { max: '767px' },
        xl: { max: '1000px' },
        'xl-md': { max: '1000px', min: '768px' },
      },
      fontSize: {
        '2xl': 'clamp(2rem, 1.636rem + 1.82vw, 3rem)',
        xl: 'clamp(1.75rem, 1.659rem + 0.45vw, 2rem)',
        lg: 'clamp(1.25rem, 1.068rem + 0.91vw, 1.75rem)',
        md: 'clamp(1rem, 0.909rem + 0.45vw, 1.25rem)',
        sm: 'clamp(0.875rem, 0.83rem + 0.23vw, 1rem)',
        xs: 'clamp(0.75rem, 0.705rem + 0.23vw, 0.875rem)',
        '2xs': 'clamp(0.625rem, 0.588rem + 0.23vw, 0.75rem)',
        '3xs': 'clamp(0.2rem, 0.164rem + 0.18vw, 0.3rem)',
      },
      zIndex: {
        0: '0',
        1: '1',
        infinity: 'calc(infinity)',
      },
      keyframes: {
        loop: {
          '0%': {
            transform: 'translateX(-50vw)',
          },
          to: {
            transform: 'translateX(100vw)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
