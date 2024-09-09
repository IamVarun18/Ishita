/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {
          colors: {
            "light-yellow": "#FFF6E5",
            "text-Primary": "#5C3B00",
            "theme-orange": "#FFA500",
            "primary-border": "#E5D9C3",
            "border-primary": "#FFE6B7",
            "hotel-button": " #F6F4E5",
            "footer-bottom": "#242424",
            "hero-primary": "#f8c66b",
          },
          backgroundImage: {},
          boxShadow: {
            box: "0 3px 30px 0 rgba(0, 0, 0, 0.1);",
            "light-box": "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
            "dropdown-card": "0px 1px 6px rgba(0, 0, 0, 0.2)",
          },
        },
      },
      plugins: [require("daisyui")],
      daisyui: {
        themes: [
          {
            mytheme: {
              primary: "#0093dd",
              secondary: "#f000b8",
              accent: "#69327c",
              neutral: "#2b3440",
              "base-100": "#ffffff",
              info: "#06b6d4",
              success: "#16a34a",
              warning: "#fbbd23",
              error: "#be123c",
              white: "#fff",
            },
          },
        ],
        logs: true,
      },
    },
  },
};
export default config;
