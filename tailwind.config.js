// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         titillium: ['"Titillium Web"', 'sans-serif'],
//       },
//     },
//   },
// }

module.exports = {
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // move half width for seamless loop
        },
        
      },
    },
  },
    plugins: [require('@tailwindcss/line-clamp')],
};
