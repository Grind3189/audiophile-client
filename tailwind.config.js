/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1110px",
        xl: "1440px",
      },
      colors: {
        red_orange: {
          100: "#FBAF85",
          200: "#D87D4A",
        },
        black: {
          100: "#101010",
          200: "#000000",
          300: "#191919"
        },
        white: {
          100: "#FFFFFF",
          200: "#FAFAFA",
          300: "#F1F1F1",
        },
      },
      backgroundImage: {
        'hero-sm': "url('./src/assets/home/mobile/image-header.jpg')",
        'hero-md': "url('./src/assets/home/tablet/image-header.jpg')",
        'hero-lg': "url('./src/assets/home/desktop/image-hero.jpg')",
        'zx9-sm': "url('./src/assets/home/mobile/image-speaker-zx9.png')",
        'zx9-md': "url('./src/assets/home/tablet/image-speaker-zx9.png')",
        'zx9-lg': "url('./src/assets/home/desktop/image-speaker-zx9.png')",
        'zx7-sm': "url('./src/assets/home/mobile/image-speaker-zx7.jpg')",
        'zx7-md': "url('./src/assets/home/tablet/image-speaker-zx7.jpg')",
        'zx7-lg': "url('./src/assets/home/desktop/image-speaker-zx7.jpg')",
        'yx1-sm': "url('./src/assets/home/mobile/image-earphones-yx1.jpg')",
        'yx1-md': "url('./src/assets/home/tablet/image-earphones-yx1.jpg')",
        'yx1-lg': "url('./src/assets/home/desktop/image-earphones-yx1.jpg')",
        'footer-sm': "url('./src/assets/shared/mobile/image-best-gear.jpg')",
        'footer-md': "url('./src/assets/shared/tablet/image-best-gear.jpg')",
        'footer-lg': "url('./src/assets/shared/desktop/image-best-gear.jpg')",
      }
    },
  },
  plugins: [],
};
