module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-calc'),
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    })
  ],
};
