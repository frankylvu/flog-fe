const { isDev } = require('./constant')

const getCssLoaders = (importLoaders, modules = false) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: modules,
      sourceMap: isDev,
      importLoaders,
    },
  },
]

module.exports = getCssLoaders
