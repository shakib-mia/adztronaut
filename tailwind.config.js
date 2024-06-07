/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },

    extend: {
      fontFamily: {
        chillax: ["Chillax", "sans-serif"],
        gambetta: ["Gambetta", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        // Text sizes
        "meta-sm": ["12px", "120%"],
        meta: ["13px", "160%"],
        "meta-lg": ["14px", "140%"],
        xs: ["12px", "180%"],
        sm: ["14px", "160%"],
        DEFAULT: ["16px", "180%"],
        md: ["18px", "160%"],
        lg: ["20px", "170%"],
        xl: ["24px", "150%"],

        // Heading sizes
        "heading-xl": ["160px", "100%"],
        "heading-lg": ["128px", "100%"],
        "heading-md": ["96px", "100%"],
        "heading-sm": ["80px", "100%"],
        h6: ["18px", "130%"],
        h5: ["20px", "140%"],
        h4: ["24px", "130%"], // corrected one of the h4 to unique name
        h3: ["32px", "120%"], // unique key for one of the h4
        h2: ["48px", "110%"],
        h1: ["64px", "110%"],
      },
      animation: {
        marquee: "marquee 5s linear infinite",
        marquee2: "marquee2 5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },

    colors: {
      text: {
        DEFAULT: "#DAC5A7", // Text default 100%
        muted: "#DAC5A799", // Text muted
        inverse: "#0E0E0E",
      },
      icon: {
        DEFAULT: "#DAC5A7", // Icon default 100%
        inverse: "#0E0E0E", // Icon inverse
      },
      border: {
        DEFAULT: "#DAC5A726", // Border default
        inverse: "#FFFFFF1E", // Border inverse
      },
      bg: {
        DEFAULT: "#0E0E0E", // Bg default
        primary: "#DAC5A7", // Bg primary
        secondary: "#1A1A1A", // Bg secondary
        muted: "#DAC5A70D", // Bg muted
        "muted-2": "#FFFFFF12", // Bg muted 2
      },
      black: "#000000",
      transparent: "#00000000",
    },

    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
};
