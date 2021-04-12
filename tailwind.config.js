const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'layers',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ],
    defaultExtractor: (content) => {
      const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
      return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    },
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!cursor-move).+-move$/,
      /^router-link(|-exact)-active$/
    ]
  },
  theme: {
    colors: {
      ...colors
    },
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '425px' }
    }
  }
}
