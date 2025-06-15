/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        'primary-text': '#FFFFFF', // 基本の白
        // 他のカスタムカラーが必要であれば定義
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary-text'), // デフォルトの文字色を primary-text に
            a: {
              color: theme('colors.blue.500'), // リンクの色はそのままなど、個別に設定
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            // 必要に応じて他の要素のスタイルも調整
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.200'), // ダークモードの基本文字色
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
