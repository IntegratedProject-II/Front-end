module.exports = {
  theme: {
    extend: {
      colors: {
        'offWhite': '#E5E5E5',
        'cloud': '#C4C4C4',
        'indigo':'#4d506c',
        'lemon' : '#feffc1',
      }
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

  }
}