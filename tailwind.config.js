/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: "transparent",
      primary: "#F0ECE5",
      successbtn: "#04BB44",
      hoverColor: "#04BB44",
      failed: "#F20C0C",
      red: "#F20C0C",
      background: "#161A30",
      cardBackground: "#31304D",
      neutralbtn : "#13D4E0",
      deepNeutralbtn : "#0F9BAF",
      gray: "#BCC6C6",
      deepGray: "#6B6D6C",
      moreDeepGray: "#444444",
      lightGray: "#F0F0F0",
      black: "#000",
      yelow: "#DDC10E",
    },
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    }
  },
  plugins: [],
}


