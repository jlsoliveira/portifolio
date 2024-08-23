import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        sections: 'linear-gradient(122deg, rgba(5,1,5,1) 25%, rgba(75,32,73,1) 100%)',
        banner: 'linear-gradient(122deg, rgba(5, 1, 5, 1) 25%, rgba(75, 32, 73, 0.91) 100%);',
      },
      colors: {
        primary: {
          '50': '#4b2049',
          '100': '#4E1849',
        },
        secondary: '#F851EB',
        green: {
          100: '#29CC39',
          900: '#13BF24',
        },
        red: {
          100: '#E62E2E',
          900: '#B3261E',
        },
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '65%' },
          '100%': { width: '0' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '50%': { borderColor: '#F851EB' },
        },
      },
      animation: {
        typewriter: 'typewriter 4s steps(40, end) infinite',
        blink: 'blink 0.75s step-start infinite',
      },
    },
  },
  plugins: [],
};
export default config;
