module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      inset: {
       '-18': '-4.5rem',
      },
      borderRadius: {
        per50: '50%'
      },
      colors: {
        grass: {
          light: '#99e06a',
          DEFAULT: '#7dc44e',
          dark: '#569d28',
          darkest: '#21440a'
        },
        fontFamily: {
          trebuchet: ['"Trebuchet MS"']
        }
      },
      width: {
        'per90': '90%',
        'per91': '91%',
        'per92': '92%',
        'per93': '93%',
        'per94': '94%',
        'per95': '95%',
        'per96': '96%',
        'per97': '97%',
        'per98': '98%',
        'per99': '99%',
      },
      height: {
        'per90': '90%',
        'per91': '91%',
        'per92': '92%',
        'per93': '93%',
        'per94': '94%',
        'per95': '95%',
        'per96': '96%',
        'per97': '97%',
        'per98': '98%',
        'per99': '99%',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '192': '48rem'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
      borderRadius: ['hover', 'group-hover'],
      inset: ['hover'],
      rotate: ['group-hover']
    }
  },
  plugins: [],
}
