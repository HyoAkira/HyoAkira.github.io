const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
// Sistem teması: `media` stratejisi — `prefers-color-scheme: dark` medya
// sorgusuna bağlı. Manuel toggle yok; OS/browser seçimi tek kaynaktır.
// Renkler CSS değişkenlerine bağlıdır (assets/css/main.css içinde
// `:root` light + `@media (prefers-color-scheme: dark)` dark değerleri).
// `rgb(var(--color-*) / <alpha-value>)` kalıbı `bg-surface/95` gibi
// opaklık değiştiricilerinin her iki modda da çalışmasını sağlar.
module.exports = {
  darkMode: 'media',
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'on-primary-fixed-variant': 'rgb(var(--color-on-primary-fixed-variant) / <alpha-value>)',
        'tertiary': 'rgb(var(--color-tertiary) / <alpha-value>)',
        'error': 'rgb(var(--color-error) / <alpha-value>)',
        'background': 'rgb(var(--color-background) / <alpha-value>)',
        'on-secondary-fixed': 'rgb(var(--color-on-secondary-fixed) / <alpha-value>)',
        'outline': 'rgb(var(--color-outline) / <alpha-value>)',
        'on-background': 'rgb(var(--color-on-background) / <alpha-value>)',
        'surface-container-high': 'rgb(var(--color-surface-container-high) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--color-on-surface-variant) / <alpha-value>)',
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'on-secondary': 'rgb(var(--color-on-secondary) / <alpha-value>)',
        'on-tertiary-fixed-variant': 'rgb(var(--color-on-tertiary-fixed-variant) / <alpha-value>)',
        'outline-variant': 'rgb(var(--color-outline-variant) / <alpha-value>)',
        'error-container': 'rgb(var(--color-error-container) / <alpha-value>)',
        'tertiary-fixed-dim': 'rgb(var(--color-tertiary-fixed-dim) / <alpha-value>)',
        'on-tertiary-fixed': 'rgb(var(--color-on-tertiary-fixed) / <alpha-value>)',
        'on-primary-fixed': 'rgb(var(--color-on-primary-fixed) / <alpha-value>)',
        'inverse-surface': 'rgb(var(--color-inverse-surface) / <alpha-value>)',
        'surface-bright': 'rgb(var(--color-surface-bright) / <alpha-value>)',
        'secondary-fixed-dim': 'rgb(var(--color-secondary-fixed-dim) / <alpha-value>)',
        'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',
        'surface-container': 'rgb(var(--color-surface-container) / <alpha-value>)',
        'on-error': 'rgb(var(--color-on-error) / <alpha-value>)',
        'tertiary-container': 'rgb(var(--color-tertiary-container) / <alpha-value>)',
        'surface-container-lowest': 'rgb(var(--color-surface-container-lowest) / <alpha-value>)',
        'primary-fixed': 'rgb(var(--color-primary-fixed) / <alpha-value>)',
        'surface-container-low': 'rgb(var(--color-surface-container-low) / <alpha-value>)',
        'surface-dim': 'rgb(var(--color-surface-dim) / <alpha-value>)',
        'inverse-on-surface': 'rgb(var(--color-inverse-on-surface) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'primary-container': 'rgb(var(--color-primary-container) / <alpha-value>)',
        'on-secondary-fixed-variant': 'rgb(var(--color-on-secondary-fixed-variant) / <alpha-value>)',
        'secondary-fixed': 'rgb(var(--color-secondary-fixed) / <alpha-value>)',
        'surface-variant': 'rgb(var(--color-surface-variant) / <alpha-value>)',
        'on-surface': 'rgb(var(--color-on-surface) / <alpha-value>)',
        'on-tertiary-container': 'rgb(var(--color-on-tertiary-container) / <alpha-value>)',
        'surface-container-highest': 'rgb(var(--color-surface-container-highest) / <alpha-value>)',
        'surface-tint': 'rgb(var(--color-surface-tint) / <alpha-value>)',
        'on-error-container': 'rgb(var(--color-on-error-container) / <alpha-value>)',
        'on-tertiary': 'rgb(var(--color-on-tertiary) / <alpha-value>)',
        'inverse-primary': 'rgb(var(--color-inverse-primary) / <alpha-value>)',
        'on-secondary-container': 'rgb(var(--color-on-secondary-container) / <alpha-value>)',
        'secondary-container': 'rgb(var(--color-secondary-container) / <alpha-value>)',
        'primary-fixed-dim': 'rgb(var(--color-primary-fixed-dim) / <alpha-value>)',
        'surface': 'rgb(var(--color-surface) / <alpha-value>)',
        'tertiary-fixed': 'rgb(var(--color-tertiary-fixed) / <alpha-value>)',
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        'full': '9999px',
      },
      spacing: {
        'space-lg': '1.5rem',
        'gutter': '1.5rem',
        'space-xs': '0.25rem',
        'space-md': '1rem',
        'space-sm': '0.5rem',
        'margin': '2rem',
        'space-xl': '2.5rem',
      },
      fontFamily: {
        'headline-sm': ['"Source Serif 4"', 'Georgia', 'serif'],
        'label-lg': ['Inter', 'system-ui', 'sans-serif'],
        'body-lg': ['Inter', 'system-ui', 'sans-serif'],
        'headline-xl': ['"Source Serif 4"', 'Georgia', 'serif'],
        'headline-md': ['"Source Serif 4"', 'Georgia', 'serif'],
        'body-md': ['Inter', 'system-ui', 'sans-serif'],
        'body-sm': ['Inter', 'system-ui', 'sans-serif'],
        'label-md': ['Inter', 'system-ui', 'sans-serif'],
        'headline-lg': ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      fontSize: {
        'headline-sm': ['17px', { lineHeight: '24px', fontWeight: '600' }],
        'label-lg': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-lg': ['17px', { lineHeight: '29px', fontWeight: '400' }],
        'headline-xl': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-md': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'label-md': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'headline-lg': ['26px', { lineHeight: '34px', fontWeight: '600' }],
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        umut: {
          'primary': '#B3402A',
          'primary-content': '#FFFDF7',
          'secondary': '#5C5F66',
          'secondary-content': '#FFFDF7',
          'accent': '#B3402A',
          'accent-content': '#FFFDF7',
          'neutral': '#E9E7DE',
          'neutral-content': '#1A1E28',
          'base-100': '#F6F5F0',
          'base-200': '#ECEAE2',
          'base-300': '#E9E7DE',
          'base-content': '#1A1E28',
          'info': '#5C5F66',
          'success': '#3E6B48',
          'warning': '#8A6D1B',
          'error': '#9E2B25',
        },
        // Karanlık muadili — aynı sistemin tersi. `primary` dolgu rengi
        // (#B3541E) ile `primary` metin rengi (#D97742) bilinçli olarak
        // ayrılmıştır: tek bir turuncunun hem beyaz metni (≥4.5:1)
        // hem de koyu zemin üstü metni (≥4.5:1) aynı anda sağlaması
        // WCAG kontrast matematiği nedeniyle mümkün değildir. Metin
        // (Tailwind `primary` / markdown link) için açık turuncu, dolgu
        // (DaisyUI `primary` / btn-primary) için beyaz metinle ≥4.5:1
        // sağlayan koyu turuncu kullanılır. Detay raporda.
        'umut-dark': {
          'primary': '#B3541E',
          'primary-content': '#FFFDF7',
          'secondary': '#9AA3AD',
          'secondary-content': '#101418',
          'accent': '#B3541E',
          'accent-content': '#FFFDF7',
          'neutral': '#212834',
          'neutral-content': '#E8E6E1',
          'base-100': '#101418',
          'base-200': '#1A1E26',
          'base-300': '#212834',
          'base-content': '#E8E6E1',
          'info': '#9AA3AD',
          'success': '#6BB47A',
          'warning': '#C8A84A',
          'error': '#FFB4AB',
        },
      },
    ],
    darkTheme: 'umut-dark',
    base: true,
    styled: true,
    utils: true,
  },
};
