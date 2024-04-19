module.exports = {
  plugins: {
    autoprefixer: {},
    'css-declaration-sorter': { order: 'smacss' },
    'postcss-sort-media-queries': {
      sort: 'desktop-first',
    },
    //'@fullhuman/postcss-purgecss': {
    //  content: ['./src/**/*.html', './src/**/*.pug'],
    //},
  },
};
