import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        dela: ['Dela Gothic One', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
