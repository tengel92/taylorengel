module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideTopDown: {
          '0%': { transform: 'translate(0,-100%)' },
          '100%': { transform: 'translate(0,0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'tracking-in-expand-fwd': {
          '0%': {
            'letter-spacing': '-.5em',
            transform: 'translateZ(-700px)',
            opacity: '0',
          },
          '40%': {
            opacity: '.6',
          },
          to: {
            transform: 'translateZ(0)',
            opacity: '1',
          },
        },
        'tracking-in-expand-fwd-top': {
          '0%': {
            'letter-spacing': '-.5em',
            transform: 'translateZ(-700px) translateY(-500px)',
            opacity: '0',
          },
          '40%': {
            opacity: '.6',
          },
          to: {
            transform: 'translateZ(0) translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-top-down': 'slideTopDown 750ms ease-in-out',
        'fade-in': 'fadeIn 1500ms ease-in-out',
        'tracking-in-expand-fwd':
          'tracking-in-expand-fwd 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'tracking-in-expand-fwd-top':
          'tracking-in-expand-fwd-top 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
      },
    },
  },
  plugins: [],
};
